<script setup lang="ts">
import dayjs from "dayjs";
import { ElCard, ElAvatar, ElDescriptions, ElDescriptionsItem, ElTag, vLoading } from "element-plus";
import { useQuery } from "@vue/apollo-composable";
import { GET_ONE_CHARACTER } from "@/api/queries";

const route = useRoute();
const { result, loading, error } = useQuery(GET_ONE_CHARACTER, { id: route.params.id });

const character = computed(() => result.value?.character ?? {});

const getTagType = (active) => {
  const statuses = {
    Alive: "success",
    Dead: "danger",
    unknown: "warning",
  };

  return statuses[active];
};
</script>

<template>
  <el-alert v-if="error" :title="error.message" type="error" effect="dark" show-icon />
  <el-card v-else v-loading="loading" class="box-card" style="margin: 40px auto 0">
    <template #header>
      <div class="card-header" style="justify-content: center">
        <span>
          #{{ route.params.id }}
          <strong>{{ character.name }}</strong>
        </span>
      </div>
    </template>
    <div style="display: flex; justify-content: center; margin-bottom: 20px">
      <el-avatar shape="square" :size="300" :src="character.image" />
    </div>
    <el-descriptions direction="vertical" :column="4" size="large" border>
      <el-descriptions-item label="Species">{{ character.species }}</el-descriptions-item>
      <el-descriptions-item label="Created">{{ dayjs(character.created).format("MM/DD/YYYY") }}</el-descriptions-item>
      <el-descriptions-item label="Gender" :span="2">{{ character.gender }}</el-descriptions-item>
      <el-descriptions-item label="Status">
        <el-tag :type="getTagType(character.status)" effect="dark" size="large">
          {{ character.status }}
        </el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="Location">
        {{ character.location?.type }} / {{ character.location?.name }}
      </el-descriptions-item>
    </el-descriptions>
  </el-card>
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
