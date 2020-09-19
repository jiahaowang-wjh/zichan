<!--  -->
<template>
  <div class='password'>
      <div class='password-title'>修改密码</div>
      <div class='password-content'>
            <div class='password-content-title'>请设置新的密码</div>
            <div class='password-content-label'>
                原密码:
            </div>
            <div>
                <input type="text" v-model='PasswordList.outPwd'>
            </div>
            <div class='password-content-label'>
                新密码:
            </div>
            <div>
                <input type="text" v-model='PasswordList.newPwdA'>
            </div>
            <div class='password-content-label'>
                重复新密码:
            </div>
            <div>
                <input type="text" v-model='PasswordList.newPwdB'>
            </div>
            <button @click='ChangePassword'>确认</button>
      </div>
  </div>
</template>

<script>
import QS from 'qs'
export default {
    data () {
        return {
            PasswordList: {
                outPwd: '',
                newPwdA: '',
                newPwdB: ''
            }
        }
    },
    methods: {
        async ChangePassword () {
            this.PasswordList.personId = window.sessionStorage.getItem('userId')
            console.log(this.PasswordList)
            const { data: result } = await this.$http({
                method: 'post',
                url: '/api/api/pubUser/updatePwd',
                data: QS.stringify(this.PasswordList)
            })
            if (result.resultCode !== '200') {
                this.PasswordList = {
                    outPwd: '',
                    newPwdA: '',
                    newPwdB: ''
                }
                return this.$message.error(result.resultMessage)
            }
            this.$message.success('密码修改成功')
            this.PasswordList = {
                outPwd: '',
                newPwdA: '',
                newPwdB: ''
            }
        }
    }
}

</script>
<style lang='scss' scoped>
@import '@css/style.scss';
.password {
    background-color: #E9F0F5;
    display: flex;
    height: 100%;
    width: 100%;
    padding: px2rem(4);
    flex-direction: column;
    box-sizing: border-box;
    &-title {
        font-size: px2rem(4);
        color: #FC7F89;
        padding-bottom: px2rem(4);
    }

    &-content {
        background-color: #fff;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding: px2rem(4);
        border-radius: px2rem(2);
        div {
            line-height: px2rem(8);
        }
        &-title {
            font-size: px2rem(6);
            margin-bottom: px2rem(4);
        }
        &-label {
            font-size: px2rem(3.5);
            height: px2rem(8);
            line-height: px2rem(8);
        }
        button {
            margin-top: px2rem(6);
            width: px2rem(60);
            height: px2rem(8);
            line-height: px2rem(8);
            font-size: px2rem(3.5);
            box-sizing: border-box;
            border: none;
            border-radius: px2rem(1);
            background-color: #616789;
            color: #fff;
        }
        input {
            padding-left: px2rem(2);;
            height: px2rem(8);
            line-height: px2rem(8);
            border-radius: px2rem(1);
            border: 1px solid #E8EAEC;
            width: px2rem(80);
        }
    }
}
</style>
