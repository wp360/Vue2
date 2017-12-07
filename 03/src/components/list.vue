<template>
    <div>
        <p>查询字符串列表</p>
        <ul>
            <li v-for="(hero,index) in heros" :key="index">
                {{hero.name}}
                <!--query:{id:index} path不用改-->
                <router-link :to="{name:'detail',query:{id:hero.id}}">查看</router-link>
            </li>
        </ul>
        <p>path列表(params)</p>
        <ul>
            <li v-for="(hero,index) in heros" :key="index">
                {{hero.name}}
                <router-link :to="{name:'detail',params:{id:index}}">查看</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                heros:[{
                  id:1,
                  name:'蝙蝠侠'
                },{
                  id:2,
                  name:'钢铁侠'
                },{
                  id:3,
                  name:'蜘蛛侠'
                },{
                  id:4,
                  name:'超人'
                }]
            }
        }
    }
</script>
<style scoped>
</style>
