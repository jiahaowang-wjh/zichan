<!--  -->
<template>
  <div class="my-debt">
    <div class="my-debt-title">我的债行</div>
    <div class="my-debt-list">
      <div class="my-debt-list-select">
        <span
          @click="HandleSelect(item)"
          v-for="(item, index) in SelectOption"
          :key="index"
          :class="item.isSelect ? 'active' : ''"
          >{{ item.SelectName }}</span
        >
      </div>
      <div class="my-debt-list-search">
        <div class="my-debt-list-search-form">
          <el-form ref="form">
            <el-form-item>
              <span>相对人:</span>
              <el-select
                placeholder="请选择相对人"
                v-model="tableQuery.Relevant"
              >
                <el-option label="债市人1" value="debtor1"></el-option>
                <el-option label="债市人2" value="debtor2"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <span>录入编号:</span>
              <el-input v-model="tableQuery.ReportNum"></el-input>
            </el-form-item>
            <el-form-item placeholder="审核状态">
              <span>审核状态:</span>
              <el-select v-model="tableQuery.AuditState">
                <el-option label="审核通过" value="pass"></el-option>
                <el-option label="审核驳回" value="reject"></el-option>
                <el-option label="审核已提交" value="submit"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
        </div>
        <div class="my-debt-list-search-time-select">
          <span>时间: </span>
          <el-date-picker
            align="left"
            type="date"
            placeholder="请选择开始日期"
            :picker-options="pickerOptions"
            v-model="tableQuery.TimeStart"
          >
          </el-date-picker>
          <span class="my-debt-list-search-time-select-separator">—</span>
          <el-date-picker
            align="left"
            type="date"
            placeholder="请选择结束日期"
            :picker-options="pickerOptions"
            v-model="tableQuery.TimeEnd"
          >
          </el-date-picker>
        </div>
        <div
          class="my-debt-list-search-button-search"
          @click="searchTbaleData()"
        >
          搜索
        </div>
      </div>
      <div class="my-debt-list-content">
        <!-- 正常显示模板 -->
        <div class="my-debt-list-content-title">
          <span>序号</span>
          <span>录入编号</span>
          <span>债权处理编号</span>
          <span>评估编号</span>
          <span>审批阶段</span>
          <span>创建时间</span>
          <span>审批状态</span>
          <span>操作</span>
        </div>
        <div class="my-debt-list-content-tab">
          <div
            class="my-debt-list-content-tab-item"
            v-for="(item, index) in MyDebtMsg"
            :key="index"
          >
            <span>{{ index + 1 }}</span>
            <span>{{ item.reportNo ? item.reportNo : "/" }}</span>
            <span>{{ item.debtNo ? item.debtNo : "/" }}</span>
            <span>{{ item.assessmentNo ? item.assessmentNo : "/" }}</span>
            <span>{{ item.stage === "4" ? "资产阶段" : "/" }}</span>
            <span>{{ item.createTime ? item.createTime : "/" }}</span>
            <div>
              <span
                :class="[
                  item.status === '3' ||
                  item.status === '6' ||
                  item.status === '9'
                    ? 'pass'
                    : item.status === '2' ||
                      item.status === '5' ||
                      item.status === '8'
                    ? 'unpass'
                    : 'hassubmit',
                ]"
              >
                <!--  -->
                {{
                  item.status === "0"
                    ? "资产信息未录入"
                    : item.status === "1"
                    ? "资产评估未审核"
                    : item.status === "2"
                    ? "资产评估审核未通过"
                    : item.status === "3"
                    ? "资产评估审核通过"
                    : item.status === "4"
                    ? "资产信息未审核"
                    : item.status === "5"
                    ? "资产信息审核未通过"
                    : item.status === "6"
                    ? "资产信息审核通过,开始缴费"
                    : item.status === "7"
                    ? "财务信息未审核"
                    : item.status === "8"
                    ? "财务信息审核未通过"
                    : item.status === "9"
                    ? "财务信息审核通过"
                    : ""
                }}
              </span>
            </div>
            <span>
              <button v-show="item.status === '0'" @click="GoAssess(index)">
                资产评估
              </button>
              <button
                v-show="item.status === '3' && item.stage === '1'"
                @click="EnterContract(index)"
              >
                录入合同
              </button>
              <!-- <button v-if="item.stage === '2'" @click='GoConfirmAssignment(index)'>债权转让确认书</button>
                            this.$emit('onChangeFragment', 'ConfirmAssignment')
                            <button v-if="item.stage === '3'" @click='EnterContract(index)'>录入合同</button>
                            <button v-if="item.stage === '4'" @click='EnterContract(index)'>录入合同</button>
                            <button v-if="item.stage === '5'" @click='EnterContract(index)'>录入合同</button>
                            <button v-if="item.stage === '6'" @click='EnterContract(index)'>录入合同</button>
                            <button v-if="item.stage === '7'" @click='EnterContract(index)'>录入合同</button> -->
              <button v-show="item.status === '2' || item.status === '4'">
                查看
              </button>
              <button
                v-show="
                  (item.stage === '4' && item.status === '1') ||
                  item.status === '4' ||
                  item.status === '7'
                "
              >
                编辑
              </button>
              <button
                @click="dialogTableVisible = true"
                v-show="item.status === '5'"
              >
                下载
              </button>
            </span>
          </div>
        </div>
        <div style="text-align: right;margin-top:25px">
          <el-pagination
            background
            @current-change="searchTbaleData"
            layout="prev, pager, next"
            :total="tablePage.total"
          >
          </el-pagination>
        </div>
      </div>
    </div>
    <div class="my-debt-pop-download">
      <el-dialog title="下载" :visible.sync="dialogTableVisible">
        <el-table :data="gridData">
          <el-table-column property="Order" label="序号"></el-table-column>
          <el-table-column property="WordName" label="文件名"></el-table-column>
          <el-table-column property="WordType" label="类型"></el-table-column>
          <el-table-column width="247" label="操作">
            <button>查看</button>
            <button>下载</button>
          </el-table-column>
        </el-table>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 选项卡
      SelectOption: [
        {
          SelectName: "全部",
          isSelect: true,
        },
        {
          SelectName: "待审核",
          isSelect: false,
        },
        {
          SelectName: "审核通过",
          isSelect: false,
        },
        {
          SelectName: "审核驳回",
          isSelect: false,
        },
      ],
      // 调解信息列表数据源
      MyDebtMsg: [],
      // 确定选用正常模板还是多选模板
      isNormal: false,
      // 是否显示相对人面板
      IsShowRelativePage: true,
      //表格分页
      tablePage: {
        pageSize: 10,
        pageNum: 1,
        total: 0,
      },
      //表格查询
      tableQuery: {
        companyType: "1",
        // 审核状态
        AuditState: "",
        // 选择相对人
        Relevant: "",
        // 录入编号
        ReportNum: "",
        TimeStart: "",
        TimeEnd: "2020-04-28",
      },
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            },
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            },
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            },
          },
        ],
      },
      // 下载弹出窗的数据源
      gridData: [
        {
          Order: "1",
          WordName: "《债务人基本信息登记表》",
          WordType: "word",
        },
        {
          Order: "2",
          WordName: "《附件》",
          WordType: "excel",
        },
        {
          Order: "3",
          WordName: "《债务人身份证正面附件》",
          WordType: "mp3",
        },
        {
          Order: "4",
          WordName: "《债务人身份证反面附件》",
          WordType: "mp3",
        },
        {
          Order: "5",
          WordName: "王小虎",
          WordType: "mp3",
        },
        {
          Order: "6",
          WordName: "王小虎",
          WordType: "mp3",
        },
        {
          Order: "7",
          WordName: "王小虎",
          WordType: "mp3",
        },
        {
          Order: "8",
          WordName: "王小虎",
          WordType: "mp3",
        },
        {
          Order: "9",
          WordName: "王小虎",
          WordType: "mp3",
        },
        {
          Order: "10",
          WordName: "王小虎",
          WordType: "mp3",
        },
      ],
      dialogTableVisible: false,
    };
  },
  methods: {
    HandleSelect(item) {
      this.SelectOption.forEach((v) => {
        v.isSelect = false;
      });
      item.isSelect = true;
    },
    SelectRelative() {
      // window.sessionStorage.setItem('reportId', this.MyDebtMsg[index].reportId)
      this.$emit("onChangeFragment", "ExamineReportForm");
    },
    CloseSelectRelative() {
      this.IsShowRelativePage = false;
    },
    // 资产评估
    GoAssess(index) {
      window.sessionStorage.setItem(
        "relativePerId",
        this.MyDebtMsg[index].relativePerId
      );
      window.sessionStorage.setItem(
        "propertId",
        this.MyDebtMsg[index].propertId
      );
      this.$emit("onChangeFragment", "Assess");
    },
    // 录入合同
    EnterContract(index) {
      window.sessionStorage.setItem(
        "relativePerId",
        this.MyDebtMsg[index].relativePerId
      );
      window.sessionStorage.setItem(
        "propertId",
        this.MyDebtMsg[index].propertId
      );
      this.$emit("onChangeFragment", "Assignment");
    },

    // 搜索表格数据
    async searchTbaleData(page) {
      this.tablePage.pageNum = page || 1;
      const queryData = Object.assign(this.tableQuery, this.tablePage);
      const formData = new FormData();
      for (const key in queryData) {
        formData.append(key, queryData[key]);
      }
      const result = await this.$http({
        method: "post",
        url: "/api/api/busPropertController/querys",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(result);
      this.MyDebtMsg = result.data.list;
    },
  },
  created() {
    this.searchTbaleData();
  },
};
</script>
<style lang='scss' scoped>
@import "@css/style.scss";
.my-debt {
  display: flex;
  flex-direction: column;
  background-color: #e9f0f5;
  height: 100%;
  width: 100%;
  &-title {
    height: px2rem(12);
    line-height: px2rem(12);
    font-size: px2rem(4);
    color: #fc7f89;
    margin: 0 px2rem(4);
  }

  &-list {
    height: 100%;
    background-color: #ffffff;
    margin: 0 px2rem(4);
    padding: px2rem(4);

    &-select {
      display: flex;
      height: px2rem(8);
      border-bottom: px2rem(0.1) solid #dfe0e7;
      span {
        display: inline-block;
        font-size: px2rem(4);
        color: #999999;
        margin: 0 px2rem(4);
        height: px2rem(8);
        line-height: px2rem(8);
        width: px2rem(22);
        text-align: center;
      }
      span:hover,
      span:active {
        background-color: #efeff3;
      }
      .active {
        border-bottom: px2rem(0.4) solid #616789;
      }
    }
    &-search {
      display: flex;
      align-items: center;
      height: px2rem(16);

      &-form {
        display: flex;
        height: px2rem(14);
        line-height: px2rem(14);
        margin-left: px2rem(2);
        .el-form {
          display: flex;
          height: 100%;
          align-items: center;
          margin-bottom: 0;
          .el-form-item {
            display: flex;
            align-items: center;
            height: px2rem(10);
            line-height: px2rem(10);
            width: px2rem(54) !important;
            span {
              font-size: px2rem(3.2);
              display: inline-block;
              width: px2rem(20);
              padding-right: px2rem(1);
            }
          }
        }
      }

      &-time-select {
        display: flex;
        align-items: center;
        margin-left: px2rem(2);
        height: px2rem(10);
        line-height: px2rem(10);
        .el-date-picker {
          width: px2rem(51);
        }
        span {
          font-size: px2rem(3.2);
          width: px2rem(10);
        }

        &-separator {
          width: px2rem(6);
          text-align: center;
        }
      }

      &-button-search {
        margin-left: px2rem(2);
        width: px2rem(14);
        height: px2rem(7);
        line-height: px2rem(7);
        font-size: px2rem(3);
        text-align: center;
        background-color: #616789;
        border-radius: px2rem(2);
        color: #fff;
      }
      &-button-add {
        margin-left: px2rem(2);
        width: px2rem(14);
        height: px2rem(7);
        line-height: px2rem(7);
        font-size: px2rem(3);
        text-align: center;
        background-color: #fc7f89;
        border-radius: px2rem(2);
        color: #fff;
      }
    }

    &-content {
      display: flex;
      flex-direction: column;
      &-title {
        display: flex;
        height: px2rem(8);
        span {
          height: px2rem(8);
          line-height: px2rem(8);
          font-size: px2rem(3.2);
          background-color: #616789;
          flex: 3;
          text-align: center;
          color: #fff;
          display: inline-block;
          box-sizing: border-box;
          border-left: 0.5px solid #fff;
          border-right: 0.5px solid #fff;
        }
        :nth-child(1) {
          flex: 1;
        }
        :nth-child(6) {
          flex: 2.5;
        }
      }

      &-tab {
        display: flex;
        flex-direction: column;
        font-size: px2rem(3);
        div:nth-child(odd) {
          display: flex;
          height: px2rem(24);
          line-height: px2rem(24);
          background-color: #fff;
          text-align: center;
          font-size: px2rem(2);
          span {
            font-size: px2rem(2.8);
            flex: 3;
            text-align: center;
            color: #000;
            display: inline-block;
            margin: 0 0.5px;
          }
          :nth-child(1) {
            flex: 1;
          }
          :nth-child(6) {
            flex: 2.5;
          }
          :nth-child(7) {
            flex: 3;
            display: flex;
            justify-content: center;
            align-items: center;
            span {
              margin: 0 px2rem(3);
              height: px2rem(3);
              line-height: px2rem(3);
            }
            .pass {
              color: #17c67a !important;
            }
            .unpass {
              color: #ff0000 !important;
            }
            .hassubmit {
              color: #272a39 !important;
            }
          }
          :last-child {
            flex: 3;
            margin: 0 auto;
            button {
              font-size: px2rem(3.5);
              color: #fff;
              border: none;
              border-radius: px2rem(1);
              margin: 0 px2rem(0.8);
              padding: px2rem(1.2) px2rem(3);
            }
            :nth-child(1),
            :nth-child(2) {
              background-color: #616789;
            }
            :nth-child(3) {
              background-color: #616789;
            }
            :nth-child(4),
            :nth-child(5) {
              background-color: #b3bcf2;
            }
            :nth-child(6),
            :nth-child(7) {
              background-color: #fc7f89;
            }
          }
        }
        div:nth-child(even) {
          display: flex;
          height: px2rem(24);
          line-height: px2rem(24);
          background-color: #e0e3f8;
          text-align: center;
          font-size: px2rem(2);
          span {
            font-size: px2rem(2.8);
            flex: 3;
            text-align: center;
            color: #000;
            display: inline-block;
          }
          :nth-child(1) {
            flex: 1;
          }
          :nth-child(6) {
            flex: 2.5;
          }
          :nth-child(7) {
            flex: 3;
            background-color: #e0e3f8;
            span {
              text-align: center;
            }
          }
          :nth-child(7) {
            flex: 3;
            display: flex;
            justify-content: center;
            align-items: center;
            span {
              margin: 0 px2rem(3);
              height: px2rem(3);
              line-height: px2rem(3);
            }
            .pass {
              color: #17c67a !important;
            }
            .unpass {
              color: #ff0000 !important;
            }
            .hassubmit {
              color: #272a39 !important;
            }
          }
          :last-child {
            flex: 3;
            margin: 0 auto;
            button {
              font-size: px2rem(3.5);
              color: #fff;
              border: none;
              border-radius: px2rem(1);
              margin: 0 px2rem(0.8);
              padding: px2rem(1.5) px2rem(3);
            }
            :nth-child(1),
            :nth-child(2) {
              background-color: #616789;
            }
            :nth-child(3) {
              background-color: #616789;
            }
            :nth-child(4),
            :nth-child(5) {
              background-color: #b3bcf2;
            }
            :nth-child(6),
            :nth-child(7) {
              background-color: #fc7f89;
            }
          }
        }
      }
    }
  }
}
</style>
