<template>
    <div>
        <!--内容{{data}}
        <button @click="send">发请求1</button>
        <button @click="send2">发请求2</button>
        -->
        <button @click="changeValue">改变值</button>
        <br>
        单价:<input type="text" name="" v-model="price"> * 
        件数:<input type="text" name="" v-model="num"> *
        折扣:<input type="text" name="" v-model="rate"> =
        {{sum.name}} {{sum.price}}
    </div>
</template>
<script>
    export default {
        data () {
            return {
                data: [],
                text: '',
                persons: [
                    {name: 'Jack'},
                    {name: 'Rose'}
                ],
                price:0,num:0,rate:0
            }
        },
        /*
        created(){
            //console.log(this.$http);
            // Get
            this.$http.get('http://182.254.146.100:8899/api/getlunbo')
            .then(res => {
                this.data = res.body.message;
                console.log(res);
            },err => {
                console.log(err);
            });

            // Post请求
            this.$http.post('http://182.254.146.100:8899/api/postcomment/300',{
                content: '数据传输'
            },{
                emulateJSON:true
            }).then(res => {
                this.data = res.body.message;
            },err => {
                console.log(err);
            });
            
            // axios
            this.$axios.get('getlunbo',{
                params: {
                    id: '123'
                }
            })
            .then(res => {
                //console.log(res);
                this.data = res.body.message;
            })
            .catch(err => {
                console.log(err);
            });
            this.$axios.post('postcomment/300',
            'content=数据传输'
            )
            .then(res => {
                this.data = res.body.message;
            })
            .catch(err => {
                console.log(err);
            });

           //将两个请求一起发送，只要有一个失败，就算失败，成功只有是全体成功
           function getMsg(res1,res2){
             console.log('成功');
             console.log(res1);
             console.log(res2);
           }
           // 获取省市数据的需求
           this.$axios.all([ 
            this.$axios.post('postcomment1/300','content=123'),
            this.$axios.get('getcomments/300?pageindex=1')
           ])
           //分发响应
           .then(this.$axios.spread(getMsg))
           .catch(err=>{
            console.log(err);
           });
        },
        */
        methods:{
            send(){
                //拦截器对每一次请求都有效
                this.$axios.get('getcomments/300?pageindex=1',{
                    headers: {
                        accept: 'get'
                    }
                })
                .then(res => {
                    this.data = res.body.message;
                })
                .catch(err => {
                    console.log(err);
                });
            },
            send2(){
                this.$axios.get('getlunbo',{
                    headers: {
                        accept: 'get'
                    }
                })
                .then(res => {
                    this.data = res.body.message;
                })
                .catch(err => {
                    console.log(err);
                });
            },
            changeValue(){
                this.text = 'abc';
                this.persons[0].name = 'Mike';
            }
        },
        watch:{
            text: function(newV,oldV){
                console.log('值改变了');
            },
            persons:{
                handler:function(newV,oldV){
                    console.log('人名改变了');
                },
                deep: true
            }
        },
        computed:{
            sum(){
              console.log('触发了');
              //如果当函数内涉及到的this.相关属性发生改变以后触发，并返回一个值(可以是对象)
              return {
                name:'古龙水',
                price:this.price * this.num * (this.rate/100)
              }
            }
        }
    }
</script>
<style>

</style>
