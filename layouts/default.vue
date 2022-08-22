<script lang="ts" setup>
import { ElContainer, ElMain, ElFooter, ElMenu, ElMenuItem, ElHeader } from "element-plus";
</script>

<template>
  <ElContainer style="max-width: 1360px; padding: 0 20px; margin: 0 auto; height: 100vh">
    <ElHeader>
      <ElMenu
        :default-active="$route.path"
        class="el-menu-demo"
        mode="horizontal"
      >
        <ElMenuItem style="margin-right: auto">
          <NuxtLink
            to="/"
            style="text-decoration: none; padding: 0"
          >
            <img
              src="/logo.svg"
              width="120"
              height="56"
              style="display: block"
            />
          </NuxtLink>
        </ElMenuItem>
        <ElMenuItem
          index="/characters"
          route="/characters"
        >
          <NuxtLink
            to="/characters"
            style="text-decoration: none"
            >Characters</NuxtLink
          >
        </ElMenuItem>
        <ElMenuItem
          index="/episodes"
          route="/episodes"
        >
          <NuxtLink
            to="/episodes"
            style="text-decoration: none"
            >Episodes</NuxtLink
          >
        </ElMenuItem>
      </ElMenu>
    </ElHeader>
    <ElMain>
      <slot />
    </ElMain>
    <ElFooter style="text-align: center">
      <small>&copy; Copyright 2022, Example Corporation</small>
    </ElFooter>
  </ElContainer>
</template>
