<template>
    <div>
        <h1>Vue 2.0开发</h1>
        <pre>
            * v-text
            * v-html
            * v-if
            * v-show
            * v-model
        </pre>
        <h2>v-text</h2>
        <span v-text="text"></span>
        <hr />
        <h2>v-html</h2>
        <div v-html="html"></div>
        <hr />
        <h2>v-if</h2>
        <div v-if="isShow" class="vif"></div>
        <hr />
        <h2>v-show</h2>
        <div v-show="isShow" class="vshow"></div>
        <hr />
        <h2>v-model</h2>
        <input v-model="mTxt" type="text" name=""> {{mTxt}}
        <p>给下面的input的value赋值用v-bind:value="mTxt"</p>
        <input v-bind:value="mTxt" type="text" name="">
        <hr />
        <h2>v-bind:class</h2>
        <div v-bind:class="isRed?'red':'green'">绑定Class</div>
        <div :class="{'red':true,'big':true}">多个Class</div>
        <p>复杂情况，通过遍历，根据当前对象的成绩，匹配成绩和样式的清单对象，用成绩做key，取对象的value，最终返回字符串做样式名</p>
        <ul>
            <li v-for="stu in stus" :class="{'A':'red','B':'green'}[stu.score]">
                {{stu.name}}
            </li>
        </ul>
        <hr />
        <h2>v-on:click</h2>
        <!--<button v-on:click="isRed!=isRed">点击按钮</button>-->
        <button @click="change()">点击变化</button>
        <hr />
        <ul>
            <li v-for="(stu,index) in stus" :key="index">
                index:{{index+1}} —— stu:{{stu}}
            </li>
        </ul>
        <hr />
        <p>使用对象的方式</p>
        <ul>
            <li v-for="(value,key,index) in person" :key="index">
                value: {{value}}
                key: {{key}}
                index: {{index}}
            </li>
        </ul>
        <hr />
        <h2>列表练习</h2>
        <div>
            <ul>
                <li v-for="(hero,index) in heros" :key="index" :class="{'A':'red','B':'blue','C':'green','D':'pink'}[hero.score]">
                {{hero.name}},{{hero.score}}
                <button @click="del(index)">删除</button>
                </li>
            </ul>

            英雄姓名:<input type="text" name="" v-model="name"> <br/>
            英雄成绩:<input type="text" name="" v-model="score">
            <button @click="addHero">添加英雄</button>
        </div>
        <hr />
        <h2>父子组件</h2>
        <header-vue></header-vue>
        <body-vue></body-vue>
        <footer-vue></footer-vue>
        <hr />
        <h2>全局组件</h2>
        <header-vue textone="轮播图"></header-vue>
        <body-vue :textTwo="text"></body-vue>
        <footer-vue></footer-vue>
        <button @click="listen">听电话</button>
        <hr />
        <h2>filter 过滤器</h2>
        <p>请输入内容(输入的内容做一个反转)</p>
        <input type="text" name="" v-model="text">
        显示：{{text | myFilter}}
        <hr />
        <h2>获取DOM元素</h2>
        <div ref="myDiv">{{text}}</div>
        <sub-vue ref="sub"></sub-vue>
    </div>  
</template>
<script>
    //引入子组件对象
    //import headerVue from './components/header.vue';
    //import bodyVue from './components/body.vue';
    //import footerVue from './components/footer.vue';
    // 引入连接器
    import connect from './connector.js';
    import SubVue from './components/sub.vue';
    export default {
        filters:{
            myFilter: function(value){
                // value就是text
                //输入的内容做一个反转：转换成数组，反转数组，转换成字符串
                return value.split('').reverse().join('');//return 1;
            }
        },
        data(){
            return {
                text: '文字内容',
                html: `<ul><li>内容1</li><li>内容2</li></ul>`,
                isShow: true,
                mTxt: '数据绑定',
                isRed: false,
                stus:[
                    {
                        name: 'jack',
                        score: 'A'
                    },
                    {
                        name: 'rose',
                        score: 'B'
                    }
                ],
                person:{
                    name: 'Bob',
                    alise: '鲍勃'
                },
                name:'',
                score:'',
                heros:[{
                  id:1,
                  name:'蝙蝠侠',
                  score:'A'
                },{
                  id:2,
                  name:'钢铁侠',
                  score:'B'
                },{
                  id:3,
                  name:'蜘蛛侠',
                  score:'C'
                },{
                  id:4,
                  name:'超人',
                  score:'D'
                }]
            }
        },
        methods:{
            change(){
                this.isRed!=this.isRed;
                this.stus.push({
                    name:'Mike',score:'A'
                })
            },
            addHero(){
                //获取页面输入的值的时候，你用什么？v-model
                  this.heros.push({
                    name: this.name,
                    score:this.score
                  });
                   this.name = '';
                   this.score = '';
            },
            del(index){
              this.heros.splice(index,1);
            },
            listen(){
                connect.$on('phone',function(msg){
                    console.log(msg);
                });
            }
        },
        components:{
            subVue:SubVue
        },
        //组件创建后,  数据已经完成初始化，但是DOM还未生成
        created(){  
            // 事件的处理函数(created)
            console.log('created:',this.$refs.myDiv);//获取不到
        },
        //数据装载DOM上后，各种数据已经就位,将数据渲染到DOM上，DOM已经生成
        mounted(){
            console.log('sub:',this.$refs.sub);
            // console.log('sub:',this.$refs.sub.$el);
            //获取组件对象，并获取到其的DOM对象
            this.$refs.sub.$el.innerHTML = '组件DOM操作';
            console.log('mounted:',this.$refs.myDiv);
            //涉及DOM类的操作
            //this.$refs.myDiv.innerHTML = 'DOM操作';
            //涉及到数据的操作
            this.text = 'DOM操作';
        }
        //必须声明
        /*components:{
          //组件名（在模板中使用） :组件对象
          headerVue:headerVue,
          bodyVue, //简写
          footerVue
        }*/
    }
</script>
<style scoped>
    h1{text-align: center;}
    .vif{
        height: 100px;
        background-color: red;
    }
    .vshow{
        height: 100px;
        background-color: green;
    }
    .red{
        color: red;
    }
    .green{
        color: green;
    }
    .blue{
        color: blue;
    }
    .pink{
        color: pink;
    }
    .big{
        font-size: 30px;
    }
</style>

