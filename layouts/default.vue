<script lang="ts" setup>
import { ElContainer, ElMain, ElFooter, ElHeader } from "element-plus";
</script>

<template>
  <ElContainer style="max-width: 1360px; padding: 0 20px; margin: 0 auto; height: 100vh">
    <ElHeader>
      <NavigationBar />
    </ElHeader>
    <ElMain style="display: flex; flex-direction: column; overflow: hidden">
      <slot />
    </ElMain>
    <ElFooter style="text-align: center">
      <small>&copy; Copyright {{ new Date().getFullYear() }}, Example Corporation</small>
    </ElFooter>
  </ElContainer>
</template>
