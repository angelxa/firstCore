<template>
<div>
  <ul>
    <li><router-link to="/FixedHead">表头冻结表格</router-link></li>
    <li><router-link to="/PullDown">下拉多选</router-link></li>
  </ul>
</div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul,
li {
  list-style: none;
}
ul {
  width:500px;
  height:100px;
  margin: 0px auto;
}
li {
  margin-left: 95px;
  float:left;
}
a {
  color: #42b983;
}
</style>
