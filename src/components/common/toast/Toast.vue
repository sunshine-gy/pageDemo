<template>
  <transition name="fade">
    <div class="toast" v-show="isShow">{{message}}</div>
  </transition>
</template>

<script>
	export default {
		name: "Toast",
    data() {
			return {
				isShow: false,
                message: '我是弹窗'
      }
    }
	}
</script>

<style scoped>
  .toast {
    position: fixed;
    left: 50%;
    top: 36%;
    background-color: pink;
    color: rgb(245, 101, 18);
    padding: 20px;
    border-radius: 10px;
    transform: translate(-50%,-50%);
    z-index: 99;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>