<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/imgs/logo-footer.png" alt="">
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="https://wp360.github.io/" target="_blank">个人主页</a><span>|</span>
      <a href="https://wp360.github.io/waimai/" target="_blank">美团外卖</a><span>|</span>
      <a href="http://h5.oldkids.cn/onlineLesson/" target="_blank">云课堂</a><span>|</span>
      <a href="http://h5.oldkids.cn/yanglao/" target="_blank">机构查询</a>
    </div>
    <div class="copyright">Copyright ©2020 <span class="domain">haidebaozi.com</span> All Rights Reserved.</div>
  </div>
</template>
<script>
export default {
  name: 'nav-footer'
}
</script>
<style lang="scss" scoped>
  .footer{
    height:234px;
    border-top:4px solid #FF6600;
    background-color:#333333;
    color:#999999;
    font-size:16px;
    text-align:center;
    .footer-logo{
      margin-top:46px;
      margin-bottom:31px;
      img{
        width:53px;
        height:36px;
        margin-bottom:13px;
      }
    }
    .footer-link{
      a{
        color:#999999;
        display:inline-block;
      }
      span{
        margin:0 10px;
      }
      margin-bottom:13px;
    }
    .copyright{
      .domain{
        color:#FF6600;
      }
    }
  }
</style>