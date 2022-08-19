<script setup lang="ts">
import dayjs from "dayjs";
import { ElCard, ElDescriptions, ElDescriptionsItem, ElTag, vLoading } from "element-plus";
import { useQuery } from "@vue/apollo-composable";
import { GET_ONE_EPISODE } from "@/api/queries";

const route = useRoute();
const { result, loading, error } = useQuery(GET_ONE_EPISODE, { id: route.params.id });

const episode = computed(() => result.value?.episode ?? {});

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
          <strong>{{ episode.name }}</strong>
        </span>
      </div>
    </template>
    <el-descriptions direction="vertical" :column="4" size="large" border>
      <el-descriptions-item label="Air date">{{ episode.air_date }}</el-descriptions-item>
      <el-descriptions-item label="Created">{{ dayjs(episode.created).format("MM/DD/YYYY") }}</el-descriptions-item>
      <el-descriptions-item label="Episode" :span="2">{{ episode.episode }}</el-descriptions-item>
      <el-descriptions-item label="Characters statuses">
        <el-tag
          v-for="character in episode.characters"
          :key="character.id"
          :type="getTagType(character.status)"
          effect="dark"
          style="margin: 10px 10px 0 0"
        >
          {{ character.name }}
        </el-tag>
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
