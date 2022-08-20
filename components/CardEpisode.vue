<script setup lang="ts">
import dayjs from "dayjs";
import { getCharacterType } from "@helpers";
import { ElCard, ElDescriptions, ElDescriptionsItem, ElTag, vLoading } from "element-plus";

interface IEpisode {
  id: string | number;
  name: string;
  air_date: string;
  species: string;
  created: string;
  episode: string;
  characters: Object[];
}

defineProps<{
  episode: IEpisode;
}>();
</script>

<template>
  <el-card class="box-card" style="margin: 40px auto 0">
    <template #header>
      <div class="card-header" style="justify-content: center">
        <span>
          #{{ episode.id }}
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
          :type="getCharacterType(character.status)"
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

.box-card {
  width: 480px;
}
</style>
