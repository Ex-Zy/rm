<script lang="ts" setup>
import { ElAlert } from "element-plus";
import { useQuery } from "@vue/apollo-composable";
import { GET_EPISODES } from "@api/queries";

const currentPage = ref(1);
const updateCurrentPage = (page) => (currentPage.value = page);
const { result, loading, error } = useQuery(GET_EPISODES, { page: currentPage });

const episodes = computed(() => result.value?.episodes.results ?? []);
const totalRows = computed(() => result.value?.episodes.info.count || 0);
</script>

<template>
  <div class="page-wrapper">
    <h2 style="text-align: center">List of Rick and Morty episodes</h2>
    <el-alert v-if="error" :title="error.message" type="error" effect="dark" show-icon />
    <template v-else>
      <ClientOnly>
        <GridEpisodes :loading="loading" :episodes="episodes" :total-rows="totalRows" @update:page="updateCurrentPage" />
      </ClientOnly>
    </template>
  </div>
</template>
