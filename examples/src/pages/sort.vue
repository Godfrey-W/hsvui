<template>
  <demo-box title="SortIcon 排序图标">
    <div class="demo-sort">
      <div class="demo-sort-row">
        大小：<input type="range" min="10" max="40" v-model="size">
      </div>
      <div class="demo-sort-row">
        颜色：<input type="color" v-model="color">
      </div>
      <hs-sort v-model="sort" :color="color" :size="size">排序</hs-sort>
      <p>当前排序方式：{{ sort }}</p>
    </div>
  </demo-box>
</template>

<script>
export default {
  name: 'demo-sort-icon',
  data () {
    return {
      size: 14,
      color: '#108ee9',
      sort: 'default'
    }
  }
}
</script>

<style lang="scss">
  .demo-sort {
    &-row {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
    }
    .hs-sort {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 40px;
      padding: 0 10px 0 20px;
      font-size: 16px;
      line-height: 1;
      background-color: #fff;
      border-radius: 5px;
      border: none;
      outline: none;
    }
  }
</style>
