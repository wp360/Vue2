<template>
    <div>
        底部内容
        <button @click="call">打电话</button>
    </div>
</template>
<script>
    import connect from '../connector.js';

    export default {
        data(){
            return {

            }
        },
        methods:{
            call(){
                //发射信号
                connect.$emit('phone','消息内容');
            }
        }
    }
</script>
<style scoped>
     div{
    height: 100px;
    background-color: hotpink;
 }
</style>