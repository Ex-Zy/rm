<script setup lang="ts">
import { ElAlert, vLoading } from "element-plus";
import { useQuery } from "@vue/apollo-composable";
import { GET_ONE_EPISODE } from "@api/queries";

const route = useRoute();
const { result, loading, error } = useQuery(GET_ONE_EPISODE, { id: route.params.id });

const episode = computed(() => result.value?.episode ?? {});
</script>

<template>
  <el-alert v-if="error" :title="error.message" type="error" effect="dark" show-icon />
  <CardEpisode v-else v-loading="loading" :episode="episode" />
</template>

<style>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 480px;
}
</style>
