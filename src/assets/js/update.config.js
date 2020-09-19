export default {  
    install(Vue, options)
        {  
        Vue.prototype.baseUrl = function () {
            return '111';  
        };  
        Vue.prototype.getTitle = {
                title:'',
                isBack: true,
                isAdd: false,
        };  
        Vue.prototype.showFootTab = {  
            isShow:false,  
            active:0,  
        } 
    }  
}