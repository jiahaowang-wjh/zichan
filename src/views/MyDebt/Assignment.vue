<!--  -->
<template>
    <div class='promise'>
        <div class='promise-title'>
            <span class='promise-title-go1'>我的审批</span>
            <span class='promise-title-separator'> / </span>
            <span class='promise-title-go2'>债权转让协议 </span>
        </div>
        <div class='promise-content'>
            <div class='promise-content-progress-map'>
                <div class='promise-content-progress-map-finished'>
                    <span></span>
                    1.资产评估
                </div>
                <div class='promise-content-progress-map-highlight'>
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
                    5.债权转让通知书
                </div>
                <!-- 如果解债类型为depttype = 1,否则则显示下面的template  -->
                <template v-if="debtType === '1'">
                    <div>
                        <span></span>
                        6.催款函
                    </div>
                    <div>
                        <span></span>
                        7.和解协议
                    </div>
                </template>
                <template v-else>
                    <div>
                        <span></span>
                        {{debtType === '2' ? '6.委托代理销售合同' : '6.委托线上代理销售合同'}}
                    </div>
                    <div>
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
            <div class='promise-content-crossing'></div>
            <div class='promise-content-main'>
                <div class='promise-content-main-title'>
                    <span>债权转让协议</span>
                </div>
                <el-row :gutter="24">
                    <el-col :span="9">
                        <span class='col-label'>协议编号：</span>
                        <el-input type="text" :value='InitMsg.assignmentAgreementNo' :disabled='true'></el-input>
                    </el-col>
                </el-row>
                <el-row :gutter="24">
                    <el-col :span="9">
                        <span class='col-label'>甲方:</span>
                        <el-input type="text" :value='InitMsg.debtName' :disabled='true'></el-input>
                    </el-col>
                </el-row>
                <el-row :gutter="24">
                    <el-col :span="9">
                        <span class='col-label'>身份证号码统一社会信用代码:</span>
                        <el-input type="text" :value='InitMsg.idCard' :disabled='true'></el-input>
                    </el-col>
                </el-row>
                <el-row :gutter="24">
                    <el-col :span="9">
                        <span class='col-label'>联系地址：</span>
                        <el-input type="text" :value='InitMsg.priAdd' :disabled='true'></el-input>
                    </el-col>
                </el-row>
                <el-row :gutter="24">
                    <el-col :span="9">
                        <span class='col-label'>联系电话：</span>
                        <el-input type="text" :value='InitMsg.priPhone' :disabled='true'></el-input>
                    </el-col>
                </el-row>
                <div class='promise-content-main-text'>
                    乙方：深圳市金隆盛投资管理有限公司<br/>                    
                    统一社会信用代码：914403003595944902<br/>                          
                    通讯地址：深圳市宝安区福永街道桥头永福路106号永福大厦603号<br/> 
                    联系人：<br/>
                    联系电话：<br/>
                </div>
                <h3>鉴于</h3>
                <div class='promise-content-main-text'>
                    1.甲方作为债权人与债务人<el-input type="text" :disabled='true' class='input1' :value='InitMsg.personName' style='width: 100px'></el-input>于<el-input type="text" class='input1' :value='ObligatYear' :disabled='true' style='width: 100px'></el-input>年<el-input :disabled='true' type="text" class='input1' style='width: 100px' :value='ObligatMonth'></el-input>月<el-input type="text" style='width: 100px' :value='ObligatDay' :disabled='true'></el-input>日签订《借款合同》，甲方对债务人拥有要求偿还包括但不限于本金、利息、罚息、复利、违约金及费用等各项权利(以下简称“标的债权”)。现甲乙双方一致同意由乙方受让标的债权，双方经友好协商，就债权转让相关事宜达成一致意见，特签订本协议，以资共同遵守。
                </div>
                <h3>一、债权转让标的物</h3>
                <div class='promise-content-main-text'>
                    甲方自愿将标的债权（截至
                    <el-input type="text" class='input1' :value='thisTimeYear' :disabled='true' style='width: 100px'></el-input>年
                    <el-input  type="text" class='input1' :disabled='true' :value='thisTimeMonth' style='width: 100px'></el-input>月
                    <el-input type="text" :disabled='true' :value='thisTimeDay' style='width: 100px'></el-input>日
                    转让给乙方，标的债权金额为人民币人民币<el-input type="text" :disabled='true' :value='InitMsg.amountThis' style='width: 200px'></el-input>元,其中包括
                    本金<el-input type="text" :disabled='true' style='width: 200px' :value='InitMsg.servicePrincipal'></el-input>元,
                    利息<el-input type="text" :disabled='true' style='width: 200px' :value='InitMsg.serviceInterest'></el-input>元)转让给乙方,乙方同意受让。
                </div>
                <h3>二、债权转让对价及支付</h3>
                <div class='promise-content-main-text'>
                    （一）作为甲方转让标的债权的对价，乙方向甲方交付价值为<el-input type="text" :disabled='true' :value='InitMsg.amountThis' style='width: 200px'></el-input>元的资产（详见本协议附件《对价资产明细》），该对价资产已包含甲方履行本协议可能产生的全部费用。对价资产若为不动产的，由乙方协助过户至甲方名下；对价资产若为动产的，由甲方自行提取。<br/>
                    （二）鉴于乙方以与标的债权相等价值的资产作为对价受让标的债权，而标的债权收回具有不确定性、长周期性及其他各种追索风险。鉴此，为衡平双方利益，甲方自愿另行向乙方支付现金人民币<el-input type="text" :disabled='true' :value='InitMsg.money' style='width: 200px'></el-input>元。乙方指定收款银行帐户<br>
                    信息如下：<br/>
                    账  名：深圳市金隆盛投资管理有限公司<br/>
                    开户行：中国银行股分有限公司深圳南油支行<br/>
                    账  号：745868704479<br/>
                </div>
                <h3>三、债权催收</h3>
                <div class='promise-content-main-text'>
                    （一）乙方受让标的债权后，负责标的债权的催收，无需向甲方承担债务偿还责任，甲方亦不得再向债务人主张或领受债务。<br/>
                    （二）乙方受让标的债权后，应采取必要措施催收债权中断或延续债权诉讼时效及其他法定期限，按时参加涉诉债权的各种法律程序。因进行债权催收而支付相关费用及标的债权不能收回的损失乙方承担，但甲方不配合导致的费用除外。<br/>
                    （三）债权清收的风险和收益由乙方承担或享有，但甲方承诺转让给乙方的债权真实、合法、有效，因债权不真实、不合法或已过诉讼时效等原因导致乙方无法主张权利的，其责任和损失由甲方全部承担，乙方并有权解除本协议；协议解除后，甲方所收取的资产应返还乙方，无法返还的应全额赔偿，且赔偿乙方的其它损失（包括但不限于清收债权所产生的律师费、诉讼费、保全费、公告费、差旅费等）。<br/>
                    （四）如转让债权进入诉讼或者执行程序的，乙方有权直接作为原告起诉或申请执行。若届时法院或债务人对乙方受让甲方的标的债权有任何疑问的，则甲方必须在收到乙方或法院通知后3日内（以孰早为准）配合进行解释、说明，包括但不限于出具书面意见、参加庭审、作为第三人参加诉讼等。如甲方不配合或协助的，应承担乙方由此造成的全部损失。<br/>
                    （五）如甲方在债权转让后收到法院、债务人或其他相关方递交的与转让债权相关的诉讼文书或其他相关文件，甲方应及时转交给乙方。<br/>
                    （六）如在诉讼或者执行程序中，因债权转让原因乙方不能成为适格原告或执行申请人的，则甲方应代替乙方积极行使原告和执行申请人的权利义务。届时标的债权对外名义上虽由甲方享有，但标的债权实际权利应由乙方享有。甲方行使债权及从权利所取得的全部收益应当归乙方所有，甲方取得收益后3日内全额交付给乙方，不得以任何理由隐瞒或者截留收益。<br/>
                </div>
                <h3>四、债权转让确认和通知</h3>
                <div class='promise-content-main-text'>
                    （一）本协议签署时，甲、乙双方与债务人和担保人(如有)共同签订《债权转让确认书》，以明确甲方债权转让给乙方及各方的权利义务的安排。<br/>
                    （二）若债务人不愿签署《债权转让确认书》的，甲、乙双方应签署《债权转让通知书》和《债权确认书》，并采用EMS邮寄等有效送达方式书面通知债务人标的债权已转让给乙方的事宜。<br/>
                    （三）若标的债权存在物权担保(包括抵押、质押、留置)的，甲方须负责办理及协助乙方办理该物权担保涉及的变更登记、担保财产的交付等事项，确保甲方对担保财产享有优先受偿权。本协议签订后10日内，甲、乙双方共同向相应行政机关办理担保权人变更登记，将担保权人由甲方变更为乙方。担保权人变更登记事项由甲方主要负责跟进和办理，乙方给予配合和协助。涉及的变更费用由甲方承担。<br/>
                </div>
                <h3>五、甲方的承诺和保证</h3>
                <div class='promise-content-main-text'>
                    （一）甲方保证，本协议项下标的债权系真实、合法、有效且可转让的，其为签订和履行本协议所提供的与本协议有关的任何文件或信息，在所有方面都是真实的，不存在故意隐瞒和欺骗的情况。<br/>
                    （二）本协议签订前，标的债权从未转让给任何第三方，并对标的债权拥有合法、有效的处分权；本协议生效后，也不会再转让给任何第三方。<br/>
                    （三）本协议签订的同时，甲方向乙方移交与转让债权标的有关的各项证明文件及资料的原件（包括但不限于借款协议、担保协议、担保物的他项权利证等权利义务协议、补充协议、交易备忘、会议纪要等文件和资料），且对真实性、完整性、准确性负责，并承担因隐瞒、虚报所引起的一切法律责任。<br/>
                    （四）本协议生效后，甲方应在收到乙方通知后3日内积极、认真地配合乙方行使标的债权催收相关的工作和手续（包括但不限于变更登记担保权人、出具书面意见、参加法院庭审、作为第三方参加诉讼等事项），迟延履行或拒不履行的，承担乙方由此受到的一切损失。<br/>
                </div>
                <h3>六、乙方的陈述和保证</h3>
                <div>当乙方保证，其为签订和履行本协议所提供的与本协议有关的任何文件或信息，在所有方面都是真实的，不存在故意隐瞒和欺骗的情况。</div>
                <h3>七、争议解决</h3>
                <div class='promise-content-main-text'>
                    因本协议发生争议，甲乙双方应友好协商解决；协商不成的，可向本协议签订地人民法院起诉。
                </div>
                <h3>
                    八、通知与送达
                </h3>
                <div class='promise-content-main-text'>
                    （一）甲乙双方一致确认，本协议首部注明的通讯地址、联系人和联系电话为双方的有效送达地址，其适用范围包括：甲乙双方之间发出的任何通知、联络或争议进入民事诉讼程序后的一审程序、二审程序和执行程序有关司法文书的通知或送达。<br/>
                    （二）对于任何通知、联络或司法文书，甲乙双方约定如下日期为正式送达日期：<br/>
                    1.直接交付的，在交付时视为送达。<br/>
                    2.以短信、微信方式发出的，以发件方发送后系统显示的时间视为送达。<br/>
                    3.以邮政快递形式发出的，在收件人拒收或者因送达地址、联系人和联系电话错误或不详而被退回时视为送达。<br/>
                    （三）甲乙双方的送达地址、联系人和联系电话如有变更的，须在变更前十日以书面形式通知相对方，在书面变更通知送达对方之前，视为送达地址、联系人和联系电话未变更。<br/>
                </div>
                <h3>九、协议的变更、修改或补充</h3>
                <div class='promise-content-main-text'>
                    本协议如有变更、修改或补充。均需以书面形式进行,双方需协商一致并签订变更、修改或补充协议。作为本协议的补充,与本协议具有同等法律效力。
                </div>
                <h3>十、其他</h3>
                <div class='promise-content-main-text'>
                    （一）各方依据本协议签署的《债权转让确认书》、《债权转让通知书》、《债权确认书》文件构成本协议的完整协议,为本协议不可分割的一部分,与本协议内容不一致的,以本协议内容为准。<br/>
                    （二）本协议自甲乙双方签字或盖章之日起生效。本协议壹式贰份，甲乙双方各执壹份，具有同等法律效力。<br/>
                    （三）本协议附件包括：<br/>
                    附件一：《借款合同》<br/>
                    附件二：《债权转让确认书》<br/>
                    附件三：《债权转让通知书》<br/>
                    附件四：《债权确认书》<br/>
                    附件五：债权债务交易凭据原件<br/>
                    附件六：其他相关凭证原件<br/>
                    附件七：甲方身份证或营业执照复印件<br/>
                    附件八：《对价资产明细》<br/>
                </div>
                <div class='promise-content-main-tip'>(以下无正文,为签署页)</div>
                <el-row :gutter="24" class='promise-content-main-container'>
                    <el-col :span="7">
                        <span class='col-label'>甲方：</span>
                        <el-input type="text" :value='InitMsg.personName' :disabled='true'></el-input>
                    </el-col>
                    <el-col :span="3">
                        <span class='col-label'></span>
                    </el-col>
                    <el-col :span="7">
                        <span class='col-label'>乙方：</span>
                        <el-input type="text" :value="'深圳市金隆盛投资管理有限公司'" :disabled='true'></el-input>
                    </el-col>
                </el-row>
                <el-row :gutter="24">
                    <el-col :span="7">
                        <span class='col-label'>日期：</span>
                        <el-input type="text" :value='InitMsg.thisTime' :disabled='true'></el-input>
                    </el-col>
                    <el-col :span="3">
                        <span class='col-label'></span>
                    </el-col>
                    <el-col :span="7">
                        <span class='col-label'>日期：</span>
                        <el-input type="text" :value='InitMsg.thisTime' :disabled='true'></el-input>
                    </el-col>
                </el-row>
                <el-row :gutter="24">
                    <el-col :span="10">
                    </el-col>
                    <el-col :span="6">
                        <span>协议签约地：重庆市渝中区</span>
                    </el-col>
                </el-row>
                <div class='promise-content-main-button'>
                    <button @click='Submit'>提交</button>
                </div>
                <!-- <h3>附件八：对价资产明细</h3>
                <div>
                    <div class='promise-content-main-list-1-title'>
                        <span>序号</span>
                        <span>商品名</span>
                        <span>型号</span>
                        <span>计量单位</span>
                        <span>单价（元）</span>
                        <span>数量</span>
                        <span>合计（元）</span>
                        <span>备注</span>
                        <span>操作</span>
                    </div>
                    <div class='promise-content-main-list-1'>
                        <div class='promise-content-main-list-1-item' v-for='(item, index) in GoodsList' :key='item.id'>
                            <span class='promise-content-main-list-1-item-1'>{{index + 1}}</span>
                            <span class='promise-content-main-list-1-item-2'>
                                <el-select v-model='GoodsMsg[index].modityName'>
                                    <el-option :label="goodItem.modityName" :value='goodItem.dictionDis' v-for='(goodItem,index) in GoodsMsg' :key='index'></el-option>
                                </el-select>
                            </span>
                            <span class='promise-content-main-list-1-item-3'>
                                <el-input></el-input>
                            </span>
                            <span class='promise-content-main-list-1-item-3'>
                                <el-input></el-input>
                            </span>
                            <span class='promise-content-main-list-1-item-3'>
                                <el-input></el-input>
                            </span>
                            <span class='promise-content-main-list-1-item-3'>
                                <el-input></el-input>
                            </span>
                            <span class='promise-content-main-list-1-item-3'>
                                <el-input></el-input>
                            </span>
                            <span class='promise-content-main-list-1-item-4'>
                                <el-input></el-input>
                            </span>
                            <span class='promise-content-main-list-1-item-4'>
                                <button @click='DelecteItem(index)'>删除</button>
                            </span>
                        </div>
                        <button @click='AddItem()'>点击添加</button>
                    </div>
                </div> -->
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
                assignmentAgreementNo: '',
                propertId: this.$route.query.propertId,
                contractTime: ''
            },
            // 商品列表
            GoodsList: [],
            // 商品信息列表
            GoodsMsg: [
            ],
            // 商品列表
            // 计数用作用,给ID赋值
            Num: 101,
            // 记录当前index
            Index: 0,
            HasSubmitData: false,
            // 当前解债类型
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
                url: '/api/api/busAssignmentAgreementController/initialize',
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            this.InitMsg = result.data
            this.debtType = this.$route.query.debtType
            console.log(this.debtType)
        },
        async Submit () {
            const formData = new FormData()
            this.SubmitData.assignmentAgreementNo = this.InitMsg.assignmentAgreementNo
            this.SubmitData.contractTime = this.InitMsg.contractTime
            for (const key in this.SubmitData) {
                formData.append(key, this.SubmitData[key])
            }
            const { data: result } = await this.$http({
                method: 'post',
                url: '/api/api/busAssignmentAgreementController/insertSelective',
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            // 提交资产自身阶段
            const PropertFormData = new FormData()
            PropertFormData.append('propertId', this.$route.query.propertId)
            PropertFormData.append('stage', '2')
            const { data: PropertStatusResult } = await this.$http({
                method: 'post',
                url: '/api/api/busPropertController/updateStage',
                data: PropertFormData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            console.log(PropertStatusResult)
            if (PropertStatusResult.resultCode !== '200') return this.$message.error('更改资产阶段失败, 请重试')

            if (result.resultCode !== '200') return this.$message.error(result.resultMessage)
            this.$message.success('提交成功')
            this.$router.push({path: '/ConfirmAssignment', query: {propertId: this.$route.query.propertId, relativePerId: this.$route.query.relativePerId, debtType: this.$route.query.debtType}})
        },
        UpdateSealA () {
            const file = this.$refs.SealA.files[0]
            this.$UpdateFile(file).then(result => {
                this.SubmitData.partyaSeal = result
            })
        },
        UpdateSealB () {
            const file = this.$refs.SealB.files[0]
            this.$UpdateFile(file).then(result => {
                this.SubmitData.partybSeal = result
            })
        },
    },
    created () {
        this.InitData()
    },
    computed: {
        ObligatYear: function () {
            return (this.InitMsg.obligatTime || '').split('-')[0]
        },
        ObligatMonth: function () {
            return (this.InitMsg.obligatTime || '').split('-')[1]
        },
        ObligatDay: function () {
            return (this.InitMsg.obligatTime || '').split('-')[2]
        },
        thisTimeYear: function () {
            return (this.InitMsg.thisTime || '').split('-')[0]
        },
        thisTimeMonth: function () {
            return (this.InitMsg.thisTime || '').split('-')[1]
        },
        thisTimeDay: function () {
            return (this.InitMsg.thisTime || '').split('-')[2]
        }
    }
}

</script>
<style lang='scss' scoped>
@import '@css/style.scss';
.el-row {
  .el-col {
    display: flex;
    padding: 0 20px;
    margin: 5px 0;
    input {
        width: 100%;
        height: 30px;
    }
    .col-label {
      flex-shrink: 0;
      line-height: 30px;
      height: 30px;
      margin-right: 10px;
    }
    /deep/.el-form-item {
      width: 100%;
      .el-select {
        width: 100%;
      }
      .el-input {
        width: 100%;
      }
      .el-date-editor {
        width: 100%;
      }
    }
  }
}
.promise {
    display: flex;
    flex-direction: column;
    background-color: #E9F0F5;
    height: 100%;
    width: 100%;
    font-size: 14px;
    &-title {
        height: px2rem(12);
        line-height: px2rem(12);
        color: #FC7F89;
        font-size: 18px;
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
            &-title {
                height: px2rem(14);
                line-height: px2rem(14);
                text-align: center;
                font-weight: 600;
                font-size: 18px;
            }
            input {
                background-color: #fff;
                padding-left: px2rem(2);
                border: 1px solid #DFE0E7;
                border-radius: px2rem(1);
                margin:0 px2rem(1);
                background-color: #F2F6F9;
                height: px2rem(4);
                width: px2rem(16);
            }
            &-text {
                line-height: px2rem(6);
            }
            &-promise-msg  {
                display: flex;
                justify-content: flex-end;
                margin: px2rem(6) 0;
                &-area {
                    width: px2rem(60);
                    height: px2rem(20);
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    div {
                        margin: px2rem(1) 0;
                        span {
                        }
                        input {
                            width: px2rem(40);
                            background-color: #fff;
                        }
                    }
                }
            }
            &-button {
                text-align: center;
                margin: 50px 0;
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
                margin-top: 60px;
            }
            span {
                display: inline-block;
            }
            &-tip {
                text-align: center;
            }
        }
    }
    .needwrite {
        background-color: #fff;
    }
}
</style>
