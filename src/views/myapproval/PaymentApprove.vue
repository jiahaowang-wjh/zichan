<!--  -->
<template>
    <div class='payment-civil'>
        <div class='payment-civil-title'>
            <span class='payment-civil-title-go1'>我的审批</span>
            <span class='payment-civil-title-separator'> / </span>
            <span class='payment-civil-title-go2'>资产缴费审核</span>
        </div>
        <div class='payment-civil-content'>
            <div class='payment-civil-content-title'>分公司已提交资产缴费信息，请审批</div>
            <div>汇款账户：</div>
            <div><input type="text" v-model='PaymentMsg.CardNum' disabled='true'></div>
            <div><input type="text" v-model='PaymentMsg.AccountName' disabled='true'></div>
            <div><input type="text" v-model='PaymentMsg.OpeningBank' disabled='true'></div>
            <div><input type="text" v-model='PaymentMsg.FeePayable' disabled='true'></div>
            <div class='payment-civil-content-update'>
                凭证信息：
                <div class='payment-civil-content-update-box'>
                    <div class='payment-civil-content-update-box-container'>
                        <img :src='item' alt="" v-for='item in InitMsg.voucher'>
                    </div>
                </div>
            </div>
            <div class='payment-civil-content-payer'>
                合同人姓名：
                <input type="text" :disabled='true' :value='InitMsg.contractName'>
            </div>
            <div class='payment-civil-content-payer'>
                打款人姓名：
                <input type="text" :disabled='true' :value='InitMsg.payertName'>
            </div>
            <div class='payment-civil-check'>
                <div class='payment-civil-check-reason'>
                    <span>审批原因</span>
                    <textarea maxlength='141' v-model='SubmitApproveData.checkReason'></textarea>
                </div>
            <div class='payment-civil-check-button'>
                <button @click='RejectCheck'>审核驳回</button>
                <button @click='PassCheck'>审核通过</button>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            PaymentMsg: {
                CardNum: '收款卡号：745868704479',
                AccountName: '开户名：深圳市金隆盛投资管理有限公司',
                OpeningBank: '开户行：中国银行股份有限公司深圳南油支行',
                FeePayable: '应缴费用：=解债金额×10%或者解债金额×13%',
                Contractor: ''
            },
            SubmitApproveData: {
                checkReason: '',
                status: '',
                propertId: ''
            },
            InitMsg: {},
            // 新增公章数据
            AddSealData: {
                reportId: this.$route.query.reportId,
                parta: '邓丽清',
                partaCard: '440981198801011427',
                partaTel: '15218801056'
            }
        }
    },
    methods: {
        async InitData () {
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
            this.InitMsg = result.data
            this.InitMsg.voucher = this.InitMsg.voucher.split(',')
        },
        RejectCheck () {
            if (!this.SubmitApproveData.checkReason) return this.$message.error('请先填写审核原因')
            this.UpdateCheckStatus('8')
            this.UpdatePayStatus('1')
        },
        async PassCheck () {
            await this.UpdateCheckStatus('9')
            await this.UpdatePayStatus('2')
            // 调用合同盖章及发票
            console.log(this.AddSealData)
            const AddSealFormData = new FormData()
            for (const key in this.AddSealData) {
                AddSealFormData.append(key, this.AddSealData[key])
            }
            await this.$http({
                method: 'post',
                url: '/api/wordConversion/fillInWordAndSaveAsSpecifyPayment',
                data: AddSealFormData,
                headers: {
                'Content-Type': 'multipart/form-data',
                }
            })
            await this.UpdateReportStage()
            this.$message.success('数据提交成功')
            this.$router.push({path: '/AssetInformation'})
        },
        // 提交审批状态
        async UpdateCheckStatus (status) {
            const formData = new FormData()
            this.SubmitApproveData.status = status
            this.SubmitApproveData.propertId = this.$route.query.propertId
            console.log(this.SubmitApproveData)
            for (const key in this.SubmitApproveData) {
                formData.append(key, this.SubmitApproveData[key])
            }
            const { data: result } = await this.$http({
                method: 'post',
                url: '/api/api/busPropertController/updateStatus',
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            if (result.resultCode !== '200') return this.$message.error(result.resultMessage)
            this.$message.success(result.resultMessage)
        },
        // 提交支付状态
        async UpdatePayStatus (status) {
            const formData = new FormData()
            const UpdatePay = {
                status: '',
                payId: ''
            }
            UpdatePay.status = status
            UpdatePay.payId = this.$route.query.payId
            for (const key in UpdatePay) {
                formData.append(key, UpdatePay[key])
            }
            this.$http({
                method: 'post',
                url: '/api/api/busPayDetailController/updateStatus',
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
        },
        async UpdateReportStage () {
            // 根据报备ID提交报备状态
            const StageformData = new FormData()
            StageformData.append('stage', '5')
            StageformData.append('reportId', this.$route.query.reportId)
            const { data: StageResult } = await this.$http({
                method: 'post',
                url: '/api/api/busReportController/updateDebtStage',
                data: StageformData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            console.log(StageResult)
            if (StageResult !== '200') return this.$message.error(StageResult.resultMessage)
        }
    },
    created () {
        this.InitData()
    }
}

</script>
<style lang='scss' scoped>
@import '@css/style.scss';
.payment-civil {
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
            height: px2rem(16);
            display: flex;
            margin: px2rem(4) 0;
            &-box {
                width: px2rem(140);
                height: px2rem(16);
                border: 1px solid #E8EAEC;
                margin: 0 px2rem(4);
                display: flex;
                align-items: center;

                &-container {
                    border: 1px solid #E8E8E8;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin: 0 px2rem(1);
                    height: px2rem(10);
                    width: px2rem(14);
                    img {
                        width: px2rem(14);
                        height: px2rem(8)
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
    &-check {
        align-items: center;
        height: px2rem(60);
        background-color: #E9F0F5;
        width: px2rem(160);
        margin: px2rem(8) auto;
        border-radius: px2rem(2);
        &-reason {
            margin: px2rem(10) 0;
            display: flex;
            justify-content: center;
            align-items: center;
            span {
                font-size: px2rem(5);
                margin-right: px2rem(4);
            }
            textarea {
                width: px2rem(100);
                height: px2rem(20);
                border-radius: px2rem(1);
                font-size: px2rem(4);
                resize: none;
                border: 1px solid #E0E3F8;
                line-height: px2rem(6);
            }
        }
        &-button {
            display: flex;
            justify-content: center;
            align-items: center;
            button {
                margin: 0 px2rem(4);
                padding: px2rem(1.4) px2rem(4);
                height: px2rem(10);
                font-size: px2rem(3.2);
                border-radius: px2rem(1);
                color: #fff;
                border: none;
                font-size: px2rem(4);
            }
            :nth-child(1) {
                background-color: #616789;
            }
            :nth-child(2) {
                background-color: #FC7F89;
            }
        }
    }
}
</style>
