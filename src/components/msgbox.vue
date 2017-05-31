<!--<msg-box :show="show" msgText="xxxxx" duration="2"></msg-box>-->
<template>
  <transition name="fade">
    <div v-if="show" class="msgbox_container">
      <p class="msgbox_text">{{msgText}}</p>
    </div>
  </transition>
</template>
<script>
  export default {
    created() {
      if(this.$props.duration != undefined) {
        this.durationTime = this.duration
      }
    },
    mounted() {
      if(!this.$store.state.isValidUser) { // 快牙外
        this.$nextTick(() => {
          this.show = true
        })
        setTimeout(() => {
          this.show = false
        }, this.durationTime * 1000)
      }
    },
    props: ['msgText', 'duration'],
    data() {
      return {
        show: null,
        durationTime: 2
      }
    },
  }
</script>
<style lang="scss" scoped>
  .msgbox_container {
    position: fixed;
    width: 100%;
    top: 45%;
    left: 0;
    text-align: center;
    .msgbox_text{
      display: inline-block;
      background: rgba(0,0,0,.5);
      padding: 0.2rem 0.5rem;
      line-height:0.4rem;
      font-size: 0.3rem;
      color: #fff;
    }
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity 1.5s;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0;
  }
  
</style>
