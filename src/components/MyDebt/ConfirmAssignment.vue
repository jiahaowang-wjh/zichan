<!--  -->
<template>
    <div class='promise'>
        <div class='promise-title'>
            <span class='promise-title-go1'>我的审批</span>
            <span class='promise-title-separator'> / </span>
            <span class='promise-title-go2'>债权转让确认书</span>
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
            <div class='promise-content-crossing'></div>
            <div class='promise-content-main'>
                <div class='promise-content-main-title'>
                    债权转让确认书
                </div>
                <div class='promise-content-main-text'>
                    根据 <input type="text" :value='InitMsg.debtName'>  与 资产公司 签订的《债权转让协议》（编号：<input type="text" style='width: 220px' :value='InitMsg.assignmentAgreementNo'>) <br>
                    (1),现对该协议项下债权转让作出如下确认:<br>
                    一、原债权人<input type="text" :value='InitMsg.debtName'>依法享有本确认书附表列明的债权债务合同项下所有权利(以下简称“标的债权”),包括但不限于本金、利息、罚息、复利、违约金及费用等截至<input type="text" :value='InitMsg.thisTime'>(债杈转让基准日),标的债权金额为人民币<input type="text" :value='InitMsg.amountThis'>元。该标的债权已由原债权人转归
                    <span>深圳金隆盛投资管理有限公司</span>享有。<br>
                    二、原债权人<input type="text" :value='InitMsg.debtName'>、债务人<input type="text" :value='InitMsg.personName'>、担保人均确认《债权转让协议》（编号:<input type="text" style='width: 220px' :value='InitMsg.assignmentAgreementNo'>）生效后,原债权人<input type="text" :value='InitMsg.debtName'>在本确认书附表列明的债权债务合同及担保合同项下的所有权利转归 资产公司 享有, 资产公司 承继该等合同项下的所有权利,债务人、担保人继续向  资产公司  履行该等合同约定的所有义务。<br>
                    特此确认。<br>
                </div>
                <div class='promise-content-main-last-text'>
                </div>
                <div class='promise-content-main-container'>
                    <!-- 左侧签字盖章 -->
                    <div  class='promise-content-main-container-item'>
                        <div>
                            <span>债权人签字</span>
                            <input type="text">
                        </div>
                        <div>
                            <span>债权人盖章捺印</span>
                            <button>上传电子章</button>
                        </div>
                        <div>
                            <span>身份证/统一社会信用代码</span>
                            <input type="text" v-model='SubmitData.noCode'>
                        </div>
                        <div>
                            <span>签约日期</span>
                            <input type="text" v-model='SubmitData.signDate'>
                        </div>
                    </div>
                    <!-- 右侧签字盖章 -->
                    <div  class='promise-content-main-container-item'>
                        <div>
                            <span>债务人签字</span>
                            <input type="text" v-model='SubmitData.obligor'>
                        </div>
                        <div>
                            <span>债务人盖章捺印</span>
                            <button>上传电子章</button>
                        </div>
                        <div>
                            <span>身份证/统一社会信用代码</span>
                            <input type="text" v-model='SubmitData.obligorIdcard'>
                        </div>
                        <div>
                            <span>签约日期</span>
                            <input type="text" v-model='SubmitData.obligorDate'>
                        </div>
                    </div>
                </div>
                <div class='promise-content-main-message'>担保人: <input type="text" :value='InitMsg.authName'></div>
                <div class='promise-content-main-message'>资产公司名称: <input type="text" style='width: 220px' v-model='SubmitData.assetsCompanyName'></div>
                <div class='promise-content-main-space'></div>
                <div class='promise-content-main-message'>身份证/统一社会信用代码 <input type="text"></div>
                <div class='promise-content-main-message'>签约日期: <input type="text"></div>
                <div class='promise-content-main-message'>法定代表人签字: <input type="text" v-model='SubmitData.legalRepresen'></div>
                <div class='promise-content-main-message'><span>签约日期</span><input type="text" v-model='SubmitData.legalRepresenDate'></div>
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
                creditorName: '',
                creditorSign: '111',
                noCode: '',
                signDate: '',
                guarantee: '',
                guaranteeNo: '',
                assetsCompanyName: '',
                assetsCard: '32132765',
                assetsDate: '2020-09-10',
                legalRepresen: '',
                legalRepresenDate: '',
                obligor: '',
                obligorSign: '32423432',
                obligorIdcard: '',
                obligorDate: ''
            },
            InitMsg: { }
        }
    },
    methods: {
        async InitData () {
            const relativePerId = window.sessionStorage.getItem('relativePerId')
            const formData = new FormData()
            formData.append('relativePerId', relativePerId)
            const { data: result } = await this.$http({
                method: 'post',
                url: '/api/api/BusAssignmentConfirmController/initialize',
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            console.log(result.data)
            this.InitMsg = result.data
        },
        async Submit () {
            this.SubmitData.propertId = window.sessionStorage.getItem('propertId')
            this.SubmitData.creditorName = this.InitMsg.debtName
            this.SubmitData.confirmNo = this.InitMsg.assignmentAgreementNo
            this.SubmitData.guaranteeNo = '54331231212312'
            this.SubmitData.guarantee = this.authName
            console.log(this.SubmitData)
            const formData = new FormData()
            for (const key in this.SubmitData) {
                formData.append(key, this.SubmitData[key])
            }
            const { data: result } = await this.$http({
                method: 'post',
                url: '/api/api/BusAssignmentConfirmController/insertSelective',
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            if (result.resultCode !== '200') return this.$message.error(result.resultMessage)
            // 更新资产信息自身阶段
            const PropertFormData = new FormData()
            PropertFormData.append('propertId', window.sessionStorage.getItem('propertId'))
            PropertFormData.append('stage', '3')
            const { data: PropertStatusResult } = await this.$http({
                method: 'post',
                url: '/api/api/busPropertController/updateStage',
                data: PropertFormData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            if (PropertStatusResult.resultCode !== '200') return this.$message.error('更改资产阶段失败, 请重试')
            this.$message.success('提交资产信息成功')
            this.$emit('onChangeFragment', 'DebtConfirm')
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
