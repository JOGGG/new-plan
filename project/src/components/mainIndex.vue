<template>
    <el-container style="min-height:100vh">
      <el-header>Project</el-header>
      <el-container>
        <el-aside width="200px">这里是侧边栏</el-aside>
        <el-container>
          <el-main>
          这里是主要内容        
          </el-main>
          <el-footer>这里是底部栏AA</el-footer>
        </el-container>
      </el-container>
    </el-container>
</template>

<script>
export default {
  name: "mainIndex",
  data() {
    return {
      msg: "Welcome to App-project",
    };
  },
};
</script>

<style scoped>
.hello{

}
.el-container{
 
}
 .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
