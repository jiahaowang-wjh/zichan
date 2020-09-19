<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>

export default {
    name: 'app'
}
</script>
<style lang="scss">
@import '@css/style.scss';
.app {
    position: relative;
    width: 100%;
    height: 100%;
}
// 下载表单
.el-table .cell {
    height: px2rem(8)!important;
    line-height: px2rem(8)!important;
    button {
        border: none;
        padding: px2rem(0.6) px2rem(2);
        margin: 0 px2rem(3);
        border-radius: px2rem(1);
        color: #fff;
        font-size: px2rem(3.5);
    }
    button:nth-child(1) {
        background-color: #AD94E2;
    }
    button:nth-child(2) {
        background-color: #B3BCF2;
    }
}
.el-date-editor.el-input, .el-date-editor.el-input__inner {
    width: px2rem(37.5)!important;
    margin: px2rem(1);
    height: p2rem(8);
    line-height: px2rem(8);
}
.el-table__row {
    width: 45vw!important;
    display: flex !important;
    justify-content: space-around!important;

    :nth-child(1) {
        flex: 3
    }
    :nth-child(2) {
        flex: 8
    }
    :nth-child(3) {
        flex: 3
    }
    :nth-child(4) {
        flex: 6
    }
}
.el-dialog {
    width: 48vw !important;
}
thead > tr {
    width: 45vw!important;
    display: flex !important;
    justify-content: space-around!important;
    font-size: px2rem(3.2);
    :nth-child(1) {
        flex: 3
    }
    :nth-child(2) {
        flex: 8
    }
    :nth-child(3) {
        flex: 3
    }
    :nth-child(4) {
        flex: 6
    }
}
.el-input__icon {
    vertical-align: middle!important;
    margin-top: px2rem(0.5);
    width: px2rem(6)!important;
    height: auto;
}
.el-input--prefix .el-input__inner {
    padding-left: px2rem(9)!important;
}
.el-input--suffix .el-input__inner {
    padding-right: px2rem(4)!important;
}
thead > tr > th > div {
    background-color: #616789;
    height: px2rem(6);
    line-height: px2rem(6);
    color: #fff;
    font-size: px2rem(3.4);
}
.el-form {
    height: 100%;
}
.el-form-item {
    margin-bottom: 0!important;
    margin-left: px2rem(2);
    margin-right: 0;
    height: 100%!important;
    vertical-align: middle!important;
}

.el-select-dropdown__item.selected {
    color: #616789!important;
}
// 修改placeholder字体
input::-webkit-input-placeholder {
       /* placeholder颜色  */
       color: #aab2bd;
       /* placeholder字体大小  */
       font-size: px2rem(3);
}
.el-input__inner {
    height: px2rem(8)!important;
    line-height: px2rem(8)!important;
    font-size: px2rem(3.5)!important;
    padding: 0 px2rem(3)!important;
}
.el-form {
    height: px2rem(8);
    line-height: px2rem(8);
}
.el-form-item__error {
    font-size: px2rem(3.5)!important;
    margin-top: px2rem(1);
}
.el-select-dropdown__item span {
    font-size: px2rem(3.5)!important;
}
.el-form-item__label {
    font-size: px2rem(3)!important;
    width: px2rem(18)!important;
    padding: 0;
}
.el-input__icon {
    display: flex;
    align-items: center;
    width: px2rem(4);
    height: px2rem(7)!important;
    line-height: px2rem(7)!important;
    margin-left: px2rem(0.5);
}
.el-form-item__content {
    height: px2rem(8)!important;
    line-height: px2rem(8)!important;
    display: flex;
}
// 弹出框样式
.el-message-box__header {
    background-color: #616789;

    span {
        color: #ffffff;
    }
}
// 弹出窗样式修改
.el-dialog__body {
    width: 100%;
    box-sizing: border-box;
    padding: px2rem(1) px2rem(4)!important;
}
.el-dialog__headerbtn {
    top: px2rem(4)!important;
    right: px2rem(4)!important;
}
.el-dialog__title {
    font-size: px2rem(4)!important;
}
.el-dialog__header {
    height: px2rem(10);
    padding: 0!important;
    line-height: px2rem(10);
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #616789;
    span {
        color: #fff;
        margin-left: px2rem(4);
    }
}
.el-dialog__headerbtn .el-dialog__close{
    color: #fff!important;
    width: px2rem(4);
    height: px2rem(4);
    margin-right: px2rem(2);
    margin-bottom: px2rem(2);
}
.el-table td, .el-table th {
    padding: px2rem(1) 0!important;
    text-align: center!important;
}
.el-table-column {
    :nth-child(1) {
        border: none;
    }
    :nth-child(2) {
        border: none;
    }
}

.el-table th>.cell {
    border-left: px2rem(0.1) solid #fff;
    border-right: px2rem(0.1) solid #fff;
}

.el-button {
    font-size: px2rem(4)!important;
}
// 手风琴样式修改
.el-collapse-item__header.is-active {
    border-bottom: 1px solid #DFE0E7;
}
.el-collapse-item__header{
    font-size: px2rem(5)!important;
    font-weight: 600!important;
}
.el-collapse-item__content {
    padding-top: px2rem(2);
    background-color: #fff!important;
    font-size: px2rem(3.2)!important;
}
.el-collapse-item__wrap {
    background-color: #E9F0F5!important ;
}

// pagination
.el-pagination {
    font-weight: 600!important;
}
.el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #616789!important;
}
.el-pagination__jump {
    height: px2rem(8)!important;
    line-height: px2rem(8)!important;
}
.el-pagination.is-background .btn-next, .el-pagination.is-background .btn-prev, .el-pagination.is-background .el-pager li {
    height: px2rem(8)!important;
    line-height: px2rem(8)!important;
}
.el-input.is-disabled .el-input__inner{
    color: #000000!important;
}
</style>
