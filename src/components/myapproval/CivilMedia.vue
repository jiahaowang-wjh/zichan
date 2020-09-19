<!--  -->
<template>
  <div class='civil-media'>
      <div class='civil-media-title'>
          <span class='civil-media-title-go1'>我的审批</span>
          <span class='civil-media-title-separator'> / </span>
          <span class='civil-media-title-go2'>调解信息</span>
      </div>
      <div class='civil-media-list'>
        <div class='civil-media-list-select'>
            <span @click='HandleSelect(item)' v-for='(item,index) in SelectOption' :key='index' :class="item.isSelect? 'active':'' ">{{item.SelectName}}</span>
        </div>
        <div class='civil-media-list-search'>
            <div class='civil-media-list-search-form'>
                <el-form ref="form">
                    <el-form-item>
                        <span>录入号：</span>
                        <el-input></el-input>
                    </el-form-item>
                    <el-form-item >
                        <span>录入编号:</span>
                        <el-input v-model="SearchData.debtNo"></el-input>
                    </el-form-item>
                    <el-form-item placeholder="审核状态">
                        <span>审核状态:</span>
                        <el-select v-model='SearchData.status'>
                            <el-option label="审核通过" value='1'></el-option>
                            <el-option label="审核驳回" value='2'></el-option>
                            <el-option label="审核已提交" value='3'></el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
            </div>
            <div class='civil-media-list-search-time-select'>
                <span>时间: </span>
                <el-date-picker align="left" type="date" placeholder="请选择开始日期" :picker-options="pickerOptions" v-model="SearchData.beginDate">
                </el-date-picker>
                <span class='civil-media-list-search-time-select-separator'>—</span>
                <el-date-picker align="left" type="date" placeholder="请选择结束日期" :picker-options="pickerOptions" v-model="SearchData.endDate">
                </el-date-picker>
            </div>
            <div class='civil-media-list-search-button'>搜索</div>
        </div>
        <div class='civil-media-list-content'>
            <!-- 正常显示模板 -->
            <template>
                <div class='civil-media-list-content-title'>
                    <span>序号</span>
                    <span>录入号</span>
                    <span>录入编号</span>
                    <span>债事人</span>
                    <span>审核状态</span>
                    <span>操作</span>
                </div>
                <div class='civil-media-list-content-tab'>
                    <div class='civil-media-list-content-tab-item' v-for='(item,index) in MediateMsg' :key='index'>
                        <span>{{index+1}}</span>
                        <span>{{item.reportId}}</span>
                        <span>{{item.civilno}}</span>
                        <span>{{item.debtName}}</span>
                        <span :class="item.status === '2' ? ('pass') : item.status === '1' ? 'unpass': ' '">{{item.status === '0' ? ('调解信息待审核') : item.status === '2' ? '调解信息审核通过' : '调解信息审核未通过'}}</span>
                        <span>
                            <button v-show="item.status === '0'" @click='CheckMediaMsg(index)'>审核</button>
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
            // 查询数据的数据源
            SearchData: {
                // 民事调解编号
                debtNo: '',
                pageSize: '10',
                pageNum: '1',
                status: '1',
                beginDate: '',
                endDate: ''
            },
            // 调解信息列表数据源
            MediateMsg: [],
            // 确定选用正常模板还是多选模板
            isNormal: false,
            TimeSelect: {
                TimeStart: '2020-02-30',
                TimeEnd: '2020-04-28'
            },
            // 查询数据源
            MediaSearchSrc: {
                pageNum: '1',
                pageSize: '10',
                debtNo: '',
                status: '',
                beginDate: '',
                endDate: ''
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
            }
        }
    },
    methods: {
        handleCurrentChange (e) {
        },
        SelectMore () {
            this.isNormal = !this.isNormal
        },
        HandleSelect (item) {
            this.SelectOption.forEach(v => {
                v.isSelect = false
            })
            item.isSelect = true
        },
        async InitCiviMedia () {
            const formData = new FormData()
            for (const key in this.MediaSearchSrc) {
                formData.append(key, this.MediaSearchSrc[key])
            }
            const { data: result } = await this.$http({
                method: 'post',
                url: '/api/api/busCivilController/selectBusList',
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            this.MediateMsg = result.data.list
            console.log(result.data.list)
        },
        CheckMediaMsg (index) {
            window.sessionStorage.setItem('relativePerId', this.MediateMsg[index].relativePerId)
            window.sessionStorage.setItem('civilId', this.MediateMsg[index].civilId)
            this.$emit('onChangeFragment', 'MediaApprove')
        }
    },
    created () {
        this.InitCiviMedia()
    }
}

</script>
<style lang='scss' scoped>
@import '@css/style.scss';
.civil-media {
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
            .el-select  {
                width: px2rem(42);
            }
            &-form {
                display: flex;
                margin-left: px2rem(1);
                .el-form {
                    display: flex;
                    align-items: center;
                    .el-form-item {
                        height: px2rem(10);
                        line-height: px2rem(10);
                        .el-input {
                            width: px2rem(40);
                        }
                        span {
                            font-size: px2rem(3);
                            margin: 0 px2rem(2);
                        }
                    }
                }
            }

            &-time-select {
                display: flex;
                align-items: center;
                margin-left: px2rem(2);
                span {
                    font-size: px2rem(3);
                    margin: 0 px2rem(1);
                }
            }
            &-button {
                margin-left: px2rem(2);
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
                    flex:2.5;
                    text-align: center;
                    color:#fff;
                    border: 0.5px solid #fff;
                    display: inline-block;
                }
                :nth-child(1) {
                    flex: 1.2;
                }
                :nth-child(2) {
                    flex: 5;
                }
                :nth-child(3) {
                    flex: 10
                }
                :nth-child(4) {
                    flex: 4;
                }
                :nth-child(5) {
                    flex: 8;
                }
                :last-child {
                    flex: 4;
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
                    .pass {
                        color: #17C67A !important
                    }
                    .unpass {
                        color: #FF0000 !important
                    }
                    span {
                        flex:3;
                        text-align: center;
                        color:#272A39;
                        border: 0.5px solid #fff;
                        display: inline-block;
                        border: none;
                    }
                    :nth-child(1) {
                        flex: 1.2;
                    }
                    :nth-child(2) {
                        flex: 5;
                    }
                    :nth-child(3) {
                        flex: 10
                    }
                    :nth-child(4) {
                        flex: 4;
                    }
                    :nth-child(5) {
                        flex: 8;
                    }
                    :nth-child(6) {
                        flex: 4;
                        button {
                            flex:1 ;
                            font-size: px2rem(3);
                            border: none;
                            border-radius: px2rem(1);
                            color: #fff;
                            padding: px2rem(0.8) px2rem(3)
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
                    font-size: px2rem(3);
                    background-color: #E0E3F8;
                    .pass {
                        color: #17C67A !important
                    }
                    .unpass {
                        color: #FF0000 !important
                    }
                    span {
                        height: px2rem(10);
                        line-height: px2rem(10);
                        flex:2.5;
                        text-align: center;
                        color:#272A39;
                        border: 0.5px solid #fff;
                        display: inline-block;
                        border:none;
                    }
                    :nth-child(1) {
                        flex: 1.2;
                    }
                    :nth-child(2) {
                        flex: 5;
                    }
                    :nth-child(3) {
                        flex: 10
                    }
                    :nth-child(4) {
                        flex: 4;
                    }
                    :nth-child(5) {
                        flex: 8;
                    }
                    :last-child {
                        flex: 4;
                        button {
                            flex:1 ;
                            font-size: px2rem(3);
                            border: none;
                            border-radius: px2rem(1);
                            color: #fff;
                            padding: px2rem(0.8) px2rem(3)
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
