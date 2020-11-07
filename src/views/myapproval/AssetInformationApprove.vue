<!--  -->
<template>
  <div class='asset-information-approve'>
        <div class='asset-information-approve-title'>
            <span class='asset-information-approve-title-go1'>我的审批</span>
            <span class='asset-information-approve-title-separator'> / </span>
            <span class='asset-information-approve-title-go2'>{{IsEditPage? '资产资料信息编辑' : '资产资料信息审批'}}</span>
        </div> 
        <div class='asset-information-approve-container'>
            <div class='asset-information-approve-container-form'>
                <el-collapse>
                    <!-- 资产转让协议 -->
                    <el-collapse-item title="资产转让协议" name="1">
                        <div class='promise-content-main-title'>
                            <span>债权转让协议</span>
                        </div>
                        <el-row :gutter="24">
                            <el-col :span="8">
                                <span class='col-label'>协议编号：</span>
                                <el-input type="text" :value='AssignmentInitMsg.assignmentAgreementNo' :disabled='true'></el-input>
                            </el-col>
                        </el-row>
                        <el-row :gutter="24">
                            <el-col :span="8">
                                <span class='col-label'>甲方:</span>
                                <el-input type="text" :value='AssignmentInitMsg.debtName' :disabled='true'></el-input>
                            </el-col>
                        </el-row>
                        <el-row :gutter="24">
                            <el-col :span="8">
                                <span class='col-label'>身份证号码统一社会信用代码：:</span>
                                <el-input type="text" :value='AssignmentInitMsg.idCard' :disabled='true'></el-input>
                            </el-col>
                        </el-row>
                        <el-row :gutter="24">
                            <el-col :span="8">
                                <span class='col-label'>联系地址：</span>
                                <el-input type="text" :value='AssignmentInitMsg.priAdd' :disabled='true'></el-input>
                            </el-col>
                        </el-row>
                        <el-row :gutter="24">
                            <el-col :span="8">
                                <span class='col-label'>联系电话：</span>
                                <el-input type="text" :value='AssignmentInitMsg.priPhone' :disabled='true'></el-input>
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
                            1.甲方作为债权人与债务人<el-input type="text" :disabled='true' class='input1' :value='AssignmentInitMsg.personName' style='width: 100px'></el-input>于<el-input type="text" class='input1' :value='ObligatYear' :disabled='true' style='width: 100px'></el-input>年<el-input :disabled='true' type="text" class='input1' style='width: 100px' :value='ObligatMonth'></el-input>月<el-input type="text" style='width: 100px' :value='ObligatDay' :disabled='true'></el-input>日签订《借款合同》，甲方对债务人拥有要求偿还包括但不限于本金、利息、罚息、复利、违约金及费用等各项权利(以下简称“标的债权”)。现甲乙双方一致同意由乙方受让标的债权，双方经友好协商，就债权转让相关事宜达成一致意见，特签订本协议，以资共同遵守。
                        </div>
                        <h3>一、债权转让标的物</h3>
                        <div class='promise-content-main-text'>
                            甲方自愿将标的债权（截至
                            <el-input type="text" class='input1' :value='thisTimeYear' :disabled='true' style='width: 100px'></el-input>年
                            <el-input  type="text" class='input1' :disabled='true' :value='thisTimeMonth' style='width: 100px'></el-input>月
                            <el-input type="text" :disabled='true' :value='thisTimeDay' style='width: 100px'></el-input>日
                            转让给乙方，标的债权金额为人民币人民币<el-input type="text" :disabled='true' :value='AssignmentInitMsg.amountThis' style='width: 200px'></el-input>元,其中包括
                            本金<el-input type="text" :disabled='true' style='width: 200px' :value='AssignmentInitMsg.servicePrincipal'></el-input>元,
                            利息<el-input type="text" :disabled='true' style='width: 200px' :value='AssignmentInitMsg.serviceInterest'></el-input>元)转让给乙方,乙方同意受让。
                        </div>
                        <h3>二、债权转让对价及支付</h3>
                        <div class='promise-content-main-text'>
                            （一）作为甲方转让标的债权的对价，乙方向甲方交付价值为<el-input type="text" :disabled='true' :value='AssignmentInitMsg.amountThis' style='width: 200px'></el-input>元的资产（详见本协议附件《对价资产明细》），该对价资产已包含甲方履行本协议可能产生的全部费用。对价资产若为不动产的，由乙方协助过户至甲方名下；对价资产若为动产的，由甲方自行提取。<br/>
                            （二）鉴于乙方以与标的债权相等价值的资产作为对价受让标的债权，而标的债权收回具有不确定性、长周期性及其他各种追索风险。鉴此，为衡平双方利益，甲方自愿另行向乙方支付现金人民币<el-input type="text" :disabled='true' :value='AssignmentInitMsg.money' style='width: 200px'></el-input>元。乙方指定收款银行帐户<br>
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
                            <el-col :span="6">
                                <span class='col-label'>甲方：</span>
                                <el-input type="text" :value='AssignmentInitMsg.personName' :disabled='true'></el-input>
                            </el-col>
                            <el-col :span="3">
                                <span class='col-label'></span>
                            </el-col>
                            <el-col :span="6">
                                <span class='col-label'>乙方：</span>
                                <el-input type="text" :value="'深圳市金隆盛投资管理有限公司'" :disabled='true'></el-input>
                            </el-col>
                        </el-row>
                        <el-row :gutter="24">
                            <el-col :span="6">
                                <span class='col-label'>日期：</span>
                                <el-input type="text" :value='AssignmentInitMsg.thisTime' :disabled='true'></el-input>
                            </el-col>
                            <el-col :span="3">
                                <span class='col-label'></span>
                            </el-col>
                            <el-col :span="6">
                                <span class='col-label'>日期：</span>
                                <el-input type="text" :value='AssignmentInitMsg.thisTime' :disabled='true'></el-input>
                            </el-col>
                        </el-row>
                        <el-row :gutter="24">
                            <el-col :span="9">
                            </el-col>
                            <el-col :span="6">
                                <span>协议签约地：重庆市渝中区</span>
                            </el-col>
                        </el-row>
                    </el-collapse-item>
                    <!-- 资产债权转让确认 -->
                    <el-collapse-item title="资产债权转让确认" name="2">
                        <div class='confirm-assignment-content-main-title'>
                            债权转让确认书
                        </div>
                        <div class='confirm-assignment-content-main-text'>
                            编号：<el-input :disabled='true' type="text" :value='ConfirmAssignmentInitMsg.confirmNo' class='input-300' style='width: 300px'></el-input><br>
                            根据<el-input :disabled='true' type="text" :value='ConfirmAssignmentInitMsg.debtName'></el-input>与深圳市金隆盛投资管理有限公司签订的《债权转让协议》（协议编号：<el-input :disabled='true' type="text" :value='ConfirmAssignmentInitMsg.assignmentAgreementNo'></el-input>），现各方对该协议项下债权转让作出如下确认：<br/>
                            二、原债权人<el-input type="text" :disabled='true' :value='ConfirmAssignmentInitMsg.debtName'></el-input>依法享有本确认书附表列明的债权债务合同项下所有权利（以下简称“标的债权”)，包括但不限于本金、利息、罚息、复利、违约金及费用等，截至
                            <el-input :disabled='true' type="text" class='input-100' :value='contractTimeYear'></el-input>年
                            <el-input :disabled='true' class='input-100' type="text" :value='contractTimeMonth'></el-input>月
                            <el-input :disabled='true' class='input-100' type="text" :value='contractTimeDay'></el-input>日，标的债权金额为人民币<el-input type="text" :value='ConfirmAssignmentInitMsg.amountThis' :disabled='true'></el-input>元。该标的债权已由原债权人转归深圳市金隆盛投资管理有限公司享有。<br/>
                            二、原债权人<el-input type="text" :disabled='true' :value='ConfirmAssignmentInitMsg.debtName'></el-input>债务人<el-input :disabled='true' type="text" :value='ConfirmAssignmentInitMsg.personName'></el-input>担保人
                            <span>
                                <el-input :disabled='true' type="text" :value='item' v-for='(item,index) in ConfirmAssignmentInitMsg.authName' :key='index' style='margin: 0 5px'></el-input>
                            </span>
                            均确认《债权转让协议》（协议编号：<el-input :disabled='true' type="text" :value='ConfirmAssignmentInitMsg.assignmentAgreementNo' class='input-300'></el-input>）生效后，原债权人<el-input type="text" :disabled='true' :value='ConfirmAssignmentInitMsg.debtName'></el-input>在本确认书附表列明的债权债务合同及担保合同项下的所有权利转归深圳市金隆盛投资管理有限公司享有，深圳市金隆盛投资管理有限公司承继该等合同项下的所有权利，债务人、担保人继续向深圳市金隆盛投资管理有限公司履行该等合同约定的所有义务。<br/>
                            特此确认。
                        </div>
                        <div class='confirm-assignment-content-main-container'>
                            <el-row :gutter="24">
                                <el-col :span="6">
                                    <span class='col-label'>债权人：</span>
                                    <el-input type="text" :value='ConfirmAssignmentInitMsg.debtName' :disabled='true'></el-input>
                                </el-col>
                                <el-col :span="2">
                                    <span></span>
                                </el-col>
                                <el-col :span="6">
                                    <span class='col-label'>债务人：</span>
                                    <el-input type="text" :value='ConfirmAssignmentInitMsg.personName' :disabled='true'></el-input>
                                </el-col>
                            </el-row>
                            <el-row :gutter="24">
                                <el-col :span="6">
                                    <span class='col-label'>日期：</span>
                                    <el-input type="text" :value='ConfirmAssignmentInitMsg.thisTime' :disabled='true'></el-input>
                                </el-col>
                                <el-col :span="2">
                                    <span></span>
                                </el-col>
                                <el-col :span="6">
                                    <span class='col-label'>日期：</span>
                                    <el-input type="text" :value='ConfirmAssignmentInitMsg.thisTime' :disabled='true'></el-input>
                                </el-col>
                            </el-row>
                            <el-row style="margin-top: 40px">
                                <el-col :span="6">
                                    <span class='col-label'>担保人：</span>
                                    <el-input :disabled='true' type="text" :value='item' v-for='(item,index) in ConfirmAssignmentInitMsg.authName' :key='index' style='margin: 0 5px'></el-input>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="6">
                                    <span class='col-label'>日期：</span>
                                    <el-input type="text" :value='ConfirmAssignmentInitMsg.thisTime' :disabled='true'></el-input>
                                </el-col>
                            </el-row>
                        </div>
                    </el-collapse-item>
                    <!-- 资产债权确认 -->
                    <el-collapse-item title="资产债权确认" name="3">
                        <div class='debt-confirm-content-main'>
                            <div class='debt-confirm-content-main-title'>
                                债权确认书
                            </div>
                            <div class='debt-confirm-content-main-text'>
                                编号：<el-input style='width: 300px' :disabled='true' :value='DebtConfirmInitMsg.confirmNo'></el-input><br/>
                                致：<el-input :disabled='true' :value='DebtConfirmInitMsg.personName'></el-input><br/>
                                根据<el-input :disabled='true' :value='DebtConfirmInitMsg.debtName'></el-input>
                                （简称“债权转让方”）与我司签订的《债权转让协议》（编号:<el-input :disabled='true' :value='DebtConfirmInitMsg.assignmentAgreementNo' style='width: 300px'></el-input>，
                                债权转让方已依法将《借款合同》项下对贵方的所有权利转让给我司，包括但不限于本金、利息、罚息、复利、违约金及费用等。截止<el-input :disabled='true' style='width: 100px' :value='contractTimeYear'></el-input>年
                                <el-input :disabled='true' style='width: 100px' :value='contractTimeMonth'></el-input>月
                                <el-input :disabled='true' style='width: 100px' :value='contractTimeDay'></el-input>日
                                ，标的债权金额为人民币<el-input :disabled='true' :value='DebtConfirmInitMsg.amountThis'></el-input>元，其中包括
                                本金合计<el-input :disabled='true' :value='DebtConfirmInitMsg.servicePrincipal'></el-input>元
                                ,利息合计<el-input :disabled='true' :value='DebtConfirmInitMsg.serviceInterest'></el-input>元。
                                现我司特向贵方您发函确认，请贵方确认上述标的债权以及担保是否真实、有效,债权金额是否准确，若该债权真实、有效,债权金额准确，请在下方债务人处签字或盖章确认。
                            </div>
                            <div class='debt-confirm-content-main-container'>
                                <el-row :gutter="24">
                                    <el-col :span="6">
                                        <span class='col-label'>债权受让方：深圳市金隆盛投资管理有限公司</span>
                                    </el-col>
                                    <el-col :span="2">
                                        <span></span>
                                    </el-col>
                                    <el-col :span="6">
                                        <span class='col-label'>债务人盖章：</span>
                                        <el-button type='primary' size='mini'>上传电子章</el-button>
                                    </el-col>
                                </el-row>
                                <el-row :gutter="24">
                                    <el-col :span="6">
                                        <span class='col-label'>日期：</span>
                                        <el-input :disabled='true' :value='DebtConfirmInitMsg.contractTime'></el-input>
                                    </el-col>
                                    <el-col :span="2">
                                        <span></span>
                                    </el-col>
                                    <el-col :span="6">
                                        <span class='col-label'>债务人签字：</span>
                                        <el-input :disabled='true' :value='DebtConfirmInitMsg.personName'></el-input>
                                    </el-col>
                                </el-row>
                                <el-row :gutter="24">
                                    <el-col :span="8">
                                        <span></span>
                                    </el-col>
                                    <el-col :span="6">
                                        <span class='col-label'>日期：</span>
                                        <el-input :disabled='true' :value='DebtConfirmInitMsg.contractTime'></el-input>
                                    </el-col>
                                </el-row>
                            </div>
                        </div>
                    </el-collapse-item>
                    <!-- 资产债权转让通知书 -->
                    <el-collapse-item title="资产债权转让通知书" name="4">
                        <div class='notification-content-main'>
                            <div class='notification-content-main-title'>
                                债权转让通知书
                            </div>
                            编号： <el-input :disabled='true' style='width: 300px' :value='NotificationInitMsg.noticeNo'></el-input>：<br/>
                            <div class='notification-content-main-input'>
                                <el-input :disabled='true' :value='NotificationInitMsg.personName'></el-input>：
                            </div>
                            <div>我方享有的对你方如下债权，现已转让给深圳市金隆盛投资管理有限公司。自你方收到本通知之日起，你我之间不再具有债权债务关系，请你方向前述新债权人履行债务清偿义务。</div>
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
                                    <span>{{NotificationInitMsg.personReason ? NotificationInitMsg.personReason : '无'}}</span>
                                    <span>{{NotificationInitMsg.amountThis}}</span>
                                </div>
                            </div>
                            <div>特此通知！</div>
                            <div>
                                <el-row :gutter="24">
                                    <el-col :span="6">
                                        <span class='col-label'>通知人：</span>
                                        <el-input type="text" :value='NotificationInitMsg.debtName' :disabled='true'></el-input>
                                    </el-col>
                                </el-row>
                                <el-row :gutter="24">
                                    <el-col :span="6">
                                        <span class='col-label'>时间：</span>
                                        <el-input type="text" :value='NotificationInitMsg.contractTime' :disabled='true'></el-input>
                                    </el-col>
                                </el-row>
                            </div>
                        </div>
                    </el-collapse-item>
                    <!-- 资产委托代理销售合同 -->
                    <el-collapse-item :title="IsInernet?'委托线上代理销售合同': '委托代理销售合同'" name="5" v-if="DebtType !=='1'">
                        <div class='sales-agreement-content-main-title'>
                            {{IsInernet?'委托线上代理销售合同': '委托代理销售合同'}}
                        </div>
                        <el-row :gutter="24">
                            <el-col :span="9">
                                <span class='col-label'>合同编号：</span>
                                <el-input type="text" :value='SalesAgreementInitMsg.salesNo || SalesAgreementInitMsg.protocolNo' :disabled='true'></el-input>
                            </el-col>
                        </el-row>
                        <el-row :gutter="24">
                            <el-col :span="9">
                                <span class='col-label'>甲方（委托方）：</span>
                                <el-input type="text" :value='SalesAgreementInitMsg.debtName' :disabled='true'></el-input>
                            </el-col>
                        </el-row>
                        <el-row :gutter="24">
                            <el-col :span="9">
                                <span class='col-label'>身份证号码/统一社会信用代码：</span>
                                <el-input type="text" :value='SalesAgreementInitMsg.debtIdCard' :disabled='true'></el-input>
                            </el-col>
                        </el-row>
                        <el-row :gutter="24">
                            <el-col :span="9">
                                <span class='col-label'>通讯地址：</span>
                                <el-input type="text" :value='SaleAddress' :disabled='true'></el-input>
                            </el-col>
                        </el-row>
                        <el-row :gutter="24">
                            <el-col :span="9">
                                <span class='col-label'>联系人：</span>
                                <el-input type="text" :value="SalesAgreementInitMsg.debtName ? SalesAgreementInitMsg.debtName : ''" :disabled='true'></el-input>
                            </el-col>
                        </el-row>
                        <el-row :gutter="24">
                            <el-col :span="9">
                                <span class='col-label'>联系电话：</span>
                                <el-input type="text" :value='SalePhone' :disabled='true'></el-input>
                            </el-col>
                        </el-row>
                        <!-- 乙方是否为线上样式展示 -->
                        <template v-if='!IsInernet'>
                            <div class='promise-content-main-text'>
                                乙方（受托方）：深圳市方博商贸管理有限公司<br/>
                                统一社会信用代码：91440300MA5G44JB4K<br/>
                                联系地址：深圳市光明区公明街道公明社区公园路17栋301<br/>
                                联系电话：<br/>
                                甲乙双方经友好协商，就双方间的委托代理销售商品相关事宜达成一致意见，特签订本合同，以资共同遵守。<br/>
                            </div>
                            <h3>一、代销商品</h3>
                            <div>甲方将相关商品交由乙方代销，寄售商品的名称、数量、单价等具体情况详见本合同附件《商品寄售清单》，本合同签订前，甲乙双方共同至寄售商品存放处进行清点，若商品存在种类不符、数量错误或质量瑕疵的，由甲方负责处理。</div>
                        </template>
                        <template v-else>
                            <div class='promise-content-main-text'>
                                乙方（受托方）：海南米多多电子商务有限公司   <br/>
                                统一社会信用代码：91460100MA5TLMDW1X<br/>
                                联系地址：海南省海口市龙华区城西镇龙昆南路山高村181号205室 <br/>
                                联系电话： 17830015877   <br/>
                                甲乙双方经友好协商，就双方间的委托线上代理销售商品相关事宜达成一致意见，特签订本合同，以资共同遵守。<br/>
                            </div>
                            <h3>一、代销商品</h3>
                            <div>甲方将相关商品交由乙方线上商城代销，寄售商品的名称、数量、单价等具体情况详见本合同附件《商品寄售清单》，本合同签订前，甲乙双方共同至寄售商品存放处进行清点，若商品存在种类不符、数量错误或质量瑕疵的，由甲方负责处理。</div>
                        </template>
                        <h3>二、代销期间</h3>
                        <el-row :gutter="24">
                            <el-col :span="24">
                                <el-input :disabled='true' style='width: 100px' :value='SaleCreateTimeYear'></el-input>年
                                <el-input :disabled='true'style='width: 100px' :value='SaleCreateTimetMonth'></el-input>月
                                <el-input :disabled='true' style='width: 100px' :value='SaleCreateTimeDay'></el-input>日至
                                <el-input style='width: 100px' :disabled='true' :value='SaleEndTimeYear'></el-input>年
                                <el-input :disabled='true' style='width: 100px' :value='SaleEndTimeMonth'></el-input>月
                                <el-input :disabled='true' style='width: 100px' :value='SaleEndTimeDay'></el-input>
                            </el-col>
                        </el-row>
                        <h3>三、代销金额</h3>
                        <div class='sales-agreement-content-main-text'>
                            代销商品总价值人民币<el-input :disabled='true' style='width: 200px' :value='SalesAgreementInitMsg.amountThis'></el-input>元（
                            大写：<el-input :disabled='true' style='width: 300px' :value='SalesAgreementInitMsg.amountThisMax'></el-input>元整）。
                        </div>
                        <template v-if='!IsInernet'>
                            <h3>四、代销服务费</h3>
                            <div class='sales-agreement-content-main-text'>
                                甲方应向乙方支付代销服务费，服务费标准为销售金额的10%；甲乙双方以月为单位清算销售金额，并结算代销服务费。代销服务费包含乙方履行本合同所产生的全部费用，乙方不得另行向甲方主张仓储费、销售人员工资等费用。
                            </div>
                            <h3>五、代理销售货款支付方式</h3>
                            <div class='sales-agreement-content-main-text'>
                                （一）乙方在甲方交付代销商品之日起，从次月对应日开始向甲方支付代收的货款，乙方每月出售商品金额不低于<el-input :disabled='true' :value='SalesAgreementInitMsg.averageMoney' style='width: 200px'></el-input>元（差额部分累计到最后一个月付清）。乙方通过银行转账方式将上述销售款项支付给甲方，甲方指定收款账户如下：<br/>
                                <el-row :gutter="24">
                                    <el-col :span="8">
                                        <span class='col-label'>户名：</span>
                                        <el-input type="text" :value='SalesAgreementInitMsg.debtName' :disabled='true'></el-input>
                                    </el-col>
                                </el-row>
                                <el-row :gutter="24">
                                    <el-col :span="8">
                                        <span class='col-label'>账号：</span>
                                        <el-input type="text" :value='SalesAgreementInitMsg.bankCard' :disabled='true'></el-input>
                                    </el-col>
                                </el-row>
                                <el-row :gutter="24">
                                    <el-col :span="8">
                                        <span class='col-label'>开户行：</span>
                                        <el-input type="text" :value='SalesAgreementInitMsg.bank' :disabled='true'></el-input>
                                    </el-col>
                                </el-row>
                                （二）为在一定程度上保障甲方的收款，乙方委托商业银行提供履约担保函，担保金额和担保期间等具体事宜以担保函载明的内容为准。
                            </div>
                            <h3>六、争议解决方法</h3>
                            因本合同发生争议，甲、乙双方应友好协商解决；协商不成的，可向本合同签订地人民法院起诉。
                            <h3>七、通知与送达</h3>
                            <div class='sales-agreement-content-main-text'>
                                （一）甲乙双方一致确认，本合同首部注明的通讯地址、联系人和联系电话为双方的有效送达地址，其适用范围包括：甲乙双方之间发出的任何通知、联络或争议进入民事诉讼程序后的一审程序、二审程序和执行程序有关司法文书的通知或送达。<br/>
                                （二）对于任何通知、联络或司法文书，甲乙双方约定如下日期为正式送达日期：<br/>
                                1.直接交付的，在交付时视为送达。<br/>
                                2.以短信、微信方式发出的，以发件方发送后系统显示的时间视为送达。<br/>
                                3.以邮政快递形式发出的，在收件人拒收或者因送达地址、联系人和联系电话错误或不详而被退回时视为送达。<br/>
                                （三）甲乙双方的送达地址、联系人和联系电话如有变更的，须在变更前十日以书面形式通知相对方，在书面变更通知送达对方之前，视为送达地址、联系人和联系电话未变更。<br/>
                            </div>
                            <h3>八、其它</h3>
                            <div class='sales-agreement-content-main-text'>
                                （一）本合同未尽事宜，甲乙双方可另行协商并签订补充协议。<br/>
                                （二）本合同自甲乙双方签字或盖章后生效。本合同一式两份，甲乙双方各执一份，均具同等法律效力。<br/>
                            </div>
                        </template>
                        <template v-else>
                            <h3>四、代销服务费</h3>
                            <div class='sales-agreement-content-main-text'>
                                （一）乙方在甲方交付代销商品之日起15个工作日内，一次性向甲方申请在乙方平台账户下充值等额积分，从次月对应日开始向甲方释放兑换积分，乙方每月释放的额为<el-input :disabled='true' :value='SalesAgreementInitMsg.integral' style='width: 200px'></el-input>分（差额部分累计到最后一个月释放）。甲方在乙方平台的注册账户信息如下：
                                <el-row :gutter="24">
                                    <el-col :span="8">
                                        <span class='col-label'>账号：</span>
                                        <el-input type="text" :value='SalePhone' :disabled='true'></el-input>
                                    </el-col>
                                </el-row>
                                <el-row :gutter="24">
                                    <el-col :span="8">
                                        <span class='col-label'>姓名：</span>
                                        <el-input type="text" :value='SalesAgreementInitMsg.debtName' :disabled='true'></el-input>
                                    </el-col>
                                </el-row>
                                <el-row :gutter="24">
                                    <el-col :span="8">
                                        <span class='col-label'>身份证号：</span>
                                        <el-input type="text" :value='SalesAgreementInitMsg.debtIdCard' :disabled='true'></el-input>
                                    </el-col>
                                </el-row>
                            </div>
                            <div class='sales-agreement-content-main-text'>
                                （二）为在一定程度上保障甲方的兑换权益，乙方委托商业银行提供履约担保函，担保金额和担保期间等具体事宜以担保函载明的内容为准。
                            </div>
                            <h3>五、争议解决方法</h3>
                            <div class='sales-agreement-content-main-text'>
                                因本合同发生争议，甲、乙双方应友好协商解决；协商不成的，可向本合同签订地人民法院起诉。
                            </div>
                            <h3>六、通知与送达</h3>
                            <div class='sales-agreement-content-main-text'>
                                （一）甲乙双方一致确认，本合同首部注明的通讯地址、联系人和联系电话为双方的有效送达地址，其适用范围包括：甲乙双方之间发出的任何通知、联络或争议进入民事诉讼程序后的一审程序、二审程序和执行程序有关司法文书的通知或送达。<br/>
                                （二）对于任何通知、联络或司法文书，甲乙双方约定如下日期为正式送达日期：<br/>
                                1.直接交付的，在交付时视为送达。<br/>
                                2.以短信、微信方式发出的，以发件方发送后系统显示的时间视为送达。<br/>
                                3.以邮政快递形式发出的，在收件人拒收或者因送达地址、联系人和联系电话错误或不详而被退回时视为送达。<br/>
                                （三）甲乙双方的送达地址、联系人和联系电话如有变更的，须在变更前十日以书面形式通知对方，在书面变更通知送达对方之前，视为送达地址、联系人和联系电话未变更。<br/>
                            </div>
                            <h3>七、其它</h3>
                            <div class='sales-agreement-content-main-text'>
                                （一）本合同未尽事宜，甲乙双方可另行协商并签订补充协议。<br/>
                                （二）本合同自甲乙双方签字或盖章后生效。本合同一式两份，甲乙双方各执一份，均具同等法律效力。<br/>
                            </div>
                        </template>
                        <div style='text-align: center'>(以下无正文,为签署页)</div>
                        <div class='sales-agreement-content-main-container'>
                            <!-- 左侧签字盖章 -->
                            <el-row :gutter="24">
                                <el-col :span="6">
                                    <span class='col-label'>甲方：</span>
                                    <el-input type="text" :value='SalesAgreementInitMsg.debtName' :disabled='true'></el-input>
                                </el-col>
                                <el-col :span="2">
                                    <span class='col-label'></span>
                                </el-col>
                                <el-col :span="6">
                                    <span class='col-label'>乙方：</span>
                                    <el-input type="text" :value="'深圳市方博商贸管理有限公司'" :disabled='true'></el-input>
                                </el-col>
                            </el-row>
                            <el-row :gutter="24">
                                <el-col :span="6">
                                    <span class='col-label'>时间：</span>
                                    <el-input type="text" :value='SalesAgreementInitMsg.contractDate' :disabled='true'></el-input>
                                </el-col>
                                <el-col :span="2">
                                    <span class='col-label'></span>
                                </el-col>
                                <el-col :span="6">
                                    <span class='col-label'>时间：</span>
                                    <el-input type="text" :value='SalesAgreementInitMsg.contractDate' :disabled='true'></el-input>
                                </el-col>
                            </el-row>
                            <el-row :gutter="24">
                                <el-col :span="8">
                                    <span class='col-label'></span>
                                </el-col>
                                <el-col :span="6">
                                    <span class='col-label'>协议签约地：重庆市渝中区</span>
                                </el-col>
                            </el-row>
                        </div>
                        <h3 style='margin-top: 120px'>附件一: 商品寄售清单</h3>
                        <!-- <div class='promise-content-main-list'>
                            <button>上传附件</button>
                            <input type="file" ref='GoodSaleList' @change="UpdataSaleAreement">
                        </div> -->
                        <div class='sales-agreement-content-main-list-1-title'>
                            <span>序号</span>
                            <span>商品名</span>
                            <span>型号</span>
                            <span>计量单位</span>
                            <span>单价（元）</span>
                            <span>数量</span>
                            <span>合计（元）</span>
                            <span>备注</span>
                            <span v-if='IsEditPage'>操作</span>
                        </div>
                        <div class='sales-agreement-content-main-list-1'>
                            <div class='sales-agreement-content-main-list-1-item' v-for='(item,Listindex) in SalesAgreementInitMsg.busAgentSalesContractModity || SalesAgreementInitMsg.busAgentSalesContractModities' :key='Listindex'>
                                <span class='sales-agreement-content-main-list-1-item-1'>
                                    <el-input :disabled='true' :value='Listindex+1'></el-input>
                                </span>
                                <!-- 商品名 -->
                                <span class='sales-agreement-content-main-list-1-item-2'>
                                    <!-- <el-input :disabled='!IsEditPage' :value='item.modityName'></el-input> -->
                                    <el-select v-model='selectValue[Listindex]' @change="(val) => selectChange(item,Listindex)"value-key='modityName' :disabled='!IsEditPage'>
                                            <el-option :label="OptionItem.modityName" :value='OptionItem' v-for='(OptionItem,OptionIndex) in GoodsMsg' :key='OptionItem.modityName'></el-option>
                                    </el-select>
                                </span>
                                <!-- 型号 -->
                                <span class='sales-agreement-content-main-list-1-item-3'>
                                    <el-input :disabled='true' v-model='item.moditySpecificat'></el-input>
                                </span>
                                <!-- 计量单位 -->
                                <span class='sales-agreement-content-main-list-1-item-3'>
                                    <el-input :disabled='true' v-model='item.partyaSeal'></el-input>
                                </span>
                                <!-- 单价（元） -->
                                <span class='sales-agreement-content-main-list-1-item-3'>
                                    <el-input :disabled='true' v-model='item.modityPlace'></el-input>
                                </span>
                                <!-- 数量 -->
                                <span class='sales-agreement-content-main-list-1-item-3'>
                                    <el-input :disabled='!IsEditPage' v-model='item.partybSeal'></el-input>
                                </span>
                                <!-- 合计（元） -->
                                <span class='sales-agreement-content-main-list-1-item-3'>
                                    <el-input :disabled='true' :value="Number(item.partybSeal) * (item.modityPlace) ? Number(item.partybSeal) * (item.modityPlace) : ''"></el-input>  <!-- -->
                                </span>
                                <!-- 备注 -->
                                <span class='sales-agreement-content-main-list-1-item-4'>
                                    <el-input :disabled='!IsEditPage' v-model='item.partybTime'></el-input>
                                </span>
                                <span v-if='IsEditPage' class='sales-agreement-content-main-list-1-item-4'>
                                    <button @click='DelecteItem(Listindex)'>删除</button>
                                </span>
                            </div>
                            <button v-if='IsEditPage' @click='AddItem()'>点击添加</button>
                        </div>
                        <el-row :gutter="24" style='margin-top: 50px'>
                            <el-col :span="8">
                                <span class='col-label'>寄售人确认签字捺印：</span>
                                <el-input type="text" :disabled='true'></el-input>
                            </el-col>
                        </el-row>
                    </el-collapse-item>
                    <!-- 资产催款函 -->
                    <el-collapse-item title="资产催款函" name="6">
                        <div class='collection-letters-content-main-title'>
                            催款函
                        </div>
                        <div class='collection-letters-content-main-text'>
                            致: <el-input :disabled='true' type="text" :value='CollectionLettersInitMsg.personName' style='width: 300px'></el-input><br>
                            根据 债权转让方<el-input :disabled='true' type="text" :value='CollectionLettersInitMsg.debtName' style='width: 300px'></el-input>与我司签订的《债权转让协议》（编号：<el-input :disabled='true' type="text" :value='CollectionLettersInitMsg.assignmentAgreementNo' style='width: 300px'></el-input>）），债权转让方已依法将《借款合同》项下对贵方的所有权利转让给我司，包括但不限于本金、利息、罚息、复利、违约金及费用等。截止本催款函发出之日，我司依法对贵方享有到期债权共计人民币<el-input :disabled='true' type="text" :value='CollectionLettersInitMsg.amountThis' style='width: 200px'></el-input>元（大写： <el-input :disabled='true' type="text" :value='CollectionLettersInitMsg.moneyMax' style="width: 300px"></el-input>整），请贵方自收到本函之日起3日内将上述逾期未付的款项汇付至本公司指定账户：
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
                                <el-input :disabled='true' type="text" v-model='CollectionLettersInitMsg.contractDate' style='width:300px'></el-input>
                            </div>
                        </div>
                    </el-collapse-item>
                    <!-- 资产和解协议 -->
                    <el-collapse-item title="资产和解协议" name="7">
                        <div class='compromise-content-main'>
                            <div class='compromise-content-main-title'>
                                和解协议
                            </div>
                            <div class='compromise-content-main-text'>
                                合同编号：<el-input :disabled='true' type="text" :value='CompromiseInitMsg.compromiseAgreementNo' style='width: 300px'></el-input><br/>
                                甲方：深圳市金隆盛投资管理有限公司<br>
                            </div>
                            <div style='margin: 4px 0' class='compromise-content-main-form-top'>
                                <span>
                                    乙方(委托方):
                                </span>
                                <el-input :disabled='true' type="text" :value='CompromiseInitMsg.personName' style='width: 300px'></el-input>
                            </div>
                            <div class='compromise-content-main-text'>
                                鉴于：<br>
                                原债权人 <el-input :disabled='true' type="text" :value='CompromiseInitMsg.debtName'></el-input>与甲方签订《债权转让协议》，将其对乙方享有的债权及全部相关权利和权益转让给甲方。现甲乙双方经友好协商，就乙方向甲方偿还债务事项达成一致意见，特签订本协议，以资共同遵守。</br>
                                一、乙方应向甲方偿付的债务总金额为人民币 <el-input :disabled='true' type="text" :value='CompromiseInitMsg.amountThis'></el-input>元。<br>
                                二、乙方按照如下第
                                <el-select v-model="CompromiseInitMsg.partybMode" :disabled='!IsEditPage' placeholder="请选择">
                                    <el-option label="第1种: 一次性现金还款" :value="'1'"> </el-option>
                                    <el-option label="第2种: 分期现金还款" :value="'2'"> </el-option>
                                    <el-option label="第3种: 代物清偿" :value="'3'"> </el-option>
                                    <el-option label="第4种: 其他偿还方式" :value="'4'"> </el-option>
                                </el-select>
                                项方式清偿债务：<br>
                                （一）一次性现金还款：自双方签署本和解协议之日起30日内,乙方向甲方一次性支付现金人民币<el-input :disabled='true' type="text" v-model='CompromiseInitMsg.amountThis'></el-input>元。<br>
                                （二）分期现金还款：采用分<el-input :disabled='true' type="text" v-model='CompromiseInitMsg.number' style='width: 100px'></el-input>期向甲方支付,每期支付人民币<el-input :disabled='true' type="text" v-model='CompromiseInitMsg.average'></el-input>元，每期还款日为每月<el-input :disabled='true' type="text" v-model='CompromiseInitMsg.day' style='width: 100px'></el-input>日。<br>
                                （三）代物清偿：用与债务金额同等价值的货物进行清偿。<br>
                                （四）其他偿还方式。<br>
                                三、甲方指定如下银行账户为收款账户。<br>
                                户  名：深圳市金隆盛投资管理有限公司<br>
                                开户行：中国银行股份有限公司深圳南油支行<br>
                                账  号 ：745868704479<br>
                                四、如乙方未按照本协议约定还款产生逾期的，自逾期之日起，按照应付未付金额的每日万分之五向甲方支付违约金。<br>
                                五、甲乙双方因本协议发生争议，应当友好协商解决；协商不成的可向本协议签订地人民法院起诉。<br>
                                六、本协议自甲乙双方签字或盖章后生效。本协议壹式叁份,甲方留存贰份,乙方留存壹份,具有同等法律效力。<br>
                            </div>
                            <div style='text-align: center'>(以下无正文,为签署页)</div>
                            <div style='margin-top: 80px'>
                                <el-row :gutter="24">
                                    <el-col :span="6">
                                        <span class='col-label'>甲方：</span>
                                        <el-input :disabled='true' type="text" :value="'深圳市金隆盛投资管理有限公司'"></el-input>
                                    </el-col>
                                    <el-col :span="3">
                                        <span class='col-label'></span>
                                    </el-col>
                                    <el-col :span="6">
                                        <span class='col-label'>乙方：</span>
                                        <el-input :disabled='true' type="text" :value='CompromiseInitMsg.personName'></el-input>
                                    </el-col>
                                </el-row>
                                <el-row :gutter="24">
                                    <el-col :span="6">
                                        <span class='col-label'>日期：</span>
                                        <el-input :disabled='true' type="text" :value='CompromiseInitMsg.contractDate'></el-input>
                                    </el-col>
                                    <el-col :span="3">
                                        <span class='col-label'></span>
                                    </el-col>
                                    <el-col :span="6">
                                        <span class='col-label'>日期：</span>
                                        <el-input :disabled='true' type="text" :value='CompromiseInitMsg.contractDate'></el-input>
                                    </el-col>
                                </el-row>
                                <el-row :gutter="24">
                                    <el-col :span="9">
                                        <span class='col-label'></span>
                                    </el-col>
                                    <el-col :span="6">
                                        <span class='col-label'>协议签约地：重庆市渝中区</span>
                                    </el-col>
                                </el-row>
                            </div>
                        </div>
                        <div class='collection-letters-content-main-button'>
                            <button @click.once='SubmitEditMsg'>提交</button>
                        </div>
                    </el-collapse-item>
                </el-collapse>
            </div>
        </div>
        <div class='asset-information-approve-check' v-if='!IsEditPage'>
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
            AssignmentInitMsg: {},
            // 新增债权人转让协议公章数据
            AddDebtSealData: {
                propertId: this.$route.query.propertId,
                comId: window.sessionStorage.getItem('companyId'),
                parta: '',
                partaCard: '',
                partaTel: ''
            },
            // 新增相对人转让协议公章数据
            AddRelativeSealData: {
                propertId: this.$route.query.propertId,
                comId: window.sessionStorage.getItem('companyId'),
                parta: '',
                partaCard: '',
                partaTel: ''
            },
            // 债权转让确定
            ConfirmAssignmentInitMsg: {},
            // 债权确定
            DebtConfirmInitMsg: {},
            // 通知书
            NotificationInitMsg: {},
            // 销售
            SalesAgreementInitMsg: {},
            // 催款函
            CollectionLettersInitMsg: {},
            // 和解协议
            CompromiseInitMsg: {},
            DebtType: this.$route.query.debtType,
            // 计数用作用,给ID赋值
            Num: 101,
            // 记录当前index
            Index: 0,
            // 商品数据源
            GoodsMsg: [],
            selectValue: []
        }
    },
    methods: {
        // 债权转让协议
        async InitAssignment () {
            // 获取债权转让协议信息
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
            this.AssignmentInitMsg = result.data
        },
        // 转让确认
        async InitConfirmAssignment () {
            const formData = new FormData()
            formData.append('relativePerId', this.$route.query.relativePerId)
            formData.append('propertId', this.$route.query.propertId)
            formData.append('comId', window.sessionStorage.getItem('companyId'))
            const { data: result } = await this.$http({
                method: 'post',
                url: '/api/api/BusAssignmentConfirmController/initialize',
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            this.ConfirmAssignmentInitMsg = result.data
        },
        // 债权转让确认
        async InitDebtConfirm () {
            const formData = new FormData()
            formData.append('relativePerId', this.$route.query.relativePerId)
            formData.append('propertId', this.$route.query.propertId)
            formData.append('comId', window.sessionStorage.getItem('companyId'))
            const { data: result } = await this.$http({
                method: 'post',
                url: '/api/api/busConfirmController/initialize',
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            this.DebtConfirmInitMsg = result.data
        },
        // 资产债权转让通知书
        async InitNotification () {
            const formData = new FormData()
            formData.append('relativePerId', this.$route.query.relativePerId)
            formData.append('propertId', this.$route.query.propertId)
            formData.append('comId', window.sessionStorage.getItem('companyId'))
            const { data: result } = await this.$http({
                method: 'post',
                url: '/api/api/busAssignmentNoticeController/initialize',
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            this.NotificationInitMsg = result.data
            console.log(this.NotificationInitMsg)
        },
        // 销售合同
        async InitSalesAgreement () {
            const formData = new FormData()
            formData.append('propertId', this.$route.query.propertId)
            formData.append('comId', window.sessionStorage.getItem('companyId'))
            if (!this.IsInernet) {
                const { data: result } = await this.$http({
                    method: 'post',
                    url: '/api/api/busAgentSalesContractController/initialize',
                    data: formData,
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                this.SalesAgreementInitMsg = result.data
                this.selectValue = this.SalesAgreementInitMsg.busAgentSalesContractModity
            } else {
                const { data: result } = await this.$http({
                    method: 'post',
                    url: '/api/api/cumoutProtocolController/initialize',
                    data: formData,
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                this.SalesAgreementInitMsg = result.data
                this.selectValue = this.SalesAgreementInitMsg.busAgentSalesContractModities
            }
        },
        // 催款函
        async InitCollectionLetters () {
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
            this.CollectionLettersInitMsg = result.data
        },
        // 和解协议
        async InitCompromise () {
            const formData = new FormData()
            formData.append('relativePerId', this.$route.query.relativePerId)
            formData.append('propertId', this.$route.query.propertId)
            formData.append('comId', window.sessionStorage.getItem('companyId'))
            const { data: result } = await this.$http({
                method: 'post',
                url: '/api/api/busCompromiseAgreementController/initialize',
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            this.CompromiseInitMsg = result.data
        },
        RejectCheck () {
            if (!this.SubmitApproveData.checkReason) return this.$message.error('请先填写审核原因')
            this.UpdateCheckStatus('5').then(() => {
                const PropertFormData = new FormData()
                PropertFormData.append('propertId', this.$route.query.propertId)
                PropertFormData.append('stage', '1')
                this.$http({
                    method: 'post',
                    url: '/api/api/busPropertController/updateStage',
                    data: PropertFormData,
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }).then(PropertStatusResult => {
                    this.$message.success(PropertStatusResult.data.resultMessage)
                    this.$router.push('AssetInformation')
                })
            })
        },
        async PassCheck () {
            this.UpdateCheckStatus('6')
            // 调用合同盖章
            // 添加债权人所需参数
            const AddDebtSealFormData = new FormData()
            this.AddDebtSealData.parta = this.AssignmentInitMsg.debtName
            this.AddDebtSealData.partaCard = this.AssignmentInitMsg.idCard
            if (this.AssignmentInitMsg.reportPropert === '1') {
                this.AddDebtSealData.partaTel = this.AssignmentInitMsg.priPhone
            } else {
                this.AddDebtSealData.partaTel = this.AssignmentInitMsg.corBankPhone
            }
            for (const key in this.AddDebtSealData) {
                AddDebtSealFormData.append(key, this.AddDebtSealData[key])
            }
            // 添加相对人所需参数
            const AddRelativeSealFormData = new FormData()
            this.AddRelativeSealData.parta = this.AssignmentInitMsg.personName
            this.AddRelativeSealData.partaCard = this.AssignmentInitMsg.personCard
            if (this.AssignmentInitMsg.reportPriPropert === '1') {
                this.AddRelativeSealData.partaTel = this.AssignmentInitMsg.personPriPhone
            } else {
                this.AddRelativeSealData.partaTel = this.AssignmentInitMsg.personCorBackPhone
            }
            for (const key in this.AddDebtSealData) {
                AddRelativeSealFormData.append(key, this.AddDebtSealData[key])
            }
            // 债权转让协议转pdf保存+盖章
            await this.$http({
                method: 'post',
                url: '/api/wordConversion/fillInWordAndSaveAsSpecifyFormatTransfer',
                data: AddDebtSealFormData,
                headers: {
                'Content-Type': 'multipart/form-data',
                }
            })
            // 资产债权转让确认转pdf保存
            await this.$http({
                method: 'post',
                url: '/api/wordConversion/fillInWordAndSaveAsSpecifyFormatConfrim',
                data: AddDebtSealFormData,
                headers: {
                'Content-Type': 'multipart/form-data',
                }
            })
            // 资产债权通知书转pdf保存
            await this.$http({
                method: 'post',
                url: '/api/wordConversion/fillInWordAndSaveAsSpecifyFormatNotice',
                data: AddDebtSealFormData,
                headers: {
                'Content-Type': 'multipart/form-data',
                }
            })
            // 债权确认书转pdf保存+盖章
            await this.$http({
                method: 'post',
                url: '/api/wordConversion/fillInWordAndSaveAsSpecifyFormatProve',
                data: AddRelativeSealFormData,
                headers: {
                'Content-Type': 'multipart/form-data',
                }
            })
            // 催款函转pdf保存+盖章
            await this.$http({
                method: 'post',
                url: '/api/wordConversion/fillInWordAndSaveAsSpecifyFormatLetter',
                data: AddRelativeSealFormData,
                headers: {
                'Content-Type': 'multipart/form-data',
                }
            })
            // 和解协议转pdf保存+盖章
            await this.$http({
                method: 'post',
                url: '/api/wordConversion/fillInWordAndSaveAsSpecifyFormatReconciliation',
                data: AddRelativeSealFormData,
                headers: {
                'Content-Type': 'multipart/form-data',
                }
            })
            if (this.DebtType !== '1') {
                if (this.DebtType === '2') {
                    // 委托代理销售合同转pdf保存+盖章
                    await this.$http({
                        method: 'post',
                        url: '/api/wordConversion/fillInWordAndSaveAsSpecifyFormatConsignment',
                        data: AddDebtSealFormData,
                        headers: {
                        'Content-Type': 'multipart/form-data',
                        }
                    })
                } else {
                    // 线上委托销售转pdf保存
                    await this.$http({
                        method: 'post',
                        url: '/api/wordConversion/fillInWordAndSaveAsSpecifyFormatOnlineCons',
                        data: AddDebtSealFormData,
                        headers: {
                        'Content-Type': 'multipart/form-data',
                        }
                    })
                }
            }
            this.$router.push({path: '/AssetInformation'})
        },
        // 提交审批状态
        async UpdateCheckStatus (status) {
            const formData = new FormData()
            this.SubmitApproveData.status = status
            this.SubmitApproveData.propertId = this.$route.query.propertId
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
            this.$message.success(result.resultMessage)
        },
        async SubmitEditMsg () {
            // 修改和解协议信息
            const formData = new FormData()
            formData.append('partybMode', this.CompromiseInitMsg.partybMode)
            formData.append('propertId', this.$route.query.propertId)
            const { data: result } = await this.$http({
                method: 'post',
                url: '/api/api/busCompromiseAgreementController/updatePartybMode',
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            // 更新销售合同
            if(this.$route.query.debtType === '2') {
                this.selectValue.map((v,index) => {
                    this.$set(this.SalesAgreementInitMsg.busAgentSalesContractModity[index], 'moneyNum1', Number(this.selectValue[index].partybSeal) * Number(this.selectValue[index].modityPlace))
                })
                this.SalesAgreementInitMsg.busAgentSalesContractModity.map((v,i) => {
                    for (const key in v) {
                        this.$delete(this.SalesAgreementInitMsg.busAgentSalesContractModity[i], 'protocolId')
                    }
                })
                let NullIndexs = []
                this.SalesAgreementInitMsg.busAgentSalesContractModity.map((v, i) => {
                    for (const key in v) {
                        if (!v[key]) {
                            NullIndexs.push(i)
                            break
                        }
                    }
                })
                if (NullIndexs.length !== 0) {
                    return this.$message.error('存在空白的商品信息, 请填写完全或删除该商品信息')
                }
                const UnlineFormData = new FormData()
                const jsonData = JSON.stringify(this.SalesAgreementInitMsg)
                UnlineFormData.append('jsonData', jsonData)
                await this.$http({
                    method: 'post',
                    url: '/api/api/busAgentSalesContractController/updateByPrimaryKeySelective',
                    data: UnlineFormData,
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
            } else if (this.$route.query.debtType === '3') {
                // 如果为线上销售合同
                this.selectValue.map((v,index) => {
                    this.$set(this.SalesAgreementInitMsg.busAgentSalesContractModities[index], 'moneyNum1', Number(this.selectValue[index].partybSeal) * Number(this.selectValue[index].modityPlace))
                })
                this.SalesAgreementInitMsg.busAgentSalesContractModities.map((v,i) => {
                    for (const key in v) {
                        this.$delete(this.SalesAgreementInitMsg.busAgentSalesContractModities[i], 'salesContractId')
                    }
                })
                let NullIndexs = []
                this.SalesAgreementInitMsg.busAgentSalesContractModities.map((v, i) => {
                    for (const key in v) {
                        if (!v[key]) {
                            NullIndexs.push(i)
                            break
                        }
                    }
                })
                console.log(this.SalesAgreementInitMsg)
                if (NullIndexs.length !== 0) {
                    return this.$message.error('存在空白的商品信息, 请填写完全或删除该商品信息')
                }
                const InlineFormData = new FormData()
                const InlineSubmitMsg = {
                    propertId: this.SalesAgreementInitMsg.propertId,
                    protocolNo: this.SalesAgreementInitMsg.protocolNo,
                    contractDate: this.SalesAgreementInitMsg.contractDate,
                    busAgentSalesContractModity: this.SalesAgreementInitMsg.busAgentSalesContractModities,
                    protocolId: this.SalesAgreementInitMsg.protocolId
                }
                const jsonData = JSON.stringify(InlineSubmitMsg)
                InlineFormData.append('jsonData', jsonData)
                const {result : data } = await this.$http({
                    method: 'post',
                    url: '/api/api/cumoutProtocolController/updateByPrimaryKeySelective',
                    data: InlineFormData,
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
            }
            // 更新资产信息自身阶段
            const PropertFormData = new FormData()
            PropertFormData.append('propertId', this.$route.query.propertId)
            PropertFormData.append('stage', '8')
            await this.$http({
                method: 'post',
                url: '/api/api/busPropertController/updateStage',
                data: PropertFormData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            // 更新状态
            const StatusformData = new FormData()
            StatusformData.append('propertId', this.$route.query.propertId)
            StatusformData.append('status', '4')
            const { data: StatusResult } = await this.$http({
                method: 'post',
                url: '/api/api/busPropertController/updateStatus',
                data: StatusformData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            this.$message.success(StatusResult.resultMessage)
            this.$router.push('AssetInformation')
        },
        // 新增商品
        AddItem () {
            if (this.SalesAgreementInitMsg.busAgentSalesContractModity) {
                this.SalesAgreementInitMsg.busAgentSalesContractModity.push({
                    id: this.Num,
                    // 商品名称
                    modityName: '',
                    // 商品单价
                    modityPlace: '',
                    // 商品型号
                    moditySpecificat: '',
                    // 计量单位
                    partyaSeal: '',
                    // 合计金额
                    partyaTime: '',
                    // 商品数量
                    partybSeal: '',
                    // 商品备注
                    partybTime: ''
                })
            } else {
                this.SalesAgreementInitMsg.busAgentSalesContractModities.push({
                    id: this.Num,
                    // 商品名称
                    modityName: '',
                    // 商品单价
                    modityPlace: '',
                    // 商品型号
                    moditySpecificat: '',
                    // 计量单位
                    partyaSeal: '',
                    // 合计金额
                    partyaTime: '',
                    // 商品数量
                    partybSeal: '',
                    // 商品备注
                    partybTime: ''
                })
            }
            // 用作添加ID用
            this.Num = this.Num + 1
            // 记录当前Index用
            this.Index = this.Index + 1
        },
        // 刪除商品
        DelecteItem (Listindex) {
            if (this.SalesAgreementInitMsg.busAgentSalesContractModity) {
                this.SalesAgreementInitMsg.busAgentSalesContractModity.splice(Listindex, 1)
            } else {
                this.SalesAgreementInitMsg.busAgentSalesContractModities.splice(Listindex, 1)
            }
            this.Index = this.Index - 1
        },
        // 查询商品信息
        async SearchGoodsMsg () {
            const { data: result } = await this.$http({
                method: 'post',
                url: '/api/api/busAgentSalesContractModityController/queryComm',
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            this.GoodsMsg = result.data
        },
        selectChange (item, Listindex) {
            console.log(Listindex)
            // 型号赋值更改
            if (this.SalesAgreementInitMsg.busAgentSalesContractModity) {
                this.SalesAgreementInitMsg.busAgentSalesContractModity[Listindex].modityName = this.selectValue[Listindex].modityName
                this.SalesAgreementInitMsg.busAgentSalesContractModity[Listindex].moditySpecificat = this.selectValue[Listindex].moditySpecificat
                // 计量单位赋值更改
                this.SalesAgreementInitMsg.busAgentSalesContractModity[Listindex].partyaSeal = this.selectValue[Listindex].partyaSeal
                // 单价赋值更改
                this.SalesAgreementInitMsg.busAgentSalesContractModity[Listindex].modityPlace = this.selectValue[Listindex].modityPlace
            } else {
                this.SalesAgreementInitMsg.busAgentSalesContractModities[Listindex].modityName = this.selectValue[Listindex].modityName
                this.SalesAgreementInitMsg.busAgentSalesContractModities[Listindex].moditySpecificat = this.selectValue[Listindex].moditySpecificat
                // 计量单位赋值更改
                this.SalesAgreementInitMsg.busAgentSalesContractModities[Listindex].partyaSeal = this.selectValue[Listindex].partyaSeal
                // 单价赋值更改
                this.SalesAgreementInitMsg.busAgentSalesContractModities[Listindex].modityPlace = this.selectValue[Listindex].modityPlace
            }
            
        }
    },
    created () {
        this.SearchGoodsMsg()
        this.InitAssignment()
        this.InitConfirmAssignment()
        this.InitDebtConfirm()
        this.InitNotification()
        this.InitSalesAgreement()
        this.InitCollectionLetters()
        this.InitCompromise()
    },
    computed: {
        ObligatYear: function () {
            return (this.AssignmentInitMsg.obligatTime || '').split('-')[0]
        },
        ObligatMonth: function () {
            return (this.AssignmentInitMsg.obligatTime || '').split('-')[1]
        },
        ObligatDay: function () {
            return (this.AssignmentInitMsg.obligatTime || '').split('-')[2]
        },
        thisTimeYear: function () {
            return (this.AssignmentInitMsg.thisTime || '').split('-')[0]
        },
        thisTimeMonth: function () {
            return (this.AssignmentInitMsg.thisTime || '').split('-')[1]
        },
        thisTimeDay: function () {
            return (this.AssignmentInitMsg.thisTime || '').split('-')[2]
        },
        contractTimeYear: function () {
            if (this.ConfirmAssignmentInitMsg.contractTime) {
                return this.ConfirmAssignmentInitMsg.contractTime.split('-')[0] 
            }
            return ''
        },
        contractTimeMonth: function () {
            if (this.ConfirmAssignmentInitMsg.contractTime) {
                return this.ConfirmAssignmentInitMsg.contractTime.split('-')[1] 
            }
            return ''
        },
        contractTimeDay: function () {
            if (this.ConfirmAssignmentInitMsg.contractTime) {
                return this.ConfirmAssignmentInitMsg.contractTime.split('-')[2] 
            }
            return ''
        },
        DebtConfirmContractTimeYear: function () {
            if (this.InitMsg.contractTime) {
                return this.DebtConfirmInitMsg.contractTime.split('-')[0] 
            }
            return ''
        },
        DebtConfirmContractTimeMonth: function () {
            if (this.InitMsg.contractTime) {
                return this.DebtConfirmInitMsg.contractTime.split('-')[1] 
            }
            return ''
        },
        DebtConfirmContractTimeDay: function () {
            if (this.InitMsg.contractTime) {
                return this.DebtConfirmInitMsg.contractTime.split('-')[2] 
            }
            return ''
        },
        SaleAddress: function () {
            if (this.SalesAgreementInitMsg.reportPropert === '1') {
                return this.SalesAgreementInitMsg.priAdd
            } else {
                return this.SalesAgreementInitMsg.corBankAdd
            }
        },
        SalePhone: function () {
            if (this.SalesAgreementInitMsg.reportPropert === '1') {
                return this.SalesAgreementInitMsg.priPhone
            } else {
                return this.SalesAgreementInitMsg.corBankPhone
            }
        },
        SaleCreateTimeYear: function () {
            return (this.SalesAgreementInitMsg.createTime || '').split('-')[0]
        },
        SaleCreateTimetMonth: function () {
            return (this.SalesAgreementInitMsg.createTime || '').split('-')[1]
        },
        SaleCreateTimeDay: function () {
            return (this.SalesAgreementInitMsg.createTime || '').split('-')[2]
        },
        SaleEndTimeYear: function () {
            return (this.SalesAgreementInitMsg.endTime || '').split('-')[0]
        },
        SaleEndTimeMonth: function () {
            return (this.SalesAgreementInitMsg.endTime || '').split('-')[1]
        },
        SaleEndTimeDay: function () {
            return (this.SalesAgreementInitMsg.endTime || '').split('-')[2]
        },
        // 判断当前是否为线上销售
        IsInernet: function () {
            if (this.$route.query.debtType === '3') {
                return true
            } else if (this.$route.query.debtType === '2') {
                return false
            }
        },
        // 判断当前是否为编辑頁面
        IsEditPage: function () {
            if (this.$route.path === '/EditAssessment') {
                return true
            } else {
                return false
            }
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
.debt-confirm {
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
            font-size: 15px;
            &-title {
                line-height: 45px;
                font-size: px2rem(4);
                text-align: center;
                font-weight: 600;
            }
            &-text {
                line-height: 45px;
                .el-input {
                    width: 200px;
                }
            }
            &-button {
                text-align: center;
                margin: 80px 0;
                button {
                    width: px2rem(50);
                    height: px2rem(8);
                    border: none;
                    background-color: #616789;
                    color: #fff;
                    border-radius: px2rem(1);
                }
            }
            input {
                background-color: #fff;
                border: 1px solid #DFE0E7;
                border-radius: px2rem(1);
                margin:0 px2rem(1);
                background-color: #F2F6F9;
                height: px2rem(4.5);
                width: 100px;
            }
            .input-200 {
                background-color: #fff;
                border: 1px solid #DFE0E7;
                border-radius: px2rem(1);
                margin:0 px2rem(1);
                background-color: #F2F6F9;
                height: px2rem(4.5);
                width: 200px;
            }
            .input-300 {
                background-color: #fff;
                border: 1px solid #DFE0E7;
                border-radius: px2rem(1);
                margin:0 px2rem(1);
                background-color: #F2F6F9;
                height: px2rem(4.5);
                width: 300px;
            }
            &-container {
                margin-top: 50px;
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
                margin-top: 100px;
                margin-bottom: 60px;
                button {
                    width: px2rem(50);
                    height: px2rem(8);
                    border: none;
                    font-size: 18px;
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

    &-content {
        height: 100%;
        background-color: #ffffff;
        margin: 0 px2rem(4) px2rem(4) px2rem(4);
        padding: px2rem(4);
        border-radius: px2rem(2);
        line-height: 45px;
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
                font-size: px2rem(4);
                text-align: center;
                font-weight: 600;
            }
            &-input {
                .el-input {
                    background-color: #fff;
                    border: 1px solid #DFE0E7;
                    border-radius: px2rem(1);
                    margin:0 px2rem(1);
                    background-color: #F2F6F9;
                    height: px2rem(4.5);
                    width: 200px;
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
                        border: 1px solid #E8EAEC;
                        text-align: center;
                        font-weight: 600;
                        font-size: px2rem(3.5);
                        padding: 0 px2rem(2);
                        vertical-align: middle;
                    }
                }
                &-content {
                    display: flex;
                    justify-content: space-around;
                    background-color: #F2F6F9;
                    span {
                        display: inline-block;
                        width: px2rem(40);
                        height: 100px;
                        line-height: 100px;
                        border: 1px solid #E8EAEC;
                        text-align: center;
                        font-size: px2rem(3.5);
                        padding: 0 px2rem(2);
                    }
                }
            }
        }
    }
}
.confirm-assignment {
    display: flex;
    flex-direction: column;
    background-color: #E9F0F5;
    height: 100%;
    width: 100%;
    font-size: 16px;
    &-title {
        height: px2rem(12);
        line-height: px2rem(12);
        font-size: 20px;
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
        line-height: 35px;
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
                font-size: 20px;
                text-align: center;
                font-weight: 600;
            }
            &-text {
                line-height: 45px;
                .el-input {
                    width: 200px;
                }
            }
            &-button {
                text-align: center;
                margin: 60px 0;
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
                margin-top: 100px;
            }
        }
    }
}
.compromise {
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
                line-height: 45px;
                font-size: 16px;
                .el-input {
                    width: 200px;
                }
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
                margin: 10px 0!important;
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
.sales-agreement {
    display: flex;
    flex-direction: column;
    background-color: #E9F0F5;
    height: 100%;
    width: 100%;
    &-title {
        height: px2rem(12);
        line-height: px2rem(12);
        font-size: 20px;
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
            &-list-1-title{
                display: flex;
                justify-content: space-around;
                width: px2rem(280);
                height: px2rem(8);
                line-height: px2rem(8);
                span {
                    background-color: #616789;
                    width: 100%;
                    display: inline-block;
                    box-sizing: border-box;
                    border: 1px solid #ffffff!important;
                    text-align: center;
                    font-size: px2rem(3.5);
                    color: #fff;
                    flex:1.4;
                }
                span:nth-child(1) {
                    flex: 1
                }
                span:nth-child(2) {
                    flex: 2
                }
                span:nth-child(8) {
                    flex: 2.5
                }
                span:nth-child(9) {
                    flex: 1.8
                }
            }
            &-list-1{
                display: flex;
                flex-direction: column;
                width: px2rem(280);
                background-color: #fff;
                font-size: px2rem(3.2);
                &-item {
                        display: flex;
                        span {
                            width: 100%;
                            display: inline-block;
                            box-sizing: border-box;
                            border: 1px solid #ffffff!important;
                            text-align: center;
                            font-size: px2rem(3.5);
                            color: #fff;
                            flex:1.4;
                            display: flex;
                            background-color: #FFFFFF;
                            .el-select {
                                width: 100%;
                            }
                            el-input {
                                text-align: center;
                            }
                        }
                        span:nth-child(1) {
                            flex: 1;
                            color: #272A39;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                        }
                        span:nth-child(2) {
                            flex: 2
                        }
                        span:nth-child(8) {
                            flex: 2.5
                        }
                        span:nth-child(9) {
                            flex: 1.8;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            button {
                                border: none;
                                background-color: #FC7F89;
                                color: #fff;
                                border-radius: px2rem(1);
                                height: px2rem(6);
                                width: px2rem(12);
                                font-size: px2rem(3.2);
                            }
                        }
                }
                button {
                    width: 100%;
                    border: none;
                    background-color: #F7F8FD;
                    height: px2rem(10);
                    font-size: px2rem(4);
                    color: #515A6E;
                }
            }
            &-text {
                line-height: 25px;
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
            &-container {
                margin: 80px 0;
            }

            &-list {
                position: relative;
                font-size: px2rem(3.5);
                margin-top: px2rem(15);
                height: px2rem(50);
                button {
                    padding: px2rem(1) px2rem(2);
                    font-size: px2rem(3);
                    border: none;
                    background-color: #616789;
                    margin-left: px2rem(3);
                    color: #fff;
                    border-radius: px2rem(1)
                }
                input[type=file] {
                    position: absolute;
                    left: px2rem(2);
                    top: px2rem(10);
                    opacity: 0;
                }
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
            }
        }
    }
}
</style>
