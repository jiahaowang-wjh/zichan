<!--  -->
<template>
    <div class='payment-info'>
        <div class='payment-info-title'>
            <span class='payment-info-title-go1'>我的审批</span>
            <span class='payment-info-title-separator'> / </span>
            <span class='payment-info-title-go2'>资产缴费</span>
        </div>
        <div class='payment-info-content'>
            <div class='payment-info-content-title'>您提交的债权转让总部公司已经审核通过，请根据下面账户信息线下支付款项。</div>
            <div>汇款账户：</div>
            <div><input type="text" v-model='PamentMsg.CardNum' disabled='true'></div>
            <div><input type="text" v-model='PamentMsg.AccountName' disabled='true'></div>
            <div><input type="text" v-model='PamentMsg.OpeningBank' disabled='true'></div>
            <div><input type="text" v-model='PamentMsg.FeePayable' disabled='true'></div>
            <div class='payment-info-content-update'>
                上传凭证：
                <div class='payment-info-content-update-box'>
                    <div class="payment-info-content-update-box-container">
                        <img :src="item" v-for="(item,index) in SubmitData.voucher" :key="index" />
                    </div>
                </div>
                <button class="payment-info-content-update-button">点击上传</button>
                <input @change="UpdataVoucher" type="file" ref="Voucher" />
            </div>
            <div class='payment-info-content-payer'>
                合同人姓名：
                <input type="text" placeholder="请输入" v-model='SubmitData.contractName'>
            </div>
            <div class='payment-info-content-payer'>打款人姓名：
                <input type="text" placeholder="请输入" :disabled='HasSubmit' v-model='SubmitData.payertName'>
            </div>
            <button class='payment-info-content-submit' @click='SubmitPayment'>提交</button>
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
                FeePayable: '应缴费用：=解债金额×10%或者解债金额×13%',
                Contractor: ''
            },
            SubmitData: {
                reportId: '',
                contractName: '',
                payertName: '',
                voucher: [],
                cost: '880',
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
            const { data: result } = await this.$http({
                method: 'post',
                url: '/api/api/busPayDetailController/insertSelective',
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            if (result.resultCode !== '200') return this.$message.error('提交错误, 请重试')
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
        },
        UpdataVoucher() {
            const file = this.$refs.Voucher.files[0]
            this.$UpdateFile(file).then((result) => {
                this.SubmitData.voucher.push(result)
            })
        }
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
      height: px2rem(16);
      display: flex;
      margin: px2rem(4) 0;
      &-box {
        width: px2rem(140);
        border: 1px solid #e8eaec;
        margin: 0 px2rem(4);
        display: flex;
        align-items: center;

        &-container {
          margin: 0 px2rem(2);
          height: px2rem(10);
          img {
            width: px2rem(16);
            height: px2rem(10);
            margin: 0 px2rem(1);
            float: left
          }
        }
      }
      &-button {
        height: px2rem(9);
        width: px2rem(25);
        border: none;
        background-color: #616789;
        color: #fff;
        border-radius: px2rem(2);
      }
      input[type='file'] {
        height: px2rem(9);
        width: px2rem(20);
        position: absolute;
        left: px2rem(166);
        bottom: px2rem(6);
        opacity: 0;
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
