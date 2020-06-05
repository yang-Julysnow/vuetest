<template>
        <div>
                <div class="header">登录页面</div>
                <cube-form
                        :model="model"
                        :schema="schema"
                        @submit="submitHandler">
                </cube-form>
                <router-link to="/register" class="item">如果还没有账号，请点击这里注册</router-link>
        </div>       
</template>

<script>
        export default {
                data(){
                        return{
                                model:{
                                        username: '',
                                        password: ''
                                },
                               schema: {                                    
                                        fields:[
                                                 //用户名配置
                                                {                                                        
                                                        type:'input',
                                                        modelKey:'username',
                                                        label: '用户名',
                                                        props:{
                                                                placeholder:'请输入用户名！'
                                                        },
                                                        rules:{
                                                                //校验规则
                                                                required: true,
                                                                type:'string',
                                                                min: 3,
                                                                max: 15,
                                                        },
                                                        trigger:'blur',
                                                        messages:{
                                                                required:'用户名不能为空',
                                                                min:'用户名不能设定少于3个字符',
                                                                max:'用户名不能多于15个字符'
                                                        }
                                                },
                                                //密码配置 
                                                {
                                                        type:'input',
                                                        modelKey:'password',
                                                        label: '密码',
                                                        props:{
                                                                placeholder:'请输入密码！',
                                                                type: 'password',
                                                                eye: {
                                                                        open:false
                                                                }
                                                        },
                                                        rules:{
                                                                required:true
                                                        },
                                                        trigger:'blur'
                                                },
                                                {
                                                        type:'submit',
                                                        label:'登录'
                                                }
                                        ]
                                        

                                }

                        }                      
                },
                methods:{
                        async submitHandler(e){
                                e.preventDefault()
                               try{
                                       const result = await this.$http.get('/api/login',{params:this.model})
                                       if(result.code=='0'){
                                               this.$store.commit('settoken',result.token)
                                               window.localStorage.setItem('token',result.token)                                              

                                               //判断路由是否带参数，带参数就去到重定向参数地址，否则就去到首页
                                               if(this.$route.query.redirect){
                                                        this.$router.replace({path:this.$route.query.redirect})
                                               }else{
                                                        this.$router.replace({path:'/Botnav/Index'})
                                               }
                                       }else{
                                               alert(result.message)
                                       }
                               }catch(err){
                                       console.log(err)
                               }
                        },
                        gobak(){
                                this.$router.replace({path:this.$route.query.redirect})
                        }
                }
        }
</script>

<style lang="stylus" scoped>
.header
        height 32px
        line-height 32px
        font-size 17px
        text-align center
        i
                float left
                margin-left 3%

.cube-form_standard
        width 90%
        margin auto
        margin-top 38px
.item
        margin-left 10%
        margin-top 12px
        font-size 14px
</style>