<!--  -->
<template>
    <div class='sales-agreement'>
        <div class='sales-agreement-title'>
            <span class='sales-agreement-title-go1'>我的审批</span>
            <span class='sales-agreement-title-separator'> / </span>
            <span class='sales-agreement-title-go2'>{{IsInernet? '委托线上代理销售合同' : '委托代理销售合同' }}</span>
        </div>
        <div class='sales-agreement-content'>
            <div class='sales-agreement-content-progress-map'>
                <div class='sales-agreement-content-progress-map-finished'>
                    <span></span>
                    1.资产评估
                </div>
                <div class='sales-agreement-content-progress-map-finished'>
                    <span></span>
                    2.债权转让协议
                </div>
                <div class='sales-agreement-content-progress-map-finished'>
                    <span></span>
                    3.债权转让确认书
                </div>
                <div class='sales-agreement-content-progress-map-finished'>
                    <span></span>
                    4.债权确认书
                </div>
                <div class='sales-agreement-content-progress-map-finished'>
                    <span></span>
                    5.债权转让通知书
                </div>
                <div class='sales-agreement-content-progress-map-highlight'>
                    <span></span>
                    6.{{IsInernet?'委托线上代理销售合同': '委托代理销售合同'}}
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
            <div class='sales-agreement-content-crossing'></div>
             <div class='sales-agreement-content-main'>
                <div class='sales-agreement-content-main-title'>
                    {{IsInernet?'委托线上代理销售合同': '委托代理销售合同'}}
                </div>
                <el-row :gutter="24">
                    <el-col :span="8">
                        <span class='col-label'>合同编号：</span>
                        <el-input type="text" :value='InitMsg.salesNo || InitMsg.protocolNo' :disabled='true'></el-input>
                    </el-col>
                </el-row>
                <el-row :gutter="24">
                    <el-col :span="8">
                        <span class='col-label'>甲方（委托方）：</span>
                        <el-input type="text" :value='InitMsg.debtName' :disabled='true'></el-input>
                    </el-col>
                </el-row>
                <el-row :gutter="24">
                    <el-col :span="8">
                        <span class='col-label'>身份证号码/统一社会信用代码：</span>
                        <el-input type="text" :value='InitMsg.debtIdCard' :disabled='true'></el-input>
                    </el-col>
                </el-row>
                <el-row :gutter="24">
                    <el-col :span="8">
                        <span class='col-label'>通讯地址：</span>
                        <el-input type="text" :value='Address' :disabled='true'></el-input>
                    </el-col>
                </el-row>
                <el-row :gutter="24">
                    <el-col :span="8">
                        <span class='col-label'>联系人：</span>
                        <el-input type="text" :value="InitMsg.debtName ? InitMsg.debtName : ''" :disabled='true'></el-input>
                    </el-col>
                </el-row>
                <el-row :gutter="24">
                    <el-col :span="8">
                        <span class='col-label'>联系电话：</span>
                        <el-input type="text" :value='Phone' :disabled='true'></el-input>
                    </el-col>
                </el-row>
                <!-- 乙方是否为线上样式展示 -->
                <template v-if='!IsInernet'>
                    <div class='sales-agreement-content-main-text'>
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
                    <div class='sales-agreement-content-main-text'>
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
                        <el-input :disabled='true' style='width: 100px' :value='createTimeYear'></el-input>年
                        <el-input :disabled='true'style='width: 100px' :value='createTimetMonth'></el-input>月
                        <el-input :disabled='true' style='width: 100px' :value='createTimeDay'></el-input>日至
                        <el-input style='width: 100px' :disabled='true' :value='endTimeYear'></el-input>年
                        <el-input :disabled='true' style='width: 100px' :value='endTimeMonth'></el-input>月
                        <el-input :disabled='true' style='width: 100px' :value='endTimeDay'></el-input>
                    </el-col>
                </el-row>
                <h3>三、代销金额</h3>
                <div class='sales-agreement-content-main-text'>
                    代销商品总价值人民币<el-input :disabled='true' style='width: 200px' :value='InitMsg.amountThis'></el-input>元（
                    大写：<el-input :disabled='true' style='width: 300px' :value='InitMsg.amountThisMax'></el-input>元整）。
                </div>
                <template v-if='!IsInernet'>
                    <h3>四、代销服务费</h3>
                    <div class='sales-agreement-content-main-text'>
                        甲方应向乙方支付代销服务费，服务费标准为销售金额的10%；甲乙双方以月为单位清算销售金额，并结算代销服务费。代销服务费包含乙方履行本合同所产生的全部费用，乙方不得另行向甲方主张仓储费、销售人员工资等费用。
                    </div>
                    <h3>五、代理销售货款支付方式</h3>
                    <div class='sales-agreement-content-main-text'>
                        （一）乙方在甲方交付代销商品之日起，从次月对应日开始向甲方支付代收的货款，乙方每月出售商品金额不低于<el-input :disabled='true' :value='InitMsg.averageMoney' style='width: 200px'></el-input>元（差额部分累计到最后一个月付清）。乙方通过银行转账方式将上述销售款项支付给甲方，甲方指定收款账户如下：<br/>
                        <el-row :gutter="24">
                            <el-col :span="8">
                                <span class='col-label'>户名：</span>
                                <el-input type="text" :value='InitMsg.debtName' :disabled='true'></el-input>
                            </el-col>
                        </el-row>
                        <el-row :gutter="24">
                            <el-col :span="8">
                                <span class='col-label'>账号：</span>
                                <el-input type="text" :value='InitMsg.bankCard' :disabled='true'></el-input>
                            </el-col>
                        </el-row>
                        <el-row :gutter="24">
                            <el-col :span="8">
                                <span class='col-label'>开户行：</span>
                                <el-input type="text" :value='InitMsg.bank' :disabled='true'></el-input>
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
                        （一）乙方在甲方交付代销商品之日起15个工作日内，一次性向甲方申请在乙方平台账户下充值等额积分，从次月对应日开始向甲方释放兑换积分，乙方每月释放的额为<el-input :disabled='true' :value='InitMsg.integral' style='width: 200px'></el-input>分（差额部分累计到最后一个月释放）。甲方在乙方平台的注册账户信息如下：
                        <el-row :gutter="24">
                            <el-col :span="8">
                                <span class='col-label'>账号：</span>
                                <el-input type="text" :value='Phone' :disabled='true'></el-input>
                            </el-col>
                        </el-row>
                        <el-row :gutter="24">
                            <el-col :span="8">
                                <span class='col-label'>姓名：</span>
                                <el-input type="text" :value='InitMsg.debtName' :disabled='true'></el-input>
                            </el-col>
                        </el-row>
                        <el-row :gutter="24">
                            <el-col :span="8">
                                <span class='col-label'>身份证号：</span>
                                <el-input type="text" :value='InitMsg.debtIdCard' :disabled='true'></el-input>
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
                            <el-input type="text" :value='InitMsg.debtName' :disabled='true'></el-input>
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
                            <el-input type="text" :value='InitMsg.contractDate' :disabled='true'></el-input>
                        </el-col>
                        <el-col :span="2">
                            <span class='col-label'></span>
                        </el-col>
                        <el-col :span="6">
                            <span class='col-label'>时间：</span>
                            <el-input type="text" :value='InitMsg.contractDate' :disabled='true'></el-input>
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
                <!-- <div class='sales-agreement-content-main-list'>
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
                    <span>操作</span>
                </div>
                <div class='sales-agreement-content-main-list-1'>
                    <div class='sales-agreement-content-main-list-1-item' v-for='(item, Listindex) in GoodsMsgList' :key='item.id'>
                        <span class='sales-agreement-content-main-list-1-item-1'>{{Listindex + 1}}</span>
                        <!-- 商品名 -->
                        <span class='sales-agreement-content-main-list-1-item-2'>
                            <el-select v-model='selectValue[Listindex]' @change="(val) => selectChange(Listindex)" value-key='modityName'>
                                <el-option :label="OptionItem.modityName" :value='OptionItem' v-for='(OptionItem,OptionIndex) in GoodsMsg' :key='OptionItem.modityName'></el-option>
                            </el-select>
                        </span>
                        <!-- 型号 -->
                        <span class='sales-agreement-content-main-list-1-item-3'>
                            <el-input v-model='GoodsMsgList[Listindex].moditySpecificat' :disabled='true'></el-input>
                        </span>
                        <!-- 计量单位 -->
                        <span class='sales-agreement-content-main-list-1-item-3'>
                            <el-input v-model='GoodsMsgList[Listindex].partyaSeal' :disabled='true'></el-input>
                        </span>
                        <!-- 单价（元） -->
                        <span class='sales-agreement-content-main-list-1-item-3'>
                            <el-input v-model='GoodsMsgList[Listindex].modityPlace' :disabled='true'></el-input>
                        </span>
                        <!-- 数量 -->
                        <span class='sales-agreement-content-main-list-1-item-3'>
                            <el-input v-model='GoodsMsgList[Listindex].partybSeal'></el-input>
                        </span>
                        <!-- 合计（元） -->
                        <span class='sales-agreement-content-main-list-1-item-3'>
                            <el-input :disabled='true' :value='Number(GoodsMsgList[Listindex].partybSeal) * (GoodsMsgList[Listindex].modityPlace)'></el-input>  <!-- -->
                        </span>
                        <!-- 备注 -->
                        <span class='sales-agreement-content-main-list-1-item-4'>
                            <el-input v-model='GoodsMsgList[Listindex].partybTime'></el-input>
                        </span>
                        <!-- 操作 -->
                        <span class='sales-agreement-content-main-list-1-item-4'>
                            <button @click='DelecteItem(Listindex)'>删除</button>
                        </span>
                    </div>
                    <button @click='AddItem()'>点击添加</button>
                </div>
                <el-row :gutter="24" style='margin-top: 50px'>
                    <el-col :span="8">
                        <span class='col-label'>寄售人确认签字捺印：</span>
                        <el-input type="text" :value='InitMsg.assignmentAgreementNo' :disabled='true'></el-input>
                    </el-col>
                </el-row>
                <el-row :gutter="24">
                    <el-col :span="8">
                        <span class='col-label'>寄售人盖章：</span>
                        <el-button type="primary" size='mini'>上传电子章</el-button>
                    </el-col>
                </el-row>
                <el-row :gutter="24">
                    <el-col :span="8">
                        <span class='col-label'>寄售人盖章：</span>
                        <el-button type="primary" size='mini'>上传电子章</el-button>
                    </el-col>
                </el-row>
                <div class='sales-agreement-content-main-button'>
                    <button @click='Submit' :disabled='HasSubmitData'>提交</button>
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
                // 资产ID
                propertId: this.$route.query.propertId,
                // 代理销售合同ID
                salesNo: '',
                // 签约日期
                contractDate: ''
            },
            // 商品信息列表
            GoodsMsgList: [
                {
                    id: 100,
                    // 商品名
                    modityName: '',
                    // 商品单价
                    modityPlace: '',
                    // 商品型号
                    moditySpecificat: '',
                    // 计量单位
                    partyaSeal: '',
                    // 合计金额
                    moneyNum1: '',
                    // 商品数量
                    partybSeal: '',
                    // 商品备注
                    partybTime: ''
                }
            ],
            GoodsMsg: [],
            // 计数用作用,给ID赋值
            Num: 101,
            // 记录当前index
            Index: 0,
            HasSubmitData: false,
            // 判断是否为线上销售
            IsInernet: false,
            selectValue: []
        }
    },
    methods: {
        async InitData () {
            if (this.$route.query.debtType === '2') {
                this.IsInernet = false
            } else {
                this.IsInernet = true
            }
            const formData = new FormData()
            formData.append('relativePerId', this.$route.query.relativePerId)
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
                this.InitMsg = result.data
            } else {
                const { data: result } = await this.$http({
                    method: 'post',
                    url: '/api/api/cumoutProtocolController/initialize',
                    data: formData,
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                this.InitMsg = result.data
                console.log(this.InitMsg)
            }
        },
        async Submit () {
            // 获取合计金额
            this.GoodsMsgList.map((v,index) => {
                this.GoodsMsgList[index].moneyNum1 = Number(this.GoodsMsgList[index].partybSeal) * Number(this.GoodsMsgList[index].modityPlace)
            })
            // 第一次过滤, 清除有空元素的行
            // 获取有空元素的下标数组
            let NullIndexs = []
            this.GoodsMsgList.map((v, i) => {
                for (const key in v) {
                    if (!v[key]) {
                        NullIndexs.push(i)
                        break
                    }
                }
            })
            if (NullIndexs !== []) {
                NullIndexs.map(v => {
                    this.GoodsMsgList = this.GoodsMsgList.filter((gvalue,gindex) => {
                        return v !== gindex
                    })
                })
            }
            this.GoodsMsgList.map((v, i) => {
                for (const key in v) {
                    console.log(key,i)
                    this.$set(this.SubmitData, `busAgentSalesContractModity[${i}].${key}`, v[key])
                }
            })
            this.SubmitData.contractDate  = this.InitMsg.contractDate
            const formData = new FormData()
            for (const key in this.SubmitData) {
                formData.append(key, this.SubmitData[key])
            }
            if (this.$route.query.debtType === '2') {
                this.SubmitData.salesNo = this.InitMsg.salesNo
                // 调用新增资产委托代理销售合同
                console.log('11111')
                await this.$http({
                    method: 'post',
                    url: '/api/api/busAgentSalesContractController/insertSelective',
                    data: formData,
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
            } else {
                this.SubmitData.protocolNo = this.InitMsg.protocolNo
                console.log(this.SubmitData)
                // 调用新增线上委托销售合同
                console.log('22222')
                await this.$http({
                    method: 'post',
                    url: '/api/api/cumoutProtocolController/insertSelective',
                    data: formData,
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
            }
            // // 更改报备状态
            const PropertFormData = new FormData()
            PropertFormData.append('propertId', this.$route.query.propertId)
            PropertFormData.append('stage', '6')
            const { data: PropertStatusResult } = await this.$http({
                method: 'post',
                url: '/api/api/busPropertController/updateStage',
                data: PropertFormData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            if (PropertStatusResult.resultCode !== '200') return this.$message.error(PropertStatusResult.resultMessage)
            this.HasSubmitData = true
            this.$message.success('提交成功')
            this.$router.push({path: '/CollectionLetters', query: {propertId: this.$route.query.propertId, relativePerId: this.$route.query.relativePerId}})
        },
        // 获取商品数据
        AddItem () {
            this.GoodsMsgList.push({
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
            // 用作添加ID用
            this.Num = this.Num + 1
            // 记录当前Index用
            this.index = this.index + 1
        },
        DelecteItem (index) {
            this.GoodsMsgList.splice(index, 1)
            this.selectValue.splice(index, 1)
            this.index = this.index - 1
        },
        async UpdataSaleAreement () {
            let file = {}
            file = this.$refs.GoodSaleList.files[0]
            const result = await this.$UpdateFile(file)
            this.SubmitData.annex = result
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
        // 点击下拉修改商品信息时, 对应信息的修改
        selectChange (Listindex) {
            // 型号赋值更改
            this.GoodsMsgList[Listindex].modityName = this.selectValue[Listindex].modityName
            this.GoodsMsgList[Listindex].moditySpecificat = this.selectValue[Listindex].moditySpecificat
            // 计量单位赋值更改
            this.GoodsMsgList[Listindex].partyaSeal = this.selectValue[Listindex].partyaSeal
            // 单价赋值更改
            this.GoodsMsgList[Listindex].modityPlace = this.selectValue[Listindex].modityPlace
        }
    },
    created () {
        this.InitData()
        this.SearchGoodsMsg()
    },
    computed: {
        Address: function () {
            if (this.InitMsg.reportPropert === '1') {
                return this.InitMsg.priAdd
            } else {
                return this.InitMsg.corBankAdd
            }
        },
        Phone: function () {
            if (this.InitMsg.reportPropert === '1') {
                return this.InitMsg.priPhone
            } else {
                return this.InitMsg.corBankPhone
            }
        },
        createTimeYear: function () {
            return (this.InitMsg.createTime || '').split('-')[0]
        },
        createTimetMonth: function () {
            return (this.InitMsg.createTime || '').split('-')[1]
        },
        createTimeDay: function () {
            return (this.InitMsg.createTime || '').split('-')[2]
        },
        endTimeYear: function () {
            return (this.InitMsg.endTime || '').split('-')[0]
        },
        endTimeMonth: function () {
            return (this.InitMsg.endTime || '').split('-')[1]
        },
        endTimeDay: function () {
            return (this.InitMsg.endTime || '').split('-')[2]
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
    line-height: 40px;
    input {
        width: 100%;
    }
    .col-label {
      flex-shrink: 0;
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
.sales-agreement {
    display: flex;
    flex-direction: column;
    background-color: #E9F0F5;
    height: 100%;
    width: 100%;
    &-title {
        height: px2rem(12);
        line-height: px2rem(12);
        font-size: 16px;
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
                font-size: 12px;
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
                                width: 90%;
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
                margin: 100px 0;
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
