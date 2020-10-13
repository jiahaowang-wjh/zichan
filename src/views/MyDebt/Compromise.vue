<!--  -->
<template>
    <div class='compromise'>
        <div class='compromise-title'>
            <span class='compromise-title-go1'>我的审批</span>
            <span class='compromise-title-separator'> / </span>
            <span class='compromise-title-go2'>和解协议 </span>
        </div>
        <div class='compromise-content'>
            <div class='compromise-content-progress-map'>
                <div class='compromise-content-progress-map-finished'>
                    <span></span>
                    1.资产评估
                </div>
                <div class='compromise-content-progress-map-finished'>
                    <span></span>
                    2.债权转让协议
                </div>
                <div class='compromise-content-progress-map-finished'>
                    <span></span>
                    3.债权转让确认书
                </div>
                <div class='compromise-content-progress-map-finished'>
                    <span></span>
                    4.债权确认书
                </div>
                <div class='compromise-content-progress-map-finished'>
                    <span></span>
                    5.债权转让通知书
                </div>
                <template v-if="debtType === '1'">
                    <div class='compromise-content-progress-map-finished'>
                        <span></span>
                        6.催款函
                    </div>
                    <div class='compromise-content-progress-map-highlight'>
                        <span></span>
                        7.和解协议
                    </div>
                </template>
                <template v-else>
                    <div class='compromise-content-progress-map-finished'>
                        <span></span>
                        {{debtType === '2' ? '6.委托代理销售合同' : '6.委托线上代理销售合同'}}
                    </div>
                    <div class='compromise-content-progress-map-finished'>
                        <span></span>
                        7.催款函
                    </div>
                    <div class='compromise-content-progress-map-highlight'>
                        <span></span>
                        8.和解协议
                    </div>
                </template>
            </div>
            <!-- 背景横线 -->
            <div class='compromise-content-crossing'></div>
            <div class='compromise-content-main'>
                <div class='compromise-content-main-title'>
                    和解协议
                </div>
                <div class='compromise-content-main-text'>
                    合同编号：<el-input :disabled='true' type="text" :value='InitMsg.compromiseAgreementNo' style='width: 300px'></el-input><br/>
                    甲方：深圳市金隆盛投资管理有限公司<br>
                </div>
                <div style='margin: 4px 0' class='compromise-content-main-form-top'>
                    <span>
                        乙方(委托方):
                    </span>
                    <el-input :disabled='true' type="text" :value='InitMsg.personName'></el-input>
                </div>
                <div class='compromise-content-main-text'>
                    鉴于：<br>
                    原债权人 <el-input :disabled='true' type="text" :value='InitMsg.debtName'></el-input>与甲方签订《债权转让协议》，将其对乙方享有的债权及全部相关权利和权益转让给甲方。现甲乙双方经友好协商，就乙方向甲方偿还债务事项达成一致意见，特签订本协议，以资共同遵守。</br>
                    一、乙方应向甲方偿付的债务总金额为人民币 <el-input :disabled='true' type="text" :value='InitMsg.amountThis'></el-input>元。<br>
                    二、乙方按照如下第
                    <el-select v-model="SubmitData.partybMode" placeholder="请选择">
                        <el-option label="第1种: 一次性现金还款" :value="'1'"> </el-option>
                        <el-option label="第2种: 分期现金还款" :value="'2'"> </el-option>
                        <el-option label="第3种: 代物清偿" :value="'3'"> </el-option>
                        <el-option label="第4种: 其他偿还方式" :value="'4'"> </el-option>
                    </el-select>
                    项方式清偿债务：<br>
                    （一）一次性现金还款：自双方签署本和解协议之日起30日内,乙方向甲方一次性支付现金人民币<el-input :disabled='true' type="text" v-model='InitMsg.amountThis'></el-input>元。<br>
                    （二）分期现金还款：采用分12期向甲方支付,每期支付人民币<el-input :disabled='true' type="text" v-model='InitMsg.average'></el-input>元，每期还款日为每月<el-input :disabled='true' type="text" v-model='InitMsg.day' style='width: 100px'></el-input>日。<br>
                    （三）代物清偿：用与债务金额同等价值的货物进行清偿。<br>
                    （四）其他偿还方式。<br>
                    三、甲方指定如下银行账户为收款账户。<br>
                    户  名：深圳市金隆盛投资管理有限公司<br>
                    开户行：中国银行股份有限公司深圳南油支行<br>
                    账  号 ：745868704479<br>
                    四、如乙方未按照本协议约定还款产生逾期的，自逾期之日起，按照应付未付金额的每日万分之五向甲方支付违约金。<br>
                    五、甲乙双方因本协议发生争议，应当友好协商解决；协商不成的可向本协议签订地人民法院起诉。<br>
                    六、本协议自甲乙双方签字或盖章后生效。本协议壹式叁份,甲方留存贰份,乙方留存壹份,具有同等法律效力。<br>
                </div>
                <div style='text-align: center'>(以下无正文,为签署页)</div>
                <div style='margin-top: 80px'>
                    <el-row :gutter="24">
                        <el-col :span="6">
                            <span class='col-label'>甲方：</span>
                            <el-input :disabled='true' type="text" :value="'深圳市金隆盛投资管理有限公司'"></el-input>
                        </el-col>
                        <el-col :span="3">
                            <span class='col-label'></span>
                        </el-col>
                        <el-col :span="6">
                            <span class='col-label'>乙方：</span>
                            <el-input :disabled='true' type="text" :value='InitMsg.personName'></el-input>
                        </el-col>
                    </el-row>
                    <el-row :gutter="24">
                        <el-col :span="6">
                            <span class='col-label'>日期：</span>
                            <el-input :disabled='true' type="text" :value='InitMsg.contractDate'></el-input>
                        </el-col>
                        <el-col :span="3">
                            <span class='col-label'></span>
                        </el-col>
                        <el-col :span="6">
                            <span class='col-label'>日期：</span>
                            <el-input :disabled='true' type="text" :value='InitMsg.contractDate'></el-input>
                        </el-col>
                    </el-row>
                    <el-row :gutter="24">
                        <el-col :span="9">
                            <span class='col-label'></span>
                        </el-col>
                        <el-col :span="6">
                            <span class='col-label'>协议签约地：重庆市渝中区</span>
                        </el-col>
                    </el-row>
                </div>
                <div class='compromise-content-main-button'>
                    <button @click='Submit'>提交</button>
                </div>
            </div>
        </div>
        <div class="compromise-pop" v-if="IsShowPopPage">
            <div class="compromise-pop-box">
                <div class="compromise-pop-box-header">
                    <span>提示</span>
                    <img src="@imgs/other/error@2x.png" alt="" @click="ClosePopPage" />
                </div>
                <div class="compromise-pop-box-body">
                    <div class='compromise-pop-box-body-user'>
                        债务人：{{InitMsg.debtName}}</br>
                        联系电话：{{DebtPhone}}
                    </div>
                    <div>
                        <span>验证码：</span>
                        <el-input v-model='PhoneCheck[0].checkNo'></el-input>
                        <el-button size='mini' @click='GetDebtPhoneCheck'>点击获取</el-button>
                    </div>
                    <div class='compromise-pop-box-body-user'>
                        债务人：{{InitMsg.personName}}</br>
                        联系电话：{{PersonPhone}}
                    </div>
                    <div>
                        <span>验证码：</span>
                        <el-input v-model='PhoneCheck[1].checkNo'></el-input>
                        <el-button size='mini' @click='GetRelativePhoneCheck'>点击获取</el-button>
                    </div>
                </div>
                <div class="compromise-pop-box-footer">
                    <el-button size='mini' type="button" @click="ClosePopPage">取消</el-button>
                    <el-button size='mini' type="button" @click="SubmitAllData">确认</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            InitMsg: {},
            SubmitData: {
                propertId: this.$route.query.propertId,
                partybMode: '',
                comId: '',
                contractDate: ''
            },
            debtType: '',
            IsShowPopPage: false,
            // 债权人债事人手机验证码
            PhoneCheck: [
                // 债权人
                {
                    checkNo: '',
                    tel: ''
                },
                // 债事人
                {
                    checkNo: '',
                    tel: ''
                }
            ],
            HasCheckPhone: false
        }
    },
    methods: {
        async InitData () {
            const formData = new FormData()
            formData.append('relativePerId', this.$route.query.relativePerId)
            formData.append('propertId', this.$route.query.propertId)
            formData.append('comId', window.sessionStorage.getItem('companyId'))
            const { data: result } = await this.$http({
                method: 'post',
                url: '/api/api/busCompromiseAgreementController/initialize',
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            this.InitMsg = result.data
            this.debtType = this.$route.query.debtType
        },
        Submit () {
            this.IsShowPopPage = true
        },
        async SubmitAllData () {
            // 先进行短信验证码验证
            // 债权人手机验证
            const CreditorPhoneCheckFormData = new FormData()
            for (const key in this.PhoneCheck[0]) {
                CreditorPhoneCheckFormData.append(key, this.PhoneCheck[0][key])
            }
            const { data: CreditorPhoneCheckResult } = await this.$http({
                method: 'post',
                url: '/api/api/smsSend/checkNO',
                data: CreditorPhoneCheckFormData,
                headers: {
                'Content-Type': 'multipart/form-data'
                }
            })
            if (CreditorPhoneCheckResult.resultCode !== '200') return this.$message.error('债权人短信验证码输入错误,请重新输入')
            // 债务人手机验证
            const DebtorPhoneCheckFormData = new FormData()
            for (const key in this.PhoneCheck[1]) {
                DebtorPhoneCheckFormData.append(key, this.PhoneCheck[1][key])
            }
            const { data: DebtorPhoneCheckResult } = await this.$http({
                method: 'post',
                url: '/api/api/smsSend/checkNO',
                data: DebtorPhoneCheckFormData,
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            })
            if (DebtorPhoneCheckResult.resultCode !== '200') return this.$message.error('债务人短信验证码输入错误,请重新输入')
            // 数据提交
            this.SubmitData.comId = window.sessionStorage.getItem('companyId')
            this.SubmitData.contractDate = this.InitMsg.contractDate
            this.SubmitData.compromiseAgreementNo = this.InitMsg.compromiseAgreementNo
            const formData = new FormData()
            for (const key in this.SubmitData) {
                formData.append(key, this.SubmitData[key])
            }
            const { data: AllResult } = await this.$http({
                method: 'post',
                url: '/api/api/busCompromiseAgreementController/insertSelectiveManner1',
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            console.log(AllResult.resultCode)
            // 更新资产信息自身阶段
            const PropertFormData = new FormData()
            PropertFormData.append('propertId', this.$route.query.propertId)
            PropertFormData.append('stage', '8')
            const { data: PropertStatusResult } = await this.$http({
                method: 'post',
                url: '/api/api/busPropertController/updateStage',
                data: PropertFormData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            if (PropertStatusResult.resultCode !== '200') return this.$message.error('更改资产阶段失败, 请重试')

            const StatusformData = new FormData()
            StatusformData.append('propertId', this.$route.query.propertId)
            StatusformData.append('status', '4')
            const { data: StatusResult } = await this.$http({
                method: 'post',
                url: '/api/api/busPropertController/updateStatus',
                data: StatusformData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            if (StatusResult.resultCode !== '200') return this.$message.error('修改资产状态失败, 请重试')
            this.$message.success('提交成功')
            this.$router.push({path: '/MyDebt'})
        },
        ClosePopPage () {
            this.IsShowPopPage = false
        },
        async GetDebtPhoneCheck () {
            this.PhoneCheck[0].tel = this.DebtPhone
            const formData = new FormData()
            formData.append('tel', this.PhoneCheck[0].tel)
            await this.$http({
                method: 'post',
                url: '/api/api/smsSend/sendCheckNO',
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            this.$message({
                message: '手机验证码发送成功, 请填写正确的验证码',
                type: 'success',
            })
        },
        async GetRelativePhoneCheck () {
            this.PhoneCheck[1].tel = this.PersonPhone
            const formData = new FormData()
            formData.append('tel', this.PhoneCheck[1].tel)
            await this.$http({
                method: 'post',
                url: '/api/api/smsSend/sendCheckNO',
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            this.$message({
                message: '手机验证码发送成功, 请填写正确的验证码',
                type: 'success',
            })
        }
    },
    created () {
        this.InitData()
    },
    computed: {
        DebtPhone: function () {
            if(this.InitMsg.debtReportPropert === '1') {
                return this.InitMsg.priDebtPhone
            } else {
                return this.InitMsg.corBackDebtPhone
            }
        },
        PersonPhone: function () {
            if(this.InitMsg.personReportPropert === '1') {
                return this.InitMsg.personPriPhone
            } else {
                return this.InitMsg.personCorPhone
            }
        }
    },
}

</script>
<style lang='scss' scoped>
@import '@css/style.scss';
.el-input {
    width: 200px;
}
.el-row {
  .el-col {
    display: flex;
    padding: 0 20px;
    margin: 5px 0;
    input {
        width: 100%;
        height: 30px;
    }
    .col-label {
      flex-shrink: 0;
      line-height: 30px;
      height: 30px;
      margin-right: 10px;
    }
    .el-select {
    width: 100%;
    }
    .el-input {
    width: 100%;
    }
    .el-date-editor {
    width: 100%;
    }
  }
}
.compromise {
    display: flex;
    flex-direction: column;
    background-color: #E9F0F5;
    height: 100%;
    width: 100%;
    position: relative;
    &-title {
        height: px2rem(12);
        line-height: px2rem(12);
        font-size: px2rem(4);
        color: #FC7F89;
        margin: 0 px2rem(4);
        &-go1 {
            color: #616789;
        }
        &-separator {
            color: #616789
        }
    }

    &-content {
        height: 100%;
        background-color: #ffffff;
        margin: 0 px2rem(4) px2rem(4) px2rem(4);
        padding: px2rem(4);
        border-radius: px2rem(2);
        position: relative;
        &-progress-map {
            display: flex;
            justify-content: space-around;
            border-bottom: 1px solid #DFE0E7;
            padding-bottom: px2rem(4);
            div {
                display: flex;
                flex: 1;
                flex-direction: column;
                align-items: center;
                font-size: px2rem(3.2);
                color: #DFE0E7;
                span {
                    background-color: #DFE0E7;
                    width: px2rem(4);
                    height: px2rem(4);
                    border-radius: 50%;
                    margin-bottom: px2rem(1);
                }
            }
            &-finished {
                color: #616789!important;
                z-index: 2;
                span {
                   background-color: #616789!important;
                }
            }
            &-highlight {
                color:#FC7F89!important;
                z-index: 2;
                span {
                    background-color: #FC7F89!important;
                }
            }
        }
        &-crossing {
            z-index: 0;
            position: absolute;
            background-color: #DFE0E7;
            height: 2px;
            width: 97.7%;
            top: px2rem(5.7);
        }
        &-main {
            width: 100%;
            font-size: px2rem(3);
            &-title {
                height: px2rem(14);
                line-height: px2rem(14);
                font-size: px2rem(4);
                text-align: center;
                font-weight: 600;
            }
            input {
                background-color: #fff;
                border: 1px solid #DFE0E7;
                border-radius: px2rem(1);
                margin:0 px2rem(1);
                background-color: #F2F6F9;
                height: px2rem(4.2);
                width: px2rem(16);
            }
            &-text {
                line-height: 45px;
                font-size: 16px;
            }
            &-last-text {
                margin: px2rem(8)
            }
            &-button {
                text-align: center;
                margin: px2rem(8) 0;
                button {
                    width: px2rem(50);
                    height: px2rem(8);
                    border: none;
                    background-color: #616789;
                    color: #fff;
                    border-radius: px2rem(1);
                }
            }
            span {
                display: inline-block;
            }
            &-form-top {
                margin: 10px 0!important;
            }
            &-form-bottom {
                margin-bottom: px2rem(3)!important;
            }
            &-container {
                display: flex;
                margin: px2rem(10) 0;
                &-item {
                    width: px2rem(140);
                    div {
                        margin: px2rem(2) 0;
                    }
                    input {
                        width: px2rem(50);
                        margin-left: px2rem(3);
                        height: px2rem(5);
                    }
                    button {
                        padding: px2rem(1) px2rem(2);
                        font-size: px2rem(3);
                        border: none;
                        background-color: #616789;
                        margin-left: px2rem(3);
                        color: #fff;
                        border-radius: px2rem(1);
                    }
                }
            }

            &-list {
                font-size: px2rem(3.5);
                margin-top: px2rem(15);
                &-title {
                    display: flex;
                    span {
                        height: px2rem(16);
                        width: px2rem(20);
                        border: 1px solid #707070;
                        text-align: center;
                        line-height: px2rem(14);
                        box-sizing: border-box;
                    }
                }
                &-item {
                    display: flex;
                    span {
                        box-sizing: border-box;
                        height: px2rem(10);
                        width: px2rem(20);
                        border: 1px solid #707070;
                        text-align: center;
                        line-height: px2rem(10);
                    }
                }

                &-last {
                    width: px2rem(160);
                    border: 1px solid #707070;
                    height: px2remm(10);
                    line-height: px2rem(10);
                    box-sizing: border-box;
                    text-align: right;
                    padding-right: px2rem(25)
                }
            }
        }
    }
    &-pop {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        background-color: rgba(0, 0, 0, 0.4);
        &-box {
            position: absolute;
            background-color: #ffffff;
            width: px2rem(100);
            left: 45%;
            top: 50%;
            transform: translate(-50%, -50%);
            border-radius: px2rem(2);
            font-size: px2rem(3.5);
            &-header {
                    height: px2rem(10);
                    background-color: #616789;
                    display: flex;
                    justify-content: space-between;
                    font-size: px2rem(3.5);
                    align-items: center;
                    padding: 0 px2rem(4);
                    box-sizing: border-box;
                    color: #fff;
                img {
                    width: px2rem(3);
                    height: px2rem(3);
                }
            }
            &-body {
                margin: 20px;
                display: flex;
                flex-direction: column;
                font-size: px2rem(3.5);
                .el-input {
                    border: 1px solid #e8eaec;
                    height: px2rem(8);
                    line-height: px2rem(8);
                    margin: px2rem(3) 0;
                }
                span {
                    flex-shrink: 0;
                }
                .el-button {
                    flex-shrink: 0;
                    margin-left: 10px;
                    background-color: #616789;
                    color: #fff;
                }
            }
            &-footer {
                display: flex;
                justify-content: space-around;
                margin: px2rem(6) 0;
                button {
                    padding: px2rem(1) px2rem(4);
                    border: 1px solid #616789;
                    border-radius: px2rem(1);
                }
                button:nth-child(1) {
                    color: #616789;
                    background-color: #fff;
                }
                :nth-child(2) {
                    color: #ffffff;
                    background-color: #616789;
                }
            }
        }
    }
}
</style>
