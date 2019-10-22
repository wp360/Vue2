<template>
  <div class="infoShow">
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="8">
        <div class="user">
          <img v-if="user.avatar != null" :src="user.avatar" class="avatar" alt="头像">
          <img v-else src="https://img.zcool.cn/community/04e6a45864cbb2a801219c7753c455.jpg@80w_80h_1c_1e_1o_100sh.jpg" class="avatar" alt="默认头像">
        </div>
      </el-col>
      <el-col :span="16">
        <div class="userinfo">
          <div class="user-item">
            <i class="fa fa-user"></i>
            <span>{{user.name}}</span>
          </div>
          <div class="user-item">
            <i class="fa fa-cog"></i>
            <span>{{user.identity == "manager" ? "管理员" : "普通员工"}}</span>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'infoshow',
  computed: {
    user () {
      return this.$store.getters.user
    }
  }
}
</script>
<style scoped>
.infoshow {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  /* padding: 16px; */
}
.row-bg {
  width: 100%;
  height: 100%;
}
.user {
  text-align: center;
  position: relative;
  top: 30%;
}
.user img {
  width: 80px;
  border-radius: 50%;
}
.user span {
  display: block;
  text-align: center;
  margin-top: 20px;
  font-size: 20px;
  font-weight: bold;
}
.userinfo {
  /* height: 100%; */
  height: 100vh;
  background-color: #eee;
}
.user-item {
  position: relative;
  top: 30%;
  padding: 26px;
  font-size: 28px;
  color: #333;
}
</style>
