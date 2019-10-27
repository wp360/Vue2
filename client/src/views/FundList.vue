<template>
  <div class="fillContainer">
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
  </div>
</template>
<script>
export default {
  name: 'fundList',
  data () {
    return {
      tableData: []
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
          this.tableData = res.data
        })
        .catch(err => console.log(err))
    },
    handleEdit (index, row) {
      console.log(index, row)
    },
    handleDelete (index, row) {
      console.log(index, row)
    }
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
