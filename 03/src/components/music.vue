<template>
    <div>
        <p>音乐页面</p>
        <button @click="goMovie">跳转到电影</button>
        <button @click="goBack">上一页</button>
        <button @click="goNext">下一页</button>
        <h2>欢迎来到音乐世界</h2>
        <router-link :to="{name:'music_oumei'}">欧美音乐</router-link>
        <router-link :to="{name:'music_guochan'}">国产音乐</router-link>
        <hr/>
        <!-- 变化的音乐数据 -->
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        data () {
            return {

            }
        },
        methods:{
            goMovie(){
                this.$router.push({
                    name: 'movie'
                });
            },
            goBack(){
                this.$router.go(-1);//-1上一页
            },
            goNext(){
                this.$router.go(1); //下一页
            }
        }
    }
</script>
<style scoped>
</style>
