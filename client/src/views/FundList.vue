<template>
  <div class="fillContainer">
    <div>
      <el-form :inline="true" ref="add_data">
        <el-form-item class="btnRight">
          <el-button type="primary" size="small" icon="view" @click="handleAdd()">
            添加
          </el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="table_container">
      <el-table v-if="tableData.length > 0" :data="tableData" max-height="450" border style="width: 100%">
        <el-table-column type="index" label="序号" align="center" width="70"></el-table-column>
        <el-table-column
          prop="date"
          label="创建日期"
          align="center"
          width="252"
        >
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="type"
          label="收支类型"
          align="center"
          width="148"
        >
        </el-table-column>
        <el-table-column
          prop="describe"
          label="收支描述"
          align="center"
          width="180"
        >
        </el-table-column>
        <el-table-column
          prop="income"
          label="收入"
          align="center"
          width="170"
        >
          <template slot-scope="scope">
            <span style="color:#00d053">{{ scope.row.income }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="expend"
          label="支出"
          align="center"
          width="170"
        >
          <template slot-scope="scope">
            <span style="color:#f56767">{{ scope.row.expend }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="cash"
          label="账户现金"
          align="center"
          width="170"
        >
          <template slot-scope="scope">
            <span style="color:#4db3ff">{{ scope.row.cash }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="remark"
          label="备注"
          align="center"
          width="220"
        >
        </el-table-column>
        <el-table-column prop="operation" label="操作" align="center">
          <template slot-scope="scope">
            <el-button
              size="small"
              type="warning"
              icon="edit"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="small"
              type="danger"
              icon="delete"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <el-row>
        <el-col :span="24">
          <div class="pagination">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page.sync="paginations.pageIndex"
              :page-sizes="paginations.pageSizes"
              :page-size="paginations.pageSize"
              :layout="paginations.layout"
              :total="paginations.total">
            </el-pagination>
          </div>
        </el-col>
      </el-row>
    </div>
    <Dialog :dialog="dialog" :formData="formData" @update="getProfile"></Dialog>
  </div>
</template>
<script>
import Dialog from '../components/Dialog'
export default {
  name: 'fundList',
  data () {
    return {
      paginations: {
        // 当前位于哪页
        pageIndex: 1,
        // 总数
        total: 0,
        // 一页显示5条
        pageSize: 5,
        // 每页显示多少条
        pageSizes: [5, 10, 15, 20],
        // 翻页属性
        layout: 'total,sizes,prev,next,jumper'
      },
      tableData: [],
      allTableData: [],
      formData: {
        type: '',
        describe: '',
        income: '',
        expend: '',
        cash: '',
        remark: '',
        id: ''
      },
      dialog: {
        show: false,
        title: '',
        option: 'edit'
      }
    }
  },
  created () {
    this.getProfile()
  },
  methods: {
    getProfile () {
      // 获取表格数据
      this.$axios.get('/api/profiles')
        .then(res => {
          // console.log(res)
          // this.tableData = res.data
          this.allTableData = res.data
          // 设置分页数据
          this.setPaginations()
        })
        .catch(err => console.log(err))
    },
    handleEdit (index, row) {
      // console.log(index, row)
      // 编辑
      this.dialog = {
        show: true,
        title: '修改资金信息',
        option: 'edit'
      }
      // 获取信息
      this.formData = {
        type: row.type,
        describe: row.describe,
        income: row.income,
        expend: row.expend,
        cash: row.cash,
        remark: row.remark,
        id: row._id
      }
    },
    handleDelete (index, row) {
      // console.log(index, row)
      this.$axios.delete(`/api/profiles/delete/${row._id}`)
        .then(res => {
          this.$message('删除成功！')
          this.getProfile()
        }).catch(err => {
          this.$message(err)
        })
    },
    handleAdd () {
      // console.log('添加')
      // 添加
      this.dialog = {
        show: true,
        title: '添加资金信息',
        option: 'add'
      }
      // 设置信息
      this.formData = {
        type: '',
        describe: '',
        income: '',
        expend: '',
        cash: '',
        remark: '',
        id: ''
      }
      // this.dialog.show = true
    },
    handleSizeChange (pageSize) {
      // 切换size
      this.paginations.pageIndex = 1
      this.paginations.pageSize = pageSize
      this.tableData = this.allTableData.filter((item, index) => {
        return index < pageSize
      })
    },
    handleCurrentChange (page) {
      // 获取当前页
      let index = this.paginations.pageSize * (page - 1)
      // 数据的总数
      let nums = this.paginations.pageSize * page
      // 容器
      let tables = []
      for (let i = index; i < nums; i++) {
        if (this.allTableData[i]) {
          tables.push(this.allTableData[i])
        }
        this.tableData = tables
      }
    },
    setPaginations () {
      // 分页属性设置
      this.paginations.total = this.allTableData.length
      this.paginations.pageIndex = 1
      this.paginations.pageSize = 5
      // 设置默认的分页数据
      this.tableData = this.allTableData.filter((item, index) => {
        return index < this.paginations.pageSize
      })
    }
  },
  components: {
    Dialog
  }
}
</script>
<style scoped>
.fillContainer {
  width: 100%;
  height: 100%;
  padding: 16px;
  box-sizing: border-box;
}
.btnRight {
  float: right;
}
.pagination {
  text-align: right;
  margin-top: 10px;
}
</style>
