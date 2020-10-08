<!--  -->
<template>
  <div class='report-info'>
      <div class='report-info-title'>
          <span class='report-info-title-go1'>我的审批</span>
          <span class='report-info-title-separator'> / </span>
          <span class='report-info-title-go2'>支付凭证</span>
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
            <div class='report-info-list-content-title'>
                <span>序号</span>
                <span>录入号</span>
                <span>缴费人</span>
                <span>合同人</span>
                <span>类型</span>
                <span>支付号</span>
                <span>金额</span>
                <span>图片</span>
                <span>审核状态</span>
                <span>操作</span>
            </div>
            <div class='report-info-list-content-tab'>
                <div class='report-info-list-content-tab-item' v-for='(item,index) in PaymentMsg' :key='index'>
                    <span>{{index+1}}</span>
                    <span>{{item.reportNo}}</span>
                    <span>{{item.payertName}}</span>
                    <span>{{item.contractName}}</span>
                    <span>{{item.payType === '1' ? '录入缴费' : item.payType === '3' ? '债权处理缴费' : item.payType === '4' ? '资产缴费' : '' }}</span>
                    <span>{{item.payNo}}</span>
                    <span>{{item.cost}}</span>
                    <span>
                        <img :src="ImgItem" v-for='(ImgItem,Imgindex) in item.voucher' :key='Imgindex' alt="">
                    </span>
                    <span>{{item.status === '0' ? '缴费信息未审核' : item.status === '1' ? '缴费信息审核未通过' : item.status === '2' ? '缴费审核通过' : '' }}</span>
                    <span>
                        <button @click='PaymentCheck(index, item)' v-show="item.status === '0' && roleId === '7994113414473990144'">缴费审核</button>
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
            // 分页器结构数据源
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
            roleId: window.sessionStorage.getItem('roleId'),
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
            VoucherSearchSrc: {
                pageNum: '1',
                pageSize: '40',
                debtNo: '',
                companyType: window.sessionStorage.getItem('companyType')
            }
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
        async IniVoucherApply () {
            const formData = new FormData()
            for (const key in this.VoucherSearchSrc) {
                formData.append(key, this.VoucherSearchSrc[key])
            }
            const { data: result } = await this.$http({
                method: 'post',
                url: '/api/api/busPayDetailController/selectPayInfoList',
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            this.PaymentMsg = result.data.list
            this.PaymentMsg.map(v => {
                v.voucher = v.voucher.split(',')
            })
            console.log(this.PaymentMsg)
        },
        CheckPayment (index) {
            if (this.PaymentMsg[index].stage === '1') {
                window.sessionStorage.setItem('payId', this.PaymentMsg[index].payId)
                window.sessionStorage.setItem('reportid', this.PaymentMsg[index].reportId)
                this.$emit('onChangeFragment', 'ReportVoucherApprove')
            } else {
                window.sessionStorage.setItem('payId', this.PaymentMsg[index].payId)
                window.sessionStorage.setItem('reportid', this.PaymentMsg[index].reportId)
                this.$emit('onChangeFragment', 'UnlockPaymentApprove')
            }
        },
        PaymentCheck (index, item) {
            this.$router.push({path: '/PaymentApprove', query: {reportId: item.reportId, propertId: item.propertId, payId: item.payId}})
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
                    flex: 3.5;
                    text-align: center;
                    color:#fff;
                    border: 1px solid #fff;
                    display: inline-block;
                }
                :nth-child(1) {
                    flex: 1;
                }
                :nth-child(2),:nth-child(6) {
                    flex: 4;
                }
                :nth-child(8) {
                    flex: 6;
                }
            }

            &-tab {
                display: flex;
                flex-direction: column;
                font-size: px2rem(2.5);
                div:nth-child(odd) {
                    display: flex;
                    height: px2rem(12);
                    line-height: px2rem(12);
                    span {
                        flex:3.5;
                        text-align: center;
                        color:#272A39;
                        display: inline-block;
                        border: none;
                    }
                    :nth-child(1) {
                        flex: 1;
                    }
                    :nth-child(8) {
                        flex: 6;
                        margin-top: px2rem(1);
                    }
                    :nth-child(2),:nth-child(6) {
                        flex: 4;
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
                div:nth-child(even) {
                    display: flex;
                    height: px2rem(12);
                    line-height: px2rem(12);
                    background-color: #E0E3F8;
                    span {
                        flex:3.5;
                        text-align: center;
                        color:#272A39;
                        display: inline-block;
                        border: none;
                    }
                    :nth-child(1) {
                        flex: 1;
                    }
                    :nth-child(8) {
                        flex: 6;
                        margin-top: px2rem(1);
                    }
                    :nth-child(2),:nth-child(6) {
                        flex: 4;
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
                img {
                    width: px2rem(12);
                    height: px2rem(8);
                    margin: 0 px2rem(1);
                }
            }
        }
    }
}
</style>
