<template>
<div>
        <transition :name="transitionName">
                <router-view class="Router"></router-view>
        </transition>    
        <cube-tab-bar
        v-model="selectedLabelDefault"
        :data="tabs"
        @click="clickHandler"
        @change="changeHandler"
        class="botnav">
        </cube-tab-bar>
        <span class="countsum">{{countsum}}</span>
</div>
  
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  data () {
    return {
      transitionName:'slide-right',
      selectedLabelDefault: '首页',
      tabs: [
              {
        label: '首页',
        icon: 'cubeic-home'
      },
       {
        label: '分类',
        icon: 'cubeic-tag'
      }, 
//       {
//         label: '搜索',
//         icon: 'cubeic-search'
//       }, 
      {
        label: '购物车',
        icon: 'cubeic-mall'
      },
      {
        label: '我的',
        icon: 'cubeic-person'
      }
      ]
    }
  },
  methods: {
    clickHandler (label) {
      console.log(label)
    },
    changeHandler (label) {
      switch(label){
              case '首页':
              this.$router.push({path:'/Botnav/Index'});  
              break;
              case '分类':
              this.$router.push({path:'/Botnav/List'});  
              break;
        //       case '搜索':
        //       this.$router.push({path:'/Botnav/Search'});  
        //       break;
              case '购物车':
              this.$router.push({path:'/Botnav/Cart'});  
              break;
              case '我的':
              this.$router.push({path:'/Botnav/Mine'});  
              break;
      }
    }
  },
  computed:{
          ...mapGetters({
                  countsum:'countsum'
          })
  },
  created(){
                        switch(this.$route.path){
                                case '/Botnav/Index':
                                this.selectedLabelDefault='首页';
                                break;
                                case '/Botnav/List':
                                this.selectedLabelDefault='分类';
                                break;
                                // case '/Botnav/Search':
                                // this.selectedLabelDefault='搜索';
                                // break;
                                case '/Botnav/Cart':
                                this.selectedLabelDefault='购物车';
                                break;
                                case '/Botnav/Mine':
                                this.selectedLabelDefault='我的';
                                break;
                        }
                }
}
</script>

<style lang="stylus">
.cube-tab-bar.botnav
        position fixed
        bottom 0
        left 0
        z-index 1000
        width 100%
        background-color #ffffff
        .cube-tab div
                font-size 16px
                padding-top 3px
        i
                font-size 20px
.Router
        position absolute
        width 100%
        transition all .8s ease
.silde-left-enter,.slide-right-leave-active
        opacity 0
        -webkit-transform translate(-100%,0)
        transform translate(-100%)
.silde-left-leave-active,.silde-right-enter
        opacity 0
        -webkit-transform translate(100%,0)
        transform translate(100%)
.countsum
        position fixed
        bottom 33px
        right 31%
        z-index 1001
        width 18px
        height 18px
        border-radius 50%
        line-height 18px
        font-size 14px
        background-color red
        color #ffffff
        text-align center
</style>