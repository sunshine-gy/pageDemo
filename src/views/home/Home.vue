<template>
  <div>
      <button @click="goLuckyDraw">抽奖活动</button>
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