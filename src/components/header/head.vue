<template>
  <div>
    <div class="header">
      <el-row :gutter="10">
        <!--logo和回退按钮-->
        <el-col :xs="4" :sm="4" :md="3" :lg="2">
          <div class="grid-content">
            <slot name="logo"></slot>
            <section v-if="goBack" class="go-back">
              <i class="el-icon-arrow-left" @click="$router.go(-1)"></i>
            </section>
          </div>
        </el-col>
        <!--title-->
        <el-col :xs="14" :sm="16" :md="16" :lg="16">
          <div class="grid-content">
            <section v-if="headTitle" class="head_title">
              <span>{{headTitle}}</span>
            </section>
        </div>
        </el-col>
        <!--快捷按钮-->
        <el-col :xs="6" :sm="4" :md="5" :lg="6">
          <div class="grid-content">
            <section v-if="headPic">
              <router-link to="/thumb">
                <i class="el-icon-picture"></i>
              </router-link>
            </section>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
  export default{
    props: ['goBack', 'headTitle', 'headPic']
  }
</script>
<style lang="scss" scoped>
  .header {
    background: #58B7FF;
    .el-col {
      border-radius: 4px;
      .grid-content {
        border-radius: 4px;
        min-height: .8rem;
        line-height: .8rem;
        text-align: center;
      }
    }
    .head_title {
      font-size: 20px;
      color: #fff;
    }
    .go-back {
      font-size: 20px;
      color: #fff;
    }
    .el-icon-picture {
      font-size: 24px;
      color: #fff;
    }
  }
  
  
</style>
