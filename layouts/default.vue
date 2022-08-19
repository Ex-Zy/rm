<script lang="ts" setup>
import { ElContainer, ElMain, ElFooter, ElMenu, ElMenuItem, ElHeader } from "element-plus";
</script>

<template>
  <el-container style="max-width: 1360px; padding: 0 20px; margin: 0 auto; height: 100vh">
    <el-header>
      <el-menu :default-active="$route.path" class="el-menu-demo" mode="horizontal">
        <el-menu-item style="margin-right: auto">
          <NuxtLink to="/" style="text-decoration: none; padding: 0">
            <img src="/logo.svg" width="120" height="56" style="display: block" />
          </NuxtLink>
        </el-menu-item>
        <el-menu-item index="/characters" route="/characters">
          <NuxtLink to="/characters" style="text-decoration: none">Characters</NuxtLink>
        </el-menu-item>
        <el-menu-item index="/episodes" route="/episodes">
          <NuxtLink to="/episodes" style="text-decoration: none">Episodes</NuxtLink>
        </el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <slot />
    </el-main>
    <el-footer style="text-align: center">
      <small>&copy; Copyright 2022, Example Corporation</small>
    </el-footer>
  </el-container>
</template>
