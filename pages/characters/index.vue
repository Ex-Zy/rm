<script lang="ts" setup>
import { ElAlert } from "element-plus";
import { useQuery } from "@vue/apollo-composable";
import { GET_CHARACTERS } from "@api/queries";

const currentPage = ref(1);
const updateCurrentPage = (page) => (currentPage.value = page);
const { result, loading, error } = useQuery(GET_CHARACTERS, { page: currentPage });

const characters = computed(() => result.value?.characters.results ?? []);
const totalRows = computed(() => result.value?.characters.info.count || 0);
</script>

<template>
  <div class="page-wrapper">
    <h2 style="text-align: center">The Rick and Morty characters as seen on the TV show</h2>
    <el-alert v-if="error" :title="error.message" type="error" effect="dark" show-icon />
    <template v-else>
      <ClientOnly>
        <GridCharacters :loading="loading" :characters="characters" :total-rows="totalRows" @update:page="updateCurrentPage" />
      </ClientOnly>
    </template>
  </div>
</template>
