<template>
  <demo-box title="Icon 图标">
    <div class="demo-icon">
      <h3>基本</h3>
      <ul class="demo-icon-list">
        <li>
          <hs-icon name="left" />
          <p>left</p>
        </li>
        <li>
          <hs-icon name="right" />
          <p>right</p>
        </li>
        <li>
          <hs-icon name="down" />
          <p>down</p>
        </li>
        <li>
          <hs-icon name="up" />
          <p>up</p>
        </li>
      </ul>
      <h3>大小</h3>
      <ul class="demo-icon-size">
        <li>
          <hs-icon name="search" size="xxs" />
          <p>xxs</p>
        </li>
        <li>
          <hs-icon name="search" size="xs" />
          <p>xs</p>
        </li>
        <li>
          <hs-icon name="search" size="sm" />
          <p>sm</p>
        </li>
        <li>
          <hs-icon name="search" size="md" />
          <p>md</p>
        </li>
        <li>
          <hs-icon name="search" size="lg" />
          <p>lg</p>
        </li>
      </ul>
    </div>
  </demo-box>
</template>

<script>
export default {
}
</script>

<style lang="scss">
  .demo-icon {
    &-list {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      padding: 10px 0;
      margin: 0 -15px;
      background-color: #fff;
      li {
        width: percentage(1 / 3);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 20px 0;
        color: #000;
      }
      p {
        margin-top: 5px;
      }
    }
    &-size {
      display: flex;
      align-items: center;
      padding: 10px 0;
      margin: 0 -15px;
      background-color: #fff;
      li {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        flex: 1;
      }
    }
  }
</style>
