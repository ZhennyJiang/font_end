<template>
  <div class="message">
    <h1>{{message.title}}</h1>
    <p>{{message.info}}</p>
  </div>
</template>
<script>
export default {
  name: "message",
  data() {
    return {
      message: {
        title: "",
        info: ""
      }
    };
  },
  methods: {
    getMessage(item) {
      this.message = this.$route.params;
    }
  },
  created() {
    this.getMessage();
  }
};
</script>
<style >
.message {
  padding: 0 100px;
  line-height: 30px;
}
h1 {
  text-align: center;
}
p {
  font-size: 19px;
}
</style>