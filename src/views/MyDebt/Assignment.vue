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
                    债权转让协议
                </div>
                <div class='promise-content-main-message-1'>
                    <span>甲方:</span>
                    <input type="text" :value='InitMsg.debtName' :disabled='true'>
                </div>
                <div class='promise-content-main-message-2'>
                    <span>身份证号码统一社会信用代码：</span>
                    <input type="text" :value='InitMsg.idCard' :disabled='true'>
                </div>
                <div class='promise-content-main-message-3'>
                    <span>联系地址：</span>
                    <input type="text" :value='InitMsg.priAdd' :disabled='true'>
                </div>
                <div class='promise-content-main-message-3'>
                    <span>联系电话：</span>
                    <input type="text" :value='InitMsg.priPhone' :disabled='true'>
                </div>
                <div class='promise-content-main-text'>
                    乙方：深圳金瑞盈通资产管理有限公司<br>
                    统一社会信用代码：91440300359331797F<br>
                    联系地址：深圳市光明区公明街道公明社区公园路17栋306<br>
                    联系电话：18688724748<br>
                </div>
                <h3>鉴于</h3>
                <div class='promise-content-main-text'>
                    1.甲方作为债权人与债务人<input type="text" :disabled='true' class='input1' :value='InitMsg.personName'>于<input type="text" class='input1' :value='ObligatYear' :disabled='true'>年<input :disabled='true' type="text" class='input1' :value='ObligatMonth'>月<input type="text" :value='ObligatDay' :disabled='true'>日签订《借款合同》,甲方对债务人拥有要求偿还包括但不限于本金、利息、罚息、复利、违约金及费用等各项权利(以下简称“标的债权”),标的债权难以收回,甲方拟与乙方合作化解标的债权。<br>
                    2.乙方具有良好的债务催收、资源整合、债事化解能力。
                </div>
                <div class='promise-content-main-text'>
                    甲方可以选择<input type="text" v-model='SubmitData.defuseWay' class='needwrite'>第三方平台作为本次债事化解方式：
                </div>
                <div class='promise-content-main-text'>
                    （1）乙方合作的第三方资产公司<br>
                    （2）乙方合作的第三方商贸公司<br>
                    （3）乙方合作的第三方电商平台<br>
                    现就乙方为甲方提供债事化解、甲方将标的债权转让给乙方,甲、乙双方在平等互利的基础上
                </div>
                <h3>第一条债权转让和对价：</h3>
                <div class='promise-content-main-text'>
                    1.1甲方自愿将标的债权(截至<input type="text" class='input1' :value='thisTimeYear' :disabled='true'>年<input  type="text" class='input1' :disabled='true' :value='thisTimeMonth'>月<input type="text" :disabled='true' :value='thisTimeDay'>日(基准日),标的债权金额为人民币<input type="text" :disabled='true' :value='InitMsg.amountThis'>元,其中包括本金<input type="text" :disabled='true' :value='InitMsg.servicePrincipal'>元,利息<input type="text" :disabled='true' :value='InitMsg.serviceInterest'>元)转让给乙方,乙方同意受让。
                </div>
                <h3>第二条款项支付和担保：</h3>
                <div class='promise-content-main-text'>
                    2.1本协议签订后3日内,甲方向乙方预付第1.2条约定的预付资金人民币:<input type="text" :disabled='true' :value='InitMsg.amountThis'>元,款项付至乙方以下账户:<br>
                    户名：深圳金瑞盈通资产管理有限公司<br>
                    账号：41027000040036419<br>
                    开户行：中国农业银行深圳横岗新区支行<br>
                    2.2为保障甲方预付货款项的安全,乙方愿意就甲方预付的第2.1条所述款项提供等额担保供甲方选择,甲方选择如下第<input type="text" v-model='SubmitData.moneyWay' class='needwrite'>种方式：<br>
                    (1)无需担保<br>
                    (2)银行保函<br>
                    (3)双方认可的其他担保方式<br>
                    若甲方选择担保,乙方有权向甲方收取3%的服务费。<br>
                    若甲方选择担保,因乙方的原因导致甲方无法依第1.3条款实现兑换或消费的,甲方有权依保函内容或担保协议的约定实现担保权利。<br>
                    2.3若双方选择第2.2条第(3)种担保方式,甲、乙双方另行签订《担保协议》<br>
                </div>
                <h3>第三条兑换或消费安排：</h3>
                <div class='promise-content-main-text'>
                    3.1甲方依据本协议第二条约定付款且将债权凭证交付乙方并签署《债权转让确认书》或书面向债务人发出债权转让通知后,甲方即有权按第1.3第三方资产公司一次性提走相对应的债权资产包或1.4条分期消费限额内在第三方合作电商平台兑换或消费商品。<br>
                    3.2乙方负责在每期消费限额内,就甲方每期兑换或消费的金额与第三方平台结算。甲方根据自己的需求在第三方合作平台兑换或消费商品,甲方每一期未使用的兑换或消费价值可累计。<br>
                    3.3甲方每期兑换或消费金额优先冲抵的是甲方按第2.1条款预付的现金,现金兑换或消费完毕后,继续冲减标的债权的价值。<br>
                    3.4债权清收的风险和收益由乙方承担或享有,但甲方承诺转让给乙方的债权真实、合法、有效,因债权不真实、不合法或已过诉讼时效等原因导致乙方无法主张权利的,其责任和损失由甲方全部承担,乙方并有权解除本合同,解除本合同后,甲方已经兑换或消费过的商品部分继续有效,依债权转让部分所兑换或消费的商品由甲方等额折算返还给乙方,并赔偿乙方的其他损失(包括但不限于清收债权所产生的律师费、诉讼费、保全费、公告费、差旅费等)。<br>
                </div>
                <h3>第四条债权转让确认和通知：</h3>
                <div class='promise-content-main-text'>
                    4.1本协议签署时，甲、乙双方与债务人和担保人(如有)共同签订《债权转让确认书》，以明确甲方债权转让给乙方及各方的权利义务的安排。<br>
                    4.2 若债务人不愿签署《债权转让确认书》的，甲、乙双方应签署《债权转让通知书》和《债权确认书》，并采用EMS邮寄等有效送达方式书面通知债务人标的债权已转让给乙方的事宜。<br>
                    4.3 若标的债权存在物权担保(包括抵押、质押、留置)的，甲方须负责办理及协助乙方办理该物权担保涉及的变更登记、担保财产的交付等事项，确保甲方对担保财产享有优先受偿权。本协议签订后10日内，甲、乙双方共同向相应行政机关办理担保权人变更登记，将担保权人由甲方变更为乙方。担保权人变更登记事项由甲方主要负责跟进和办理，乙方给予配合和协助。涉及的变更费用由甲方承担。<br>
                </div>
                <h3>第五条债权管理、催收和维护：</h3>
                <div class='promise-content-main-text'>
                    5.1乙方受让标的债权后,负责标的债权的管理、催收和维护,无需向甲方承担债务偿还责任。<br>
                    5.2乙方受让标的债权后,负责对标的债权的管理和维护,采取必要措施催收债权中断或延续债权诉讼时效及其他法定时间,按时参加涉诉债权的各种法律程序。因进行债权管理、催收、维护支付相关费用及标的债权不能收回的损失乙方承担,但甲方不配合导致的费用除外。<br>
                    5.3如转让债权进入诉讼或者执行程序的,乙方有权直接作为原告起诉或申请执行。若届时法院或债务人对乙方受让甲方的标的债权有任何疑问的,则甲方必须在收到乙方或法院通知后3日内(以孰早为准)配合进行解释、说明,包括但不限于出具书面意见、参加庭审、作为第三人参加诉讼等。如甲方不配合办理上述手续,应承担乙方由此造成的全部损失。<br>
                    5.4如甲方在债权转让后收到法院、债务人或其他相关方递交的与转让债权相关的诉讼文书或其他相关文件,甲方应及时转交给乙方。
                    5.5如在诉讼或者执行程序中,因债权转让原因乙方不能成为适格原告或执行申请人的,则甲方应代替乙方积极行使原告和执行申请人的权利义务。届时标的债权对外名义上虽由甲方享有,但标的债权实际权利应由乙方享有。甲方行使债权及从权利所取得的全部收益应当归乙方所有,甲方取得收益后3日内全额交付给乙方,不得以任何理由隐瞒或者截留收益。<br>
                </div>
                <h3>第六条债权回转和款项退还：</h3>
                <div>当乙方合作的第三方电商平台的没有足够价值的商品可供甲方兑换或消费时,甲方有权解除本合同,并有权要求乙方将甲方未兑换或消费的预付现金余额退回甲方,或是将未消费的债权金额回转给甲方,甲方已兑换或消费的金额继续有效。</div>
                <h3>第七条甲方的承诺和保证：</h3>
                <div class='promise-content-main-text'>
                    7.1甲方保证,本协议项下标的债权系真实、合法、有效且可转让的,其为签订和履行本协议所提供的与本协议有关的任何文件或信息,在所有方面都是真实的,不存在故意隐瞒和欺骗的情况。<br>
                    7.2本协议生效前,标的债权从未转让给任何第三方,并对标的债权拥有合法、有效的处分权:本协议生效后,也不会再转让给任何第三方。<br>
                    7.3本协议签订的同时,甲方向乙方移交与转让债权标的有关的各项证明文件及资料的原件(包括但不限于借款协议、担保协议、担保物的他项权利证等权利义务协议、补充协议、交易备忘、会议纪要等文件和资料),且对真实性、完整性、准确性负责,并承担因隐瞒、虚报所引起的一切法律责任。<br>
                    7.4本协议生效后,甲方应在收到乙方通知后3日内积极、认真地配合乙方行使标的债权管理和催收相关的工作和手续(包括但不限于变更登记担保权人、出具书面意见、参加法院庭审、作为第三方参加诉讼等事项),迟延履行或拒不履行的,承担乙方由此受到的一切损失。<br>
                    7.5甲方在乙方合作的第三方电商平台仅享有依本协议约定兑换或消费商品的权利兑换或消费商品时,乙方不是该商品的卖方,所有的产品责任由甲方直接向商品的提供方主张,但乙方负配合责任。任何时候、任何情况下,甲方不得使用该等兑换或消费权利以任何形式进行套现,包括但不限于虚虛假买卖、低价或高价买卖、与第三方电商平台或第三方电商平台入驻商家串通、授意等各种形式。否则由此产生的损失和法律责任由甲方承担,并由甲方赔偿因此给乙方造成的全部损失。<br>
                </div>
                <h3>
                    第八条乙方的陈述和保证：
                </h3>
                <div class='promise-content-main-text'>
                    乙方保证,其为签订和履行本协议所提供的与本协议有关的任何文件或信息,在所有方面都是真实的,不存在故意隐瞒和欺骗的情况。
                </div>
                <h3>第九条违约责任：</h3>
                <div class='promise-content-main-text'>
                    9.1甲方违反本协议约定造成乙方损失的,应向乙方承担赔偿责任。<br>
                    9.2乙方违反本协议约定造成甲方损失的,应向甲方承担赔偿责任。<br>
                    9.3甲方违反本协议约定隐瞒或者截留债权收益的,甲方除应当将所隐瞒或者截留的收益全额交付给乙方外,还应当按照所隐瞒或者截留的收益金额的双倍向乙方支付违约金。<br>
                    9.4本协议项下的标的债权虚假、不真实的,甲方已兑换或消费现金部分不予退还,甲方以虚假债权消费的商品价值,乙方有权要求按双倍价值赔偿,并赔偿造成乙方的其他损失。<br>
                    9.5甲方除向乙方转让标的债权外,将标的债权同时转让给任何第三方的,乙方有权就该标的债权金额及利息损失向甲方追偿,并且有权要求甲方就该标的债权金额的100%向乙方支付违约金。<br>
                </div>
                <h3>第十条争议解决：</h3>
                <div class='promise-content-main-text'>
                    本协议的订立、效力、解释、履行及争议的解决均适用中华人民共和国法律。凡由协议引起的或与本协议有关的一切争议和纠纷,各方应协商解决:协商不成,选择如下第【2】种方式：<br>
                    (1)提交深圳国际仲裁院(深圳仲裁委员会),按提交仲裁申请时该会有效之仲裁规则进行仲裁：<br>
                    (2)在乙方住所地有管辖权的人民法院进行诉讼。<br>
                </div>
                <h3>第十一条变更、修改或补充：</h3>
                <div class='promise-content-main-text'>
                    本协议如有变更、修改或补充,均需以书面形式进行,双方需协商一致并签订变更、修改或补充协议。作为本协议的补充,与本协议具有同等法律效力。
                </div>
                <h3>第十二条生效及其他：</h3>
                <div class='promise-content-main-text'>
                    各方依据本协议签署的《债权转让确认书》、《债权转让通知书》文件构成本协议的完整协议,为本协议不可分割的一部分,与本协议内容不一致的,以本协议内容为准。<br>
                    本协议壹式贰份,双方各执壹份,具有同等法律效力,自甲、乙双方签字或盖章之日起生效。
                </div>
                <h3>第十三条本协议附件：</h3>
                <div class='promise-content-main-text'>
                    附件一:《借款合同》<br>
                    附件二:《债权转让确认书》<br>
                    附件三：《债权转让通知书》<br>
                    附件四:债权债务交易凭据原件 <br>
                    附件五:其他相关凭证原件 <br>
                    附件六:甲方身份证或营业执照复印件 <br>
                </div>
                <div class='promise-content-main-last-text'>(本页无正文,为债权人名字与资产公司名字编号编号《债权转让协议》签署页)</div>

                <div class='promise-content-main-container'>
                    <!-- 左侧签字盖章 -->
                    <div  class='promise-content-main-container-item'>
                        <div>
                            <span>甲方签字</span>
                            <input type="text" class='needwrite'>
                        </div>
                        <div>
                            <span>甲方盖章按印</span>
                            <button>上传电子章</button>
                            <!-- <input @change='UpdateSealA()' ref='SealA' type="file" class='seala'> -->
                            <!-- <img v-show='SubmitData.partyaSeal' alt="" :src='SubmitData.partyaSeal' class='img1'> -->
                        </div>
                        <div>
                            <span>签约日期</span>
                            <input v-model='SubmitData.partyaSignupTime' type="text" class='needwrite'>
                        </div>
                    </div>
                    <div class='promise-content-main-container-item'>
                    <!-- 右侧签字盖章 -->
                        <div>
                            <span>乙方签字</span>
                            <input type="text" class='needwrite'>
                        </div>
                        <div>
                            <span>乙方盖章按印</span>
                            <button>上传电子章</button>
                            <!-- <input @change='UpdateSealB()' ref='SealB' type="file" class='sealb'> -->
                            <!-- <img v-show='SubmitData.partybSeal' alt="" :src='SubmitData.partybSeal' class='img2'> -->
                        </div>
                        <div>
                            <span>法定代表人或授权代表(签字)</span>
                            <input style='width: 100px' type="text" class='needwrite'>
                        </div>
                        <div>
                            <span>签约日期</span>
                            <input v-model='SubmitData.partybSignupTime' type="text" class='needwrite'>
                        </div>
                        <div>
                            <span>协议签约地</span>
                            <input v-model='SubmitData.signupAddr'  type="text" class='needwrite'>
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
            // 分页器结构数据源
            bgc: true,
            queryInfo: {
                pageSize: 10
            },
            // 确定选用正常模板还是多选模板
            isNormal: false,
            InitMsg: {},
            SubmitData: {
                propertId: '',
                defuseWay: '',
                moneyWay: '',
                agreementDate: '2020-09-10',
                agreementDateEnd: '2020-7-28',
                partyaSeal: '111',
                partybSeal: '222',
                partyaSignupTime: '',
                partybSignupTime: '',
                signupAddr: ''
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
                url: '/api/api/busAssignmentAgreementController/initialize',
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
                url: '/api/api/busAssignmentAgreementController/insertSelective',
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            // 提交资产自身阶段
            const PropertFormData = new FormData()
            PropertFormData.append('propertId', window.sessionStorage.getItem('propertId'))
            PropertFormData.append('stage', '2')
            const { data: PropertStatusResult } = await this.$http({
                method: 'post',
                url: '/api/api/busPropertController/updateStage',
                data: PropertFormData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            if (PropertStatusResult.resultCode !== '200') return this.$message.error('更改资产阶段失败, 请重试')

            if (result.resultCode !== '200') return this.$message.error(result.resultMessage)
            this.$message.success('提交成功')
            this.$emit('onChangeFragment', 'ConfirmAssignment')
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
        }
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
            &-message {
                height: px2rem(8);
                line-height: px2rem(8);
                &-1 {
                    span {
                        display: inline-block;
                        width: px2rem(10);
                    }
                    input {
                        width: px2rem(80)!important;
                    }
                }
                &-2 {
                    span {
                        display: inline-block;
                        width: px2rem(43);
                    }
                    input {
                        width: px2rem(47)!important;
                    }
                }
                &-3 {
                    span {
                        display: inline-block;
                        width: px2rem(16);
                    }
                    input {
                        width: px2rem(74)!important;
                    }
                }
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
            &-last-text {
                margin: px2rem(8)
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
            span {
                display: inline-block;
            }
            &-container {
                display: flex;
                position: relative;
                &-item {
                    width: px2rem(120);
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
                    .seala {
                        position: absolute;
                        left: px2rem(16);
                        width: px2rem(19);
                        opacity: 0;
                    }
                    .sealb {
                        position: absolute;
                        left: px2rem(136);
                        width: px2rem(19);
                        opacity: 0;
                    }
                    .img1 {
                        width: px2rem(20);
                        height: px2rem(20);
                        position: absolute;
                        left: px2rem(70);
                        top: px2rem(3)
                    }
                    .img2 {
                        width: px2rem(20);
                        height: px2rem(20);
                        position: absolute;
                        left: px2rem(190);
                        top: px2rem(3)
                    }
                }
            }
        }
    }
    .needwrite {
        background-color: #fff;
    }
}
</style>
