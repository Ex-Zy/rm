<script setup lang="ts">
import dayjs from "dayjs";
import { ElCard, ElDescriptions, ElDescriptionsItem, ElTag } from "element-plus";
import { Character } from "types/entity/entity.character";
import CharacterService from "../services/character.service";

interface IEpisode {
  id: string | number;
  name: string;
  air_date: string;
  species: string;
  created: string;
  episode: string;
  characters: Character[];
}

defineProps<{
  episode: IEpisode;
}>();
</script>

<template>
  <ElCard
    class="box-card"
    style="margin: 40px auto 0">
    <template #header>
      <div
        class="card-header"
        style="justify-content: center">
        <span>
          #{{ episode.id }}
          <strong>{{ episode.name }}</strong>
        </span>
      </div>
    </template>
    <ElDescriptions
      direction="vertical"
      :column="4"
      size="large"
      border>
      <ElDescriptionsItem label="Air date">
        {{ episode.air_date }}
      </ElDescriptionsItem>
      <ElDescriptionsItem label="Created">
        {{ dayjs(episode.created).format("MM/DD/YYYY") }}
      </ElDescriptionsItem>
      <ElDescriptionsItem
        label="Episode"
        :span="2"
        >{{ episode.episode }}</ElDescriptionsItem
      >
      <ElDescriptionsItem label="Characters statuses">
        <ElTag
          v-for="character in episode.characters"
          :key="character.id"
          :type="CharacterService.transformStatusIntoType(character.status)"
          effect="dark"
          style="margin: 10px 10px 0 0">
          {{ character.name }}
        </ElTag>
      </ElDescriptionsItem>
    </ElDescriptions>
  </ElCard>
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
