<!--  -->
<template>
    <div class='assess'>
        <div class='assess-title'>
            <span class='assess-title-go1'>我的审批</span>
            <span class='assess-title-separator'> / </span>
            <span class='assess-title-go2'>资产评估</span>
        </div>
        <div class='assess-content'>
            <div class='assess-content-progress-map'>
                <div class='assess-content-progress-map-highlight'>
                    <span></span>
                    1.资产评估
                </div>
                <div>
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
            <div class='assess-content-crossing'></div>
            <div class='assess-content-main'>
                <div class='assess-content-main-title'>
                    资产评估
                </div>
                <div class='assess-content-main-row'>
                    <span>债权人姓名</span>
                    <span>
                        <input type="text" :value='assessData.debtName' :disabled='true'>
                    </span>
                    <span>债权人身份证号码</span>
                    <span>
                        <input type="text" :value='assessData.debtidCard' :disabled='true'>
                    </span>
                    <span>债权人电话</span>
                    <span>
                        <input type="text" :value='assessData.debtPhnoe' :disabled='true'>
                    </span>
                </div>
                <div class='assess-content-main-row'>
                    <span>债务人姓名</span>
                    <span>
                        <input type="text" :value='assessData.personName' :disabled='true'>
                    </span>
                    <span>债务人身份证号码</span>
                    <span>
                        <input type="text" :value='assessData.personIdCard' :disabled='true'>
                    </span>
                    <span>债务人电话</span>
                    <span>
                        <input type="text" :value='assessData.personPhnoe' :disabled='true'>
                    </span>
                </div>
                <div class='assess-content-main-row2'>
                    <span class='assess-content-main-row2-title'>本次申请置换债权金额</span>
                    <span class='assess-content-main-row2-form-money'>
                        <input type="text" :value='assessData.amountThis' :disabled='true'>
                    </span>
                </div>
                <div class='assess-content-main-row2'>
                    <span class='assess-content-main-row2-title'>本次置换资产凭证</span>
                    <span class='assess-content-main-row2-form'>
                        <input type="text" placeholder="请输入">
                    </span>
                </div>
                <div class='assess-content-main-row2-update'>
                    <div v-for='(item,index) in UpdateImgsSrcList' :key='index'>
                        <button v-show='!item.HasData'>点击上传</button>
                        <input v-show='!item.HasData' @change='UpdataImgs(index)' ref='VoucherList' type="file">
                        <img v-if='item.HasData' alt="" :src='item.ImgSrc'>
                    </div>
                </div>
                <div class='assess-content-main-row2'>
                    <span class='assess-content-main-row2-title'>其他情况说明</span>
                    <span class='assess-content-main-row2-form'>
                        <input type="text" placeholder="请输入" v-model='SubmitData.card'>
                    </span>
                </div>
                <div class='assess-content-main-row2'>
                    <span class='assess-content-main-row2-title'>战略合作公司负责人</span>
                    <span class='assess-content-main-row2-form'>
                        <span class='assess-content-main-row2-form'>
                            <input type="text" placeholder="请输入" v-model='SubmitData.companyManag'>
                        </span>
                    </span>
                </div>
                <div class='assess-content-main-submit'>
                    <button @click='SubmitAssessMsg'>提交</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            assessData: {},
            pickerOptions: {
                disabledDate (time) {
                    return time.getTime() > Date.now()
                },
                shortcuts: [{
                    text: '今天',
                    onClick (picker) {
                        picker.$emit('pick', new Date())
                    }
                }, {
                    text: '昨天',
                    onClick (picker) {
                        const date = new Date()
                        date.setTime(date.getTime() - 3600 * 1000 * 24)
                        picker.$emit('pick', date)
                    }
                }, {
                    text: '一周前',
                    onClick (picker) {
                        const date = new Date()
                        date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
                        picker.$emit('pick', date)
                    }
                }]
            },
            UpdateImgsSrcList: [
                {
                    ImgSrc: '',
                    HasData: false
                },
                {
                    ImgSrc: '',
                    HasData: false
                },
                {
                    ImgSrc: '',
                    HasData: false
                },
                {
                    ImgSrc: '',
                    HasData: false
                },
                {
                    ImgSrc: '',
                    HasData: false
                },
                {
                    ImgSrc: '',
                    HasData: false
                }
            ],
            SubmitData: {
                propertId: '',
                assessmentDate: '',
                credentials: '',
                card: '',
                companyManag: '',
                status: '0',
                checkReason: '无',
                checkDate: '2019-03-04'
            }
        }
    },
    methods: {
        async SubmitAssessMsg () {
            // 处理债事凭证的信息添加到上传信息中
            const ImgsSrcList = []
            this.UpdateImgsSrcList.map(v => {
                if (v.HasData) {
                    ImgsSrcList.push(v.ImgSrc)
                }
            })
            this.SubmitData.credentials = ImgsSrcList
            this.SubmitData.propertId = window.sessionStorage.getItem('propertId')
            // 获取当前日期
            const date = new Date()
            const year = date.getFullYear()
            let month = date.getMonth() + 1
            let strDate = date.getDate()
            if (month >= 1 && month <= 9) month = '0' + month
            if (strDate >= 0 && strDate <= 9) strDate = '0' + strDate
            this.SubmitData.assessmentDate = `${year}-${month}-${strDate}`
            const formData = new FormData()
            for (const key in this.SubmitData) {
                formData.append(key, this.SubmitData[key])
            }
            const { data: result } = await this.$http({
                method: 'post',
                url: '/api/api/busAssessmentController/insertSelective',
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            if (result.resultCode !== '200') return this.$message.error('提交信息失败, 请重试')
            // 更新资产审批状态
            const StatusFormData = new FormData()
            StatusFormData.append('propertId', window.sessionStorage.getItem('propertId'))
            StatusFormData.append('status', '1')
            const { data: StatusResult } = await this.$http({
                method: 'post',
                url: '/api/api/busPropertController/updateStatus',
                data: StatusFormData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            if (StatusResult.resultCode !== '200') return this.$message.error('更改资产状态失败, 请重试')
            // 更新资产信息自身阶段
            const PropertFormData = new FormData()
            PropertFormData.append('propertId', window.sessionStorage.getItem('propertId'))
            PropertFormData.append('stage', '1')
            const { data: PropertStatusResult } = await this.$http({
                method: 'post',
                url: '/api/api/busPropertController/updateStage',
                data: PropertFormData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            if (PropertStatusResult.resultCode !== '200') return this.$message.error('更改资产阶段失败, 请重试')

            this.$message.success('提交资产评估成功')
            this.$emit('onChangeFragment', 'MyDebt')
        },
        // 获取相对人Id及通过相对人获取资产评估页面初始信息
        async GetRelativeId () {
            const relativePerId = window.sessionStorage.getItem('relativePerId')
            const formData = new FormData()
            formData.append('relativePerId', relativePerId)
            const { data: result } = await this.$http({
                method: 'post',
                url: '/api/api/busAssessmentController/initialize',
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            this.assessData = result.data
        },
        UpdataImgs (index) {
            const file = this.$refs.VoucherList[index].files[0]
            this.$UpdateFile(file).then(result => {
                this.UpdateImgsSrcList[index].ImgSrc = result
                this.UpdateImgsSrcList[index].HasData = true
            })
        }
    },
    created () {
        this.GetRelativeId()
    }
}

</script>
<style lang='scss' scoped>
@import '@css/style.scss';
.assess {
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
            width: 98%;
            margin: 0 auto;
            font-size: px2rem(3.2);
            input {
                padding-left: px2rem(2);
                width: 95%;
                height: px2rem(6);
                border: 1px solid #E8EAEC;
            }
            &-title {
                height: px2rem(14);
                line-height: px2rem(14);
                font-size: px2rem(4);
                text-align: center;
                font-weight: 600;
            }
            &-row {
                display: flex;
                align-items: center;
                line-height: px2rem(12);
                span {
                    flex: 1;
                    display: inline-block;
                    border-top: 1px solid #DFE0E7;
                    border-bottom: 1px solid #DFE0E7;
                }
                :nth-child(odd) {
                    background-color: #616789;
                    text-align: center;
                    color: #ffffff;
                }
                :nth-child(even) {
                    background-color: #F2F6F9;

                    input {
                        background-color: #F2F6F9;
                        color: #272727;
                        text-align: left;
                        padding-left: px2rem(4);
                    }
                }
            }
            &-row2 {
                display: flex;
                align-items: center;
                line-height: px2rem(12);
                height: px2rem(12);
                span {
                    display: inline-block;
                    border: 1px solid #DFE0E7;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                &-title {
                    flex: 1;
                    background-color: #616789;
                    text-align: left;
                    color: #ffffff;
                }
                &-form {
                    flex: 5;
                    height: 100%;
                }
                &-form-money {
                    background-color: #F2F6F9;
                    flex: 5;
                    height: 100%;
                    input {
                        background-color: #F2F6F9;
                        border: none;
                        width: 98%;
                    }
                }
                &-update {
                    display: flex;
                    height: px2rem(20);
                    div {
                        border: 1px solid #DFE0E7;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex: 1;
                        position: relative;
                        input[type=file] {
                            width: px2rem(20);
                            position: absolute;
                            opacity: 0;
                        }
                        button {
                            background-color: #616789;
                            border: none;
                            color: #fff;
                            font-size: px2rem(3.2);
                            padding: px2rem(1) px2rem(3);
                            border-radius: px2rem(1);
                        }
                        img {
                            width: 80%;
                            height: 95%;
                        }
                    }
                }
            }

            &-submit {
                display: flex;
                justify-content: center;
                margin-top: px2rem(10);
                button {
                    width: px2rem(40);
                    height: px2rem(7);
                    background-color: #616789;
                    border: none;
                    color: #ffffff;
                    font-size: px2rem(3.5);
                    border-radius: px2rem(1);
                }
            }
        }
    }
}
</style>
