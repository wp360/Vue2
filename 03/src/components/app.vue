<template>
    <div>
        <header>
            头部
            <!--
            <nav>
                <a href="#/music">进入音乐1</a>
                <a href="#/movie">进入电影1</a>
                <a href="#/music">进入音乐2</a>
                <a href="#/movie">进入电影2</a>
                <a href="#/music">进入音乐3</a>
                <a href="#/movie">进入电影3</a>
            </nav>
            -->
            <nav>
                <!--router-link to-->
                <router-link :to="{name:'music'}">进入音乐1</router-link>
                <router-link :to="{name:'music'}">进入音乐2</router-link>
                <router-link :to="{name:'music'}">进入音乐3</router-link>
                <!--根据路径使用-->
                <router-link to="/movie">进入电影</router-link>
            </nav>
        </header>
        <router-view class="main"></router-view>
        <button @click="goMusic">跳转到音乐</button>
        <button @click="testParams">测试编程导航传递参数</button>
        <footer>底部</footer>
    </div>
</template>
<script>
    export default {
        data () {
            return {

            }
        },
        methods:{
            goMusic(){
                this.$router.push('/music');
            },
            testParams(){
                // 查询字符串的方式 /music?id=1&name=2
                this.$router.push({
                    name: 'music',
                    query: {id:1,name:2}
                })
            }
        }
    }
</script>
<style>
    header{
        height: 100px;
        background-color: yellowgreen;
    }
    .main{
        min-height: 100px;
        background-color: aliceblue;
    }
    p{
        margin:0;
        padding: 0;
    }
    footer{
        height: 100px;
        background-color: pink;
    }
</style>
