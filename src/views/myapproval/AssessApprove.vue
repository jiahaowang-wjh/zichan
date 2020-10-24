<!--  -->
<template>
    <div class='assess'>
        <div class='assess-title'>
            <span class='assess-title-go1'>我的审批</span>
            <span class='assess-title-separator'> / </span>
            <span class='assess-title-go2'>资产评估</span>
        </div>
        <div class='assess-content'>
            <div class='assess-content-progress-map'>
                <div class='assess-content-progress-map-highlight'>
                    <span></span>
                    1.资产评估
                </div>
                <div>
                    <span></span>
                    2.债权转让协议 
                </div>
                <div>
                    <span></span>
                    3.债权转让确认书
                </div>
                <div>
                    <span></span>
                    4.债权确认书
                </div>
                <div>
                    <span></span>
                    5.委托寄卖合同
                </div>
                <div>
                    <span></span>
                    6.委托代理销售合同
                </div>
                <div>
                    <span></span>
                    7.催款函
                </div>
                <div>
                    <span></span>
                    8.和解协议
                </div>
            </div>
            <!-- 背景横线 -->
            <div class='assess-content-crossing'></div>
            <div class='assess-content-main'>
                <div class='assess-content-main-title'>
                    资产评估
                </div>
                <div class='assess-content-main-row'>
                    <span>债权人姓名</span>
                    <span>
                        <input type="text" :value='assessData.debtName' :disabled='true'>
                    </span>
                    <span>债权人身份证号码</span>
                    <span>
                        <input type="text" :value='assessData.debtidCard' :disabled='true'>
                    </span>
                    <span>债权人电话</span>
                    <span>
                        <input type="text" :value='assessData.debtPhnoe' :disabled='true'>
                    </span>
                </div>
                <div class='assess-content-main-row'>
                    <span>债务人姓名</span>
                    <span>
                        <input type="text" :value='assessData.personName' :disabled='true'>
                    </span>
                    <span>债务人身份证号码</span>
                    <span>
                        <input type="text" :value='assessData.personIdCard' :disabled='true'>
                    </span>
                    <span>债务人电话</span>
                    <span>
                        <input type="text" :value='assessData.personPhnoe' :disabled='true'>
                    </span>
                </div>
                <div class='assess-content-main-row2'>
                    <span class='assess-content-main-row2-title'>本次申请置换债权金额</span>
                    <span class='assess-content-main-row2-form-money'>
                        <input type="text" :value='assessData.amountThis' :disabled='true'>
                    </span>
                </div>
                <div class='assess-content-main-row2-update'>
                    <span class='assess-content-main-row2-update-title'>本次置换资产凭证</span>
                    <div class='assess-content-main-row2-update-imglist'>
                        <img :src="item" v-for='(item,index) in AssessMsg.credentials' :key='index' alt="" @click="openImgToLink(item)">
                    </div>
                </div>
                <div class='assess-content-main-row2'>
                    <span class='assess-content-main-row2-title'>其他情况说明</span>
                    <span class='assess-content-main-row2-form'>
                        <input type="text" v-model='AssessMsg.card' :disabled='true'>
                    </span>
                </div>
                <div class='assess-content-main-row2'>
                    <span class='assess-content-main-row2-title'>战略合作公司负责人</span>
                    <span class='assess-content-main-row2-form'>
                        <span class='assess-content-main-row2-form'>
                            <input type="text" v-model='AssessMsg.companyManag' :disabled='true'>
                        </span>
                    </span>
                </div>
            </div>
        </div>
        <div class='assess-check'>
            <div class='assess-check-reason'>
                <span>审批原因</span>
                <textarea maxlength='141' v-model='CommitApproveData.checkReason' ></textarea>
            </div>
            <div class='assess-check-button'>
                <button @click.once='RejectCheck'>审核驳回</button>
                <button @click.once='PassCheck'>审核通过</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            assessData: {},
            CommitApproveData: {
                propertId: '',
                status: '',
                checkReason: ''
            },
            AssessMsg: {}
        }
    },
    methods: {
        // 提交信息
        RejectCheck () {
            if (!this.CommitApproveData.checkReason) return this.$message.error('请先填写审核原因')
            this.CommitApproveData.status = '2'
            this.UpdateCheckStatus()
            this.$router.push({path: '/PropertyAssessment'})
        },
        PassCheck () {
            this.CommitApproveData.status = '3'
            this.UpdateCheckStatus()
            this.$router.push({path: '/PropertyAssessment'})
        },
        // 调用报备状态更改接口
        async UpdateCheckStatus () {
            const formData = new FormData()
            this.CommitApproveData.propertId = this.$route.query.propertId
            const CommitApproveData = this.CommitApproveData
            for (const key in CommitApproveData) {
                formData.append(key, CommitApproveData[key])
            }
            const { data: result } = await this.$http({
                method: 'post',
                url: '/api/api/busPropertController/updateStatus',
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            console.log(result)
            if (result.data !== '0' && result.resultCode === '200') {
                this.$message.success(result.resultMessage)
            } else {
                this.$message.error('操作失败, 请重试')
            }
        },
        // 获取相对人Id及通过相对人获取资产评估页面初始信息
        // 通过相对人ID获取评估页面信息
        async GetRelativeId () {
            const formData = new FormData()
            formData.append('relativePerId', this.$route.query.relativePerId)
            formData.append('propertId', this.$route.query.propertId)
            const { data: result } = await this.$http({
                method: 'post',
                url: '/api/api/busAssessmentController/initialize',
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            this.assessData = result.data
            console.log(this.assessData)
            // 通过资产ID查询评估ID
            const AssetInformationFormData = new FormData()
            AssetInformationFormData.append('propertId', this.$route.query.propertId)
            const { data: AssetInformationResult } = await this.$http({
                method: 'post',
                url: '/api/api/busAssessmentController/selectByPropertId',
                data: AssetInformationFormData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            this.AssessMsg = AssetInformationResult.data
            console.log(this.AssessMsg.credentials.split(','))
            this.AssessMsg.credentials = this.AssessMsg.credentials.split(',')
        }
    },
    created () {
        this.GetRelativeId()
    },
    computed: {
    }
}

</script>
<style lang='scss' scoped>
@import '@css/style.scss';
.assess {
    display: flex;
    flex-direction: column;
    background-color: #E9F0F5;
    height: 100%;
    width: 100%;
    input:disabled {
        background-color: #F2F6F9;
        color: #272727;
        text-align: left;
    }
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
            width: 98%;
            margin: 0 auto;
            font-size: px2rem(3.2);
            input {
                padding-left: px2rem(2);
                width: 95%;
                height: px2rem(6);
                border: 1px solid #E8EAEC;
            }
            &-title {
                height: px2rem(14);
                line-height: px2rem(14);
                font-size: px2rem(4);
                text-align: center;
                font-weight: 600;
            }
            &-row {
                display: flex;
                align-items: center;
                line-height: px2rem(12);
                span {
                    flex: 1;
                    display: inline-block;
                    border-top: 1px solid #DFE0E7;
                    border-bottom: 1px solid #DFE0E7;
                    padding-left: px2rem(4);
                    input {
                        border: none;
                    }
                }
                :nth-child(odd) {
                    background-color: #616789;
                    text-align: center;
                    color: #ffffff;
                }
                :nth-child(even) {
                    background-color: #F2F6F9;

                    input {
                        background-color: #F2F6F9;
                        color: #272727;
                        text-align: left;
                    }
                }
            }
            &-row2 {
                display: flex;
                align-items: center;
                line-height: px2rem(12);
                height: px2rem(12);
                span {
                    display: inline-block;
                    border: 1px solid #DFE0E7;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                &-title {
                    flex: 1;
                    background-color: #616789;
                    text-align: left;
                    color: #ffffff;
                }
                &-form {
                    flex: 5;
                    height: 100%;
                }
                &-form-money {
                    background-color: #F2F6F9;
                    flex: 5;
                    width: 95%;
                    height: 100%;
                    input {
                        background-color: #F2F6F9;
                        border: none;
                        padding: 0;
                        width: 96%;
                    }
                }
                &-update {
                    display: flex;
                    height: 90px;
                    span {
                        display: inline-block;
                        border: 1px solid #DFE0E7;
                        text-align: center;
                        flex: 1;
                        background-color: #616789;
                        color: #ffffff;
                        line-height: 90px;
                    }
                    &-imglist {
                        flex: 5;
                        display: flex;
                        align-items: center;
                        img {
                            width: 110px;
                            height: 80px;
                            margin: 0 10px;
                        }
                        border: 1px solid #E8EAEC;
                    }
                }
            }

            &-submit {
                display: flex;
                justify-content: center;
                margin-top: px2rem(10);
                button {
                    width: px2rem(40);
                    height: px2rem(7);
                    background-color: #616789;
                    border: none;
                    color: #ffffff;
                    font-size: px2rem(3.5);
                    border-radius: px2rem(1);
                }
            }
        }
    }
    &-check {
        align-items: center;
        height: px2rem(60);
        background-color: #fff;
        width: px2rem(160);
        margin: px2rem(6) auto;
        border-radius: px2rem(2);
        &-reason {
            margin: px2rem(10) 0;
            display: flex;
            justify-content: center;
            align-items: center;
            span {
                font-size: px2rem(5);
                margin-right: px2rem(4);
            }
            textarea {
                width: px2rem(100);
                height: px2rem(20);
                border-radius: px2rem(1);
                font-size: px2rem(4);
                resize: none;
                border: 1px solid #E0E3F8;
                line-height: px2rem(6);
            }
        }
        &-button {
            display: flex;
            justify-content: center;
            align-items: center;
            button {
                margin: 0 px2rem(4);
                padding: px2rem(1.4) px2rem(4);
                height: px2rem(10);
                font-size: px2rem(3.2);
                border-radius: px2rem(1);
                color: #fff;
                border: none;
                font-size: px2rem(4);
            }
            :nth-child(1) {
                background-color: #616789;
            }
            :nth-child(2) {
                background-color: #FC7F89;
            }
        }
    }
}
</style>
