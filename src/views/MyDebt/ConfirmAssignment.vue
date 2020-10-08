<!--  -->
<template>
    <div class='confirm-assignment'>
        <div class='confirm-assignment-title'>
            <span class='confirm-assignment-title-go1'>我的审批</span>
            <span class='confirm-assignment-title-separator'> / </span>
            <span class='confirm-assignment-title-go2'>债权转让确认书</span>
        </div>
        <div class='confirm-assignment-content'>
            <div class='confirm-assignment-content-progress-map'>
                <div class='confirm-assignment-content-progress-map-finished'>
                    <span></span>
                    1.资产评估
                </div>
                <div class='confirm-assignment-content-progress-map-finished'>
                    <span></span>
                    2.债权转让协议
                </div>
                <div class='confirm-assignment-content-progress-map-highlight'>
                    <span></span>
                    3.债权转让确认书
                </div>
                <div>
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
            <div class='confirm-assignment-content-crossing'></div>
            <div class='confirm-assignment-content-main'>
                <div class='confirm-assignment-content-main-title'>
                    债权转让确认书
                </div>
                <div class='confirm-assignment-content-main-text'>
                    编号：<el-input :disabled='true' type="text" :value='InitMsg.confirmNo' class='input-300'></el-input><br>
                    根据<el-input :disabled='true' type="text" :value='InitMsg.debtName'></el-input>与深圳市金隆盛投资管理有限公司签订的《债权转让协议》（协议编号：<el-input :disabled='true' type="text" class='input-300' :value='InitMsg.assignmentAgreementNo'></el-input>），现各方对该协议项下债权转让作出如下确认：<br/>
                    二、原债权人<el-input type="text" :disabled='true' :value='InitMsg.debtName'></el-input>依法享有本确认书附表列明的债权债务合同项下所有权利（以下简称“标的债权”)，包括但不限于本金、利息、罚息、复利、违约金及费用等，截至
                    <el-input :disabled='true' type="text" class='input-100' :value='contractTimeYear'></el-input>年
                    <el-input :disabled='true' class='input-100' type="text" :value='contractTimeMonth'></el-input>月
                    <el-input :disabled='true' class='input-100' type="text" :value='contractTimeDay'></el-input>日，标的债权金额为人民币<el-input type="text" :value='InitMsg.amountThis' :disabled='true'></el-input>元。该标的债权已由原债权人转归深圳市金隆盛投资管理有限公司享有。<br/>
                    二、原债权人<el-input type="text" :disabled='true' :value='InitMsg.debtName'></el-input>债务人<el-input :disabled='true' type="text" :value='InitMsg.personName'></el-input>担保人
                    <span>
                        <el-input :disabled='true' type="text" :value='item' v-for='(item,index) in InitMsg.authName' :key='index' style='margin: 0 5px'></el-input>
                    </span>
                    均确认《债权转让协议》（协议编号：<el-input :disabled='true' type="text" :value='InitMsg.assignmentAgreementNo' class='input-300'></el-input>）生效后，原债权人<el-input type="text" :disabled='true' :value='InitMsg.debtName'></el-input>在本确认书附表列明的债权债务合同及担保合同项下的所有权利转归深圳市金隆盛投资管理有限公司享有，深圳市金隆盛投资管理有限公司承继该等合同项下的所有权利，债务人、担保人继续向深圳市金隆盛投资管理有限公司履行该等合同约定的所有义务。<br/>
                    特此确认。
                </div>
                <div class='confirm-assignment-content-main-container'>
                    <el-row :gutter="24">
                        <el-col :span="6">
                            <span class='col-label'>债权人：</span>
                            <el-input type="text" :value='InitMsg.debtName' :disabled='true'></el-input>
                        </el-col>
                        <el-col :span="2">
                            <span></span>
                        </el-col>
                        <el-col :span="6">
                            <span class='col-label'>债务人：</span>
                            <el-input type="text" :value='InitMsg.personName' :disabled='true'></el-input>
                        </el-col>
                    </el-row>
                    <el-row :gutter="24">
                        <el-col :span="6">
                            <span class='col-label'>日期：</span>
                            <el-input type="text" :value='InitMsg.thisTime' :disabled='true'></el-input>
                        </el-col>
                        <el-col :span="2">
                            <span></span>
                        </el-col>
                        <el-col :span="6">
                            <span class='col-label'>日期：</span>
                            <el-input type="text" :value='InitMsg.thisTime' :disabled='true'></el-input>
                        </el-col>
                    </el-row>
                    <el-row style="margin-top: 40px">
                        <el-col :span="6">
                            <span class='col-label'>担保人：</span>
                            <el-input :disabled='true' type="text" :value='item' v-for='(item,index) in InitMsg.authName' :key='index' style='margin: 0 5px'></el-input>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="6">
                            <span class='col-label'>日期：</span>
                            <el-input type="text" :value='InitMsg.thisTime' :disabled='true'></el-input>
                        </el-col>
                    </el-row>
                </div>
                <div class='confirm-assignment-content-main-button'>
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
                propertId: this.$route.query.propertId,
                confirmNo: '',
                contractTime: ''
            },
            InitMsg: { },
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
                url: '/api/api/BusAssignmentConfirmController/initialize',
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            this.InitMsg = result.data
            console.log(this.InitMsg)
            this.debtType = this.$route.query.debtType
        },
        async Submit () {
            this.SubmitData.contractTime = this.InitMsg.contractTime
            this.SubmitData.confirmNo = this.InitMsg.confirmNo
            const formData = new FormData()
            for (const key in this.SubmitData) {
                formData.append(key, this.SubmitData[key])
            }
            const { data: result } = await this.$http({
                method: 'post',
                url: '/api/api/BusAssignmentConfirmController/insertSelective',
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            if (result.resultCode !== '200') return this.$message.error(result.resultMessage)
            // 更新资产信息自身阶段
            const PropertFormData = new FormData()
            PropertFormData.append('propertId', this.$route.query.propertId)
            PropertFormData.append('stage', '3')
            const { data: PropertStatusResult } = await this.$http({
                method: 'post',
                url: '/api/api/busPropertController/updateStage',
                data: PropertFormData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            if (PropertStatusResult.resultCode !== '200') return this.$message.error('更改资产阶段失败, 请重试')
            this.$message.success('提交资产信息成功')
            this.$router.push({path: '/DebtConfirm', query: {propertId: this.$route.query.propertId, relativePerId: this.$route.query.relativePerId, debtType: this.debtType}})
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
.confirm-assignment {
    display: flex;
    flex-direction: column;
    background-color: #E9F0F5;
    height: 100%;
    width: 100%;
    font-size: 16px;
    &-title {
        height: px2rem(12);
        line-height: px2rem(12);
        font-size: 20px;
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
        line-height: 35px;
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
            &-title {
                height: px2rem(14);
                line-height: px2rem(14);
                font-size: 20px;
                text-align: center;
                font-weight: 600;
            }
            .input-100 {
                width: 100px;
            }
            .input-300 {
                width: 300px;
            }
            &-text {
                line-height: 45px;
            }
            &-button {
                text-align: center;
                margin: 60px 0;
                button {
                    width: px2rem(50);
                    height: px2rem(8);
                    border: none;
                    background-color: #616789;
                    color: #fff;
                    border-radius: px2rem(1);
                }
            }
            &-container {
                margin-top: 100px;
            }
        }
    }
}
</style>
