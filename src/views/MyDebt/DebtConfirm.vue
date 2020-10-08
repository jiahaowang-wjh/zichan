<!--  -->
<template>
    <div class='debt-confirm'>
        <div class='debt-confirm-title'>
            <span class='debt-confirm-title-go1'>我的审批</span>
            <span class='debt-confirm-title-separator'> / </span>
            <span class='debt-confirm-title-go2'>债权确认书</span>
        </div>
        <div class='debt-confirm-content'>
            <div class='debt-confirm-content-progress-map'>
                <div class='debt-confirm-content-progress-map-finished'>
                    <span></span>
                    1.资产评估
                </div>
                <div class='debt-confirm-content-progress-map-finished'>
                    <span></span>
                    2.债权转让协议
                </div>
                <div class='debt-confirm-content-progress-map-finished'>
                    <span></span>
                    3.债权转让确认书
                </div>
                <div class='debt-confirm-content-progress-map-highlight'>
                    <span></span>
                    4.债权确认书
                </div>
                <div>
                    <span></span>
                    5.债权转让通知书
                </div>
                <!-- 如果解债类型为depttype = 1,否则则显示下面的template  -->
                <template v-if="debtType === '1'">
                    <div>
                        <span></span>
                        6.催款函
                    </div>
                    <div>
                        <span></span>
                        7.和解协议
                    </div>
                </template>
                <template v-else>
                    <div>
                        <span></span>
                        {{debtType === '2' ? '6.委托代理销售合同' : '6.委托线上代理销售合同'}}
                    </div>
                    <div>
                        <span></span>
                        7.催款函
                    </div>
                    <div>
                        <span></span>
                        8.和解协议
                    </div>
                </template>
            </div>
            <!-- 背景横线 -->
            <div class='debt-confirm-content-crossing'></div>
            <div class='debt-confirm-content-main'>
                <div class='debt-confirm-content-main-title'>
                    债权确认书
                </div>
                <div class='debt-confirm-content-main-text'>
                    编号：<el-input style='width: 300px' :disabled='true' :value='InitMsg.confirmNo'></el-input><br/>
                    致：<el-input :disabled='true' :value='InitMsg.personName'></el-input><br/>
                    根据<el-input :disabled='true' :value='InitMsg.debtName'></el-input>
                    （简称“债权转让方”）与我司签订的《债权转让协议》（编号:<el-input :disabled='true' :value='InitMsg.assignmentAgreementNo' style='width: 300px'></el-input>，
                    债权转让方已依法将《借款合同》项下对贵方的所有权利转让给我司，包括但不限于本金、利息、罚息、复利、违约金及费用等。截止<el-input :disabled='true' style='width: 100px' :value='contractTimeYear'></el-input>年
                    <el-input :disabled='true' style='width: 100px' :value='contractTimeMonth'></el-input>月
                    <el-input :disabled='true' style='width: 100px' :value='contractTimeDay'></el-input>日
                    ，标的债权金额为人民币<el-input :disabled='true' :value='InitMsg.amountThis'></el-input>元，其中包括
                    本金合计<el-input :disabled='true' :value='InitMsg.servicePrincipal'></el-input>元
                    ,利息合计<el-input :disabled='true' :value='InitMsg.serviceInterest'></el-input>元。
                    现我司特向贵方您发函确认，请贵方确认上述标的债权以及担保是否真实、有效,债权金额是否准确，若该债权真实、有效,债权金额准确，请在下方债务人处签字或盖章确认。
                </div>
                <div class='debt-confirm-content-main-container'>
                    <el-row :gutter="24">
                        <el-col :span="6">
                            <span class='col-label'>债权受让方：深圳市金隆盛投资管理有限公司</span>
                        </el-col>
                        <el-col :span="2">
                            <span></span>
                        </el-col>
                        <el-col :span="6">
                            <span class='col-label'>债务人盖章：</span>
                            <el-button type='primary' size='mini'>上传电子章</el-button>
                        </el-col>
                    </el-row>
                    <el-row :gutter="24">
                        <el-col :span="6">
                            <span class='col-label'>日期：</span>
                            <el-input :disabled='true' :value='InitMsg.contractTime'></el-input>
                        </el-col>
                        <el-col :span="2">
                            <span></span>
                        </el-col>
                        <el-col :span="6">
                            <span class='col-label'>债务人签字：</span>
                            <el-input :disabled='true' :value='InitMsg.personName'></el-input>
                        </el-col>
                    </el-row>
                    <el-row :gutter="24">
                        <el-col :span="8">
                            <span></span>
                        </el-col>
                        <el-col :span="6">
                            <span class='col-label'>日期：</span>
                            <el-input :disabled='true' :value='InitMsg.contractTime'></el-input>
                        </el-col>
                    </el-row>
                </div>
                <div class='debt-confirm-content-main-button'>
                    <button @click='Submit'>提交</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            SubmitData: {
                confirmNo: '',
                propertId: this.$route.query.propertId,
                contractTime: ''
            },
            InitMsg: {},
            debtType: ''
        }
    },
    methods: {
        async InitData () {
            const formData = new FormData()
            formData.append('relativePerId', this.$route.query.relativePerId)
            formData.append('propertId', this.$route.query.propertId)
            const { data: result } = await this.$http({
                method: 'post',
                url: '/api/api/busConfirmController/initialize',
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            console.log(result.data)
            this.InitMsg = result.data
            // 获取当前解债类型
            this.debtType = this.$route.query.debtType
        },
        async Submit () {
            this.SubmitData.confirmNo = this.InitMsg.confirmNo
            this.SubmitData.contractTime = this.InitMsg.contractTime
            console.log(this.SubmitData)
            const formData = new FormData()
            for (const key in this.SubmitData) {
                formData.append(key, this.SubmitData[key])
            }
            const { data: result } = await this.$http({
                method: 'post',
                url: '/api/api/busConfirmController/insertSelective',
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            console.log(result)
            if (result.resultCode !== '200') return this.$message.error(result.resultMessage)
            // 更新资产信息自身阶段
            const PropertFormData = new FormData()
            PropertFormData.append('propertId', this.$route.query.propertId)
            PropertFormData.append('stage', '4')
            const { data: PropertStatusResult } = await this.$http({
                method: 'post',
                url: '/api/api/busPropertController/updateStage',
                data: PropertFormData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            if (PropertStatusResult.resultCode !== '200') return this.$message.error(PropertStatusResult.resultMessage)
            this.$message.success('提交成功')
            this.$router.push({path: '/Notification', query: {propertId: this.$route.query.propertId, relativePerId: this.$route.query.relativePerId, debtType: this.debtType}})
        }
    },
    created () {
        this.InitData()
    },
    computed: {
        contractTimeYear: function () {
            if (this.InitMsg.contractTime) {
                return this.InitMsg.contractTime.split('-')[0] 
            }
            return ''
        },
        contractTimeMonth: function () {
            if (this.InitMsg.contractTime) {
                return this.InitMsg.contractTime.split('-')[1] 
            }
            return ''
        },
        contractTimeDay: function () {
            if (this.InitMsg.contractTime) {
                return this.InitMsg.contractTime.split('-')[2] 
            }
            return ''
        }
    }
}

</script>
<style lang='scss' scoped>
@import '@css/style.scss';
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
.el-input {
    width: 200px;
}
.debt-confirm {
    display: flex;
    flex-direction: column;
    background-color: #E9F0F5;
    height: 100%;
    width: 100%;
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
            font-size: 15px;
            &-title {
                line-height: 45px;
                font-size: px2rem(4);
                text-align: center;
                font-weight: 600;
            }
            &-text {
                line-height: 45px;
            }
            &-button {
                text-align: center;
                margin: 80px 0;
                button {
                    width: px2rem(50);
                    height: px2rem(8);
                    border: none;
                    background-color: #616789;
                    color: #fff;
                    border-radius: px2rem(1);
                }
            }
            input {
                background-color: #fff;
                border: 1px solid #DFE0E7;
                border-radius: px2rem(1);
                margin:0 px2rem(1);
                background-color: #F2F6F9;
                height: px2rem(4.5);
                width: 100px;
            }
            .input-200 {
                background-color: #fff;
                border: 1px solid #DFE0E7;
                border-radius: px2rem(1);
                margin:0 px2rem(1);
                background-color: #F2F6F9;
                height: px2rem(4.5);
                width: 200px;
            }
            .input-300 {
                background-color: #fff;
                border: 1px solid #DFE0E7;
                border-radius: px2rem(1);
                margin:0 px2rem(1);
                background-color: #F2F6F9;
                height: px2rem(4.5);
                width: 300px;
            }
            &-container {
                margin-top: 50px;
            }
            &-message {
                margin: px2rem(2) 0;
                input {
                    width: px2rem(50);
                    margin-left: px2rem(3);
                    height: px2rem(6);
                    background-color: #fff;
                }
            }
            &-space {
                height: px2rem(24)
            }
        }
    }
}
</style>
