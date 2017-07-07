<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img :src="seller.avatar">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}}分钟到达
        </div>
        <div class="support" v-if="seller.supports">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div class="supports_count" v-if="seller.supports" @click="showDetail(true)">
        <span class="count">{{seller.supports.length}}个</span>
        <span class="icon-keyboard_arrow_right"></span>
      </div>
    </div>
    <div class="bulletin-wrapper" @click="showDetail(true)">
      <span class="bulletin-title"></span>
      <span class="bulletin-text">{{seller.bulletin}}</span>
      <span class="icon-keyboard_arrow_right"></span>
    </div>
    <div class="background">
      <img :src="seller.avatar">
    </div>
    <transition name="fade">
      <div class="detail" v-show="detailShow">
        <div class="detail-wrapper">
          <div class="detail-main">
            <div class="name">{{seller.name}}</div>
            <div class="star-wrapper">
              <div class="star star-48">
                <span class="star-item on"></span>
                <span class="star-item on"></span>
                <span class="star-item on"></span>
                <span class="star-item half"></span>
                <span class="star-item off"></span>
              </div>
            </div>
            <div class="title">
              <div class="line"></div>
              <div class="text">优惠信息</div>
              <div class="line"></div>
            </div>
            <ul class="supports">
              <li class="support" v-for="support in seller.supports">
                <span class="icon" :class="classMap[support.type]"></span>
                <span class="text">{{support.description}}</span>
              </li>
            </ul>
            <div class="title">
              <div class="line"></div>
              <div class="text">商家公告</div>
              <div class="line"></div>
            </div>
            <div class="content">
              <p>{{seller.bulletin}}</p>
            </div>
          </div>
        </div>
        <div class="detail-close" @click="showDetail(false)">
          <span class="icon-close"></span>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
      props :['seller'],
      data(){
          return{
            detailShow : false
          }
      },
      methods : {
          showDetail(isShow){
              this.detailShow = isShow
          }
      },
    created(){
          this.classMap = ["decrease", "discount", "guarantee", "invoice", "special"]
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"

.header
  background rgba(7,17,27,0.5)
  color white
  position relative
  overflow hidden
  .content-wrapper
    padding 24px 12px 18px 24px
    position relative
    .avatar
      width 64px
      height 64px
      border-radius 4px
      display inline-block
      img
        width 100%
    .content
      display inline-block
      margin-left 16px
      padding 2px 0 2px
      .title
        .name
          margin-left 6px
          font-size 16px
          line-height 18px
          font-weight bold
        .brand
          display inline-block
          width 30px
          height 18px
          background-repeat no-repeat
          background-size 30px 18px
          vertical-align middle
          bg-image(brand)
      .description
        margin-top 8px
        margin-bottom 10px
        font-size 12px
        line-height 12px
        font-weight 200
      .support
        .text
          margin-left 4px
          font-size 10px
          line-height 12px
          font-weight 200
        .icon
          display inline-block
          width 12px
          height 12px
          background-repeat no-repeat
          background-size 12px 12px
          vertical-align middle
        .decrease
          bg-image(decrease_1)
    .supports_count
      background rgba(0,0,0,0.2)
      border-radius 8px
      position absolute
      right 12px
      bottom 18px
      height 24px
      padding 4px 8px
      box-sizing border-box
      .count
        font-size 10px
        line-height 12px
        font-weight 200
        position relative
        top -3px
  .bulletin-wrapper
    height 28px
    background rgba(7,17,27,0.2)
    padding 0 12px
    position relative
    white-space nowrap
    overflow hidden
    text-overflow ellipsis
    .icon-keyboard_arrow_right
      position absolute
      top 7px
      right 2px
    .bulletin-text
      margin-left 4px
      font-size 10px
      line-height 28px
      font-weight 200
    .bulletin-title
      display inline-block
      width 22px
      height 12px
      background-repeat no-repeat
      background-size 22px 12px
      vertical-align middle
      bg-image(bulletin)
  .background
    position absolute
    top 0
    left 0
    right 0
    bottom 0
    z-index -1
    filter blur(10px)
    img
      width 100%
      height 100%
  .detail
    position fixed
    top 0
    right 0
    left 0
    bottom 0
    background rgba(7,17,27,0.8)
    z-index 100
    &.fade-enter-active, &.fade-leave-active
      transition: opacity .7s linear
    &.fade-enter,&.fade-leave-to
      opacity: 0
    .detail-wrapper
      padding 64px 0 32px 0
      min-height 100%
      .detail-main
        .name
          text-align center
          font-weight 700
          font-size 16px
          line-height 16px
        .star-wrapper
          margin-bottom 28px
          margin-top 16px
          height 24px
          text-align center
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
        .title
          margin 0 36px 36px 24px
          display flex
          .line
            position relative
            top: 8px
            flex 1
            width 107px
            height 2px
            background: rgba(255,255,255,0.2);
          .text
            float left
            margin 0 12px
        .supports
          padding 0 48px
          .support
            margin-bottom 12px
            .text
              margin-left 6px
              font-size 12px
              font-weight 200
              line-height 12px
            .icon
              display inline-block
              width 16px
              height 16px
              background-size 16px 16px
              background-repeat no-repeat
              vertical-align middle
            .decrease
              bg-image(decrease_2)
            .discount
              bg-image(discount_2)
            .guarantee
              bg-image(guarantee_2)
            .invoice
              bg-image(invoice_2)
            .special
              bg-image(special_2)
        .content
          padding 0 48px
          font-size 12px
          font-weight 200
          line-height 24px

    .detail-close
      text-align center
      line-height 32px
      font-size 32px
      height 32px
      margin-top -160px
      color rgba(255,255,255,0.5)
</style>
