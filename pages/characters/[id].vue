<script setup lang="ts">
import { ElAlert, vLoading } from "element-plus";
import { useQuery } from "@vue/apollo-composable";
import { GET_ONE_CHARACTER } from "@api/queries";

const route = useRoute();
const { result, loading, error } = useQuery(GET_ONE_CHARACTER, { id: route.params.id });

const character = computed(() => result.value?.character ?? {});
</script>

<template>
  <el-alert v-if="error" :title="error.message" type="error" effect="dark" show-icon />
  <CardCharacter v-else v-loading="loading" :character="character" />
</template>
