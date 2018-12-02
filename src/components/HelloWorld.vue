<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>自定义指令：</h3>
    <div v-n="3" :class="[a1,a2]"></div>
    <div class="getMoney">
      我借你{{money}},你还我{{a}},还剩{{b}}
    </div>
    <div :class="obj">
      <ul>
        <li v-for="(item,index) in list" :key="index">
          {{item}}
        </li>
      </ul>
      <!-- 分组 -->
      <ul>
        <template v-for="item in list">
          <li :key="item+1">Hello</li>
          <li :key="item">{{item}}</li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      money: 100,
      a: 1,
      a1: 'test-1',
      a2: 'test-2',
      obj: {'test': true},
      list: ['a','b','c']
    }
  },
  computed: {
    b: function () {
      return this.money - this.a
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
