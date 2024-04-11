<script lang="ts" setup>
import { ElMenu, ElMenuItem } from "element-plus";
const route = useRoute();
const activeLink = computed(() => route?.path ?? "/");
</script>

<template>
  <ElMenu
    :ellipsis="false"
    :default-active="activeLink"
    router
    class="el-menu-demo"
    mode="horizontal"
  >
    <ElMenuItem
      index="/"
      route="/"
      style="margin-right: auto; padding: 0; background-color: transparent"
    >
      <NuxtLink
        to="/"
        style="text-decoration: none; padding: 0"
      >
        <img
          src="~/assets/logo.svg"
          width="120"
          height="56"
          style="display: block"
        >
      </NuxtLink>
    </ElMenuItem>
    <ElMenuItem
      :class="{ 'is-active': activeLink.includes('characters') }"
      index="/characters"
      route="/characters"
    >
      <NuxtLink
        to="/characters"
        style="text-decoration: none"
      >
        Characters
      </NuxtLink>
    </ElMenuItem>
    <ElMenuItem
      :class="{ 'is-active': activeLink.includes('episodes') }"
      index="/episodes"
      route="/episodes"
    >
      <NuxtLink
        to="/episodes"
        style="text-decoration: none"
      >
        Episodes
      </NuxtLink>
    </ElMenuItem>
  </ElMenu>
</template>
