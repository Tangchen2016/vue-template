<template>
  <div id="modal">
    <div class="modal_container">
      <div class="title"></div>
      <div class="content">{{text}}</div>
      <div class="btn_container" @click="confirm">
        <span id="confirm_btn">{{confirmText}}</span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['text', 'confirmText'],
    methods: {
      confirm() {
        this.$emit('confirm')
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../style/mixin.scss";
  #modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.6);
    z-index: 999999;
  }
  .modal_container{
    width: 6rem;
    @include center;
    margin-top: -1.3rem;
    background: #fefefe;
    border-radius: 5px;
    .title {
      text-align: center;
      font-size: 0.32rem;
      line-height: 0.5rem;
      padding: 0.4rem 0.4rem 0 0.4rem;
    }
    .content {
      text-align: center;
      font-size: 0.28rem;
      line-height: 0.4rem;
      padding: 0.2rem 0.4rem;
      color: #666;
    }
    .btn_container {
      @include wh(100%, .8rem);
      line-height: .8rem;
      text-align: center;
      border-top: 1px solid #ccc;
      #confirm_btn {
        display: inline-block;
        width: 50%;
        text-align: center;
        font-size: 0.3rem;
        color: #2dc41d;
      }
      #cancel_btn{
        border-right: 1px solid #ccc;
        box-sizing: border-box;
        color: #757575;
      }
    }
  }
</style>
