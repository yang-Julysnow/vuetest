<template>
        <div>
               <div class="goods" v-for="(item,index) in cartarr" :key="index">
                        {{item.title}}
                        <div class="goodsright">
                                <i class="cubeic-remove" @click="removeCart(index)"></i>
                                <span>{{item.cartCount}}</span>
                                <i class="cubeic-add" @click="addCart(index)"></i>
                        </div>
               </div>
               <cube-button class="cubeitem">下单</cube-button>
               <cube-button class="cubeitem" @click="clearcart()">清空购物车</cube-button>
        </div>
</template>

<script>
import {mapState} from 'vuex'

export default{
        data(){
                return{
                         
                }
        },
        computed:{
                ...mapState({
                        cartarr:state=>state.cartarry
                })
        },
        methods:{
                //减少商品数量
                removeCart(index){
                        this.$store.commit('cartremove',index)
                },
                //增加商品数量
                addCart(index){
                        this.$store.commit('cartadd',index)
                },
                //清空购物车
                clearcart(){
                        this.$store.commit('clearcart')
                }
        }
}
</script>

<style lang="stylus" coped>
.goods
        padding 10px
        text-align left 
        .goodsright
                float right 
        i
                font-size 17px
.cubeitem
        width 44%
        float left
        margin-left 4%
</style>