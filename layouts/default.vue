<script lang="ts" setup>
import { ElContainer, ElMain, ElFooter, ElMenu, ElMenuItem } from "element-plus";
</script>

<template>
  <el-menu :default-active="$route.path" class="el-menu-demo" mode="horizontal">
    <el-menu-item index="/" route="/"><NuxtLink to="/" style="text-decoration: none">Home</NuxtLink></el-menu-item>
    <el-menu-item index="/characters" route="/characters">
      <NuxtLink to="/characters" style="text-decoration: none">Characters</NuxtLink>
    </el-menu-item>
    <el-menu-item index="/episodes" route="/episodes">
      <NuxtLink to="/episodes" style="text-decoration: none">Episodes</NuxtLink>
    </el-menu-item>
  </el-menu>
  <el-container style="height: 100vh">
    <el-main>
      <slot />
    </el-main>
    <el-footer style="text-align: center">
      <small>&copy; Copyright 2022, Example Corporation</small>
    </el-footer>
  </el-container>
</template>
