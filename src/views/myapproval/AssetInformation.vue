<!--  -->
<template>
  <div class='report-info'>
      <div class='report-info-title'>
          <span class='report-info-title-go1'>我的审批</span>
          <span class='report-info-title-separator'> / </span>
          <span class='report-info-title-go2'>资产资料</span>
      </div>
      <div class='report-info-list'>
        <div class='report-info-list-select'>
            <span @click='HandleSelect(item)' v-for='(item,index) in SelectOption' :key='index' :class="item.isSelect? 'active':'' ">{{item.SelectName}}</span>
        </div>
        <div class='report-info-list-search'>
            <div class='report-info-list-search-form'>
                <el-form ref="form">
                    <el-form-item>
                        <span>录入编号：</span>
                        <el-input></el-input>
                    </el-form-item>
                </el-form>
            </div>
            <div class='report-info-list-search-button'>搜索</div>
        </div>
        <div class='report-info-list-content'>
            <!-- 正常显示模板 -->
            <template>
                <div class='report-info-list-content-title'>
                    <span>序号</span>
                    <span>录入编号</span>
                    <span>债权处理编号</span>
                    <span>评估编号</span>
                    <span>审批阶段</span>
                    <span>创建时间</span>
                    <span>审批状态</span>
                    <span>操作</span>
                </div>
                <div class='report-info-list-content-tab'>
                    <div class='report-info-list-content-tab-item' v-for='(item,index) in PaymentMsg' :key='index'>
                        <span>{{index+1}}</span>
                        <span>{{item.reportNo}}</span>
                        <span>{{item.debtNo}}</span>
                        <span>{{item.assessmentNo}}</span>
                        <span>{{item.stage === '4'? '资产阶段': ''}}</span>
                        <span>{{item.createTime}}</span>
                        <span :class="[item.status === '3' || item.status === '6' || item.status === '9'? ('pass') : item.status === '2' || item.status === '5' || item.status === '8'? 'unpass': 'hassubmit']">
                            {{item.status === '0'?('资产信息未录入'):item.status === '1'?('资产评估未审核'):item.status === '2'? ('资产评估审核未通过') : item.status === '3'?('资产评估审核通过') : item.status === '4'?('资产信息未审核') : item.status === '5'?('资产信息审核未通过') : item.status === '6'?('资产信息审核通过,开始缴费') : item.status === '7'?('财务信息未审核') : item.status === '8'?('财务信息审核未通过') : item.status === '9'?('财务信息审核通过') : '' }}
                        </span>
                        <span>
                            <button @click='CheckAssessment(index, item)' v-show="item.stage === '8' && item.status === '4'">审核</button>
                            <button @click='GoPayment(index, item)' v-show="item.status === '6'">缴费</button>
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
            // 分页器结构数据源
            bgc: true,
            queryInfo: {
                pageSize: 10
            },
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
            // 支付信息信息列表数据源
            PaymentMsg: [],
            // 确定选用正常模板还是多选模板
            isNormal: false,
            SearchForm: {
                pageNum: '1',
                pageSize: '10',
                beginDate: '',
                endDate: '',
                debtName: '',
                status: '',
                companyType: window.sessionStorage.getItem('companyType'),
                comId: window.sessionStorage.getItem('companyId')
            }
        }
    },
    methods: {
        handleCurrentChange (e) {
        },
        SelectMore () {
            this.isNormal = !this.isNormal
        },
        // 页面初始化
        async InitData () {
            const formData = new FormData()
            for (const key in this.SearchForm) {
                formData.append(key, this.SearchForm[key])
            }
            const { data: result } = await this.$http({
                method: 'post',
                url: '/api/api/busPropertController/querys',
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            console.log(result)
            console.log(result.data.list)
            this.PaymentMsg = result.data.list
            // .filter(v => {
            //     return v.status >= '3'
            // })
        },
        HandleSelect (item) {
            this.SelectOption.forEach(v => {
                v.isSelect = false
            })
            item.isSelect = true
        },
        CheckAssessment (index, item) {
            this.$router.push({path: '/AssetInformationApprove', query: {propertId: item.propertId, relativePerId: item.relativePerId, debtType: item.debtType}})
        },
        // 资产缴费
        GoPayment (index, item) {
            this.$router.push({path: '/Payment', query: {propertId: item.propertId, relativePerId: item.relativePerId,huoKuanMoney: item.huoKuanMoney}})
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

            &-form {
                display: flex;
                align-items: center;
                height: px2rem(10);
                line-height: px2rem(10);
                margin-left: px2rem(2);
                .el-form {
                    display: flex;
                    align-items: center;
                    .el-form-item {
                        height: px2rem(10);
                        line-height: px2rem(10);
                        span {
                            font-size: px2rem(3.2);
                            width: px2rem(24);
                        }
                    }
                }
            }
            &-button {
                margin-left: px2rem(4);
                padding: px2rem(1.4) px2rem(3.5);
                font-size: px2rem(3.2);
                text-align: center;
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
                    flex: 4;
                    text-align: center;
                    color:#fff;
                    border: 1px solid #fff;
                    display: inline-block;
                }
                :nth-child(1) {
                    flex: 1;
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
                        flex:4;
                        text-align: center;
                        color:#272A39;
                        border: 1px solid #fff;
                        display: inline-block;
                        border: none;
                    }
                    :nth-child(1) {
                        flex: 1;
                    }
                    :last-child {
                        button {
                            font-size: px2rem(3.2);
                            border: none;
                            padding: px2rem(1.2) px2rem(2);
                            border-radius: px2rem(1);
                            color: #fff;
                            margin: 0 px2rem(2);
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
                    background-color: #E0E3F8;
                    span {
                        height: px2rem(10);
                        line-height: px2rem(10);
                        flex:4;
                        text-align: center;
                        color:#272A39;
                        display: inline-block;
                        border: none;
                    }
                    :nth-child(1) {
                        flex: 1;
                    }
                    :last-child {
                        button {
                            font-size: px2rem(2);
                            margin: px2rem(6);
                            border: none;
                            padding: px2rem(1) px2rem(2);
                            border-radius: px2rem(1);
                            color: #fff;
                            margin: 0 px2rem(2);
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
