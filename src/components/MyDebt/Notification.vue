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
                <div class='promise-content-progress-map-finished'>
                    <span></span>
                    1.资产评估
                </div>
                <div class='promise-content-progress-map-finished'>
                    <span></span>
                    2.债权转让协议
                </div>
                <div class='promise-content-progress-map-highlight'>
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
            <div class='notification-content-crossing'></div>
            <div class='notification-content-main'>
                <div class='notification-content-main-title'>
                    债权转让通知书
                </div>
                <div><input type="text" :value='InitMsg.personName'> </div>
                <div>本公司/本人(债权人)享有的对你方(债务人)如下债权,现已转让给资产公司名字。自你方收到本通知函之日起,本公司/本人与你方债权偾务关系消灭,由你方向前述新债权人履行债务清偿义务。</div>
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
                        <span>{{InitMsg.personReason}}</span>
                        <span>{{InitMsg.amountThis}}</span>
                    </div>
                </div>
                <div class='notification-content-main-title'>特此通知！</div>
                <div class='notification-content-main-message'>债权人盖章: <button>上传电子章</button></div>
                <div class='notification-content-main-message'>债权人签字: <input type="text" v-model='SubmitData.obligorSign'></div>
                <div class='notification-content-main-message'>身份证/统一社会信用代码 <input type="text" v-model='SubmitData.cardId'></div>
                <div class='notification-content-main-message'><span>时间</span><input type="text" v-model='SubmitData.obligorDate'></div>
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
                propertId: '',
                noticeNo: '',
                obligorSeal: '111',
                cardId: '',
                obligorSign: '',
                obligorDate: ''
            }
        }
    },
    methods: {
        async InitData () {
            const relativePerId = window.sessionStorage.getItem('relativePerId')
            console.log(relativePerId)
            const formData = new FormData()
            formData.append('relativePerId', relativePerId)
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
        },
        async Submit () {
            this.SubmitData.propertId = window.sessionStorage.getItem('propertId')
            this.SubmitData.noticeNo = this.InitMsg.assignmentAgreementNo
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
            PropertFormData.append('propertId', window.sessionStorage.getItem('propertId'))
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
            this.$emit('onChangeFragment', 'SalesAgreement')
        }
    },
    created () {
        this.InitData()
    }
}

</script>
<style lang='scss' scoped>
@import '@css/style.scss';
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
                line-height: px2rem(14);
                font-size: px2rem(4);
                text-align: center;
                font-weight: 600;
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
            &-text {
                line-height: px2rem(7);
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
            &-message {
                margin: px2rem(2) 0;
                input {
                    width: px2rem(50);
                    margin-left: px2rem(3);
                    height: px2rem(6);
                    background-color: #fff;
                }
                button {
                    width: px2rem(30);
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
                        height: px2rem(12);
                        line-height: px2rem(6);
                        border: 1px solid #E8EAEC;
                        text-align: center;
                        font-weight: 600;
                        font-size: px2rem(3.5);
                        padding: 0 px2rem(2);
                    }
                }
                &-content {
                    display: flex;
                    justify-content: space-around;
                    background-color: #F2F6F9;
                    span {
                        display: inline-block;
                        width: px2rem(40);
                        height: px2rem(18);
                        line-height: px2rem(6);
                        border: 1px solid #E8EAEC;
                        text-align: center;
                        line-height: px2rem(18);
                        font-size: px2rem(3.5);
                        padding: 0 px2rem(2);
                    }
                }
            }
        }
    }
}
</style>
