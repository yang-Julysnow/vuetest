<template>
        <div>
                <div class="itemname">
                        <div class="img">
                                <img :src="imageUrl" alt="logo">
                        </div>
                        <div class="username">
                                {{ username }}
                        </div>
                </div>                       
               <ul>
                       <li v-for="item in mine" :key="item.label" class="mineitem" @click="itemclick(item)">
                               <span class="minetitle">{{item.label}}</span>
                               <i class="cubeic-arrow"></i>
                       </li>
               </ul>
        </div>
</template>

<script>
export default{
        data(){
                return{
                        username: 'username' ,
                        imageUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591351734636&di=b015fc9fc838d7220748ceae694df13b&imgtype=0&src=http%3A%2F%2Fwx1.sinaimg.cn%2Forj360%2F005uDj95ly1gf3ewrgts7j30jg0jgmxw.jpg', 
                        mine:[
                                { label: '商品收藏' },
                                { label: '我的足迹' },
                                { label: '店铺收藏' },
                                { label: '我的订单' },
                                { label:'退出',type:'exit' }
                        ]
                }
        },
        methods:{
                itemclick(item){
                        if(item.type=='exit'){
                                this.$store.commit('settoken','')
                                localStorage.removeItem('token')
                                this.$router.push({path:'/Login'})
                        }
                }
        }
}
</script>

<style lang="stylus" coped>
.itemname
        content ''
        display table
        clear both
        *zoom 1
        width 100%
        text-align left 
.img 
.username
        float left
.img
        width 30%
        text-align right
        margin-right 5%
        img
                width 60px
                height 60px
.username 
        width 58%
        line-height 62px
.mineitem
        font-size 14px
        text-align left 
        height 50px
        line-height 50px
        padding-left 5%
        border-bottom 1px solid #c8c8c8
        .minetitle
                display inline-block
                width 90%
</style>