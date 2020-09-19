<!--  -->
<template>
  <div class='asset-information-approve'>
        <div class='asset-information-approve-title'>
            <span class='asset-information-approve-title-go1'>我的审批</span>
            <span class='asset-information-approve-title-separator'> / </span>
            <span class='asset-information-approve-title-go2'>资产资料信息审批</span>
        </div>
        <div class='asset-information-approve-container'>
            <div class='asset-information-approve-container-form'>
                <el-collapse>
                    <!-- 资产转让协议 -->
                    <el-collapse-item title="资产转让协议" name="1">
                        <div class='promise-content-main'>
                            <div class='promise-content-main-title'>
                                债权转让协议
                            </div>
                            <div style='margin: 4px 0'>
                                <span style='width: 40px'>甲方:</span>
                                <input :disabled='true' type="text" style='width: 360px' :value='AssignmentInitMsg.debtName'>
                            </div>
                            <div style='margin: 4px 0'>
                                <span style='width: 180px'>身份证号码统一社会信用代码：</span>
                                <input :disabled='true' type="text" style='width: 238px' :value='AssignmentInitMsg.idCard'>
                            </div>
                            <div style='margin: 4px 0'>
                                <span style='width: 70px'>联系地址：</span>
                                <input :disabled='true' type="text" style='width: 330px' :value='AssignmentInitMsg.priAdd'>
                            </div>
                            <div style='margin: 4px 0'>
                                <span style='width: 70px'>联系电话：</span>
                                <input :disabled='true' type="text" style='width: 330px' :value='AssignmentInitMsg.priPhone'
                                >
                            </div>
                            <div class='promise-content-main-text'>
                                乙方：深圳金瑞盈通资产管理有限公司<br>
                                统一社会信用代码：91440300359331797F<br>
                                联系地址：深圳市光明区公明街道公明社区公园路17栋306<br>
                                联系电话：18688724748<br>
                            </div>
                            <h3>鉴于</h3>
                            <div class='promise-content-main-text'>
                                1.甲方作为债权人与债务人<input :disabled='true' type="text" class='input1'>于<input :disabled='true' type="text" class='input1'>年<input :disabled='true'  type="text" class='input'>月<input :disabled='true' type="text">日签订《借款合同》,甲方对债务人拥有要求偿还包括但不限于本金、利息、罚息、复利、违约金及费用等各项权利(以下简称“标的债权”),标的债权难以收回,甲方拟与乙方合作化解标的债权。<br>
                                2.乙方具有良好的债务催收、资源整合、债事化解能力。
                            </div>
                            <div class='promise-content-main-text'>
                                甲方可以选择<input :disabled='true' type="text" v-model='AssignmentSubmitData.defuseWay'>第三方平台作为本次债事化解方式：
                            </div>
                            <div class='promise-content-main-text'>
                                （1）乙方合作的第三方资产公司<br>
                                （2）乙方合作的第三方商贸公司<br>
                                （3）乙方合作的第三方电商平台<br>
                                现就乙方为甲方提供债事化解、甲方将标的债权转让给乙方,甲、乙双方在平等互利的基础上
                            </div>
                            <h3>第一条债权转让和对价：</h3>
                            <div class='promise-content-main-text'>
                                1.1甲方自愿将标的债权(截至<input :disabled='true' type="text">年<input :disabled='true' type="text">月<input :disabled='true' type="text">日(基准日),标的债权金额为人民币<input :disabled='true' type="text">元,其中包括本金<input :disabled='true' type="text">元,利息<input :disabled='true' type="text">元)转让给乙方,乙方同意受让。作为甲方转让标的债权对价,乙方确保甲方分期在第三方平台兑换或消费价值人民币<input :disabled='true' type="text">元的商品,乙方负责向第三方平台支付该<input :disabled='true' type="text">元价值商品或消费的对价,并直接与第三方平台进行结算。<br>
                                1.2鉴于乙方以与标的债权相等价值的商品或消费作为对价受让标的债权,而标的债权收回具有不确定性、长周期性及其他各种追索风险,因此,甲方自愿另行向乙方预付现金人民币<input :disabled='true' type="text">用于在第三方平台兑换或消费商品,甲方向乙方支付该笔资金后,乙方确保甲方分期在第三方平台兑换或消费价值人民币<input :disabled='true' type="text">的商品,乙方负责向第三方平台支付该<input :disabled='true' type="text">价值商品或消费的对价,并直接与第三方平台进行结算。<br>
                                1.3第三方资产公司商品量充足,足以满足甲方一次性兑换或消费总价值<input :disabled='true' type="text">元 的商品,经甲乙双方协商一致,甲方可在第三方平台一次性兑换或消费总价值<input :disabled='true' type="text">元的商品。<br>
                                1.4综合甲方转让债权价值和支付资金,乙方确保甲方分期在第三方平台（乙方合作的第三方商贸公司或电商平台）兑换或消费总价值总物权的商品,即:<input :disabled='true' type="text">以个月为一期,每期不超过<input :disabled='true' type="text">元,分<input :disabled='true' type="text">期在第三方平台兑换或消费,乙方负责与第三方平台进行结算。
                            </div>
                            <h3>第二条款项支付和担保：</h3>
                            <div class='promise-content-main-text'>
                                2.1本协议签订后3日内,甲方向乙方预付第1.2条约定的预付资金人民币:<input :disabled='true' type="text">元,款项付至乙方以下账户:<br>
                                户名：深圳金瑞盈通资产管理有限公司<br>
                                账号：41027000040036419<br>
                                开户行：中国农业银行深圳横岗新区支行<br>
                                2.2为保障甲方预付货款项的安全,乙方愿意就甲方预付的第2.1条所述款项提供等额担保供甲方选择,甲方选择如下第<input :disabled='true' type="text" v-model='AssignmentSubmitData.moneyWay'>种方式：<br>
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
                                4.1本协议签署时,甲、乙双方与债务人和担保人(如有)共同签订编号为：<input :disabled='true' type="text"><br>
                                《债权转让确认书》,明确甲方债权转让给乙方及各方的权利义务安排。
                                4.2若债务人不愿签署《债权转让确认书》的,甲、乙双方应签署编号：<input :disabled='true' type="text">《债权转让通知书》和<input :disabled='true' type="text">《债权确认书》,并采用EMS邮寄方式书面通知债务人标的债权已转让给乙方,并取得送达债务人的邮局回执：<br>
                                4.3若标的债权存在物权担保(包括抵押、质押、留置)的,甲方须负责办理及协助乙方办理该物权担保涉及的变更登记、担保财产的交付等事项,确保甲方对担保财产享有优先受偿权。本协议签订后10日内,甲、乙双方共同向相应行政机关办理担保权人变更登记,将担保权人由甲方变更为乙方。担保权人变更登记事项由甲方主要负责跟进和办理,乙方给予配合和协助。涉及的变更费用由甲方承担。<br>
                                4.4双方知悉并认可,甲方转让/乙方受让标的债权,在满足本协议第六条约定条件时,甲方有权要求乙方域乙方有权将剩余未消费标的债权金额回转给甲方。<br>
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
                                        <input :disabled='true' type="text">
                                    </div>
                                    <div>
                                        <span>甲方盖章按印</span>
                                        <button>上传电子章</button>
                                    </div>
                                    <div>
                                        <span>签约日期</span>
                                        <input :disabled='true' v-model='AssignmentSubmitData.partyaSignupTime' type="text">
                                    </div>
                                </div>
                                <div class='promise-content-main-container-item'>
                                <!-- 右侧签字盖章 -->
                                    <div>
                                        <span>乙方签字</span>
                                        <input :disabled='true' type="text">
                                    </div>
                                    <div>
                                        <span>乙方盖章按印</span>
                                        <button>上传电子章</button>
                                    </div>
                                    <div>
                                        <span>法定代表人或授权代表(签字)</span>
                                        <input :disabled='true' style='width: 100px' type="text">
                                    </div>
                                    <div>
                                        <span>签约日期</span>
                                        <input :disabled='true' v-model='AssignmentSubmitData.partybSignupTime' type="text">
                                    </div>
                                    <div>
                                        <span>协议签约地</span>
                                        <input :disabled='true' v-model='AssignmentSubmitData.signupAddr'  type="text">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </el-collapse-item>
                    <!-- 资产债权转让确认 -->
                    <el-collapse-item title="资产债权转让确认" name="2">
                        <div class='promise-content-main-title'>
                            债权转让确认书
                        </div>
                        <div class='promise-content-main-text'>
                            根据 <input :disabled='true' type="text" :value='ConfirmAssignmentInitMsg.debtName'>  与 资产公司 签订的《债权转让协议》（编号：<input :disabled='true' type="text" style='width: 220px' :value='ConfirmAssignmentInitMsg.assignmentAgreementNo'>) <br>
                            (1),现对该协议项下债权转让作出如下确认:<br>
                            一、原债权人<input :disabled='true' type="text" :value='ConfirmAssignmentInitMsg.debtName'>依法享有本确认书附表列明的债权债务合同项下所有权利(以下简称“标的债权”),包括但不限于本金、利息、罚息、复利、违约金及费用等截至<input :disabled='true' type="text" :value='ConfirmAssignmentInitMsg.thisTime'>(债杈转让基准日),标的债权金额为人民币<input :disabled='true' type="text" :value='ConfirmAssignmentInitMsg.amountThis'>元。该标的债权已由原债权人转归
                            <span>深圳金隆盛投资管理有限公司</span>享有。<br>
                            二、原债权人<input :disabled='true' type="text" :value='ConfirmAssignmentInitMsg.debtName'>、债务人<input :disabled='true' type="text" :value='ConfirmAssignmentInitMsg.personName'>、担保人均确认《债权转让协议》（编号:<input :disabled='true' type="text" style='width: 220px' :value='ConfirmAssignmentInitMsg.assignmentAgreementNo'>）生效后,原债权人<input :disabled='true' type="text" :value='ConfirmAssignmentInitMsg.debtName'>在本确认书附表列明的债权债务合同及担保合同项下的所有权利转归 资产公司 享有, 资产公司 承继该等合同项下的所有权利,债务人、担保人继续向  资产公司  履行该等合同约定的所有义务。<br>
                            特此确认。<br>
                        </div>
                        <div class='promise-content-main-last-text'>
                        </div>
                        <div class='promise-content-main-container'>
                            <!-- 左侧签字盖章 -->
                            <div  class='promise-content-main-container-item'>
                                <div>
                                    <span>债权人签字</span>
                                    <input :disabled='true' type="text">
                                </div>
                                <div>
                                    <span>债权人盖章捺印</span>
                                    <button>上传电子章</button>
                                </div>
                                <div>
                                    <span>身份证/统一社会信用代码</span>
                                    <input :disabled='true' type="text" v-model='ConfirmAssignmentSubmitData.noCode'>
                                </div>
                                <div>
                                    <span>签约日期</span>
                                    <input :disabled='true' type="text" v-model='ConfirmAssignmentSubmitData.signDate'>
                                </div>
                            </div>
                            <!-- 右侧签字盖章 -->
                            <div  class='promise-content-main-container-item'>
                                <div>
                                    <span>债务人签字</span>
                                    <input :disabled='true' type="text" v-model='ConfirmAssignmentSubmitData.obligor'>
                                </div>
                                <div>
                                    <span>债务人盖章捺印</span>
                                    <button>上传电子章</button>
                                </div>
                                <div>
                                    <span>身份证/统一社会信用代码</span>
                                    <input :disabled='true' type="text" v-model='ConfirmAssignmentSubmitData.obligorIdcard'>
                                </div>
                                <div>
                                    <span>签约日期</span>
                                    <input :disabled='true' type="text" v-model='ConfirmAssignmentSubmitData.obligorDate'>
                                </div>
                            </div>
                        </div>
                        <div class='promise-content-main-message'>担保人: <input :disabled='true' type="text" :value='ConfirmAssignmentInitMsg.authName'></div>
                        <div class='promise-content-main-message'>同担保名称及编号: <input :disabled='true' type="text" style='width: 220px' v-model='ConfirmAssignmentSubmitData.guaranteeNo'></div>
                        <div class='promise-content-main-message'>资产公司名称: <input :disabled='true' type="text" style='width: 220px' v-model='ConfirmAssignmentSubmitData.assetsCompanyName'></div>
                        <div class='promise-content-main-space'></div>
                        <div class='promise-content-main-message'>身份证/统一社会信用代码 <input :disabled='true' type="text"></div>
                        <div class='promise-content-main-message'>签约日期: <input :disabled='true' type="text"></div>
                        <div class='promise-content-main-message'>法定代表人签字: <input :disabled='true' type="text" v-model='ConfirmAssignmentSubmitData.legalRepresen'></div>
                        <div class='promise-content-main-message'><span>签约日期</span><input :disabled='true' type="text" v-model='ConfirmAssignmentSubmitData.legalRepresenDate'></div>
                    </el-collapse-item>
                    <!-- 资产债权确认 -->
                    <el-collapse-item title="资产债权确认" name="3">
                        <div class='promise-content-main-title'>
                            债权确认书
                        </div>
                        <div class='promise-content-main-text'>
                            致：<input :disabled='true' type="text" :value='DebtConfirmInitMsg.personName'><br>
                            根据<input :disabled='true' type="text" :value='DebtConfirmInitMsg.debtName'>（简称“债权转让方”）与<input :disabled='true' type="text" value='深圳市金隆盛投资有限公司' style='width: 200px'>（简称“债权受让方”）签订的《债权转让协议》（编号:<input :disabled='true' type="text" :value='DebtConfirmInitMsg.assignmentAgreementNo'>,债权转让方已依法将《借条》项下对债务人<input :disabled='true' type="text" :value='DebtConfirmInitMsg.personName'>所有权利（以下简称“标的债权”）转让给<input :disabled='true' type="text" value='深圳市金隆盛投资有限公司'>包括但不限于本金、利息、罚息、复利、违约金及费用等。截至<input :disabled='true' type="text">（债权转让基准日）,标的债权金额为人民币<input :disabled='true' type="text" :value='DebtConfirmInitMsg.servicePrincipal'>元,其中包括本金合计<input :disabled='true' type="text">元,利息合计<input :disabled='true' type="text" :value='DebtConfirmInitMsg.serviceInterest'>元现债权受让方特向您（贵单位）<input :disabled='true' type="text" :value='DebtConfirmInitMsg.debtName'>名发函确认,请您(贵单位)确认上述标的债权以及担保是否真实、有效,债权金额是否准确,若该债权真实、有效,债权金额准确,请在下方债务人处签字或盖章确认。
                        </div>
                        <div class='promise-content-main-last-text'>
                        </div>
                        <div class='promise-content-main-container'>
                            <!-- 左侧签字盖章 -->
                            <div  class='promise-content-main-container-item'>
                                <div>
                                    <span>债权受让方：</span>
                                    <input :disabled='true' type="text" v-model='DebtConfirmSubmitData.transferee'>
                                </div>
                                <div>
                                    <span>公司名字 ：</span>
                                    <input :disabled='true' type="text" v-model='DebtConfirmSubmitData.companyName'>
                                </div>
                                <div>
                                    <span>联系方式：</span>
                                    <input :disabled='true' type="text" v-model='DebtConfirmSubmitData.tel'>
                                </div>
                                <div>
                                    <span>日期：</span>
                                    <input :disabled='true' type="text" v-model='DebtConfirmSubmitData.transfereeDate'>
                                </div>
                            </div>
                            <!-- 右侧签字盖章 -->
                            <div  class='promise-content-main-container-item'>
                                <div>
                                    <span>债务人盖章：</span>
                                    <input :disabled='true' type="text" v-model='DebtConfirmSubmitData.obligor'>
                                </div>
                                <div>
                                    <span>债务人签字：</span>
                                    <input :disabled='true' type="text" v-model='DebtConfirmSubmitData.obligorSign'>
                                </div>
                                <div>
                                    <span>日期：</span>
                                    <input :disabled='true' type="text" v-model='DebtConfirmSubmitData.obligorDate'>
                                </div>
                            </div>
                        </div>
                    </el-collapse-item>
                    <!-- 资产债权转让通知书 -->
                    <el-collapse-item title="资产债权转让通知书" name="4">
                        <div class='notification-content-main-title'>
                            债权转让通知书
                        </div>
                        <div><input :disabled='true' type="text" :value='NotificationInitMsg.personName'> </div>
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
                                <span>{{NotificationInitMsg.debtName}}</span>
                                <span>{{NotificationInitMsg.personName}}</span>
                                <span>{{NotificationInitMsg.idCard}}</span>
                                <span>{{NotificationInitMsg.personReason}}</span>
                                <span>{{NotificationInitMsg.amountThis}}</span>
                            </div>
                        </div>
                        <div class='notification-content-main-title'>特此通知！</div>
                        <div class='notification-content-main-message'>债权人盖章: <button>上传电子章</button></div>
                        <div class='notification-content-main-message'>债权人签字: <input :disabled='true' type="text" v-model='NotificationSubmitData.obligorSign'></div>
                        <div class='notification-content-main-message'>身份证/统一社会信用代码 <input :disabled='true' type="text" v-model='NotificationSubmitData.cardId'></div>
                        <div class='notification-content-main-message'><span>时间</span><input :disabled='true' type="text" v-model='NotificationSubmitData.obligorDate'></div>
                    </el-collapse-item>
                    <!-- 资产委托代理销售合同 -->
                    <el-collapse-item title="资产委托代理销售合同" name="5">
                        <div class='promise-content-main-title'>
                            委托代理销售合同
                        </div>
                        <div style='margin: 4px 0'>
                            <span style='width: 40px'>甲方:</span>
                            <input :disabled='true' type="text" style='width: 360px' :value='SalesAgreementInitMsg.debtName'>
                        </div>
                        <div style='margin: 4px 0'>
                            <span style='width: 180px'>身份证号码统一社会信用代码：</span>
                            <input :disabled='true' type="text" style='width: 220px' :value='SalesAgreementInitMsg.debtIdCard'>
                        </div>
                        <div style='margin: 4px 0'>
                            <span style='width: 70px'>联系地址：</span>
                            <input :disabled='true' type="text" style='width: 330px' :value="Address">
                        </div>
                        <div style='margin: 4px 0'>
                            <span style='width: 70px'>联系电话：</span>
                            <input :disabled='true' type="text" style='width: 330px' :value='Phone'>
                        </div>
                        <div class='promise-content-main-text'>
                            乙方(受托方)：深圳金瑞盈通资产管理有限公司<br>
                            统一社会信用代码：91440300359331797F<br>
                            联系地址：深圳市光明区公明街道公明社区公园路17栋306<br>
                            联系电话：18688724748<br>
                        </div>
                        <h3>一、甲方委托乙方代销下列商品：</h3>
                        <h3>二、上列代销价格按以下办法执行：</h3>
                        <div class='promise-content-main-text'>
                            1、代销期间： <input :disabled='true' type="text" :value='SalesAgreementInitMsg.createTime' style='width: 140px'>至 <input :disabled='true' type="text" :value='SalesAgreementInitMsg.endTime' style='width: 140px'> <br>
                            2、代销商品定价总额 <input :disabled='true' type="text" :value='SalesAgreementInitMsg.amountThis' >元（大写：<input :disabled='true' type="text" :value='SalesAgreementInitMsg.amountThisMax' style='width: 140px'>圆整<br>
                            3、乙方在收货之日起，从次月对应日开始向甲方支付代销的货款，乙方每月代销商品金额不低于<input :disabled='true' type="text">元（差额部分累计到最后一个月付清）。乙方通过银行转账方式将上述销售款项支付给甲方。 <br>
                            4、甲方收款账户<br>
                            户名：<input :disabled='true' type="text" style='width: 220px' :value='SalesAgreementInitMsg.debtName'><br>
                            账号：<input :disabled='true' type="text" style='width: 220px' :value='SalesAgreementInitMsg.bankCard'><br>
                            开户行：<input :disabled='true' type="text" style='width: 210px' :value='SalesAgreementInitMsg.bank'><br>
                            三、商品包装应按运输部门规定办理。否则运输途中损失由甲方负责。<br>
                            四、交货地点：凭乙方发货通知单，由甲方代办托运直拨至购货单位。<br>
                            五、代销商品发货数量必须根据乙方通知。<br>
                            六、手续费收取与结算按下列办法：按销售货款总额  10   %收取手续费；待乙方收到货款后，即给甲方结算并扣回代垫费用。<br>
                            七、甲方代销商品应与样品相符，保质保量，代销数量、规格、价格，有效期内如有变更，甲方必须及时通知乙方，通知到达前，已由乙方签出的合同，应照旧履行。如因质量或供应脱节而造成的损失和费用（包括手续费），均由甲方负责。<br>
                            八、附议：<input :disabled='true' type="text" :value='SalesAgreementSubmitData.second'><br>
                            九、甲、乙双方应严格履行本协议，违约方应承担违约责任。造成损失的，承担赔偿责任。<br>
                            十、本协议在履行过程中如发生争议或纠纷，甲、乙双方应友好协商解决，协商不能解决时，任何一方可向当地人民法院起诉解决。<br>
                            十一、本协议一式两份，甲乙双方各执一份，签字盖章生效，具有同等法律效力。<br>
                        </div>
                        <div class='promise-content-main-container'>
                            <!-- 左侧签字盖章 -->
                            <div  class='promise-content-main-container-item'>
                                <div>
                                    <span>甲方签字</span>
                                    <input :disabled='true' type="text">
                                </div>
                                <div>
                                    <span>甲方盖章按捺印</span>
                                    <button>上传电子章</button>
                                </div>
                                <div>
                                    <span>时间</span>
                                    <input :disabled='true' type="text" v-model='SalesAgreementSubmitData.partyaTime'>
                                </div>
                            </div>
                            <div class='promise-content-main-container-item'>
                            <!-- 右侧签字盖章 -->
                                <div>
                                    <span>乙方签字</span>
                                    <input :disabled='true' type="text">
                                </div>
                                <div>
                                    <span>甲方盖章按捺印</span>
                                    <button>上传电子章</button>
                                </div>
                                <div>
                                    <span>时间</span>
                                    <input :disabled='true' type="text" v-model='SalesAgreementSubmitData.partybTime'>
                                </div>
                            </div>
                        </div>
                        <div class='promise-content-main-list'>
                            <h3>附件一: 商品寄售清单</h3>
                            <button>上传附件</button>
                        </div>
                    </el-collapse-item>
                    <!-- 资产催款函 -->
                    <el-collapse-item title="资产催款函" name="6">
                        <div class='collection-letters-content-main-title'>
                            催款函
                        </div>
                        <div class='collection-letters-content-main-text'>
                            致: <input :disabled='true' type="text" :value='CollectionLettersInitMsg.personName'><br>
                            根据(<input :disabled='true' type="text" :value='CollectionLettersInitMsg.debtName'>）（简称“债权转让方”)与本公司(简称“债权受让方”)签订的《债权转让协议》(编号:<input :disabled='true' type="text" :value='CollectionLettersInitMsg.assignmentAgreementNo' >）,债权转让方已依法将《借款合同》项下对贵单位(您)所有权利(以下简称“标的债权”)转让给本公司,包括但不限于本金、利息、罚息、复利、违约金及费用等。截止本催款函发出之日,本公司依法对贵单位(您)享有到期债权共计人民币<input :disabled='true' type="text" :value='CollectionLettersInitMsg.amountThis'>元（大写: <input :disabled='true' type="text" :value='CollectionLettersInitMsg.moneyMax'>整），但至今贵单位(您)仍未支付。请贵单位(您)自收到本函之日起3日内将上述逾期未付的款项汇付至本公司指定账户:
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
                                甲方确认送达地址：<input :disabled='true' type="text" v-model='CollectionLettersSubmitData.partyaAddr'>
                            </div>
                            <div>
                                甲方确认送达联系人：<input :disabled='true' type="text" v-model='CollectionLettersSubmitData.partyaPerson'>
                            </div>
                            <div>
                                甲方确认送达联系电话：<input :disabled='true' type="text" v-model='CollectionLettersSubmitData.partyaTel'>
                            </div>
                        </div>
                        <div class='collection-letters-content-main-list'>
                            <div>
                                乙方确认送达地址：<input :disabled='true' type="text" v-model='CollectionLettersSubmitData.partybAddr'>
                            </div>
                            <div>
                                乙方确认送达联系人：<input :disabled='true' type="text" v-model='CollectionLettersSubmitData.partybPerson'>
                            </div>
                            <div>
                                乙方确认送达联系电话：<input :disabled='true' type="text" v-model='CollectionLettersSubmitData.partybTel'>
                            </div>
                        </div>
                    </el-collapse-item>
                    <!-- 资产和解协议 -->
                    <el-collapse-item title="资产和解协议" name="7">
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
                            <input type="text" :value='CompromiseInitMsg.personName' :disabled='true'>
                        </div>
                        <div class='promise-content-main-text'>
                            鉴于：<br>
                            原债权人 <input type="text" :value='CompromiseInitMsg.debtName' :disabled='true'>与甲方签订《债权转让协议》，将原债权人<input type="text" :value='CompromiseInitMsg.debtName' :disabled='true'>享有的债权(债权金额为人民币<input type="text" :value='CompromiseInitMsg.amountThis' :disabled='true'>元）及全部相关权利和权益转让给甲方享有。甲乙双方一致确认上述债权转让,经友好协商就乙方向甲方偿还债务事项达成如下约定,以资共同遵守:<br>
                            1.乙方应向甲方偿付的债务总金额为人民币 <input type="text" :value='CompromiseInitMsg.amountThis' :disabled='true'><br>
                            2.乙方按照如下第
                            <input type="text" :value='CompromiseSubmitData.partybMode' :disabled='true'>
                            项方式清偿债务:<br>
                            (1)一次性现金还款:自双方签署本和解协议之日起【 30  】日内,乙方向甲方一次性支付现金人民币<input type="text" v-model='CompromiseSubmitData.cash' :disabled='true'>元。<br>
                            (2)分期现金还款:采用分<input type="text" v-model='CompromiseSubmitData.StagingNumber' :disabled='true'>期向甲方支付,每期支付人民币<input type="text" v-model='CompromiseSubmitData.money' :disabled='true'>元,每期还款日为每月<input type="text" v-model='CompromiseSubmitData.days' :disabled='true'>日。<br>
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
                                    <input type="text" v-model='CompromiseSubmitData.partyaSubrogation' :disabled='true'>
                                </div>
                                <div>
                                    <span>甲方(盖章): </span>
                                    <button>上传电子章</button>
                                </div>
                                <div>
                                    <span>日期: </span>
                                    <input type="text" v-model='CompromiseSubmitData.partyaDate' :disabled='true'>
                                </div>
                            </div>
                            <div class='promise-content-main-container-item'>
                            <!-- 右侧签字盖章 -->
                                <div>
                                    <span>法定代表履权代表(签字)</span>
                                    <input type="text" v-model='CompromiseSubmitData.partybSubrogation' :disabled='true'>
                                </div>
                                <div>
                                    <span>乙方(盖章): </span>
                                    <button>上传电子章</button>
                                </div>
                                <div>
                                    <span>日期: </span>
                                    <input type="text" v-model='CompromiseSubmitData.partybDate' :disabled='true'>
                                </div>
                                <div>
                                    <span>合同签约地:广东深圳</span>
                                </div>
                            </div>
                        </div>
                    </el-collapse-item>
                </el-collapse>
            </div>
        </div>
        <div class='asset-information-approve-check'>
            <div class='asset-information-approve-check-reason'>
                <span>审批原因</span>
                <textarea maxlength='141' v-model='SubmitApproveData.checkReason'></textarea>
            </div>
            <div class='asset-information-approve-check-button'>
                <button @click='RejectCheck'>审核驳回</button>
                <button @click='PassCheck'>审核通过</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            SubmitApproveData: {
                checkReason: '',
                status: '',
                debtId: ''
            },
            // 债权转让协议数据源
            AssignmentSubmitData: {
            },
            AssignmentInitMsg: {},
            // 债权转让确定
            ConfirmAssignmentSubmitData: {
            },
            ConfirmAssignmentInitMsg: {},
            // 债权确定
            DebtConfirmSubmitData: {
            },
            DebtConfirmInitMsg: {},
            // 通知书
            NotificationSubmitData: {
            },
            NotificationInitMsg: {},
            // 销售
            SalesAgreementSubmitData: {},
            SalesAgreementInitMsg: {},
            // 催款函
            CollectionLettersSubmitData: {},
            CollectionLettersInitMsg: {},
            // 和解协议
            CompromiseSubmitData: {},
            CompromiseInitMsg: {}
        }
    },
    methods: {
        // 债权转让协议
        async InitAssignment () {
            // 获取债权转让协议信息
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
            this.AssignmentInitMsg = result.data
            // 获取债权转让协议信息
            const propertId = window.sessionStorage.getItem('propertId')
            const SubDataformData = new FormData()
            SubDataformData.append('propertId', propertId)
            const { data: SubDataResult } = await this.$http({
                method: 'post',
                url: '/api/api/busAssignmentAgreementController/selectByProId',
                data: SubDataformData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            this.AssignmentSubmitData = SubDataResult.data
        },
        // 转让确认
        async InitConfirmAssignment () {
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
            this.ConfirmAssignmentInitMsg = result.data
            // 获取债权转让协议信息
            const propertId = window.sessionStorage.getItem('propertId')
            const SubDataformData = new FormData()
            SubDataformData.append('propertId', propertId)
            const { data: SubDataResult } = await this.$http({
                method: 'post',
                url: '/api/api/BusAssignmentConfirmController/selectByPropertId',
                data: SubDataformData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            this.ConfirmAssignmentSubmitData = SubDataResult.data
        },
        // 债权转让确认
        async InitDebtConfirm () {
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
            this.DebtConfirmInitMsg = result.data
            // 获取债权确认信息
            const propertId = window.sessionStorage.getItem('propertId')
            const SubDataformData = new FormData()
            SubDataformData.append('propertId', propertId)
            const { data: SubDataResult } = await this.$http({
                method: 'post',
                url: '/api/api/busConfirmController/selectByPropertId',
                data: SubDataformData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            this.DebtConfirmSubmitData = SubDataResult.data
        },
        // 资产债权转让通知书
        async InitNotification () {
            const relativePerId = window.sessionStorage.getItem('relativePerId')
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
            this.NotificationInitMsg = result.data
            // 获取债权确认信息
            const propertId = window.sessionStorage.getItem('propertId')
            const SubDataformData = new FormData()
            SubDataformData.append('propertId', propertId)
            const { data: SubDataResult } = await this.$http({
                method: 'post',
                url: '/api/api/busAssignmentNoticeController/selectByPropertId',
                data: SubDataformData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            this.NotificationSubmitData = SubDataResult.data
        },
        // 销售合同
        async InitSalesAgreement () {
            const relativePerId = window.sessionStorage.getItem('relativePerId')
            const formData = new FormData()
            formData.append('relativePerId', relativePerId)
            const { data: result } = await this.$http({
                method: 'post',
                url: '/api/api/busAgentSalesContractController/initialize',
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            this.SalesAgreementInitMsg = result.data
            // 获取债权确认信息
            const propertId = window.sessionStorage.getItem('propertId')
            const SubDataformData = new FormData()
            SubDataformData.append('propertId', propertId)
            const { data: SubDataResult } = await this.$http({
                method: 'post',
                url: '/api/api/busAgentSalesContractController/selectByPropertId',
                data: SubDataformData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            this.SalesAgreementSubmitData = SubDataResult.data
        },
        // 催款函
        async InitCollectionLetters () {
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
            this.CollectionLettersInitMsg = result.data
            // 获取债权确认信息
            const propertId = window.sessionStorage.getItem('propertId')
            console.log(propertId)
            const SubDataformData = new FormData()
            SubDataformData.append('propertId', propertId)
            const { data: SubDataResult } = await this.$http({
                method: 'post',
                url: '/api/api/busCollectionLetterController/selectByPropertId',
                data: SubDataformData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            this.CollectionLettersSubmitData = SubDataResult.data
        },
        // 和解协议
        async InitCompromise () {
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
            this.CompromiseInitMsg = result.data
            // 获取债权确认信息
            const propertId = window.sessionStorage.getItem('propertId')
            const SubDataformData = new FormData()
            SubDataformData.append('propertId', propertId)
            const { data: SubDataResult } = await this.$http({
                method: 'post',
                url: '/api/api/busCompromiseAgreementController/selectByPropertId',
                data: SubDataformData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            this.CompromiseSubmitData = SubDataResult.data
            console.log(this.CompromiseSubmitData)
        },
        RejectCheck () {
            if (!this.SubmitApproveData.checkReason) return this.$message.error('请先填写审核原因')
            this.UpdateCheckStatus('5').then(() => {
                const PropertFormData = new FormData()
                PropertFormData.append('propertId', window.sessionStorage.getItem('propertId'))
                PropertFormData.append('stage', '1')
                this.$http({
                    method: 'post',
                    url: '/api/api/busPropertController/updateStage',
                    data: PropertFormData,
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }).then(PropertStatusResult => {
                    if (PropertStatusResult.resultCode !== '200') return this.$message.error('更改资产阶段失败, 请重试')
                    this.$message.success(PropertStatusResult.resultMessage)
                })
            })
        },
        PassCheck () {
            this.UpdateCheckStatus('6')
        },
        // 提交审批状态
        async UpdateCheckStatus (status) {
            const formData = new FormData()
            this.SubmitApproveData.status = status
            this.SubmitApproveData.propertId = window.sessionStorage.getItem('propertId')
            for (const key in this.SubmitApproveData) {
                formData.append(key, this.SubmitApproveData[key])
            }
            const { data: result } = await this.$http({
                method: 'post',
                url: '/api/api/busPropertController/updateStatus',
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            if (result.data !== '0' && result.resultCode === '200') {
                this.$message.success(result.resultMessage)
            } else {
                this.$message.error(result.resultMessage)
            }
        }
    },
    created () {
        this.InitAssignment()
        this.InitConfirmAssignment()
        this.InitDebtConfirm()
        this.InitNotification()
        this.InitSalesAgreement()
        this.InitCollectionLetters()
        this.InitCompromise()
    },
    computed: {
        Address: function () {
            if (this.SalesAgreementInitMsg.reportPropert === '1') {
                return this.SalesAgreementInitMsg.priAdd
            } else {
                return this.SalesAgreementInitMsg.corBankAdd
            }
        },
        Phone: function () {
            if (this.SalesAgreementInitMsg.reportPropert === '1') {
                return this.SalesAgreementInitMsg.priPhone
            } else {
                return this.SalesAgreementInitMsg.corBankPhone
            }
        }
    }
}

</script>
<style lang='scss' scoped>
@import '@css/style.scss';
.asset-information-approve {
    display: flex;
    flex-direction: column;
    background-color: #E9F0F5;
    height: 100%;
    width: 100%;
    input:disabled {
        background-color: #E0E3F8;
    }
    &-title {
        height: px2rem(12);
        line-height: px2rem(12);
        font-size: px2rem(4);
        color: #FC7F89;
        margin: px2rem(1) px2rem(4);
        &-go1 {
            color: #616789;
        }
        &-separator {
            color: #616789
        }
    }

    &-container {
        margin: px2rem(1) px2rem(4);
        &-form {
            border-radius: px2rem(2);
            background-color: #fff;
            padding: px2rem(2) px2rem(6);
            font-size: px2rem(3.2);
            input[type=radio] {
                width: px2rem(4)!important;
                height: px2rem(4)!important;
                line-height: px2rem(4)!important;
                margin: px2rem(1)!important;
                vertical-align: middle;
                background-color: #fff
            }
            input{
                font-size: px2rem(3.5);
                border:1px solid #E8EAEC;
                border-radius: px2rem(1);
                height: px2rem(6);
                padding-left: px2rem(2);
                margin: px2rem(2);
            }
            &-new {
                width: 100%;
                button {
                    width: px2rem(18);
                    font-size: px2rem(3.5);
                    border: none;
                    background-color: #FC7F89;
                    color: #fff;
                    padding: px2rem(1) px2rem(2);
                    border-radius: px2rem(1);
                }
            }
            // asset-information-approve-container-form-table-1-item
            &-table-1-title {
                margin-top: px2rem(4);
                display: flex;
                span {
                    text-align: center;
                    color:#fff;
                    background-color: #616789;
                    border: 0.5px solid #fff;
                    box-sizing: border-box;
                    display: inline-block;
                    height: px2rem(8);
                    line-height: px2rem(8);
                }
                :nth-child(1) {
                    flex: 1;
                }
                :nth-child(2) {
                    flex: 4;
                }
                :nth-child(6) {
                    flex: 2.5;
                }
                :nth-child(3),:nth-child(4),:nth-child(5) {
                    flex: 5.5;
                }
                :nth-child(7) {
                    flex: 4;
                }
            }
            &-table-1 {
                &-item {
                    display: flex;
                    justify-content: space-around;
                    line-height: px2rem(7);
                    span {
                        text-align: center;
                        border: 1px solid #fff;
                        box-sizing: border-box;
                    }
                    :nth-child(1) {
                        flex: 1;
                    }
                    :nth-child(2) {
                        flex: 4;
                    }
                    :nth-child(6) {
                        flex: 2.5;
                    }
                    :nth-child(3),:nth-child(4),:nth-child(5) {
                        flex: 5.5;
                    }
                    :nth-child(7) {
                        flex: 4;
                        button {
                            flex:1 ;
                            font-size: px2rem(2);
                            margin: px2rem(6);
                            border: none;
                            height: px2rem(5);
                            line-height: px2rem(5);
                            border-radius: px2rem(1);
                            color: #fff;
                            width: px2rem(10);
                            margin: 0 px2rem(3);
                        }
                        :first-child {
                            background-color: #616789;
                        }
                        :last-child {
                            background-color: #FC7F89;
                        }
                    }
                }
                div:nth-child(odd) {
                    background-color: #fff;
                }
                div:nth-child(even) {
                    background-color: #E0E3F8;
                    span {
                        border: 1px solid #E0E3F8;
                    }
                }
            }
            &-select {
                .el-select {
                    width: px2rem(70);
                }
            }
            &-submit {
                text-align: center;
                margin-top: px2rem(6);
                button {
                    font-size: px2rem(3.2);
                    width: px2rem(50);
                    height: px2rem(8);
                    background-color: #616789;
                    color: #fff;
                    border: none;
                    border-radius: px2rem(1);
                }
            }
            h3 {
                margin: px2rem(2) 0;
            }
            &-debtor-1 {
                display: flex;
                div {
                    flex: 1
                }
                :nth-child(1) {
                    input{
                        width: px2rem(50);
                    }
                }
                :nth-child(2) {
                    input{
                        width: px2rem(60);
                    }
                }
                :nth-child(3) {
                    input{
                        width: px2rem(58);
                    }
                }
            }
            &-debtor-2 {
                display: flex;
                div {
                    flex: 1
                }
                :nth-child(1) {
                    input{
                        width: px2rem(73.7);
                    }
                }
                :nth-child(2) {
                    input{
                        width: px2rem(74);
                    }
                }
            }
            &-relative-1 {
                display: flex;
                div {
                    flex: 1
                }
                :nth-child(1) {
                    input{
                        width: px2rem(50);
                    }
                }
                :nth-child(2) {
                    input{
                        width: px2rem(60);
                    }
                }
                :nth-child(3) {
                    input{
                        width: px2rem(58);
                    }
                }
            }
            &-relative-2 {
                display: flex;
                div {
                    flex: 1
                }
                :nth-child(1) {
                    input{
                        width: px2rem(73.7);
                    }
                }
                :nth-child(2) {
                    input{
                        width: px2rem(74);
                    }
                }
            }
            &-relative-3 {
                display: flex;
                div {
                    flex: 1
                }
                :nth-child(1),:nth-child(2) {
                    .el-select {
                        width: px2rem(71);
                    }
                }
                :nth-child(3) {
                    .el-select {
                        width: px2rem(49);
                        margin: 0 px2rem(2);
                    }
                }
            }
            &-new-guarantor {
                button {
                    border: none;
                    font-size: px2rem(3.5);
                    background-color: #616789;
                    color: #fff;
                    padding: px2rem(1) px2rem(2);
                    border-radius: px2rem(1);
                }
            }
            &-table-2-title {
                margin-top: px2rem(4);
                display: flex;
                height: px2rem(6)I;
                span {
                    text-align: center;
                    color:#fff;
                    background-color: #616789;
                    border: 0.5px solid #fff;
                    box-sizing: border-box;
                    display: inline-block;
                    height: px2rem(8);
                    line-height: px2rem(8);
                }
                :nth-child(1) {
                    flex: 1.1;
                }
                :nth-child(2),:nth-child(5),:nth-child(6) {
                    flex: 2;
                }
                :nth-child(3),:nth-child(4),:nth-child(7) {
                    flex: 3
                }
            }
            &-table-2 {
                &-item {
                    display: flex;
                    justify-content: space-around;
                    line-height: px2rem(7);
                    span {
                        flex: 3;
                        text-align: center;
                        border: 1px solid #fff;
                        box-sizing: border-box;
                    }
                    :nth-child(1) {
                        flex: 1.1;
                    }
                    :nth-child(2),:nth-child(5),:nth-child(6) {
                        flex: 2;
                    }
                    :nth-child(3),:nth-child(4),:nth-child(7) {
                        flex: 3
                    }
                    :nth-child(7) {
                        button {
                            font-size: px2rem(2);
                            margin: px2rem(6);
                            border: none;
                            height: px2rem(5);
                            line-height: px2rem(5);
                            border-radius: px2rem(1);
                            color: #fff;
                            width: px2rem(12);
                            margin: 0 px2rem(3);
                        }
                        :first-child {
                            background-color: #616789;
                        }
                        :last-child {
                            background-color: #FC7F89;
                        }
                    }
                }
                div:nth-child(odd) {
                    background-color: #fff;
                }
                div:nth-child(even) {
                    background-color: #E0E3F8;
                    span {
                        border: 1px solid #E0E3F8;
                    }
                }
            }
            &-defuse-1 {
                display: flex;
                div {
                    flex: 1
                }
                :nth-child(1) {
                    input {
                        width: px2rem(70);
                    }
                }
                :nth-child(2) {
                    input {
                        width: px2rem(58.5);
                    }
                }
                :nth-child(3) {
                    color:#FF0000;
                    line-height: px2rem(8);
                }
            }
            &-defuse-2 {
                display: flex;
                div {
                    flex: 1
                }
                :nth-child(1) {
                    input {
                        width: px2rem(41.5);
                    }
                }
                :nth-child(2) {
                    input {
                        width: px2rem(42.5);
                    }
                }
            }
            // form2 债事咨询服务协议
            &-serve-agreement-debtor-1 {
                display: flex;
                div {
                    flex: 1
                }
                :nth-child(1) {
                    input {
                        width: px2rem(64);
                    }
                }
                :nth-child(2) {
                    input {
                        width: px2rem(44);
                    }
                }
                :nth-child(3) {
                    input {
                        width: px2rem(67.5);
                    }
                }
            }
            &-serve-agreement-debtor-2 {
                display: flex;
                div {
                    flex: 1
                }
                :nth-child(1) {
                    input {
                        width: px2rem(73.7);
                    }
                }
                :nth-child(2) {
                    input {
                        width: px2rem(74);
                    }
                }
            }
            &-serve-agreement-relative-1 {
                display: flex;
                div {
                    flex: 1
                }
                :nth-child(1) {
                    input {
                        width: px2rem(64);
                    }
                }
                :nth-child(2) {
                    input {
                        width: px2rem(44);
                    }
                }
                :nth-child(3) {
                    input {
                        width: px2rem(67.5);
                    }
                }
            }
            &-serve-agreement-relative-2 {
                display: flex;
                div {
                    flex: 1
                }
                :nth-child(1) {
                    input {
                        width: px2rem(73.7);
                    }
                }
                :nth-child(2) {
                    input  {
                        width: px2rem(74);
                    }
                }
            }
            &-serve-agreement-commitment-1 {
                display: flex;
                div {
                    flex: 1
                }
                :nth-child(1) {
                    input {
                        width: px2rem(67.5);
                    }
                }
                :nth-child(2) {
                    box-sizing: border-box;
                    padding-right: px2rem(3.5);
                    font-size: px2rem(3);
                    height: px2rem(8);
                    line-height: px2rem(8);
                    input {
                        width: px2rem(44);
                    }
                }
                :nth-child(3) {
                    .el-select {
                        width: px2rem(58.5);
                    }
                }
            }
            &-serve-agreement-commitment-2 {
                display: flex;
                div {
                    flex: 1
                }
                :nth-child(1) {
                    input  {
                        width: px2rem(67.5);
                    }
                }
                :nth-child(2) {
                    box-sizing: border-box;
                    padding-right: px2rem(3.5);
                    font-size: px2rem(3);
                    height: px2rem(8);
                    line-height: px2rem(8);
                    input {
                        width: px2rem(44);
                    }
                }
                :nth-child(3) {
                    input {
                        width: px2rem(67.5);
                    }
                }
            }
            &-serve-agreement-commitment-3 {
                display: flex;
                div {
                    flex: 1
                }
                :nth-child(1) {
                    input  {
                        width: px2rem(42);
                    }
                }
                :nth-child(2) {
                    input  {
                        width: px2rem(42);
                    }
                }
            }
            &-serve-agreement-service-charge-1{
                display: flex;
                div {
                    flex: 1
                }
                :nth-child(1) {
                    input  {
                        width: px2rem(60.3);
                    }
                }
                :nth-child(2),:nth-child(3) {
                    input  {
                        width: px2rem(45.7);
                    }
                }
            }
            &-serve-agreement-service-charge-2 {
                display: flex;
                div {
                    flex: 1
                }
                :nth-child(1) {
                    input  {
                        width: px2rem(54.5);
                    }
                }
                :nth-child(2),:nth-child(3) {
                    input  {
                        width: px2rem(58.5);
                    }
                }
            }
            &-serve-agreement-mailing-address-1{
                display: flex;
                div {
                    flex: 1
                }
                :nth-child(1) {
                    input  {
                        width: px2rem(60.5);
                    }
                }
                :nth-child(2){
                    input  {
                        width: px2rem(58.5);
                    }
                }
                :nth-child(3) {
                    input  {
                        width: px2rem(55.5);
                    }
                }
            }
            &-serve-agreement-mailing-address-2 {
                display: flex;
                div {
                    flex: 1
                }
                :nth-child(1) {
                    input {
                        width: px2rem(60.5);
                    }
                }
                :nth-child(2){
                    input {
                        width: px2rem(58.5);
                    }
                }
                :nth-child(3) {
                    input {
                        width: px2rem(55.5);
                    }
                }
            }
            &-updata {
                button {
                    width: px2rem(18);
                    font-size: px2rem(3.5);
                    border: none;
                    background-color: #616789;
                    color: #fff;
                    padding: px2rem(1) px2rem(2);
                    border-radius: px2rem(1);
                }
            }
            &-table-3-title {
                margin-top: px2rem(4);
                display: flex;
                height: px2rem(6)I;
                span {
                    text-align: center;
                    color:#fff;
                    background-color: #616789;
                    border: 0.5px solid #fff;
                    box-sizing: border-box;
                    display: inline-block;
                    height: px2rem(8);
                    line-height: px2rem(8);
                }
                :nth-child(1) {
                    flex: 1.1;
                }
                :nth-child(2),:nth-child(4) {
                    flex: 3;
                }
                :nth-child(3) {
                    flex: 8
                }
            }
            &-table-3 {
                &-item {
                    display: flex;
                    justify-content: space-around;
                    line-height: px2rem(7);
                    span {
                        text-align: center;
                        border: 1px solid #fff;
                        box-sizing: border-box;
                    }
                    :nth-child(1) {
                        flex: 1.1;
                    }
                    :nth-child(2){
                        flex: 3;
                    }
                    :nth-child(3){
                        flex: 8
                    }
                    :nth-child(4) {
                        flex: 3;
                        button {
                            font-size: px2rem(2);
                            margin: px2rem(6);
                            border: none;
                            height: px2rem(5);
                            line-height: px2rem(5);
                            border-radius: px2rem(1);
                            color: #fff;
                            width: px2rem(12);
                            margin: 0 px2rem(3);
                            background-color: #FC7F89;
                        }
                    }
                }
                div:nth-child(odd) {
                    background-color: #fff;
                }
                div:nth-child(even) {
                    background-color: #E0E3F8;
                    span {
                        border: 1px solid #E0E3F8;
                    }
                }
            }
            // 策划方案服务协义
            &-plan-agreement {
                // 默认表单宽度 为200
                input {
                    width: px2rem(40);
                    background-color: #F2F6F9;
                }
                // placehoder位置居中
                input ::-ms-input-placeholder {
                    text-align: center;
                }
                input ::-webkit-input-placeholder {
                    text-align: center;
                }
                // 小型表单宽度
                &-input100 {
                    width: px2rem(20)!important;
                }
                &-title {
                    border-top: 1px solid #F2F2F2;
                    text-align: center;
                    font-size: px2rem(4);
                    height: px2rem(20);
                    line-height: px2rem(20);
                    font-weight: 600;
                }
                &-introduce-part-a {
                    input::-ms-input-placeholder {
                        text-align: left!important;
                    }
                    input::-webkit-input-placeholder {
                        text-align: left!important;
                    }
                    height: px2rem(42);
                    line-height: px2rem(10);
                    margin-bottom: px2rem(4);
                    input{
                        margin: px2rem(1);
                    }
                    div:nth-child(1) {
                        input{
                            width: px2rem(80);
                        }
                    }
                    div:nth-child(2) {
                        input {
                            width: px2rem(56.5);
                        }
                    }
                    div:nth-child(3) {
                        input {
                            width: px2rem(78.8);
                        }
                    }
                    div:nth-child(4) {
                        input {
                            width: px2rem(85.2);
                        }
                    }
                }
                &-introduce-part-b {
                    height: px2rem(22);
                    line-height: px2rem(5);
                }
                &-address {
                    input {
                        background-color: #fff!important;
                    }
                    div:nth-child(1) {
                        input{
                            width: px2rem(60);
                        }
                    }
                    div:nth-child(2) {
                        input{
                            width: px2rem(63);
                        }
                    }
                    div:nth-child(3) {
                        input{
                            width: px2rem(60);
                        }
                    }
                }
                &-sign {
                    margin-top: px2rem(10);
                    display: flex;
                    width: px2rem(220);
                    input {
                        background-color: #fff;
                    }

                    button {
                        font-size: px2rem(3.2);
                        width: px2rem(22);
                        height: px2rem(6);
                        background-color: #616789;
                        color: #fff;
                        border: none;
                        border-radius: px2rem(1);
                    }
                    &-left {
                        flex: 1;
                        position: relative;
                        img {
                            position: absolute;
                            width: px2rem(25);
                            left: 0;
                            top: 0;
                        }
                        div:nth-child(1) {
                            input {
                                width: px2rem(50);
                            }
                        }
                        div:nth-child(3) {
                            input {
                                width: px2rem(52.4);
                            }
                        }
                        &-seal {
                            height: px2rem(7);
                            width: px2rem(22)!important;
                            position: absolute;
                            left: px2rem(30);
                            opacity: 0;
                            margin: 0 !important;
                        }
                    }
                    &-right {
                        flex: 1;
                        position: relative;
                        img {
                            position: absolute;
                            width: px2rem(25);
                            left: 0;
                            top: 0;
                        }
                        div:nth-child(1) {
                            input {
                                width: px2rem(50);
                            }
                        }
                        div:nth-child(3) {
                            input {
                                width: px2rem(52);
                            }
                        }
                        div:nth-child(4) {
                            input {
                                width: px2rem(50);
                            }
                        }
                        &-seal {
                            height: px2rem(7);
                            width: px2rem(22)!important;
                            position: absolute;
                            left: px2rem(30);
                            opacity: 0;
                            margin: 0 !important;
                        }
                    }
                }
                // &-plan-agreement-content {
            }
            // }
            &-determine3 {
                margin-top: px2rem(10);
                text-align: center;
                button {
                    font-size: px2rem(3.2);
                    width: px2rem(50);
                    height: px2rem(8);
                    background-color: #616789;
                    color: #fff;
                    border: none;
                    border-radius: px2rem(1);
                }
            }
            // 确定按钮
            &-determine {
                margin-top: px2rem(6);
                button {
                    font-size: px2rem(3.2);
                    width: px2rem(50);
                    height: px2rem(8);
                    background-color: #616789;
                    color: #fff;
                    border: none;
                    border-radius: px2rem(1);
                }
            }
        }
    }
    &-pop-relative {
        position: fixed;
        width: 100vw;
        height: 100vh;
        background-color:rgba(0,0,0,.4);
        &-box {
            position: absolute;
            background-color:#ffffff;
            width: px2rem(100);
            height: px2rem(40);
            top: 45%;
            left: 45%;
            transform: translate(-50%,-50%);
            border-radius: px2rem(2);
            &-header {
                height: px2rem(10);
                background-color: #616789;
                display: flex;
                justify-content: space-between;
                font-size: px2rem(3.5);
                align-items: center;
                padding: 0 px2rem(4);
                box-sizing: border-box;
                color: #fff;
                img {
                    width: px2rem(3);
                    height: px2rem(3);
                }
            }
            &-body {
                margin: px2rem(6) px2rem(4);
                display: flex;
                align-items: center;
                font-size: px2rem(4);
                .el-select {
                    width: px2rem(55);
                }
            }
            &-footer {
                display: flex;
                justify-content: space-around;
                button {
                    padding: px2rem(1) px2rem(4);
                    border: 1px solid #616789;
                    border-radius: px2rem(1);
                }
                :nth-child(1) {
                    color: #616789;
                    background-color: #fff;
                }
                :nth-child(2) {
                    color: #ffffff;
                    background-color: #616789;
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
