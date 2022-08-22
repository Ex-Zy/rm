<script lang="ts" setup>
import { ElMenu, ElMenuItem } from "element-plus";
const route = useRoute();
const activeLink = computed(() => route?.path ?? "/characters");
</script>

<template>
  <ElMenu
    :default-active="activeLink"
    class="el-menu-demo"
    mode="horizontal">
    <ElMenuItem style="margin-right: auto">
      <NuxtLink
        index="/"
        to="/"
        style="text-decoration: none; padding: 0">
        <img
          src="/logo.svg"
          width="120"
          height="56"
          style="display: block" />
      </NuxtLink>
    </ElMenuItem>
    <ElMenuItem
      index="/characters"
      route="/characters">
      <NuxtLink
        to="/characters"
        style="text-decoration: none"
        >Characters</NuxtLink
      >
    </ElMenuItem>
    <ElMenuItem
      index="/episodes"
      route="/episodes">
      <NuxtLink
        to="/episodes"
        style="text-decoration: none"
        >Episodes</NuxtLink
      >
    </ElMenuItem>
  </ElMenu>
</template>
