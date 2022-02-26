<template>
  <div>
      <button @click="goLuckyDraw" style="margin-right: 10px">九宫格抽奖活动</button>
      <button>转盘抽奖活动</button>
      <div>
          <testExcel></testExcel>
      </div>
  </div>
</template>

<script>
import testExcel from '../testExcel/testExcel.vue'
export default {
    name: "Home",
    components: {testExcel},
    methods: {
        goLuckyDraw() {
            this.$router.push('/luckyDraw')
        }
    }
}
</script>

<style>

</style>