<!--  -->
<template>
    <div class='promise'>
        <div class='promise-title'>
            <span class='promise-title-go1'>我的审批</span>
            <span class='promise-title-separator'> / </span>
            <span class='promise-title-go2'>和解协议 </span>
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
                <div class='promise-content-progress-map-finished'>
                    <span></span>
                    7.催款函
                </div>
                <div class='promise-content-progress-map-highlight'>
                    <span></span>
                    8.和解协议
                </div>
            </div>
            <!-- 背景横线 -->
            <div class='promise-content-crossing'></div>
            <div class='promise-content-main'>
                <div class='promise-content-main-title'>
                    和解协议
                </div>
                <div class='promise-content-main-text'>
                    甲方：深圳金瑞盈通资产管理有限公司<br>
                </div>
                <div style='margin: 4px 0' class='promise-content-main-form-top'>
                    <span style='width: 100px'>
                        乙方(委托方):
                    </span>
                    <input type="text" :value='InitMsg.personName'>
                </div>
                <div class='promise-content-main-text'>
                    鉴于：<br>
                    原债权人 <input type="text" :value='InitMsg.debtName'>与甲方签订《债权转让协议》，将原债权人<input type="text" :value='InitMsg.debtName'>享有的债权(债权金额为人民币<input type="text" :value='InitMsg.amountThis'>元）及全部相关权利和权益转让给甲方享有。甲乙双方一致确认上述债权转让,经友好协商就乙方向甲方偿还债务事项达成如下约定,以资共同遵守:<br>
                    1.乙方应向甲方偿付的债务总金额为人民币 <input type="text" :value='InitMsg.amountThis'><br>
                    2.乙方按照如下第
                    <el-select v-model="SubmitData.partybMode" placeholder="请选择">
                        <el-option label="第1种" :value="'1'"> </el-option>
                        <el-option label="第2种" :value="'2'"> </el-option>
                    </el-select>
                    项方式清偿债务:<br>
                    (1)一次性现金还款:自双方签署本和解协议之日起【 30  】日内,乙方向甲方一次性支付现金人民币<input type="text" v-model='SubmitData.cash'>元。<br>
                    (2)分期现金还款:采用分<input type="text" v-model='SubmitData.StagingNumber'>期向甲方支付,每期支付人民币<input type="text" v-model='SubmitData.money'>元,每期还款日为每月<input type="text" v-model='SubmitData.days'>日。<br>
                    (3)与转让债权同等价资产抵押<br>
                    (4)与转让债权同等价值商品<br>
                    (5)从业绩佣金处扣除同等债权金额（或带给公司债权部分20倍的业绩）<br>
                    3.甲方指定如下银行账户为收款账户。<br>
                    户名：深圳金瑞盈通资产管理有限公司<br>
                    开户行：中国农业银行深圳横岗新区支行<br>
                    账号：41027000040036419<br>
                    4.如乙方未按照本协议约定还款,产生逾期的,自逾期之日起,按照应付未付金额的每日万分之五向甲方支付违约金。<br>
                    5.甲乙双方如发生争议,应当友好协商解决,协商不成的双方同意向甲方住所地人民法院提起诉讼。<br>
                    6.本协议自双方签章之日起生效。本协议壹式叁份,甲方留存贰份,乙方留存壹份,具有同等法律效力。<br>
                    7.其他约定事项:无<br>
                </div>
                <div class='promise-content-main-container'>
                    <!-- 左侧签字盖章 -->
                    <div  class='promise-content-main-container-item'>
                        <div>
                            <span>法定代表履权代表(签字): </span>
                            <input type="text" v-model='SubmitData.partyaSubrogation'>
                        </div>
                        <div>
                            <span>甲方(盖章): </span>
                            <button>上传电子章</button>
                        </div>
                        <div>
                            <span>日期: </span>
                            <input type="text" v-model='SubmitData.partyaDate'>
                        </div>
                    </div>
                    <div class='promise-content-main-container-item'>
                    <!-- 右侧签字盖章 -->
                        <div>
                            <span>法定代表履权代表(签字)</span>
                            <input type="text" v-model='SubmitData.partybSubrogation'>
                        </div>
                        <div>
                            <span>乙方(盖章): </span>
                            <button>上传电子章</button>
                        </div>
                        <div>
                            <span>日期: </span>
                            <input type="text" v-model='SubmitData.partybDate'>
                        </div>
                        <div>
                            <span>合同签约地:广东深圳</span>
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
            InitMsg: {},
            SubmitData: {
                // 全款
                propertId: '',
                partybMode: '',
                cash: '',
                partyaSubrogation: '',
                partyaDate: '',
                partyaSeal: '111',
                partybSeal: '222',
                partybSubrogation: '',
                partybDate: '',
                // 分期数据
                StagingNumber: '',
                money: '',
                days: ''
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
                url: '/api/api/busCompromiseAgreementController/initialize',
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            this.InitMsg = result.data
        },
        async Submit () {
            this.SubmitData.propertId = window.sessionStorage.getItem('propertId')
            const formData = new FormData()
            for (const key in this.SubmitData) {
                formData.append(key, this.SubmitData[key])
            }
            let FinalResult = {}
            if (this.SubmitData.partybMode === '1') {
                const { data: AllResult } = await this.$http({
                    method: 'post',
                    url: '/api/api/busCompromiseAgreementController/insertSelectiveManner1',
                    data: formData,
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                FinalResult = AllResult
            } else {
                const { data: PartResult } = await this.$http({
                    method: 'post',
                    url: '/api/api/busCompromiseAgreementController/insertSelectiveManner2',
                    data: formData,
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                FinalResult = PartResult
            }
            if (FinalResult.resultCode !== '200') return this.$message.error(FinalResult.resultMessage)
            // 更新资产信息自身阶段
            const PropertFormData = new FormData()
            PropertFormData.append('propertId', window.sessionStorage.getItem('propertId'))
            PropertFormData.append('stage', '8')
            const { data: PropertStatusResult } = await this.$http({
                method: 'post',
                url: '/api/api/busPropertController/updateStage',
                data: PropertFormData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            if (PropertStatusResult.resultCode !== '200') return this.$message.error('更改资产阶段失败, 请重试')

            const StatusformData = new FormData()
            StatusformData.append('propertId', window.sessionStorage.getItem('propertId'))
            StatusformData.append('status', '4')
            const { data: StatusResult } = await this.$http({
                method: 'post',
                url: '/api/api/busPropertController/updateStatus',
                data: StatusformData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            if (StatusResult.resultCode !== '200') return this.$message.error('修改资产状态失败, 请重试')
            this.$emit('onChangeFragment', 'MyDebt')
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
                height: px2rem(4.2);
                width: px2rem(16);
            }
            &-text {
                line-height: px2rem(6);
            }
            &-last-text {
                margin: px2rem(8)
            }
            &-button {
                text-align: center;
                margin: px2rem(8) 0;
                button {
                    width: px2rem(50);
                    height: px2rem(8);
                    border: none;
                    background-color: #616789;
                    color: #fff;
                    border-radius: px2rem(1);
                }
            }
            span {
                display: inline-block;
            }
            &-form-top {
                margin: px2rem(6) 0!important;
            }
            &-form-bottom {
                margin-bottom: px2rem(3)!important;
            }
            &-container {
                display: flex;
                margin: px2rem(10) 0;
                &-item {
                    width: px2rem(140);
                    div {
                        margin: px2rem(2) 0;
                    }
                    input {
                        width: px2rem(50);
                        margin-left: px2rem(3);
                        height: px2rem(5);
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

            &-list {
                font-size: px2rem(3.5);
                margin-top: px2rem(15);
                &-title {
                    display: flex;
                    span {
                        height: px2rem(16);
                        width: px2rem(20);
                        border: 1px solid #707070;
                        text-align: center;
                        line-height: px2rem(14);
                        box-sizing: border-box;
                    }
                }
                &-item {
                    display: flex;
                    span {
                        box-sizing: border-box;
                        height: px2rem(10);
                        width: px2rem(20);
                        border: 1px solid #707070;
                        text-align: center;
                        line-height: px2rem(10);
                    }
                }

                &-last {
                    width: px2rem(160);
                    border: 1px solid #707070;
                    height: px2remm(10);
                    line-height: px2rem(10);
                    box-sizing: border-box;
                    text-align: right;
                    padding-right: px2rem(25)
                }
            }
        }
    }
}
</style>
