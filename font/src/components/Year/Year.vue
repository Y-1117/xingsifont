<template>
<div class="topyear">
  <div class="centeryear">
    <div class="el-cardc" v-for="item in yearList" :key="item.persionId">
      <div class="el-cardcc">
        <div class="eltop">
          <h3>{{item.name}}</h3>
           <p>{{item.job}}</p>
            {{item.grade}}</div>
               <br>   
               <hr>
        <div class="elbottom">{{item.comment}}</div>
      </div>
      </div>  
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      yearList: {},
    };
  },
  methods:{

  },
  async mounted(){
    let id = this.$route.params.id;
    // console.log(this.$route);
   await this.$http.get("/history/" + id).then((res) => {
    console.log(res);
    this.yearList = res.data.data;
    })
    .catch((err) => {
      console.log(err); });
  }
}
</script>

<style scoped>
.topyear {
    margin: 0 auto;
    width: 60%;
    height: 100%;
    padding-top: 80px;
    /* background-color: rgba(233, 8, 8, 0.973); */
  }
  .centeryear {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  .el-cardc {
    width: 33%;
    height: 278px; 
    margin-bottom: 20px;
    display: flex;
    align-items: center; 
    /* background-color: rgb(121, 43, 43); */
  }
   .el-cardcc{
    /* padding: 15px; */
    box-sizing: border-box;
    border-radius: 4px;
    box-shadow: 1px 1px 3px 0px rgb(182, 182, 182);
    overflow: hidden;
    color: #303133; 
    margin: 0 auto;
    width: 68%;
    height: 100%;
    text-align: center;
    line-height: 1.5;
    padding: 10px;
    /* background-color: #fff; */
   background: linear-gradient(to bottom, #D5DEE7 0%, #E8EBF2 50%, #E2E7ED 100%), linear-gradient(to bottom, rgba(0,0,0,0.02) 50%, rgba(255,255,255,0.02) 61%, rgba(0,0,0,0.02) 73%), linear-gradient(33deg, rgba(255,255,255,0.20) 0%, rgba(0,0,0,0.20) 100%);
 background-blend-mode: normal,color-burn;
  } 
  .el-cardcc:hover{
    transform: translateY(-3px);
  }
  .eltop {
    line-height: 2.0;
    width: 100%;
    display: inline-block;
  }
  .eltop h3{
    font-size: 20px;
    letter-spacing: 3px;
  }
  .eltop p {
    font-size: 17px;
    color: #359bc7 !important;
    background-color: rgb(95, 95, 95, 0.2);
    border-radius: 50px;
  }
  .elbottom {
    padding: 6px 10px;
    text-align: justify;
    text-indent:2em;
  }
.el-card /deep/ .el-card__body {
  padding: 0px;
}
</style>