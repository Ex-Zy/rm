<script setup lang="ts">
import dayjs from "dayjs";
import { getCharacterType } from "@helpers";
import { ElCard, ElAvatar, ElDescriptions, ElDescriptionsItem, ElTag, vLoading } from "element-plus";

interface Character {
  id: string | number;
  name: string;
  image: string;
  species: string;
  created: string;
  gender: string;
  status: string;
  location?: {
    type: string;
    name: string;
  };
}

defineProps<{
  character: Character;
}>();
</script>

<template>
  <el-card class="box-card" style="margin: 40px auto 0">
    <template #header>
      <div class="card-header" style="justify-content: center">
        <span>
          #{{ character.id }}
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
        <el-tag :type="getCharacterType(character.status)" effect="dark" size="large">
          {{ character.status }}
        </el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="Location"> {{ character.location?.type }} / {{ character.location?.name }} </el-descriptions-item>
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
