<template>
  <div>
      <button @click="goLuckyDraw" style="margin-right: 10px">九宫格抽奖活动</button>
      <button>转盘抽奖活动</button>
  </div>
</template>

<script>
export default {
    name: "Home",
    methods: {
        goLuckyDraw() {
            this.$router.push('/luckyDraw')
        }
    }
}
</script>

<style>

</style>