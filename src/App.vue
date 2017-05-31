<template>
  <div id="app_wrap" @click="handleClick">
    <router-view></router-view>
    <msg-box v-if="showMsg" msgText="请在快牙内打开"></msg-box>
  </div>
</template>

<script>
  import msgBox from './components/msgbox.vue'
  export default {
    created() {
      this.$store.dispatch('initZapya');
      this.isValidUser = this.$store.state.isValidUser
      if(!this.isValidUser) {
        this.$nextTick(() => {
          this.showMsg = true
          setTimeout(() => {
            this.showMsg = false
          }, 2000)
        })
      }
    },
    components: {
      msgBox
    },
    data() {
      return {
        isValidUser: null,
        showMsg : null
      }
    },
    methods: {
      handleClick() {
        if(!this.isValidUser && !this.showMsg) {
          this.showMsg = true
          setTimeout(() => {
            this.showMsg = false
          }, 2000)
        }
      }
    }
  }
</script>
<style>
  @import "style/base.scss";
  #app_wrap {
    background: #f0f0f0;
    font-size: .3rem;
  }
</style>
