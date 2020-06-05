module.exports = {
        configureWebpack:{
                devServer:{
                        port:8089, //端口号
                        open:true,

                        //mock端口编写
                        //每次做更改这个配置文件都要重启项目才能起效
                        before(app){
                                // app.get('url',(req,res)=>{
                                //         res.json({

                                //         })
                                // })

                                //注册接口
                                //用户信息池
                                let userpoor = [
                                        {username:'admin',password: '123456'},
                                        {username:'adminadmin',password:'123123'}
                                ]
                                //注册接口
                                app.get('/api/register',(req,res) => {
                                        const {username,password} = req.query
                                        const userlength = userpoor.filter(v=>v.username==username).length
                                        if(userlength>0){
                                                res.json({
                                                        success:false,
                                                        message:'用户名已存在！'
                                                })
                                        }else{
                                                res.json({
                                                        success:true,
                                                        message:'注册成功!'
                                                })
                                        }
                                })
                                //登录接口
                                let tokenkey = 'xdclass'
                                app.get('/api/login',(req,res) => {
                                        const {username,password} = req.query
                                        if(username=='admin' && password=='123456' || username=='adminadmin' && password=='123123'){
                                                res.json({
                                                        code:0,
                                                        message:'登录成功！',
                                                        token: tokenkey + '-' + username + '-' + (new Date().getTime()+60*60*1000)
                                                })
                                        }else{
                                                res.json({
                                                        code: 1,
                                                        message: '账号密码错误！'
                                                })
                                        }
                                })
                                //首页轮播接口
                                app.get('/api/banner',(req,res) => {
                                        res.json({
                                                data:[
                                                        {
                                                                url:'https://www.baidu.com',
                                                                image:'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png'
                                                        },
                                                        {
                                                                url:'https://www.baidu.com',
                                                                image:'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png'
                                                        },
                                                        {
                                                                url:'https://www.baidu.com',
                                                                image:'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png'
                                                        }
                                                ]
                                        })
                                })
                                //首页轮播分类接口
                                app.get('/api/rollinglist',(req,res) => {
                                        res.json({
                                                data:[[
                                                        {
                                                                url:'https://www.baidu.com',
                                                                image:'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/90907/33/16508/7338/5e7cd12fE18b7f28c/62495feb17944a2c.png.webp',
                                                                label:'分类一'
                                                        },
                                                        {
                                                                url:'https://www.baidu.com',
                                                                image:'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/95626/6/16650/5992/5e7d5fdeE251a8742/d29fcc84ee0211f7.png.webp',
                                                                label:'分类二'
                                                        },
                                                        {
                                                                url:'https://www.baidu.com',
                                                                image:'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/105719/14/16594/7294/5e7d605eE007a21e7/63392310fbb001a4.png.webp',
                                                                label:'分类三'
                                                        },
                                                        {
                                                                url:'https://www.baidu.com',
                                                                image:'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/96542/9/16707/3569/5e7d62bcE5c4ee6a7/3bf6ac36ac9f17d9.png.webp',
                                                                label:'分类四'
                                                        },
                                                        {
                                                                url:'https://www.baidu.com',
                                                                image:'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/110232/17/10270/4813/5e7d6310E79c9cb8d/6786eed1b786c010.png.webp',
                                                                label:'分类五'
                                                        },
                                                        {
                                                                url:'https://www.baidu.com',
                                                                image:'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/96727/8/16477/5183/5e7d6249E4730c38a/0f70da903eded263.png.webp',
                                                                label:'分类六'
                                                        }
                                                ],[
                                                        {
                                                                url:'https://www.baidu.com',
                                                                image:'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/87813/33/16566/5552/5e7cc8deEddd6bcb5/9afe008178b12b2b.png.webp',
                                                                label:'分类七'
                                                        }]
                                                ]
                                        })
                                })
                                //分类页分类接口
                                app.get('/api/classify',(req,res) => {
                                        switch(req.query.type){
                                                case '0':
                                                res.json({
                                                        data:[
                                                                {
                                                                        image:'https://img20.360buyimg.com/focus/s140x140_jfs/t1/114518/40/9228/26483/5ed854a5E1332c405/89224cb1f93a4553.png',
                                                                        label: '百度1'
                                                                },
                                                                {
                                                                        image:'https://img14.360buyimg.com/focus/s140x140_jfs/t1/128353/19/4001/19836/5ed853d2E47976304/04b13e91a3581df6.png',
                                                                        label: '百度2'
                                                                },
                                                                {
                                                                        image:'https://img14.360buyimg.com/focus/s140x140_jfs/t1/114821/36/8248/8862/5eccae0dEe89f085e/6d0b558a88c7fbb6.jpg',
                                                                        label: '百度3'
                                                                },
                                                                {
                                                                        image:'https://img11.360buyimg.com/focus/s140x140_jfs/t1/113143/20/8135/9835/5ecb81ccE22407538/e9a80b7af28e83a6.jpg',
                                                                        label: '百度4'
                                                                },
                                                                {
                                                                        image:'https://img20.360buyimg.com/focus/s140x140_jfs/t1/114518/40/9228/26483/5ed854a5E1332c405/89224cb1f93a4553.png',
                                                                        label: '百度5'
                                                                },
                                                                {
                                                                        image:'https://img14.360buyimg.com/focus/s140x140_jfs/t1/128353/19/4001/19836/5ed853d2E47976304/04b13e91a3581df6.png',
                                                                        label: '百度6'
                                                                },
                                                                {
                                                                        image:'https://img14.360buyimg.com/focus/s140x140_jfs/t1/114821/36/8248/8862/5eccae0dEe89f085e/6d0b558a88c7fbb6.jpg',
                                                                        label: '百度7'
                                                                },
                                                                {
                                                                        image:'https://img11.360buyimg.com/focus/s140x140_jfs/t1/113143/20/8135/9835/5ecb81ccE22407538/e9a80b7af28e83a6.jpg',
                                                                        label: '百度8'
                                                                },
                                                                {
                                                                        image:'https://img20.360buyimg.com/focus/s140x140_jfs/t1/114518/40/9228/26483/5ed854a5E1332c405/89224cb1f93a4553.png',
                                                                        label: '百度9'
                                                                },
                                                                {
                                                                        image:'https://img14.360buyimg.com/focus/s140x140_jfs/t1/128353/19/4001/19836/5ed853d2E47976304/04b13e91a3581df6.png',
                                                                        label: '百度10'
                                                                },
                                                                {
                                                                        image:'https://img14.360buyimg.com/focus/s140x140_jfs/t1/114821/36/8248/8862/5eccae0dEe89f085e/6d0b558a88c7fbb6.jpg',
                                                                        label: '百度11'
                                                                },
                                                                {
                                                                        image:'https://img11.360buyimg.com/focus/s140x140_jfs/t1/113143/20/8135/9835/5ecb81ccE22407538/e9a80b7af28e83a6.jpg',
                                                                        label: '百度12'
                                                                },
                                                                {
                                                                        image:'https://img20.360buyimg.com/focus/s140x140_jfs/t1/114518/40/9228/26483/5ed854a5E1332c405/89224cb1f93a4553.png',
                                                                        label: '百度13'
                                                                },
                                                                {
                                                                        image:'https://img14.360buyimg.com/focus/s140x140_jfs/t1/128353/19/4001/19836/5ed853d2E47976304/04b13e91a3581df6.png',
                                                                        label: '百度14'
                                                                },
                                                                {
                                                                        image:'https://img14.360buyimg.com/focus/s140x140_jfs/t1/114821/36/8248/8862/5eccae0dEe89f085e/6d0b558a88c7fbb6.jpg',
                                                                        label: '百度15'
                                                                },
                                                                {
                                                                        image:'https://img11.360buyimg.com/focus/s140x140_jfs/t1/113143/20/8135/9835/5ecb81ccE22407538/e9a80b7af28e83a6.jpg',
                                                                        label: '百度16'
                                                                },
                                                        ]
                                                });
                                                break;
                                                case '1':
                                                res.json({
                                                        data:[
                                                                {
                                                                        image:'https://img10.360buyimg.com/focus/s140x140_jfs/t21448/247/189820564/20127/d5cc76fd/5b024112Nbaa67999.jpg',
                                                                        label: '美食'
                                                                }
                                                        ]
                                                });
                                                break;
                                                case '2':
                                                res.json({
                                                        data:[
                                                                {
                                                                        image:'https://img20.360buyimg.com/focus/s140x140_jfs/t18280/1/2656168555/9439/7cab050f/5b029068N322d822c.jpg',
                                                                        label: '宠物活物'
                                                                }
                                                        ]
                                                });
                                                break;
                                                case '3':
                                                res.json({
                                                        data:[
                                                                {
                                                                        image:'https://img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                                                        label: '手机数码'
                                                                }
                                                        ]
                                                });
                                                break;
                                                case '4':
                                                res.json({
                                                        data:[
                                                                {
                                                                        image:'https://img13.360buyimg.com/focus/s140x140_jfs/t13069/193/944900508/2525/d7c9efc/5a17f21dN905aaf4c.jpg',
                                                                        label: '家用电器'
                                                                }
                                                        ]
                                                });
                                                break;
                                                case '5':
                                                res.json({
                                                        data:[
                                                                {
                                                                        image:'https://img13.360buyimg.com/focus/s140x140_jfs/t11071/195/2462134264/9117/cd0688bf/5a17ba79N18b9f3d4.png',
                                                                        label: '电脑产品'
                                                                }
                                                        ]
                                                });
                                                break;
                                                case '6':
                                                res.json({
                                                        data:[
                                                                {
                                                                        image:'https://img12.360buyimg.com/focus/s140x140_jfs/t1/104844/30/13952/12905/5e5f244bE2d5f708c/123d364d4a24b521.jpg',
                                                                        label: '美妆护肤'
                                                                }
                                                        ]
                                                });
                                                break;
                                                case '7':
                                                res.json({
                                                        data:[
                                                                {
                                                                        image:'https://img14.360buyimg.com/focus/s140x140_jfs/t21226/279/206350103/11804/74908f42/5b0375dbN03ec343e.jpg',
                                                                        label: '婴儿产品'
                                                                }
                                                        ]
                                                });
                                                break;
                                                case '8':
                                                res.json({
                                                        data:[
                                                                {
                                                                        image:'https://img30.360buyimg.com/focus/s140x140_jfs/t11938/312/2209743680/2807/7d267768/5a1663b8N339d5cf6.jpg',
                                                                        label: '金银首饰'
                                                                }
                                                        ]
                                                }); 
                                                break;
                                                case '9':
                                                res.json({
                                                        data:[
                                                                {
                                                                        image:'https://img13.360buyimg.com/focus/s140x140_jfs/t12628/6/1754416208/2433/a08f9900/5a27e63aNc3f81cfb.jpg',
                                                                        label: '户外运动'
                                                                }
                                                        ]
                                                })         
                                        }
                                })
                        }
                }
        },

        css: {
          loaderOptions: {
            stylus: {
              'resolve url': true,
              'import': [
                './src/theme'
              ]
            }
          }
        },

        pluginOptions: {
          'cube-ui': {
            postCompile: true,
            theme: true
          }
        }
}
