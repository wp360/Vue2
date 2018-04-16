import Vue from 'vue'

new Vue({
  el: '#root',
  template: `
    <div>
      <p><span>{{name}}</span></p>
      <p><span>{{getName()}}</span></p>
      <p><span>{{number}}</span></p>
      <p><input type="text" v-model="firstName"></p>
      <p><input type="text" v-model="lastName"></p>
      <p><input type="text" v-model="number"></p>
      <p>全名：<span>{{fullName}}</span></p>
      <p>Obj.a: <input type="text" v-model="obj.a"></p>
    </div>
  `,
  data: {
    firstName: 'Jacky',
    lastName: 'Chen',
    number: 0,
    fullName: '',
    obj: {
      a: '123'
    }
  },
  computed: {
    name () {
      console.log('new name')
      return `${this.firstName} ${this.lastName}`
    }
  },
  methods: {
    getName () {
      console.log('getName invoked')
      return `${this.firstName} ${this.lastName}`
    }
  },
  watch: {
    // firstName: {
    //   handler (newName, oldName) {
    //     this.fullName = newName + ' ' + this.lastName
    //   },
    //   immediate: true,
    //   deep: true
    // }
    // obj: {
    //   handler () {
    //     console.log('obj.a changed')
    //   },
    //   immediate: true,
    //   deep: true
    // }
    'obj.a': {
      handler () {
        console.log('obj.a changed')
      },
      immediate: true
    }
  }
})
