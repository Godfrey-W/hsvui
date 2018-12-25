<template>
  <div>
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>
<style lang="scss">
  html {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  body {
    margin: 0;
    font-family: PingFang SC,Helvetica Neue,Hiragino Sans GB,Helvetica,Microsoft YaHei,Arial;
    font-size: 14px;
    background-color: #f5f5f9;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  p {
    margin: 0;
  }
</style>
