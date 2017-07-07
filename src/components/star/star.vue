<template>
  <div class="star" :class="`star-${size}`">
    <span class="star-item" v-for="c in starClasses" :class="c"></span>
  </div>
</template>

<script>
  /*根据得到的score的值，计算出星星的个数*/
  // 定义三个常量
  const ON = 'on';
  const OFF = 'off';
  const HALF = 'half';
    export default{
        props:{
            size : Number,
            score : Number
        },
      // 计算属性
      computed : {
        starClasses(){
          const csc = []
          const score = this.score
          let onCount = Math.floor(score)
          for (let i = 0; i <onCount; i++) {
            csc.push(ON)
          }
          let halfCount = score - onCount
          if(halfCount>=0.5){
            csc.push(HALF)
          }
          while(csc.length<5){
            csc.push(OFF)
          }
          return csc
        }
      }
    }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"

  .star-24
    .star-item
      display inline-block
      width 10px
      height 10px
      background-repeat no-repeat
      background-size 10px 10px
    .on
      bg-star(star24_on)
    .half
      bg-star(star24_half)
    .off
      bg-star(star24_off)
  .star-36
    .star-item
      display inline-block
      width 15px
      height 15px
      background-repeat no-repeat
      background-size 15px 15px
    .on
      bg-star(star36_on)
    .half
      bg-star(star36_half)
    .off
      bg-star(star36_off)
  .star-48
    .star-item
      display inline-block
      width 20px
      height 20px
      background-repeat no-repeat
      background-size 20px 20px
    .on
      bg-star(star48_on)
    .half
      bg-star(star48_half)
    .off
      bg-star(star48_off)
</style>
