// 全局设置
export default {
  methods: {
    linkToPath(path, data) {
      this.$router.push({ path: path, query: data })
    },
    
    openImgToLink(src){
      if(src){
        window.open(src)
      }
    },
    // 判断是否为手机号
    isPoneAvailable(pone) {
      var myreg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/
      if (!myreg.test(pone)) {
        return false
      } else {
        return true
      }
    },
    // 判断是否为有效用户名(以字母开头，且只能由字母、数字和下划线组成)
    isUserAvailable(user) {
      var myreg = /^[a-zA-Z]\w{5,20}$/;
      if (!myreg.test(user)) {
        return false
      } else {
        return true
      }
    },
    // 判断密码是否有效
    isPasswdAvailable(passwd) {
      var myreg = /^(\w){8,32}$/;
      if (!myreg.test(passwd)) {
        return false
      } else {
        return true
      }
    },
    // 判断邮箱是否有效
    isEmailAvailable(mail) {
      var myreg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
      if (!myreg.test(mail)) {
        return false
      } else {
        return true
      }
    },
    // 判断身份证号码是否有效
    isIdCardAvailable(card) {
      var myreg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
      if (!myreg.test(card)) {
        return false
      } else {
        return true
      }
    },
    // // 判断版本号是否有效(1.0.0)
    // isVersionNumAvailable(num) {
    //   var myreg = /^([1-9]\d|[1-9])(\.([1-9]\d|\d)){2}$/;
    //   if (!myreg.test(num)) {
    //     return false
    //   } else {
    //     return true
    //   }
    // },
    // 获取url参数
    getUrlParam(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象  
      var r = window.location.search.substr(1).match(reg); //匹配目标参数  
      if (r != null) {
        return unescape(r[2]); //返回参数值 
      } else {
        return null;
      }
    },
    // 秒转化为 分 秒 的格式
    toMinuteSecend(secend) {
      let minute = Math.floor(secend / 60)
      let sec = secend % 60
      return minute + '分' + sec + '秒'
    },
    // 图片预览(单个图片)
    previewImage(file, prvid) {
      /* file：file文件对象
       * prvid: 图片预览容器
       */
      var tip = "请选择正确的图片格式!"; // 设定提示信息
      var filters = {
        "jpeg": "/9j/4",
        "gif": "R0lGOD",
        "png": "iVBORw"
      }
      var prvbox = document.getElementById(prvid);
      prvbox.innerHTML = "";
      if (window.FileReader) { // html5方案
        var fr = new FileReader();
        fr.onload = function (e) {
          var src = e.target.result;
          if (!validateImg(src)) {
            alert(tip)
          } else {
            showPrvImg(src);
          }
        }
        fr.readAsDataURL(file);
      } else { // 降级处理
        return;
        if (!/\.jpg$|\.png$|\.gif$/i.test(file.value)) {
          alert(tip);
        } else {
          showPrvImg(file.value);
        }
      }

      function validateImg(data) {
        var pos = data.indexOf(",") + 1;
        for (var e in filters) {
          if (data.indexOf(filters[e]) === pos) {
            return e;
          }
        }
        return null;
      }

      function showPrvImg(src) {
        var img = document.createElement("img");
        img.src = src;
        prvbox.appendChild(img);
      }
    },
    // iview弹框手动关闭
    setLayerLoading() {
      this.layerLoading = false;
      this.$nextTick(() => {
        this.layerLoading = true;
      });
    }
  }
}
