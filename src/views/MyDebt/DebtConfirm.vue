<!--  -->
<template>
    <div class='promise'>
        <div class='promise-title'>
            <span class='promise-title-go1'>我的审批</span>
            <span class='promise-title-separator'> / </span>
            <span class='promise-title-go2'>债权确认书</span>
        </div>
        <div class='promise-content'>
            <div class='promise-content-progress-map'>
                <div class='promise-content-progress-map-finished'>
                    <span></span>
                    1.资产评估
                </div>
                <div class='promise-content-progress-map-finished'>
                    <span></span>
                    2.债权转让协议
                </div>
                <div class='promise-content-progress-map-finished'>
                    <span></span>
                    3.债权转让确认书
                </div>
                <div class='promise-content-progress-map-highlight'>
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
            <div class='promise-content-crossing'></div>
            <div class='promise-content-main'>
                <div class='promise-content-main-title'>
                    债权确认书
                </div>
                <div class='promise-content-main-text'>
                    致：<input type="text" :value='InitMsg.personName'><br>
                    根据<input type="text" :value='InitMsg.debtName'>（简称“债权转让方”）与<input type="text" value='深圳市金隆盛投资有限公司' style='width: 200px'>（简称“债权受让方”）签订的《债权转让协议》（编号:<input type="text" :value='InitMsg.assignmentAgreementNo'>,债权转让方已依法将《借条》项下对债务人<input type="text" :value='InitMsg.personName'>所有权利（以下简称“标的债权”）转让给<input type="text" value='深圳市金隆盛投资有限公司'>包括但不限于本金、利息、罚息、复利、违约金及费用等。截至<input type="text" :value='InitMsg.createTime'>（债权转让基准日）,标的债权金额为人民币元,其中包括本金合计<input type="text" :value='InitMsg.servicePrincipal'>元,利息合计<input type="text" :value='InitMsg.serviceInterest'>元现债权受让方特向您（贵单位）<input type="text" :value='InitMsg.debtName'>名发函确认,请您(贵单位)确认上述标的债权以及担保是否真实、有效,债权金额是否准确,若该债权真实、有效,债权金额准确,请在下方债务人处签字或盖章确认。
                </div>
                <div class='promise-content-main-last-text'>
                </div>
                <div class='promise-content-main-container'>
                    <!-- 左侧签字盖章 -->
                    <div  class='promise-content-main-container-item'>
                        <div>
                            <span>债权受让方：</span>
                            <input type="text" v-model='SubmitData.transferee'>
                        </div>
                        <div>
                            <span>公司名字 ：</span>
                            <input type="text" v-model='SubmitData.companyName'>
                        </div>
                        <div>
                            <span>联系方式：</span>
                            <input type="text" v-model='SubmitData.tel'>
                        </div>
                        <div>
                            <span>日期：</span>
                            <input type="text" v-model='SubmitData.transfereeDate'>
                        </div>
                    </div>
                    <!-- 右侧签字盖章 -->
                    <div  class='promise-content-main-container-item'>
                        <div>
                            <span>债务人盖章：</span>
                            <input type="text" v-model='SubmitData.obligor'>
                        </div>
                        <div>
                            <span>债务人签字：</span>
                            <input type="text" v-model='SubmitData.obligorSign'>
                        </div>
                        <div>
                            <span>日期：</span>
                            <input type="text" v-model='SubmitData.obligorDate'>
                        </div>
                    </div>
                </div>
                <div class='promise-content-main-button'>
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
                propertId: '',
                confirmNo: '',
                transferee: '',
                companyName: '',
                tel: '',
                transfereeDate: '',
                obligorSeal: '11122',
                obligorSign: '',
                obligorDate: ''
            },
            InitMsg: { }
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
                url: '/api/api/busConfirmController/initialize',
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            console.log(result)
            this.InitMsg = result.data
        },
        async Submit () {
            this.SubmitData.propertId = window.sessionStorage.getItem('propertId')
            this.SubmitData.confirmNo = this.InitMsg.assignmentAgreementNo
            const formData = new FormData()
            for (const key in this.SubmitData) {
                formData.append(key, this.SubmitData[key])
            }
            const { data: result } = await this.$http({
                method: 'post',
                url: '/api/api/busConfirmController/insertSelective',
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            console.log(result)
            if (result.resultCode !== '200') return this.$message.error(result.resultMessage)
            // 更新资产信息自身阶段
            const PropertFormData = new FormData()
            PropertFormData.append('propertId', window.sessionStorage.getItem('propertId'))
            PropertFormData.append('stage', '4')
            const { data: PropertStatusResult } = await this.$http({
                method: 'post',
                url: '/api/api/busPropertController/updateStage',
                data: PropertFormData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            if (PropertStatusResult.resultCode !== '200') return this.$message.error(PropertStatusResult.resultMessage)
            this.$emit('onChangeFragment', 'Notification')
        }
    },
    created () {
        this.InitData()
    }
}

</script>
<style lang='scss' scoped>
@import '@css/style.scss';
.promise {
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
            font-size: px2rem(3);
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
            &-last-text {
                margin: px2rem(8);
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
            &-container {
                display: flex;

                &-item {
                    width: px2rem(120);
                    div {
                        margin: px2rem(2) 0;
                    }
                    input {
                        width: px2rem(50);
                        margin-left: px2rem(3);
                        height: px2rem(6);
                        background-color: #fff;
                    }
                    button {
                        padding: px2rem(1) px2rem(2);
                        font-size: px2rem(3);
                        border: none;
                        background-color: #616789;
                        margin-left: px2rem(3);
                        color: #fff;
                        border-radius: px2rem(1);
                    }
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
            }
            &-space {
                height: px2rem(24)
            }
        }
    }
}
</style>
