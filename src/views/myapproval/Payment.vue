<!--  -->
<template>
    <div class='payment-info'>
        <div class='payment-info-title'>
            <span class='payment-info-title-go1'>我的审批</span>
            <span class='payment-info-title-separator'> / </span>
            <span class='payment-info-title-go2'>{{IsEditPage?'资产缴费编辑':'资产缴费'}}</span>
        </div>
        <div class='payment-info-content'>
            <div class='payment-info-content-title'>您提交的债权转让总部公司已经审核通过，请根据下面账户信息线下支付款项。</div>
            <div>汇款账户：</div>
            <div><input type="text" v-model='PamentMsg.CardNum' disabled='true'></div>
            <div><input type="text" v-model='PamentMsg.AccountName' disabled='true'></div>
            <div><input type="text" v-model='PamentMsg.OpeningBank' disabled='true'></div>
            <div><input type="text" :value="'应缴费用：' + PamentMsg.FeePayable+'元'" disabled='true'></div>
            <div class='payment-info-content-update'>
                上传凭证：
                <div class="payment-info-content-update-box">
                    <div class="payment-info-content-update-box-container">
                        <div class='payment-info-content-update-box-container-item' v-for="(item, index) in SubmitData.voucher" :key="index">
                            <img :src="item" @click="openImgToLink(item)" />
                            <img class='payment-info-content-update-box-container-item-delete' src="@imgs/other/delete.png" alt="" @click='DelectVocher(index)'>
                        </div>
                    </div>
                    <div class='payment-info-content-update-button'>
                        <button type="button"
                        class="payment-info-content-update-button-form">
                        点击上传
                        </button>
                        <input @change="UpdataVoucher"
                            type="file"
                            ref="Voucher" />
                    </div>
                </div>
            </div>
            <div class='payment-info-content-payer'>
                合同人姓名：
                <input type="text" placeholder="请输入" v-model='SubmitData.contractName'>
            </div>
            <div class='payment-info-content-payer'>打款人姓名：
                <input type="text" placeholder="请输入" :disabled='HasSubmit' v-model='SubmitData.payertName'>
            </div>
            <button class='payment-info-content-submit' @click.once='SubmitPayment'>提交</button>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            PamentMsg: {
                CardNum: '收款卡号：745868704479',
                AccountName: '开户名：深圳市金隆盛投资管理有限公司',
                OpeningBank: '开户行：中国银行股份有限公司深圳南油支行',
                FeePayable: this.$route.query.huoKuanMoney,
                Contractor: ''
            },
            SubmitData: {
                reportId: '',
                contractName: '',
                payertName: '',
                voucher: [],
                cost: this.$route.query.huoKuanMoney,
                flag: '4',
                status: '0',
                propertId: ''
            },
            UpdatePay: {
                status: '',
                payId: ''
            },
            HasSubmit: false
        }
    },
    methods: {
        async SubmitPayment () {
            // 获取相对人ID => 获取报备ID
            if (this.IsEditPage) {
                const EditFormData = new FormData()
                this.$delete(this.SubmitData, 'debtId')
                this.SubmitData.status = '0'
                console.log(this.SubmitData)
                for (const key in this.SubmitData) {
                    EditFormData.append(key, this.SubmitData[key])
                }
                await this.$http({
                    method: 'post',
                    url: '/api/api/busPayDetailController/updateByPrimaryKeySelective',
                    data: EditFormData,
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
            } else {
                const relativePerId = this.$route.query.relativePerId
                const ReportFormData = new FormData()
                ReportFormData.append('relativePerId', relativePerId)
                const { data: ReportResult } = await this.$http({
                    method: 'post',
                    url: '/api/api/busRelativePersonController/selectByRelativePerId',
                    data: ReportFormData,
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                this.SubmitData.reportId = ReportResult.data.reportId
                this.SubmitData.propertId = this.$route.query.propertId
                // 提交缴费
                const formData = new FormData()
                for (const key in this.SubmitData) {
                    formData.append(key, this.SubmitData[key])
                }
                await this.$http({
                    method: 'post',
                    url: '/api/api/busPayDetailController/insertSelective',
                    data: formData,
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
            }
            // 调用状态改变接口
            const UpdateStatusFormData = new FormData()
            UpdateStatusFormData.append('propertId', this.SubmitData.propertId)
            UpdateStatusFormData.append('status', '7')
            const { data: StatusResult } = await this.$http({
                method: 'post',
                url: '/api/api/busPropertController/updateStatus',
                data: UpdateStatusFormData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            if (StatusResult.resultCode !== '200') return this.$message.error('提交错误, 请重试')
            this.$message.success(StatusResult.resultMessage)
            this.$router.push({path: '/AssetInformation'})
        },
        UpdataVoucher() {
            const file = this.$refs.Voucher.files[0]
            this.$UpdateFile(file).then((result) => {
                this.SubmitData.voucher.push(result)
            })
        },
        // 删除凭证
        DelectVocher (index) {
            this.SubmitData.voucher.splice(index,1)
        },
        async InitData () {
            if (this.IsEditPage) {
                this.payId = this.$route.query.payId
                const formData = new FormData()
                formData.append('payId', this.payId)
                const { data: result } = await this.$http({
                    method: 'post',
                    url: '/api/api/busPayDetailController/selectByPrimaryKey',
                    data: formData,
                    headers: {
                    'Content-Type': 'multipart/form-data',
                    },
                })
                // console.log(result.data)
                // this.SubmitData = result.data
                this.SubmitData = result.data
                console.log(this.SubmitData)
                this.SubmitData.voucher = this.SubmitData.voucher.split(',')
                this.PamentMsg.FeePayable = this.SubmitData.cost
            }
        }
    },
    computed: {
        IsEditPage: function () {
            if (this.$route.path === '/EditPayment') {
                return true
            } else {
                return false
            }
        } 
    },
    created() {
        this.InitData()
    }
}

</script>
<style lang='scss' scoped>
@import '@css/style.scss';
.payment-info {
    display: flex;
    flex-direction: column;
    background-color: #E9F0F5;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    padding: 0 px2rem(4);
    &-title {
        height: px2rem(12);
        line-height: px2rem(12);
        font-size: px2rem(4);
        color: #FC7F89;
        &-go1 {
            color: #616789;
        }
        &-separator {
            color: #616789
        }
    }
    &-content {
        background-color: #fff;
        border-radius: px2rem(2);
        height: 100%;
        font-size: px2rem(3.5);
        padding: px2rem(4);
        box-sizing: border-box;
        line-height: px2rem(8);
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        input {
            font-size: 16px;
            width: px2rem(115);
            padding-left: px2rem(5);
            background: #F0F2FD;
            border: none;
            height: px2rem(10);
            line-height: px2rem(10);
            margin: px2rem(1) 0;
            border-radius: px2rem(1);
        }
        &-title {
            font-weight: 600;
        }
        &-update {
            position: relative;
            display: flex;
            margin: px2rem(4) 0;
            &-box {
                margin: 10px 0;
                display: flex;
                height: 180px;
                &-container {
                    width: 800px;
                    border: 1px solid #e8eaec;
                    display: flex;
                    flex-wrap: wrap;
                    margin: 0 10px;
                    &-item {
                        position: relative;
                        img {
                            margin: 0 px2rem(2);
                            width: px2rem(18);
                            height: px2rem(12.5);
                        }
                        &-delete{
                            position: absolute;
                            left: px2rem(15);
                            top: px2rem(-2);
                            width: 25px!important;
                            height: 25px!important;
                        }
                    }
                }
            }
            &-button {
                position: relative;
                &-form {
                    padding: 10px 30px;
                    font-size: 16px;
                    border: none;
                    background-color: #616789;
                    color: #fff;
                    border-radius: px2rem(2);
                }
                input[type='file'] {
                    height: px2rem(9);
                    width: px2rem(20);
                    position: absolute;
                    left: 0;
                    top: -4px;
                    opacity: 0;
                }
            }
        }
        &-payer {
            margin-top: px2rem(2);
            input {
                width: px2rem(80);
                height: px2rem(8);
                background-color: #fff;
                border: 1px solid #E8EAEC;
            }
            input::-webkit-input-placeholder{
                font-size: px2rem(3.5);
            }
            input::-moz-placeholder{   /* Mozilla Firefox 19+ */
                font-size: px2rem(3.5);
            }
            input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
                font-size: px2rem(3.5);
            }
            input:-ms-input-placeholder{  /* Internet Explorer 10-11 */
                font-size: px2rem(3.5);
            }
        }
        &-submit {
            width: px2rem(60);
            height: px2rem(10);
            background-color: #616789;
            color: #fff;
            border: none;
            border-radius: px2rem(1);
            margin-top: px2rem(4);
        }
    }
}
</style>
