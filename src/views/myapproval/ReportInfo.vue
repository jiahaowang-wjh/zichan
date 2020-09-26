<!--  -->
<template>
  <div class='report-info'>
        <div class='report-info-title'>
            <span class='report-info-title-go1'>我的审批</span>
            <span class='report-info-title-separator'> / </span>
            <span class='report-info-title-go2'>录入信息</span>
        </div>
        <div class='report-info-list'>
            <div class='report-info-list-select'>
                <span @click='HandleSelect(item)' v-for='(item,index) in SelectOption' :key='index' :class="item.isSelect? 'active':'' ">{{item.SelectName}}</span>
            </div>
            <div class='report-info-list-search'>
                <div class='report-info-list-search-form'>
                    <el-form ref="form">
                        <el-form-item class='report-info-list-search-form-item1'>
                            <span>债权人/债务人：</span>
                            <el-input v-model='SearchForm.debtName'></el-input>
                        </el-form-item>
                        <el-form-item >
                            <span>录入编号:</span>
                            <el-input ></el-input>
                        </el-form-item>
                        <el-form-item placeholder="审核状态">
                            <span>审核状态:</span>
                            <el-select v-model='SearchForm.status'>
                                <el-option label="审核通过" value='2'></el-option>
                                <el-option label="审核驳回" value='5'></el-option>
                                <el-option label="审核已提交" value='1'></el-option>
                            </el-select>
                        </el-form-item>
                    </el-form>
                </div>
                <div class='report-info-list-search-time-select'>
                    <span>时间: </span>
                    <el-date-picker align="left" type="date" placeholder="请选择开始日期" :picker-options="pickerOptions" v-model="SearchForm.beginDate">
                    </el-date-picker>
                    <span class='report-info-list-search-time-select-separator'>—</span>
                    <el-date-picker align="left" type="date" placeholder="请选择结束日期" :picker-options="pickerOptions" v-model="SearchForm.endDate">
                    </el-date-picker>
                </div>
                <div class='report-info-list-search-button-search'>搜索</div>
            </div>
            <div class='report-info-list-content'>
                <!-- 正常显示模板 -->
                <div class='report-info-list-content-title'>
                    <span>序号</span>
                    <span>债事信息</span>
                    <span>债权处理次数</span>
                    <span>债权处理编号</span>
                    <span>债权处理金额</span>
                    <span>提交时间</span>
                    <span>审核时间</span>
                    <span>审批内容</span>
                    <span>审核状态</span>
                    <span>操作</span>
                </div>
                <div class='report-info-list-content-tab'>
                    <div class='report-info-list-content-tab-item' v-for='(item,index) in ReportInfoMsg' :key='index'>
                        <span>{{index+1}}</span>
                        <div>
                            <ul>
                                <li>录入编号: {{item.reportNo ? item.reportId : '/'}}</li>
                                <li>债事人: {{item.debtName ? item.debtName : '/'}}</li>
                                <li>相对人: {{item.busRelativeCount ? item.busRelativeCount : '/'}}</li>
                                <li>录入人: {{item.inputName ? item.inputName : '/'}}</li>
                                <li>推荐人: {{item.recommendName ? item.recommendName : '/'}}</li>
                            </ul>
                        </div>
                        <span>{{item.MeltTimes ? item.MeltTimes : '/'}}</span>
                        <span>{{item.MeltNumber ? item.MeltNumber : '/'}}</span>
                        <span>{{item.MeltMoney ? item.MeltMoney : '/'}}</span>
                        <div>
                            <span>{{item.submitDate ? item.submitDate : '/'}}</span>
                        </div>
                        <div>
                            <span>{{item.checkDate ? item.checkDate : '/'}}</span>
                        </div>
                        <div>
                            <ul>
                                <li>{{item.checkReason ? item.checkReason : '/'}}</li>
                            </ul>
                        </div>
                        <div>
                            <span :class="[item.status === '2' || item.status === '5'? ('pass') : item.status === '1' || item.status === '6'? 'unpass': 'hassubmit']">
                                {{item.status === '0'?('未审核'):item.status === '1'?('审核未通过'):item.status === '2'?('审核通过'):item.status === '3'?('暨尽调协议'): item.status === '4'?('财务未审核'):item.status === '5'?('财务审核通过'):'财务审核未通过'}}
                            </span>
                        </div>
                        <span>
                            <button v-if="item.status === '0' || item.status === '4'" @click='CheckData(index)'>审核</button>
                            <button v-if="item.status === '3' || item.status === '6' "  @click='GoReportPayment(index)'>缴费</button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            // 调解信息列表数据源
            ReportInfoMsg: [],
            // 确定选用正常模板还是多选模板
            isNormal: false,
            pickerOptions: {
                disabledDate (time) {
                    return time.getTime() > Date.now()
                },
                shortcuts: [{
                    text: '今天',
                    onClick (picker) {
                        picker.$emit('pick', new Date())
                    }
                }, {
                    text: '昨天',
                    onClick (picker) {
                        const date = new Date()
                        date.setTime(date.getTime() - 3600 * 1000 * 24)
                        picker.$emit('pick', date)
                    }
                }, {
                    text: '一周前',
                    onClick (picker) {
                        const date = new Date()
                        date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
                        picker.$emit('pick', date)
                    }
                }]
            },
            dialogTableVisible: false,
            // 选择表单的数据源
            SearchForm: {
                pageNum: '1',
                pageSize: '10',
                beginDate: '',
                endDate: '',
                debtName: '',
                status: ''
            },
            SelectOption: [
                {
                    SelectName: '全部',
                    isSelect: true
                },
                {
                    SelectName: '待审核',
                    isSelect: false
                },
                {
                    SelectName: '审核通过',
                    isSelect: false
                },
                {
                    SelectName: '审核驳回',
                    isSelect: false
                }
            ],
            IsCheckData: false,
            // 获取当前用户审批的数据
            UserCheckData: {
                reportId: '',
                status: '',
                checkReason: ''
            }
        }
    },
    methods: {
        GoInfoPayment () {
            this.$emit('onChangeFragment', 'InfoPayment')
        },
        HandleSelect (item) {
            this.SelectOption.forEach(v => {
                v.isSelect = false
            })
            item.isSelect = true
        },
        // 页面初始化
        async InitData () {
            const formData = new FormData()
            const DataList = {
                pageSize: '20',
                pageNum: '1'
            }
            for (const key in DataList) {
                formData.append(key, DataList[key])
            }
            const { data: result } = await this.$http({
                method: 'post',
                url: '/api/api/busReportController/selectDebtInfos',
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            this.ReportInfoMsg = result.data.list
        },
        CheckData (index) {
            console.log(this.ReportInfoMsg[index].status, this.ReportInfoMsg[index].status)
            // 如果当前用户处于报备待审批状态 status === '0', stage === '1'
            if ((this.ReportInfoMsg[index].status === '0' || this.ReportInfoMsg[index].status === '5') && this.ReportInfoMsg[index].stage === '1') {
                // 获取当前用户点击的报备ID
                window.sessionStorage.setItem('ApproveReportId', this.ReportInfoMsg[index].reportId)
                // 打开审批栏
                this.$emit('onChangeFragment', 'ReportApprove')
            } else if (this.ReportInfoMsg[index].status === '4' && this.ReportInfoMsg[index].stage === '1') {
                // 当前用户处于报备支付凭证待审批 status === '4' , stage === '1'
                // 获取当前用户点击的报备ID
                window.sessionStorage.setItem('ApproveReportId', this.ReportInfoMsg[index].reportId)
                // 打开审批栏
                this.$emit('onChangeFragment', 'ReportVoucherApprove')
            }
        },
        CloseCheckPage () {
            this.UserCheckData.reportId = ''
            this.UserCheckData.status = ''
            this.UserCheckData.checkReason = ''
            this.IsCheckData = false
        },
        RejectReport () {
            if (!this.UserCheckData.checkReason) return this.$message.error('请先填写审批原因')
            this.UserCheckData.status = '1'
            this.UpdateDataStatus()
            this.CloseCheckPage()
        },
        PassReport () {
            if (!this.UserCheckData.checkReason) return this.$message.error('请先填写审批原因')
            this.UserCheckData.status = '1'
            this.UpdateDataStatus()
            this.CloseCheckPage()
        },
        GoReportPayment (index) {
            window.sessionStorage.setItem('reportId', this.ReportInfoMsg[index].reportId)
            this.$emit('onChangeFragment', 'ReportPayment')
        },
        // 调用更新状态接口
        async UpdateDataStatus () {
            const formData = new FormData()
            for (const key in this.UserCheckData) {
                formData.append(key, this.UserCheckData[key])
            }
            const { data: result } = await this.$http({
                method: 'post',
                url: '/api/api/busReportController/updateStatus',
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            console.log(result)
            if (result.resultCode !== '200') return this.$message.error(result.resultMessage)
            this.$message.success(result.resultMessage)
        }
    },
    created () {
        this.InitData()
    }
}

</script>
<style lang='scss' scoped>
@import '@css/style.scss';
.report-info {
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: #E9F0F5;
    &-title {
        height: px2rem(12);
        line-height: px2rem(12);
        font-size: px2rem(4);
        color: #616789;
        margin: 0 px2rem(4);
        &-go2 {
            color: #FC7F89;
        }
    }

    &-list {
        height: 100%;
        background-color: #ffffff;
        margin: 0 px2rem(4);
        padding: px2rem(4);

        &-select {
            display: flex;
            height: px2rem(8);
            border-bottom: px2rem(0.1) solid #DFE0E7;
            span {
                display: inline-block;
                font-size: px2rem(4);
                color: #999999;
                margin: 0 px2rem(4);
                height: px2rem(8);
                line-height: px2rem(8);
                width: px2rem(22);
                text-align: center;
            }
            span:hover,span:active {
                background-color: #EFEFF3;
            }
            .active {
                border-bottom: px2rem(0.4) solid #616789;
            }
        }
        &-search {
            display: flex;
            align-items: center;
            height: px2rem(16);

            &-form {
                display: flex;
                height: px2rem(14);
                line-height: px2rem(14);
                margin-left: px2rem(2);
                .el-form {
                    display: flex;
                    height: 100%;
                    align-items: center;
                    margin-bottom: 0;
                    .el-form-item {
                        display: flex;
                        align-items: center;
                        width: px2rem(51);
                        span {
                            width: px2rem(20);
                            font-size: px2rem(3.2);
                            display: inline-block;
                            padding-right: px2rem(1);
                        }
                    }
                }
                &-item1 {
                    width: px2rem(63)!important;

                    span {
                        width: px2rem(40)!important;
                        font-size: px2rem(3.2);
                        display: inline-block;
                        padding-right: px2rem(1);
                    }
                }
            }

            &-time-select {
                display: flex;
                align-items: center;
                margin-left: px2rem(2);
                .el-date-picker {
                    width: px2rem(51);
                }
                span {
                    font-size: px2rem(3.2);
                    width: px2rem(8);
                }

                &-separator {
                    width: px2rem(6);
                    text-align: center;
                }
            }

            &-button-search {
                margin-left: px2rem(4);
                padding: px2rem(1.4) px2rem(4);
                font-size: px2rem(3.2);
                background-color: #616789;
                border-radius: px2rem(2);
                color: #fff;
            }
        }

        &-content {
            display: flex;
            flex-direction: column;
            &-title {
                display: flex;
                height: px2rem(8);
                span {
                    flex: 3;
                    height: px2rem(8);
                    line-height: px2rem(8);
                    font-size: px2rem(3.2);
                    background-color: #616789;
                    text-align: center;
                    color:#fff;
                    display: inline-block;
                    border-left: 0.5px solid #fff;
                    border-right: 0.5px solid #fff;
                }
                :nth-child(1) {
                    flex: 1;
                }
                :nth-child(9), :nth-child(10){
                    flex: 4;
                }
                :nth-child(8) {
                    flex: 5;
                }
                :nth-child(2) {
                    flex: 6;
                }
            }

            &-tab {
                display: flex;
                flex-direction: column;
                font-size: px2rem(3);
                div:nth-child(odd) {
                    display: flex;
                    height: px2rem(28);
                    line-height: px2rem(28);
                    background-color: #fff;
                    text-align: center;
                    font-size: px2rem(2);
                    span {
                        flex: 3;
                        font-size: px2rem(2.8);
                        text-align: center;
                        color:#000;
                        display: inline-block;
                        margin:0 1px;
                    }
                    :nth-child(1) {
                        flex: 1;
                    }
                    :nth-child(2) {
                        flex: 6;
                        margin: 0 1px;
                        ul {
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            padding: px2rem(5) 0;
                            background-color: #fff;
                        }
                        li {
                            flex:1;
                            line-height: px2rem(3);
                            border: none;
                            padding: none;
                        }
                    }
                    :nth-child(8) {
                        font-size: px2rem(3.2);
                        flex: 5;
                        border: 1px solid #fff;
                        background-color: #fff;
                    }
                    :nth-child(6),:nth-child(7) {
                        flex: 3;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background-color: #fff;
                        padding: 0 px2rem(1);
                        margin:0 1px;
                        box-sizing: border-box;
                        span {
                            text-align: center;
                            height: px2rem(3);
                            line-height: px2rem(3);
                        }
                    }
                    :nth-child(9) {
                        flex: 4;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        span {
                            margin: 0 px2rem(3);
                            height: px2rem(3);
                            line-height: px2rem(3);
                        }
                        .pass {
                            color: #17C67A !important
                        }
                        .unpass {
                            color: #FF0000 !important
                        }
                        .hassubmit {
                            color: #272A39 !important
                        }
                    }
                    :nth-child(10) {
                        flex: 4;
                        button {
                            font-size: px2rem(3.2);
                            color: #fff;
                            border: none;
                            padding: px2rem(0.5) px2rem(2);
                            border-radius: px2rem(1);
                            margin: 0 px2rem(0.8);
                            background-color: #FC7F89;
                        }
                    }
                }
                div:nth-child(even) {
                    display: flex;
                    height: px2rem(28);
                    line-height: px2rem(28);
                    background-color: #E0E3F8;
                    text-align: center;
                    font-size: px2rem(2);
                    span {
                        font-size: px2rem(2.8);
                        flex: 3;
                        text-align: center;
                        color:#000;
                        display: inline-block;
                        margin: 0 0.5px;
                    }
                    :nth-child(1) {
                        flex: 1;
                    }
                    :nth-child(2) {
                        flex: 6;
                        ul {
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            padding: px2rem(5) 0;
                            box-sizing: border-box;
                        }
                        li {
                            flex:1;
                            line-height: px2rem(3);
                            border: none;
                            padding: none;
                        }
                    }
                    :nth-child(8) {
                        font-size: px2rem(3.2);
                        flex: 5;
                        border: 1px solid #E0E3F8;
                    }
                    :nth-child(6),:nth-child(7) {
                        flex: 3;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background-color: #E0E3F8;
                        padding: 0 px2rem(1);
                        box-sizing: border-box;
                        span {
                            text-align: center;
                            height: px2rem(3);
                            line-height: px2rem(3);
                            display: inline-block;
                        }
                    }
                    :nth-child(9) {
                        flex: 4;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background-color: #E0E3F8;
                        span {
                            margin: 0 px2rem(3);
                            height: px2rem(3);
                            line-height: px2rem(3);
                        }
                        .pass {
                            color: #17C67A !important
                        }
                        .unpass {
                            color: #FF0000 !important
                        }
                        .hassubmit {
                            color: #272A39 !important
                        }
                    }
                    :nth-child(10) {
                        flex: 4;
                        button {
                            font-size: px2rem(3.2);
                            color: #fff;
                            border: none;
                            padding: px2rem(0.5) px2rem(2);
                            border-radius: px2rem(1);
                            margin: 0 px2rem(0.8);
                            background-color: #FC7F89;
                        }
                    }
                }
            }
        }
    }
}
</style>
