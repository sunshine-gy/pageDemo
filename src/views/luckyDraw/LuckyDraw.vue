<template>
  <div id="rotary-table">
    <div
      class="award"
      v-for="(award, index) in awards"
      :class="['award' + index, { active: index == current }]"
    >
      {{ award.name }}
    </div>
    <div id="start-btn" @click="start">开始</div>
    <toast ref="toast"/>
  </div>
</template>
<script>
import Toast from '../../components/common/toast/Toast.vue'
export default {
  name: "LuckyDraw",
  components: {Toast},
  data() {
    return {
      //节流阀，以防频繁点击抽奖
      flag: true,
      current: 0,
      awards: [
        { id: 1, name: "谢谢惠顾" },
        { id: 2, name: "眼镜" },
        { id: 3, name: "手提包" },
        { id: 4, name: "iphone13" },
        { id: 5, name: "js程序设计" },
        { id: 6, name: "谢谢惠顾" },
        { id: 7, name: "衬衫" },
        { id: 8, name: "ipad" },
      ],
      speed: 200,
      diff: 15,
      award: {},
      time: 0,
    };
  },
  methods: {
    start() {
      // 开始抽奖
      if (this.flag) {
        this.drawAward();
        this.time = Date.now();
        this.speed = 200;
        this.diff = 15;
      }
    },
    drawAward() {
      this.flag = false;
      // 请求接口, 这里我就模拟请求后的数据(请求时间为1s)
      setTimeout(() => {
        this.award = {
          id: "4",
          name: "iphone13",
        };
      }, 1000);
      this.move();
    },
    move() {
      window.timeout = setTimeout(() => {
        this.current++;
        if (this.current > 7) {
          this.current = 0;
        }
        //若抽中的奖品存在并且转动时间超过2秒，则开始减速转动
        if (this.award.id && (Date.now() - this.time) / 1000 > 2) {
          this.speed += this.diff; //转动减速
          //若转动时间超过4秒，并且奖品id等于格子里的奖品id，则停下来
          if (
            (Date.now() - this.time) / 1000 > 4 &&
            this.award.id == this.awards[this.current].id
          ) {
            clearTimeout(window.timeout);
            setTimeout(() => {
            //   alert("恭喜你，抽中了" + this.award.name);
            if(this.award.id == 1 || this.award.id == 6) {
                this.$toast({message: "谢谢您的参与"})
            } else {
                this.$toast({message: "恭喜你，抽中了" + this.award.name})
            }
              this.flag = true;
            }, 200);
            return;
          }
        } else {
          this.speed -= this.diff;
        }

        console.log(this.speed);
        this.move();
      }, this.speed);
    },
  },
};
</script>

<style rel="stylesheet/less" lang="less">
* {
  margin: 0;
  padding: 0;
  list-style: none;
  outline: none;
}

#rotary-table {
  width: 340px;
  height: 349px;
  position: relative;
  margin: 100px auto;
  background-color: antiquewhite;

  .award {
    width: 90px;
    height: 96px;
    line-height: 96px;
    text-align: center;
    float: left;
    position: absolute;
    overflow: hidden;
    background-color: aquamarine;

    &.active {
      background-color: darkgoldenrod;
    }

    &.award0 {
      top: 21px;
      left: 21px;
    }
    &.award1 {
      top: 21px;
      left: 125px;
    }
    &.award2 {
      top: 21px;
      right: 22px;
    }
    &.award3 {
      top: 126px;
      right: 22px;
    }
    &.award4 {
      bottom: 22.5px;
      right: 22px;
    }
    &.award5 {
      bottom: 22.5px;
      right: 125.5px;
    }
    &.award6 {
      bottom: 22.5px;
      left: 21px;
    }
    &.award7 {
      top: 126px;
      left: 21px;
    }
  }
  #start-btn {
    position: absolute;
    top: 125px;
    left: 124px;
    width: 90px;
    height: 96px;
    line-height: 90px;
    text-align: center;
    background-color: coral;
  }
}
</style>
