<!--  -->
<template>
  <div class='report-info'>
      <div class='report-info-title'>
          <span class='report-info-title-go1'>我的审批</span>
          <span class='report-info-title-separator'> / </span>
          <span class='report-info-title-go2'>支付详情</span>
      </div>
      <div class='report-info-list'>
        <div class='report-info-list-select'>
            <span @click='HandleSelect(item)' v-for='(item,index) in SelectOption' :key='index' :class="item.isSelect? 'active':'' ">{{item.SelectName}}</span>
        </div>
        <div class='report-info-list-search'>
            <div class='report-info-list-search-form'>
                <el-form ref="form">
                    <el-form-item>
                        <span>录入编号:</span>
                        <el-input v-model="tableQuery.debtNo"></el-input>
                    </el-form-item>
                </el-form>
            </div>
            <div class='report-info-list-search-button' @click='IniVoucherApply()'>搜索</div>
        </div>
        <div class='report-info-list-content'>
            <!-- 正常显示模板 -->
            <template>
                <div class='report-info-list-content-title'>
                    <span>序号</span>
                    <span>报备号</span>
                    <span>缴费人</span>
                    <span>类型</span>
                    <span>支付号</span>
                    <span>金额</span>
                    <span>图片</span>
                    <span>审核状态</span>
                </div>
                <div class='report-info-list-content-tab'>
                    <div class='report-info-list-content-tab-item' v-for='(item,index) in PaymentMsg' :key='index'>
                        <span>{{index+1}}</span>
                        <span>{{item.reportId}}</span>
                        <span>{{item.payertName}}</span>
                        <span>{{item.flag === '1' ? '报备阶段' : item.flag === '2' ? '调解阶段' : item.flag === '3' ? '置换阶段' : item.flag === '4' ? '资产阶段': ''}}</span>
                        <span>{{item.payId}}</span>
                        <span>{{item.cost}}</span>
                        <span><img :src="ImgItem" v-for='(ImgItem,Imgindex) in item.voucher' :key='Imgindex' alt=""></span>
                        <span>{{item.flag === '1' ? '报备阶段' : item.flag === '2' ? '调解阶段' : item.flag === '3' ? '置换阶段' : item.flag === '4' ? '资产阶段': ''}}</span>
                    </div>
                </div>
                <div style="text-align: right; margin-top: 25px">
                    <el-pagination
                    background
                    @current-change="IniVoucherApply"
                    layout="prev, pager, next"
                    :total="tablePage.total"
                    ></el-pagination>
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
            //表格分页
            tablePage: {
                pageSize: 10,
                pageNum: 1,
                total: 0,
            },//表格查询
            tableQuery: {
                debtNo: '',
                companyType: window.sessionStorage.getItem('companyType'),
                comId: window.sessionStorage.getItem('companyId'),
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
            // 获取用户填入报备ID
            reportId: ''
        }
    },
    methods: {
        SelectMore () {
            this.isNormal = !this.isNormal
        },
        HandleSelect (item) {
            this.SelectOption.forEach(v => {
                v.isSelect = false
            })
            item.isSelect = true
        },
        async IniVoucherApply (page){
            this.tablePage.pageNum = page || 1
            const queryData = Object.assign(this.tableQuery, this.tablePage)
            const formData = new FormData()
            for (const key in queryData) {
                formData.append(key, queryData[key])
            }
            const { data: result } = await this.$http({
                method: 'post',
                url: '/api/api/busPayDetailController/selectPayInfoListZc',
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            this.PaymentMsg = result.data.list
            this.PaymentMsg.map(v => {
                v.voucher = v.voucher.split(',')
            })
            this.tablePage.total = result.data.total
        }
    },
        created () {
            this.IniVoucherApply()
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
                .el-form {
                    display: flex;
                    align-items: center;
                    font-size: px2rem(4);
                    .el-form-item {
                        display: flex;
                        align-items: center;
                        span {
                            margin: 0 px2rem(2);
                            display: inline-block;
                            width: px2rem(20);
                            font-size: px2rem(3.2);
                        }
                    }
                }
            }
            &-button {
                margin-left: px2rem(4);
                width: px2rem(14);
                height: px2rem(7);
                line-height: px2rem(7);
                font-size: px2rem(3);
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
                    flex: 3;
                    text-align: center;
                    color:#fff;
                    border: 1px solid #fff;
                    display: inline-block;
                }
                :nth-child(1) {
                        flex: 1;
                }
                :nth-child(2), :nth-child(5), :nth-child(8){
                    flex: 4;
                }
                :nth-child(7) {
                    flex: 5
                }
            }

            &-tab {
                display: flex;
                flex-direction: column;
                font-size: px2rem(3);
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
                    :nth-child(2), :nth-child(5), :nth-child(8),:nth-child(9){
                        flex: 4;
                    }
                    :nth-child(7) {
                        flex: 5
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
                        flex:3;
                        text-align: center;
                        color:#272A39;
                        display: inline-block;
                        border: none;
                    }
                    :nth-child(1) {
                        flex: 1;
                    }
                    :nth-child(2), :nth-child(5), :nth-child(8),:nth-child(9){
                        flex: 4;
                    }
                    :nth-child(7) {
                        flex: 5
                    }
                }
            }
            img {
                    width: px2rem(12);
                    height: px2rem(8);
                    margin: 0 px2rem(1);
                }
        }
    }
}
</style>
