<template>
  <div>
    <head-top goBack="true" headTitle="相册"></head-top>
    <main>
      <ul>
        <li class="thumb-list clearfix">
          <div class="thumb-item fl" @click="showBig($event)">
            <img src="../../images/thumb/2.jpg">
          </div>
        </li>
      </ul>
    </main>
  </div>
</template>
<script>
  import headTop from '../../components/header/head.vue'
  import {mapActions} from 'vuex'
  export default{
    created() {
      
    },
    data() {
      return {
        thumbs: []
      }
    },
    components: {
      headTop
    },
    methods: {
      ...mapActions([
        'getThumbs'
      ]),
      showBig(e) {
        console.log(e)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .thumb-list {
    display: flex;
    width: 100%;
    height: 2.4rem;
    justify-content: space-around;
    align-items: center;
    .thumb-item {
      width: 1.6rem;
      height: 1.6rem;
      /*background-color: red;*/
    img {
      width: 100%;
      height: 100%;
      border-radius: 12px;
    }
    }
  }
  
</style>
