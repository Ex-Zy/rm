<script lang="ts" setup>
import { ElContainer, ElMain, ElFooter, ElHeader } from "element-plus";
</script>

<template>
  <ElContainer class="app-layout">
    <ElHeader>
      <NavigationBar />
    </ElHeader>
    <ElMain>
      <slot />
    </ElMain>
    <ElFooter class="app-layout__footer">
      <small>&copy; Copyright {{ new Date().getFullYear() }}, Example Corporation</small>
    </ElFooter>
  </ElContainer>
</template>

<style lang="scss">
.app-layout {
  max-width: 1360px;
  padding: 0 20px;
  margin: 0 auto;
  height: 100vh;
  @media (max-width: 1000px) {
    padding: 0;
    max-width: 100%;
  }
  &__footer {
    text-align: center;
  }
}
</style>
