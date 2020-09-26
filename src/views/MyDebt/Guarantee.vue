<!--  -->
<template>
    <div class='promise'>
        <div class='promise-title'>
            <span class='promise-title-go1'>我的审批</span>
            <span class='promise-title-separator'> / </span>
            <span class='promise-title-go2'>银行保函协议 </span>
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
                    4.债权转让通知书
                </div>
                <div class='promise-content-progress-map-finished'>
                    <span></span>
                    5.委托代理销售合同
                </div>
                <div class='promise-content-progress-map-finished'>
                    <span></span>
                    6.催款函
                </div>
                <div class='promise-content-progress-map-finished'>
                    <span></span>
                    7.和解协议
                </div>
                <div class='promise-content-progress-map-highlight'>
                    <span></span>
                    8.银行保函协议
                </div>
            </div>
            <!-- 背景横线 -->
            <div class='promise-content-crossing'></div>
            <div class='promise-content-main'>
                <div class='promise-content-main-title'>
                    银行保函协议
                </div>
                <div style='margin: 4px 0' class='promise-content-main-form-top'>
                    <span style='width: 100px'>甲方(委托方):</span>
                    <input type="text" style='width: 300px'>
                </div>
                <div style='margin: 4px 0'>
                    <span style='width: 180px'>身份证号码统一社会信用代码：</span>
                    <input type="text" style='width: 220px'>
                </div>
                <div style='margin: 4px 0'>
                    <span style='width: 70px'>联系地址：</span>
                    <input type="text" style='width: 330px'>
                </div>
                <div style='margin: 4px 0' class='promise-content-main-form-bottom'>
                    <span style='width: 70px'>联系电话：</span>
                    <input type="text" style='width: 330px'>
                </div>
                <div class='promise-content-main-text'>
                    乙方：深圳金瑞盈通资产管理有限公司<br>
                    统一社会信用代码：91440300359331797F<br>
                    联系地址：深圳市光明新区公明街道公园路17栋306号房<br>
                    联系电话：18688724748<br>
                </div>
                <div class='promise-content-main-text'>
                    甲乙双方经过充分沟通,本着平等互惠原则,按照《中华人民共和国合同法》等相关规定,双方就债事化解相关事宜达成如下协议：<br>
                    一、甲方自愿将其合法拥有的债权(金额为人民币<input type="text">)转让给乙方,由乙方收回该债权。鉴于债权收回具有不确定性、长周期性及其他各种追索风险,甲方自愿另行向乙方预付现金人民币<input type="text">元。<br>
                    二、综合甲方转让债权价值和支付资金,乙方确保甲方分期在第三方平台兑换或消费总价值<input type="text">元的商品,即:甲方从<input type="text">以一个月为一期,每期不超过期在第三方平台兑换或消费,乙方负责与第三方平台进行结算。<br>
                    三、为保障甲方预付款项的安全,经甲乙双方协商,由乙方向合作银行申请保函提供担保。详细担保金额和担保期间见后附担保明细表。担保期限以银行出具的担保函期限为准。、本协议在履行过程中如发生争议或纠纷,甲、乙双方应友好协商解决,协商不能解决时,任何一方可向深圳市光明区人民法院起诉。<br>
                    四、本协议自双方签字盖章之日起生效,本协议一式三份,甲方留存一份,乙方留两份,具有同等法律效力。<br>
                    (以下无正文,为本《协议》签署页)<br>
                </div>
                <div class='promise-content-main-container'>
                    <!-- 左侧签字盖章 -->
                    <div  class='promise-content-main-container-item'>
                        <div>
                            <span>甲方(签字): </span>
                            <input type="text">
                        </div>
                        <div>
                            <span>甲方(盖章): </span>
                            <button>上传电子章</button>
                        </div>
                        <div>
                            <span>时间: </span>
                            <input type="text">
                        </div>
                    </div>
                    <div class='promise-content-main-container-item'>
                    <!-- 右侧签字盖章 -->
                        <div>
                            <span>乙方(签字)</span>
                            <input type="text">
                        </div>
                        <div>
                            <span>乙方(盖章): </span>
                            <button>上传电子章</button>
                        </div>
                        <div>
                            <span>时间: </span>
                            <input type="text">
                        </div>
                        <div>
                            <span>合同签约地</span>
                            <input type="text" placeholder="银行所在地">
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
            isNormal: false
        }
    },
    methods: {
        handleCurrentChange (e) {
        },
        SelectMore () {
            this.isNormal = !this.isNormal
        },
        HandleSelect (item) {
            this.SelectOption.forEach(v => {
                v.isSelect = false
            })
            item.isSelect = true
        },
        Submit () {
            this.$message({
                message: '提交成功, 请等待审核',
                type: 'success'
            })
            this.$emit('onChangeFragment', 'MyDebt')
        },
        // 获取报备短信验证码
        async GetReportPhoneCode () {
            const tel = ''
            if (!(/^1[3456789]\d{9}$/.test(tel))) return this.$message.error('填写手机号码格式不正确,请重新填入')
            // 发送验证码
            const formData = new FormData()
            formData.append('tel', tel)
            const { data: result } = await this.$http({
                method: 'post',
                url: '/api/api/smsSend/sendCheckNO',
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            if (result.resultCode === '200') {
                this.$message({
                    message: '手机验证码发送成功, 请填写正确的验证码',
                    type: 'success'
                })
                // 存储发送成功的电话号码
                this.SendReportPhoneNumber = tel
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
                font-size: px2rem(3.2);
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
                margin-top: px2rem(3)!important;
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
