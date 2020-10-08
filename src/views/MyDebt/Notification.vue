<!--  -->
<template>
    <div class='notification'>
        <div class='notification-title'>
            <span class='notification-title-go1'>我的审批</span>
            <span class='notification-title-separator'> / </span>
            <span class='notification-title-go2'>债权转让通知书</span>
        </div>
        <div class='notification-content'>
            <div class='notification-content-progress-map'>
                <div class='notification-content-progress-map-finished'>
                    <span></span>
                    1.资产评估
                </div>
                <div class='notification-content-progress-map-finished'>
                    <span></span>
                    2.债权转让协议
                </div>
                <div class='notification-content-progress-map-finished'>
                    <span></span>
                    3.债权转让确认书
                </div>
                <div class='notification-content-progress-map-finished'>
                    <span></span>
                    4.债权确认书
                </div>
                <div class='notification-content-progress-map-highlight'>
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
            <div class='notification-content-crossing'></div>
            <div class='notification-content-main'>
                <div class='notification-content-main-title'>
                    债权转让通知书
                </div>
                编号： <el-input :disabled='true' style='width: 300px' :value='InitMsg.noticeNo'></el-input>：<br/>
                <div class='notification-content-main-input'>
                    <el-input :disabled='true' :value='InitMsg.personName'></el-input>：
                </div>
                <div>我方享有的对你方如下债权，现已转让给深圳市金隆盛投资管理有限公司。自你方收到本通知之日起，你我之间不再具有债权债务关系，请你方向前述新债权人履行债务清偿义务。</div>
                <div class='notification-content-main-table'>
                    <div class='notification-content-main-table-title'>
                        <span>债权人姓名/名称</span>
                        <span>债务人姓名/名称</span>
                        <span>债务人身份证号码或统一社会信用代码</span>
                        <span>债权债务关系形成原因</span>
                        <span>债权债务金额（元）</span>
                    </div>
                    <div class='notification-content-main-table-content'>
                        <span>{{InitMsg.debtName}}</span>
                        <span>{{InitMsg.personName}}</span>
                        <span>{{InitMsg.idCard}}</span>
                        <span>{{InitMsg.personReason ? InitMsg.personReason : '无'}}</span>
                        <span>{{InitMsg.amountThis}}</span>
                    </div>
                </div>
                <div>特此通知！</div>
                <div>
                    <el-row :gutter="24">
                        <el-col :span="6">
                            <span class='col-label'>通知人：</span>
                            <el-input type="text" :value='InitMsg.debtName' :disabled='true'></el-input>
                        </el-col>
                    </el-row>
                    <el-row :gutter="24">
                        <el-col :span="6">
                            <span class='col-label'>时间：</span>
                            <el-input type="text" :value='InitMsg.contractTime' :disabled='true'></el-input>
                        </el-col>
                    </el-row>
                </div>
                <div class='notification-content-main-button'>
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
            InitMsg: {},
            SubmitData: {
                assignmentAgreementNo: '',
                propertId: this.$route.query.propertId,
                contractTime: ''
            },
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
                url: '/api/api/busAssignmentNoticeController/initialize',
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
            this.SubmitData.noticeNo = this.InitMsg.noticeNo
            this.SubmitData.contractTime = this.InitMsg.contractTime
            const formData = new FormData()
            for (const key in this.SubmitData) {
                formData.append(key, this.SubmitData[key])
            }
            const { data: result } = await this.$http({
                method: 'post',
                url: '/api/api/busAssignmentNoticeController/insertSelective',
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            if (result.resultCode !== '200') return this.$message.error(result.resultMessage)
            
            // 更新资产信息自身阶段
            const PropertFormData = new FormData()
            PropertFormData.append('propertId', this.$route.query.propertId)
            PropertFormData.append('stage', '5')
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
            if (this.$route.query.debtType === '1') {
                this.$router.push({path: '/CollectionLetters', query: {propertId: this.$route.query.propertId, relativePerId: this.$route.query.relativePerId, debtType: this.debtType}})
            } else {
                this.$router.push({path: '/SalesAgreement', query: {propertId: this.$route.query.propertId, relativePerId: this.$route.query.relativePerId, debtType: this.debtType}})
            }
        }
    },
    created () {
        this.InitData()
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
    line-height: 40px;
    input {
        width: 100%;
    }
    .col-label {
      flex-shrink: 0;
      margin-right: 10px;
    }
    /deep/.el-form-item {
      width: 100%;
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
}
.notification {
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
        line-height: 45px;
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
            font-size: px2rem(3.5);
            &-title {
                height: px2rem(14);
                font-size: px2rem(4);
                text-align: center;
                font-weight: 600;
            }
            &-input {
                .el-input {
                    background-color: #fff;
                    border: 1px solid #DFE0E7;
                    border-radius: px2rem(1);
                    margin:0 px2rem(1);
                    background-color: #F2F6F9;
                    height: px2rem(4.5);
                    width: 200px;
                }
            }
            input {
                background-color: #fff;
                border: 1px solid #DFE0E7;
                border-radius: px2rem(1);
                margin:0 px2rem(1);
                background-color: #F2F6F9;
                height: px2rem(4.5);
                width: px2rem(30);
            }
            &-button {
                text-align: center;
                margin: px2rem(6) 0;
                button {
                    width: px2rem(50);
                    height: px2rem(8);
                    border: none;
                    background-color: #616789;
                    color: #fff;
                    border-radius: px2rem(1);
                }
            }
            &-space {
                height: px2rem(24)
            }
            &-table {
                width: px2rem(200);
                margin: px2rem(6) 0;
                &-title {
                    display: flex;
                    justify-content: space-around;
                    span {
                        display: inline-block;
                        width: px2rem(40);
                        border: 1px solid #E8EAEC;
                        text-align: center;
                        font-weight: 600;
                        font-size: px2rem(3.5);
                        padding: 0 px2rem(2);
                        vertical-align: middle;
                    }
                }
                &-content {
                    display: flex;
                    justify-content: space-around;
                    background-color: #F2F6F9;
                    span {
                        display: inline-block;
                        width: px2rem(40);
                        height: 100px;
                        line-height: 100px;
                        border: 1px solid #E8EAEC;
                        text-align: center;
                        font-size: px2rem(3.5);
                        padding: 0 px2rem(2);
                    }
                }
            }
        }
    }
}
</style>
