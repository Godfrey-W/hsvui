<template>
  <demo-box title="Collapse 折叠面板">
    <div class="demo-collapse">
      <hs-collapse>
        <hs-collapse-panel>
          <h3 slot="header">静夜思</h3>
          <p>床前明月光</p>
          <p>疑似地上霜</p>
          <p>举头望明月</p>
          <p>低头思故乡</p>
        </hs-collapse-panel>
        <hs-collapse-panel>
          <h3 slot="header">静夜思</h3>
          <p>床前明月光</p>
          <p>疑似地上霜</p>
          <p>举头望明月</p>
          <p>低头思故乡</p>
        </hs-collapse-panel>
        <hs-collapse-panel>
          <h3 slot="header">静夜思</h3>
          <p>床前明月光</p>
          <p>疑似地上霜</p>
          <p>举头望明月</p>
          <p>低头思故乡</p>
        </hs-collapse-panel>
      </hs-collapse>
    </div>
  </demo-box>
</template>

<script>
export default {
}
</script>

<style lang="scss">
  .demo-collapse {
    h3, p {
      margin: 0;
    }
  }
</style>
