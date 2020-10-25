<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style>
  .el-popover {
    /* margin-left: 10px; */
    margin: 0 auto;
    width: 170px!important;
    height: 41px!important;
    padding-left: 26px!important;
    z-index: 2000;
    text-align: justify;
    font-size: 14px;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    word-break: break-all;
  }
 
</style>
