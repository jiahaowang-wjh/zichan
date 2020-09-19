<!--  -->
<template>
    <div class='collection-letters'>
        <div class='collection-letters-title'>
            <span class='collection-letters-title-go1'>我的审批</span>
            <span class='collection-letters-title-separator'> / </span>
            <span class='collection-letters-title-go2'>催款函</span>
        </div>
        <div class='collection-letters-content'>
            <div class='collection-letters-content-progress-map'>
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
                <div class='promise-content-progress-map-finished'>
                    <span></span>
                    4.债权确认书
                </div>
                <div class='promise-content-progress-map-finished'>
                    <span></span>
                    5.债权转让通知书
                </div>
                <div class='promise-content-progress-map-finished'>
                    <span></span>
                    6.委托代理销售合同
                </div>
                <div class='promise-content-progress-map-highlight'>
                    <span></span>
                    7.催款函
                </div>
                <div>
                    <span></span>
                    8.和解协议
                </div>
            </div>
            <!-- 背景横线 -->
            <div class='collection-letters-content-crossing'></div>
            <div class='collection-letters-content-main'>
                <div class='collection-letters-content-main-title'>
                    催款函
                </div>
                <div class='collection-letters-content-main-text'>
                    致: <input type="text" :value='InitMsg.personName'><br>
                    根据(<input type="text" :value='InitMsg.debtName'>）（简称“债权转让方”)与本公司(简称“债权受让方”)签订的《债权转让协议》(编号:<input type="text" :value='InitMsg.assignmentAgreementNo' >）,债权转让方已依法将《借款合同》项下对贵单位(您)所有权利(以下简称“标的债权”)转让给本公司,包括但不限于本金、利息、罚息、复利、违约金及费用等。截止本催款函发出之日,本公司依法对贵单位(您)享有到期债权共计人民币<input type="text" :value='InitMsg.amountThis'>元（大写: <input type="text" :value='InitMsg.moneyMax'>整），但至今贵单位(您)仍未支付。请贵单位(您)自收到本函之日起3日内将上述逾期未付的款项汇付至本公司指定账户:
                </div>
                <div class='collection-letters-content-main-message'>
                    账户名称：深圳市金隆盛投资管理有限公司<br>
                    开户银行：中国银行股份有限公司深圳南油支行<br>
                    账号：745868704479<br>
                </div>
                <div class='collection-letters-content-main-last-text'>
                    请贵单位(您)按照上述日期及时付款。否则,我司将按照协议约定计算违约金及款项逾期利息,并将采取法律手段解决,届时可能造成贵单位(您)不良影响并将有损贵单位(您)形象。<br>
                    特此函告!<br>
                </div>
                <div class='collection-letters-content-main-container'>
                    <span>注:本函一式两份,双方各执一份,具备同等效力</span>
                    <span>
                        深圳金瑞盈通资产管理有限公司
                        <button>上传电子章</button>
                    </span>
                </div>
                <div class='collection-letters-content-main-list'>
                    <div>
                        甲方确认送达地址：<input type="text" v-model='SubmitData.partyaAddr'>
                    </div>
                    <div>
                        甲方确认送达联系人：<input type="text" v-model='SubmitData.partyaPerson'>
                    </div>
                    <div>
                        甲方确认送达联系电话：<input type="text" v-model='SubmitData.partyaTel'>
                    </div>
                </div>
                <div class='collection-letters-content-main-list'>
                    <div>
                        乙方确认送达地址：<input type="text" v-model='SubmitData.partybAddr'>
                    </div>
                    <div>
                        乙方确认送达联系人：<input type="text" v-model='SubmitData.partybPerson'>
                    </div>
                    <div>
                        乙方确认送达联系电话：<input type="text" v-model='SubmitData.partybTel'>
                    </div>
                </div>
                <div class='collection-letters-content-main-button'>
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
                partyaAddr: '',
                partyaPerson: '',
                partyaTel: '',
                partybAddr: '',
                partyaTime: '',
                partybPerson: '',
                partybTel: ''
            }
        }
    },
    methods: {
        async InitData () {
            const relativePerId = window.sessionStorage.getItem('relativePerId')
            const formData = new FormData()
            formData.append('relativePerId', relativePerId)
            const { data: result } = await this.$http({
                method: 'post',
                url: '/api/api/busCollectionLetterController/initialize',
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
            const formData = new FormData()
            for (const key in this.SubmitData) {
                formData.append(key, this.SubmitData[key])
            }
            const { data: result } = await this.$http({
                method: 'post',
                url: '/api/api/busCollectionLetterController/insertSelective',
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            if (result.resultCode !== '200') return this.$message.error(result.resultMessage)
            // 更新资产信息自身阶段
            const PropertFormData = new FormData()
            PropertFormData.append('propertId', window.sessionStorage.getItem('propertId'))
            PropertFormData.append('stage', '7')
            const { data: PropertStatusResult } = await this.$http({
                method: 'post',
                url: '/api/api/busPropertController/updateStage',
                data: PropertFormData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            if (PropertStatusResult.resultCode !== '200') return this.$message.error('更改资产阶段失败, 请重试')
            this.$emit('onChangeFragment', 'Compromise')
        }
    },
    created () {
        this.InitData()
    }
}

</script>
<style lang='scss' scoped>
@import '@css/style.scss';
.collection-letters {
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
                line-height: px2rem(9);
            }
            &-button {
                text-align: center;
                margin: px2rem(10) 0;
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
                margin: px2rem(6)  0;
                line-height: px2rem(7);
            }
            &-container {
                display: flex;
                justify-content: space-between;
                align-items: center;
                button {
                    background-color: #616789;
                    color: #fff;
                    padding: px2rem(1) px2rem(2);
                    border: none;
                    border-radius: px2rem(1);
                }
            }
            &-last-text {
                margin: px2rem(10) 0;
            }
            &-list {
                display: flex;
                line-height: px2rem(10);
                div {
                    flex: 1;
                    input {
                        width: px2rem(50);
                    }
                }
            }
        }
    }
}
</style>
