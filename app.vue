<script setup lang="ts">
import apolloProvider from "./api/apollo";
provide("apolloProvider", apolloProvider);
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
body {
  margin: 0;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
.page-wrapper {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
</style>
