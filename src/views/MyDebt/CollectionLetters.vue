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
                <div class='collection-letters-content-progress-map-finished'>
                    <span></span>
                    1.资产评估
                </div>
                <div class='collection-letters-content-progress-map-finished'>
                    <span></span>
                    2.债权转让协议
                </div>
                <div class='collection-letters-content-progress-map-finished'>
                    <span></span>
                    3.债权转让确认书
                </div>
                <div class='collection-letters-content-progress-map-finished'>
                    <span></span>
                    4.债权确认书
                </div>
                <div class='collection-letters-content-progress-map-finished'>
                    <span></span>
                    5.债权转让通知书
                </div>
                <!-- 如果解债类型为depttype = 1,否则则显示下面的template  -->
                <template v-if="debtType === '1'">
                    <div class='collection-letters-content-progress-map-highlight'>
                        <span></span>
                        6.催款函
                    </div>
                    <div>
                        <span></span>
                        7.和解协议
                    </div>
                </template>
                <template v-else>
                    <div class='collection-letters-content-progress-map-finished'>
                        <span></span>
                        {{debtType === '2' ? '6.委托代理销售合同' : '6.委托线上代理销售合同'}}
                    </div>
                    <div class='collection-letters-content-progress-map-highlight'>
                        <span></span>
                        7.催款函
                    </div>
                    <div>
                        <span></span>
                        8.和解协议
                    </div>
                </template>
            </div>
            <!-- 背景横线 -->
            <div class='collection-letters-content-crossing'></div>
            <div class='collection-letters-content-main'>
                <div class='collection-letters-content-main-title'>
                    催款函
                </div>
                <div class='collection-letters-content-main-text'>
                    致: <el-input :disabled='true' type="text" :value='InitMsg.personName'></el-input><br>
                    根据 债权转让方<el-input :disabled='true' type="text" :value='InitMsg.debtName'></el-input>与我司签订的《债权转让协议》（编号：<el-input :disabled='true' type="text" :value='InitMsg.assignmentAgreementNo' style='width: 300px'></el-input>）），债权转让方已依法将《借款合同》项下对贵方的所有权利转让给我司，包括但不限于本金、利息、罚息、复利、违约金及费用等。截止本催款函发出之日，我司依法对贵方享有到期债权共计人民币<el-input :disabled='true' type="text" :value='InitMsg.amountThis'></el-input>元（大写： <el-input :disabled='true' type="text" :value='InitMsg.moneyMax'></el-input>整），请贵方自收到本函之日起3日内将上述逾期未付的款项汇付至本公司指定账户：
                </div>
                <div class='collection-letters-content-main-message'>
                    账  名：深圳市金隆盛投资管理有限公司<br/>
                    开户行：中国银行股分有限公司深圳南油支行<br/>   
                    账  号：745868704479<br/> 
                    请贵方按照上述日期及时付款。逾期，我司将采取法律手段依法，届时贵方除应支付前述款项外，还将承担诉讼费、保全费等司法成本。<br/>
                    特此函告!<br/>
                </div>
                <div class='collection-letters-content-main-name'>
                    <span>催款人：深圳市金隆盛投资管理有限公司</span>
                    <div class='collection-letters-content-main-name-item'>
                        <span>时间：</span>
                        <el-input :disabled='true' type="text" v-model='InitMsg.contractDate' style='width:300px'></el-input>
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
                propertId: this.$route.query.propertId,
                collectionLettertNo: '',
                contractDate: ''
            },
            debtType: ''
        }
    },
    methods: {
        async InitData () {
            const formData = new FormData()
            formData.append('relativePerId', this.$route.query.relativePerId)
            formData.append('propertId', this.$route.query.propertId)
            formData.append('comId', window.sessionStorage.getItem('companyId'))
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
            this.debtType = this.$route.query.debtType
        },
        async Submit () {
            this.SubmitData.collectionLettertNo = this.InitMsg.collectionLettertNo
            this.SubmitData.contractDate = this.InitMsg.contractDate
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
            PropertFormData.append('propertId', this.$route.query.propertId)
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
            this.$message.success('提交成功')
            this.$router.push({path: '/Compromise', query: {propertId: this.$route.query.propertId, relativePerId: this.$route.query.relativePerId, debtType: this.debtType}})
        }
    },
    created () {
        this.InitData()
    }
}

</script>
<style lang='scss' scoped>
@import '@css/style.scss';
.el-input {
    width: 200px;
}
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
            &-name {
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                margin-right: 100px;
                &-item {
                    margin-top: 20px;
                    margin-bottom: 60px;
                }
            }
        }
    }
}
</style>
