<script setup lang="ts">
import { ElAlert, vLoading } from "element-plus";
const { episode, error, loading } = useEpisodeDetails();
</script>

<template>
  <el-alert v-if="error" :title="error.message" type="error" effect="dark" show-icon />
  <CardEpisode v-else v-loading="loading" :episode="episode" />
</template>
