<template>
  <div>
    <marquee direction='up'>
      <marquee-item class='bb' v-for="i in number" :key = "i">混无霹雳手-ziksang{{i}}</marquee-item>
    </marquee>
  </div>
</template>

<script>
  import Marquee from '../../components/marquee/marquee.vue'
  import MarqueeItem from '../../components/marquee/marquee-item.vue'
  export default {
    components: {
      Marquee,
      MarqueeItem
    },
    data () {
      return {
        number : 10
      }
    }
  }
</script>
<style>
  .bb{
    font-size:20px;
  }
</style>
