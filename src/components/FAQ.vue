<template>
  <main class="faq">
    <h1>Frenquently Asked Questions</h1>
    <Loading v-if="loading" />
    <div class="error" v-if="error">Can't load the questions</div>
    <section class="list">
      <article v-for="(question,index) of questions" :key="index">
        <h2 v-html="question.title"></h2>
        <p v-html="question.content"></p>
      </article>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      questions: [],
      error: null,
      loading: false,
    };
  },
  // created() {
  //   fetch("http://localhost:3000/questions")
  //     .then(response => {
  //       if (response.ok) {
  //         console.log(response);
  //         return response.json();
  //       } else {
  //         return Promise.reject("error");
  //       }
  //     })
  //     .then(result => {
  //       console.log('result:' + result);
  //       // 结果是来自服务器的JSON 解析而成的对象
  //       this.questions = result;
  //     })
  //     .catch(e => {
  //       this.error = e;
  //     });
  // }
  // 使用JavaScript关键字async和await重写这段代码，使其看起来像同步执行的代码：
  async created() {
    this.loading = true
    try {
      const response = await fetch("http://localhost:3000/questions");
      if (response.ok) {
        this.questions = await response.json();
      } else {
        throw new Error("error");
      }
    } catch (e) {
      this.error = e;
    }
    this.loading = false
  }
};
</script>