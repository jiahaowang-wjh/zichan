<!--  -->
<template>
    <div class='promise'>
        <div class='promise-title'>
            <span class='promise-title-go1'>我的审批</span>
            <span class='promise-title-separator'> / </span>
            <span class='promise-title-go2'>委托代理销售合同 </span>
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
                <div class='promise-content-progress-map-highlight'>
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
                    委托代理销售合同
                </div>
                <div style='margin: 4px 0'>
                    <span style='width: 40px'>甲方:</span>
                    <input type="text" style='width: 360px' :value='InitMsg.debtName'>
                </div>
                <div style='margin: 4px 0'>
                    <span style='width: 180px'>身份证号码统一社会信用代码：</span>
                    <input type="text" style='width: 220px' :value='InitMsg.debtIdCard'>
                </div>
                <div style='margin: 4px 0'>
                    <span style='width: 70px'>联系地址：</span>
                    <input type="text" style='width: 330px' :value="Address">
                </div>
                <div style='margin: 4px 0'>
                    <span style='width: 70px'>联系电话：</span>
                    <input type="text" style='width: 330px' :value='Phone'>
                </div>
                <div class='promise-content-main-text'>
                    乙方(受托方)：深圳金瑞盈通资产管理有限公司<br>
                    统一社会信用代码：91440300359331797F<br>
                    联系地址：深圳市光明区公明街道公明社区公园路17栋306<br>
                    联系电话：18688724748<br>
                </div>
                <h3>一、甲方委托乙方代销下列商品：</h3>
                <div class='promise-content-main-list-1-title'>
                    <span>序号</span>
                    <span>商品名</span>
                    <span>产地</span>
                    <span>规格</span>
                    <span>计量单位</span>
                    <span>包装</span>
                    <span>数量</span>
                    <span>备注</span>
                    <span>操作</span>
                </div>
                <div class='promise-content-main-list-1'>
                    <div class='promise-content-main-list-1-item' v-for='(item, index) in GoodsMsg' :key='item.id'>
                        <span class='promise-content-main-list-1-item-1'>{{index + 1}}</span>
                        <span class='promise-content-main-list-1-item-2'>
                            <el-select v-model='GoodsMsg[index].modityName'>
                                <el-option :label="goodItem.dictionDis" :value='goodItem.dictionDis' v-for='(goodItem,index) in GoodsList' :key='index'></el-option>
                            </el-select>
                        </span>
                        <span class='promise-content-main-list-1-item-3'>
                            <el-select v-model='GoodsMsg[index].modityPlace'>
                                <el-option :label="goodItem.dictionDis" :value='goodItem.dictionDis' v-for='(goodItem,index) in PlaceList' :key='index'></el-option>
                            </el-select>
                        </span>
                        <span class='promise-content-main-list-1-item-3'>
                            <el-select v-model='GoodsMsg[index].moditySpecificat'>
                                <el-option :label="goodItem.dictionDis" :value='goodItem.dictionDis' v-for='(goodItem,index) in SizeList' :key='index'></el-option>
                            </el-select>
                        </span>
                        <span class='promise-content-main-list-1-item-3'>
                            <el-select v-model='GoodsMsg[index].partyaSeal'>
                                <el-option :label="goodItem.dictionDis" :value='goodItem.dictionDis' v-for='(goodItem,index) in UnitList' :key='index'></el-option>
                            </el-select>
                        </span>
                        <span class='promise-content-main-list-1-item-3'>
                            <el-select v-model='GoodsMsg[index].partyaTime'>
                                <el-option :label="goodItem.dictionDis" :value='goodItem.dictionDis' v-for='(goodItem,index) in PackingList' :key='index'></el-option>
                            </el-select>
                        </span>
                        <span class='promise-content-main-list-1-item-3'>
                            <el-input v-model='GoodsMsg[index].partybSeal'></el-input>
                        </span>
                        <span class='promise-content-main-list-1-item-4'>
                            <el-input v-model='GoodsMsg[index].partybTime'></el-input>
                        </span>
                        <span class='promise-content-main-list-1-item-4'>
                            <button @click='DelecteItem(index)'>删除</button>
                        </span>
                    </div>
                    <button @click='AddItem()'>点击添加</button>
                </div>
                <h3>二、上列代销价格按以下办法执行：</h3>
                <div class='promise-content-main-text'>
                    1、代销期间： <input type="text" :value='InitMsg.createTime' style='width: 140px'>至 <input type="text" :value='InitMsg.endTime' style='width: 140px'> <br>
                    2、代销商品定价总额 <input type="text" :value='InitMsg.amountThis' >元（大写：<input type="text" :value='InitMsg.amountThisMax' style='width: 140px'>圆整<br>
                    3、乙方在收货之日起，从次月对应日开始向甲方支付代销的货款，乙方每月代销商品金额不低于<input type="text">元（差额部分累计到最后一个月付清）。乙方通过银行转账方式将上述销售款项支付给甲方。 <br>
                    4、甲方收款账户<br>
                    户名：<input type="text" style='width: 220px' :value='InitMsg.debtName'><br>
                    账号：<input type="text" style='width: 220px' :value='InitMsg.bankCard'><br>
                    开户行：<input type="text" style='width: 210px' :value='InitMsg.bank'><br>
                    三、商品包装应按运输部门规定办理。否则运输途中损失由甲方负责。<br>
                    四、交货地点：凭乙方发货通知单，由甲方代办托运直拨至购货单位。<br>
                    五、代销商品发货数量必须根据乙方通知。<br>
                    六、手续费收取与结算按下列办法：按销售货款总额  10   %收取手续费；待乙方收到货款后，即给甲方结算并扣回代垫费用。<br>
                    七、甲方代销商品应与样品相符，保质保量，代销数量、规格、价格，有效期内如有变更，甲方必须及时通知乙方，通知到达前，已由乙方签出的合同，应照旧履行。如因质量或供应脱节而造成的损失和费用（包括手续费），均由甲方负责。<br>
                    八、附议：<input type="text" v-model='SubmitData.second'><br>
                    九、甲、乙双方应严格履行本协议，违约方应承担违约责任。造成损失的，承担赔偿责任。<br>
                    十、本协议在履行过程中如发生争议或纠纷，甲、乙双方应友好协商解决，协商不能解决时，任何一方可向当地人民法院起诉解决。<br>
                    十一、本协议一式两份，甲乙双方各执一份，签字盖章生效，具有同等法律效力。<br>
                </div>
                <div class='promise-content-main-container'>
                    <!-- 左侧签字盖章 -->
                    <div  class='promise-content-main-container-item'>
                        <div>
                            <span>甲方签字</span>
                            <input type="text">
                        </div>
                        <div>
                            <span>甲方盖章按捺印</span>
                            <button>上传电子章</button>
                        </div>
                        <div>
                            <span>时间</span>
                            <input type="text" v-model='SubmitData.partyaTime'>
                        </div>
                    </div>
                    <div class='promise-content-main-container-item'>
                    <!-- 右侧签字盖章 -->
                        <div>
                            <span>乙方签字</span>
                            <input type="text">
                        </div>
                        <div>
                            <span>甲方盖章按捺印</span>
                            <button>上传电子章</button>
                        </div>
                        <div>
                            <span>时间</span>
                            <input type="text" v-model='SubmitData.partybTime'>
                        </div>
                    </div>
                </div>
                <div class='promise-content-main-button'>
                    <button @click='Submit' :disabled='HasSubmitData'>提交</button>
                </div>
                <div class='promise-content-main-list'>
                    <h3>附件一: 商品寄售清单</h3>
                    <button>上传附件</button>
                    <input type="file" ref='GoodSaleList' @change="UpdataSaleAreement">
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
                dateStart: '',
                dateEnd: '',
                second: '1111',
                partyaSeal: '11',
                partyaTime: '',
                partybSeal: '222',
                partybTime: '',
                annex: '无',
                'busAgentSalesContractModity[0].modityName': '笔记本',
                'busAgentSalesContractModity[0].modityPlace': '上海',
                'busAgentSalesContractModity[0].moditySpecificat': ' 20 X 30',
                'busAgentSalesContractModity[0].partyaSeal': '个',
                'busAgentSalesContractModity[0].partyaTime': '精品',
                'busAgentSalesContractModity[0].partybSeal': 1,
                'busAgentSalesContractModity[0].partybTime': '备注'
            },
            GoodsList: [],
            PlaceList: [],
            SizeList: [],
            UnitList: [],
            PackingList: [],
            // 商品信息列表
            GoodsMsg: [
                {
                    id: 100,
                    // 商品名
                    modityName: '',
                    // 商品产地
                    modityPlace: '',
                    // 商品规格
                    moditySpecificat: '',
                    // 计量单位
                    partyaSeal: '',
                    // 商品包装
                    partyaTime: '',
                    // 商品数量
                    partybSeal: '',
                    // 商品备注
                    partybTime: ''
                }
            ],
            // 计数用作用,给ID赋值
            Num: 101,
            // 记录当前index
            Index: 0,
            HasSubmitData: false
        }
    },
    methods: {
        async InitData () {
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
            this.InitMsg = result.data
        },
        async Submit () {
            // 第一次过滤, 清除有空元素的行
            // 获取有空元素的下标数组
            const NullIndexs = []
            this.GoodsMsg.map((v, i) => {
                for (const key in v) {
                    if (!v[key]) {
                        NullIndexs.push(i)
                        break
                    }
                }
            })
            const AllMsgList = this.GoodsMsg
            const ClearNullGoodsMsg = []
            AllMsgList.map((v, index) => {
                for (const key in NullIndexs) {
                    if (index !== NullIndexs[key]) {
                        return ClearNullGoodsMsg.push(AllMsgList[index])
                    }
                }
            })
            ClearNullGoodsMsg.map((v, i) => {
                for (const key in v) {
                    this.$set(this.SubmitData, `busAgentSalesContractModity[${i}].${key}`, v[key])
                }
            })
            this.SubmitData.propertId = window.sessionStorage.getItem('propertId')
            this.SubmitData.dateStart = this.InitMsg.createTime
            this.SubmitData.dateEnd = this.InitMsg.endTime
            const formData = new FormData()
            for (const key in this.SubmitData) {
                formData.append(key, this.SubmitData[key])
            }
            const { data: result } = await this.$http({
                method: 'post',
                url: '/api/api/busAgentSalesContractController/insertSelective',
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            if (result.resultCode !== '200') return this.$message.error(result.resultMessage)
            // 更改报备状态
            const PropertFormData = new FormData()
            PropertFormData.append('propertId', window.sessionStorage.getItem('propertId'))
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
            this.$message.success(result.resultMessage)
            this.HasSubmitData = true
            this.$emit('onChangeFragment', 'CollectionLetters')
        },
        // 获取商品数据
        async GetGoodsMsg () {
            const formData = new FormData()
            // 商品
            const { data: GoodsResult } = await this.$http({
                method: 'post',
                url: '/api/api/pubDictionController/selectCommodity',
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            this.GoodsList = GoodsResult.data
            // 产地
            const { data: PlaceResult } = await this.$http({
                method: 'post',
                url: '/api/api/pubDictionController/selectPlace',
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            this.PlaceList = PlaceResult.data
            // 规格
            const { data: SizeResult } = await this.$http({
                method: 'post',
                url: '/api/api/pubDictionController/selectNorm',
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            this.SizeList = SizeResult.data
            // 计量单位
            const { data: UnitResult } = await this.$http({
                method: 'post',
                url: '/api/api/pubDictionController/selectMeasure',
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            this.UnitList = UnitResult.data
            // 计量包装
            const { data: PackingResult } = await this.$http({
                method: 'post',
                url: '/api/api/pubDictionController/selectPackage',
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            this.PackingList = PackingResult.data
        },
        AddItem () {
            this.GoodsMsg.push({
                id: this.Num,
                modityName: '',
                // 商品产地
                modityPlace: '',
                // 商品规格
                moditySpecificat: '',
                // 计量单位
                partyaSeal: '',
                // 商品包装
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
            this.GoodsMsg.splice(index, 1)
            this.index = this.index - 1
        },
        async UpdataSaleAreement () {
            let file = {}
            file = this.$refs.GoodSaleList.files[0]
            const result = await this.$UpdateFile(file)
            this.SubmitData.annex = result
        }
    },
    created () {
        this.InitData()
        this.GetGoodsMsg()
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
            &-container {
                display: flex;
                margin: px2rem(10) 0;
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
                }
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
