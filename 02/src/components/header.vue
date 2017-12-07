<template>
    <div>
        头部内容{{textone}}
        <button @click="show">从js中获取父组件的值</button>
    </div>
</template>
<script>
    export default {
        //接收父组件参数的设置
        props: ['textone'],
        data(){
            return {

            }
        },
        methods: {
            show(){
                alert(this.textone);
            }
        }
    }
</script>
<style scoped>
 div{
    height: 100px;
    background-color: yellowgreen;
 }
</style>