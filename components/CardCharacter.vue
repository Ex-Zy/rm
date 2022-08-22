<script setup lang="ts">
import dayjs from "dayjs";
import { getCharacterType } from "@helpers";
import { ElCard, ElAvatar, ElDescriptions, ElDescriptionsItem, ElTag } from "element-plus";

interface ICharacter {
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
  character: ICharacter;
}>();
</script>

<template>
  <ElCard
    class="box-card"
    style="margin: 40px auto 0"
  >
    <template #header>
      <div
        class="card-header"
        style="justify-content: center"
      >
        <span>
          #{{ character.id }}
          <strong>{{ character.name }}</strong>
        </span>
      </div>
    </template>
    <div style="display: flex; justify-content: center; margin-bottom: 20px">
      <ElAvatar
        shape="square"
        :size="300"
        :src="character.image"
      />
    </div>
    <ElDescriptions
      direction="vertical"
      :column="4"
      size="large"
      border
    >
      <ElDescriptionsItem label="Species">{{ character.species }}</ElDescriptionsItem>
      <ElDescriptionsItem label="Created">{{ dayjs(character.created).format("MM/DD/YYYY") }}</ElDescriptionsItem>
      <ElDescriptionsItem
        label="Gender"
        :span="2"
        >{{ character.gender }}</ElDescriptionsItem
      >
      <ElDescriptionsItem label="Status">
        <ElTag
          :type="getCharacterType(character.status)"
          effect="dark"
          size="large"
        >
          {{ character.status }}
        </ElTag>
      </ElDescriptionsItem>
      <ElDescriptionsItem label="Location"> {{ character.location?.type }} / {{ character.location?.name }} </ElDescriptionsItem>
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
