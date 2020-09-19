<!--  -->
<template>
  <div class='unlock-apply'>
      <div class='unlock-apply-title'>
          <span class='unlock-apply-title-go1'>我的审批</span>
          <span class='unlock-apply-title-separator'> / </span>
          <span class='unlock-apply-title-go2'>债权处理</span>
      </div>
      <div class='unlock-apply-list'>
        <div class='unlock-apply-list-select'>
            <span @click='HandleSelect(item)' v-for='(item,index) in SelectOption' :key='index' :class="item.isSelect? 'active':'' ">{{item.SelectName}}</span>
        </div>
        <div class='unlock-apply-list-search'>
            <div class='unlock-apply-list-search-form'>
                <el-form ref="form">
                    <el-form-item>
                        <span>债事人:</span>
                        <el-input></el-input>
                    </el-form-item>
                    <el-form-item>
                        <span>录入编号:</span>
                        <el-input></el-input>
                    </el-form-item>
                </el-form>
            </div>
            <div class='unlock-apply-list-search-button'>搜索</div>
        </div>
        <div class='unlock-apply-list-content'>
            <!-- 正常显示模板 -->
            <template>
                <div class='unlock-apply-list-content-title'>
                    <span>序号</span>
                    <span>录入号</span>
                    <span>录入编号</span>
                    <span>服务协议ID</span>
                    <span>债权处理编号</span>
                    <span>审核状态</span>
                    <span>债事人</span>
                    <span>操作</span>
                </div>
                <div class='unlock-apply-list-content-tab'>
                    <div class='unlock-apply-list-content-tab-item' v-for='(item,index) in UnlockMsg' :key='index'>
                        <span>{{index+1}}</span>
                        <span>{{item.reportId}}</span>
                        <span>{{item.civilno}}</span>
                        <span>{{item.debtId}}</span>
                        <span>{{item.debtNo}}</span>
                        <span :class="[item.status === '2' || item.status === '7' || item.status === '4'? ('pass') : item.status === '1' || item.status === '6' || item.status === '3'? 'unpass': 'hassubmit']">
                            {{item.status === '0' ? '债权信息未审核' :  item.status === '1' ? '调查报告审核未通过' : item.status === '2' ? '调查报告审核通过' : item.status === '3' ? '置换信息审核未通过' : item.status === '4' ? '置换信息审核通过': item.status === '5' ? '财务未审核': item.status === '6' ? '财务审核未通过': item.status === '7' ? '财务审核通过' : ''}}
                        </span>
                        <span>{{item.personName}}</span>
                        <span>
                            <button v-show="item.status === '6'" @click='GoUnlockPayment(index)'>缴费</button>
                            <button v-show="item.status === '1'" @click='CheckData(index)'>调查报告审批</button>
                            <button v-show="item.status === '3'" @click='CheckUnlockData(index)'>债权信息审核</button>
                            <button v-show="item.status === '7'" @click='CheckUnlockPayment(index)'>债权缴费审核</button>
                        </span>
                    </div>
                </div>
            </template>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            // 选项卡
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
            // 解锁信息列表数据源
            UnlockMsg: [
            ],
            // 确定选用正常模板还是多选模板
            isNormal: false,
            TimeSelect: {
                TimeStart: '2020-02-30',
                TimeEnd: '2020-04-28'
            },
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
            UnlockSearchSrc: {
                pageNum: '1',
                pageSize: '10',
                debtNo: '',
                debtId: ''
            }
        }
    },
    methods: {
        HandleSelect (item) {
            this.SelectOption.forEach(v => {
                v.isSelect = false
            })
            item.isSelect = true
        },
        async InitUnlockApply () {
            const formData = new FormData()
            formData.append('companyType', window.sessionStorage.getItem('companyType'))
            for (const key in this.UnlockSearchSrc) {
                formData.append(key, this.UnlockSearchSrc[key])
            }
            const { data: result } = await this.$http({
                method: 'post',
                url: '/api/api/pubDebtController/selectDebtListShow',
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            this.UnlockMsg = result.data.list
            console.log(this.UnlockMsg)
        },
        CheckData (index) {
            if (this.UnlockMsg[index].status === '1') {
                // 获取当前用户点击的报备ID
                window.sessionStorage.setItem('debtId', this.UnlockMsg[index].debtId)
                // 打开审批栏
                this.$emit('onChangeFragment', 'ExamineReportFormApprove')
            }
        },
        CheckUnlockData (index) {
            window.sessionStorage.setItem('debtId', this.UnlockMsg[index].debtId)
            this.$emit('onChangeFragment', 'UnlockApplyApprove')
        },
        GoUnlockPayment (index) {
            window.sessionStorage.setItem('debtId', this.UnlockMsg[index].debtId)
            window.sessionStorage.setItem('reportId', this.UnlockMsg[index].reportId)
            this.$emit('onChangeFragment', 'UnlockPayment')
        },
        CheckUnlockPayment (index) {
            window.sessionStorage.setItem('paymentdebtid', this.UnlockMsg[index].debtId)
            window.sessionStorage.setItem('paymentreportid', this.UnlockMsg[index].reportId)
            this.$emit('onChangeFragment', 'UnlockPaymentApprove')
        }
    },
    created () {
        this.InitUnlockApply()
    }
}

</script>
<style lang='scss' scoped>
@import '@css/style.scss';
.unlock-apply {
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
            line-height: px2rem(16);
            &-form {
                .el-form {
                    display: flex;
                    align-items: center;
                    .el-form-item {
                        .el-input {
                            width: px2rem(45);
                        }
                        span {
                            margin:0 px2rem(2);
                            font-size: px2rem(3.2);
                        }
                    }
                }
            }
            &-button {
                margin-left: px2rem(4);
                height: px2rem(7);
                line-height: px2rem(7);
                width: px2rem(15);
                text-align: center;
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
                    height: px2rem(8);
                    line-height: px2rem(8);
                    font-size: px2rem(3.2);
                    background-color: #616789;
                    flex: 3;
                    text-align: center;
                    color:#fff;
                    border: 1px solid #fff;
                    display: inline-block;
                }
                :nth-child(1) {
                    flex: 1;
                }
                :nth-child(2),:nth-child(4) {
                    flex: 4.5;
                }
                :nth-child(6) {
                    flex: 5
                }
                :last-child {
                    flex: 4;
                }
            }

            &-tab {
                display: flex;
                flex-direction: column;
                font-size: px2rem(3);
                &-item {
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
                div:nth-child(odd) {
                    display: flex;
                    height: px2rem(10);
                    line-height: px2rem(10);
                    span {
                        height: px2rem(10);
                        line-height: px2rem(10);
                        flex:3;
                        text-align: center;
                        color:#272A39;
                        border: 1px solid #fff;
                        display: inline-block;
                        border: none;
                    }
                    :nth-child(1) {
                        flex: 1;
                    }
                    :nth-child(2),:nth-child(4) {
                        flex: 4.5;
                    }
                    :nth-child(6) {
                        flex: 5
                    }
                    :last-child {
                        flex: 4;
                        button {
                            font-size: px2rem(2);
                            padding: px2rem(1) px2rem(3);
                            border: none;
                            border-radius: px2rem(1);
                            color: #fff;
                        }
                        :first-child {
                            background-color: #616789;
                        }
                        :last-child {
                            background-color: #FC7F89;
                        }
                    }
                }
                div:nth-child(even) {
                    display: flex;
                    height: px2rem(10);
                    line-height: px2rem(10);
                    span {
                        background-color: #E0E3F8;
                        height: px2rem(10);
                        line-height: px2rem(10);
                        flex:3;
                        text-align: center;
                        color:#272A39;
                        display: inline-block;
                        border: none;
                    }
                    :nth-child(1) {
                        flex: 1;
                    }
                    :nth-child(2),:nth-child(4) {
                        flex: 4.5;
                    }
                    :nth-child(6) {
                        flex: 5
                    }
                    :last-child {
                        flex: 4;
                        button {
                            font-size: px2rem(2);
                            padding: px2rem(1) px2rem(3);
                            border: none;
                            border-radius: px2rem(1);
                            color: #fff;
                        }
                        :first-child {
                            background-color: #616789;
                        }
                        :last-child {
                            background-color: #FC7F89;
                        }
                    }
                }
            }
        }
    }
}
</style>
