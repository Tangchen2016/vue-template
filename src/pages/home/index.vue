<template>
  <div>
    <headTop headTitle="主页" headPic="true">
      <span slot="logo" class="head_logo" @click="reload">Bob</span>
    </headTop>
  </div>
</template>
<script>
  import headTop from '../../components/header/head'
  export default{
    components: {
      headTop
    },
    methods: {
      reload() {
        window.location.reload()
      }
    }
  }
</script>
<style lang="scss" scoped>
  .head_logo {
    color: #fff;
  }
</style>
