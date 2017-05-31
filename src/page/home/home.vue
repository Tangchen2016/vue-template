<template>
  <div>
    <head-top :showBroadcast="true" :broadcastText="broadcastText"></head-top>
    <modal v-if="showModal" text="温馨提示：任务完成后预计会在10分钟内收到钱，请耐心等待~" confirmText="我知道了" @confirm="modalConfirm"></modal>
  </div>
</template>

<script>
  import headTop from '../../components/head-top.vue'
  import modal from '../../components/modal.vue'
  import {init} from '../../service/getData'
  import {setCookie, getCookie, getUrlQueryString} from '../../config/mUtils'
  import {mapState} from 'vuex'
  export default {
    created() {
      this.fromNovice()
    },
    mounted() {
      if(!this.$store.state.isValidUser) { return }
      init(this.$store.state.userInfo)
            .then(res => {
              let data = res.data
              this.broadcastText = data.msg.title
            }, rej => {
              console.error(rej)
            })
    },
    components : {
      headTop,
      modal,
    },
    data () {
      return {
        broadcastText: '暂无广播通知', // 广播内容
        showModal: true
      }
    },
    computed: {
      ...mapState([
        'userInfo'
      ])
    },
    methods: {
      // 跳转新手流程
      fromNovice() {
        let fromType = getUrlQueryString('form') || ''
        let isJumpNovice = getCookie('isJumpNovice_'+this.userInfo.uid) || 0;
        if(isJumpNovice == 0 && fromType == "novice"){
          window.location = "detailapp-novice.html";
          setCookie('isJumpNovice_'+userId,1);
        }
      },
      modalConfirm() {
        this.showModal = false
      }
    },
  }
</script>

<style lang="scss" scoped>
  
</style>
