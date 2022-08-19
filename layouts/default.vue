<script lang="ts" setup>
import { ElContainer, ElHeader, ElMain, ElFooter } from "element-plus";
</script>

<template>
  <el-container style="height: 100vh">
    <el-header height="50">Header</el-header>
    <el-main>
      <slot />
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>
