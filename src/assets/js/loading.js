// import Vue from 'vue'
import { Loading } from 'element-ui';
let _loading = {
    loadCounter: 0,
    load_options: {
      text: "奋力加载中...",
      lock: false
    },
    elNode: null,
    open:function(){
      // console.log('this++++');
      // console.log(this);
      this.loadCounter++;
      this.elNode = Loading.service(this.load_options);
    },
    close:function(){
      --this.loadCounter;
      if (this.loadCounter < 1) {
        this.elNode.close();
      }
    }
  };
  export default _loading; 