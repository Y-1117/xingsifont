<template>
  <div class="home">
    <div class="header">
      <div class="head-text">
         <div class="logo">
         <img src="../assets/xingsilogo.png" alt />
         <h1>行思工作室</h1>
         </div>
      <div><el-menu
              :default-active="active"
              class="el-menu-demo"
              mode="horizontal"
              background-color="#fff"
              text-color="#303133"
              active-text-color="#409EFF">
        <router-link :to="{path:'/main'}" active-class="active">  
        <el-menu-item index="main">
         行思首页
        </el-menu-item>
        </router-link>
        <router-link :to="{path:'/news'}" active-class="active">
        <el-menu-item index="news">
          行思新闻
        </el-menu-item>
        </router-link>
         <router-link :to="{path:'/photo'}" active-class="active">
        <el-menu-item index="photo">
         行思相册
        </el-menu-item>
        </router-link>
        <router-link :to="{path:'/histories'}" active-class="active">
        <el-menu-item index="histories">
          行思历史
        </el-menu-item>
        </router-link>
        <router-link :to="{path:'/about'}" active-class="active">
        <el-menu-item index="about">
          行思简介
        </el-menu-item>
        </router-link>
        <router-link :to="{path:'/navigate'}" active-class="active">
        <el-menu-item index="navigate">
         行思导航
        </el-menu-item>
        </router-link>
      </el-menu>
      </div>
    </div>
    </div>
    <router-view></router-view>
    <div class="footer">
      <div class="footer-top">
        <div class="footer-tl">
          <p class="youq">友情链接</p> <br>
          <div class="youqb">
          <a href="http://www.hpu.edu.cn/www/index.html"  target="_blank">河南理工大学</a> <br>
          <a href="http://jwc.hpu.edu.cn/jwweb/index.aspx"  target="_blank"> 河南理工大学教务处</a> <br>
          <a href="http://218.196.240.27/srun_portal_pc.php?ac_id=2&wlanuserip=10.16.66.10&ssid=HPUNET"  target="_blank"> 河南理工大学上网认证系统</a>
          </div>
        </div>
        <div class="footer-tr">
          <div><img src="~@/assets/guanQ.jpg" alt="">
          <p class="img-left">行思官Q</p></div>
          <div><img src="~@/assets/SouHPU.jpg" alt="">
          <p class="img-left">行思公众号</p></div>
        </div>
      </div>
      
      <div class="ban">Copyright © 2008 - 2020 |<a href="http://beian.miit.gov.cn/" target="_blank"> 豫ICP备20006399号</a> | 大学生网络工作室 （行思工作室） </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  data() {
    return {
      active: 'main'
    };
  },
  mounted: function () {
    this.active = this.$route.name;
  },
};
</script>

<style scoped>
  .header {
    position: fixed;
    width: 100%;
    height: 60px;
    display: flex;
    background-color: #fff;
    box-shadow: 1px 1px 3px 1px rgb(145, 145, 145);
    z-index: 99;
  }
  .head-text {
    margin: 0 auto;
    width: 960px;
    height: 60px;
    display: flex;
    /* justify-content: space-between; */
    /* align-items: center;  */
  }
  
  .el-menu-demo {
    font-size: 20px !important;
  }
  .logo {
    width: 30%;
    display: flex;
  }
  .logo img {
    height: 60px;
    line-height: 60px;
    cursor: pointer;
  }
  .logo h1 {
    display: flex;
    font-family: "楷体";
    font-size: 28px;
    line-height: 60px;
    color: rgb(66,183,233);
  }
  .el-menu {
    border-bottom: 0 !important;
    display: flex;
  }
  .el-menu-item {
    font-size: 16px;
    height: 60px;
    display: flex;
    align-items: center;
}
  .el-menu--horizontal > .el-menu-item.is-active {
    border-bottom: none;
  }
  .el-main .el-menu–horizontal /deep/ .el-submenu > .el-menu-item.el-submenu__title{
    border-bottom: none !important;
  }
  
  .footer {
    position: relative;
    margin-top: 20px;
    padding-top: 6px;
    width: 100%;
    height: 200px;
    z-index: 111;
    background-color: #252525;
  }  
  .footer-top {
    justify-content: space-between;
    margin: 0 auto;
    width: 56%;
    height: 150px;
    /* background-color: rgb(31, 193, 214); */
    display: flex;

  }
  .footer-tl {
    width: 58%;
    border-right: 1px solid rgba(197, 197, 197, 0.5);
    /* background-color: rgb(160, 64, 64); */
  }
  .footer-tl .youq {
    color: #d7d8d9;
    font-size: 14px;
    padding-top: 22px;
  }
  .footer-tl .youqb a {
    color: #9b9ea0;
    font-size: 12px;
    line-height: 22px;
  }
  .footer-tl .youqb a:hover {
    color:#68adf3;
    
  }
  .footer-tr {
    display: flex;
    margin-top: 30px;
  }
  .footer-tr img {
    height: 100px;
    padding-right: 38px;
  }
 .footer-tr .img-left {
   margin: 10px 20px ;
   color: rgba(255, 255, 255, 0.3);
 }
 
  .ban {
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 100%;
    height: 30px;
    transform: translate(-50%, 0);
    /* background-color: rgb(202, 17, 17); */
    font-size: 14px;
    color: #73777a;
    letter-spacing: .5px;
    text-align: center;
    line-height: 23px;
  }
 .ban a {
   font-size: 14px;
   color: #73777a; 
   letter-spacing: .5px;  
 }
 .ban a:hover {
   color:#68adf3;
 }
</style>
