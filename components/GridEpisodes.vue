<script setup lang="ts">
import dayjs from "dayjs";
import { getCharacterType } from "@helpers";
import { ElTable, ElTableColumn, ElTooltip, ElPagination, ElLink, ElTag, vLoading } from "element-plus";
import { Episode } from "types/entity/entity.episode";

const props = defineProps<{
  page: number;
  loading: boolean;
  totalRows: number;
  episodes: Episode[];
}>();
const emit = defineEmits<{
  (e: "update:page", page: number | string): void;
}>();

const currentPage = ref(1);
watchEffect(() => (currentPage.value = props.page));

const updatePage = (page: number) => emit("update:page", page);
</script>

<template>
  <ElTable
    v-loading="loading"
    :data="episodes"
    style="width: 100%; flex-grow: 1; margin-bottom: 15px; height: 100px"
    stripe
    border>
    <ElTableColumn type="expand">
      <template #default="{ row }">
        <div style="padding: 10px">
          <h3 style="margin: 0">Characters</h3>
          <ElTooltip
            v-for="character in row.characters"
            :key="character.id"
            placement="top-end"
            :content="character.status"
            effect="dark">
            <ElTag
              :type="getCharacterType(character.status)"
              effect="dark"
              style="margin: 10px 10px 0 0">
              {{ character.name }}
            </ElTag>
          </ElTooltip>
        </div>
      </template>
    </ElTableColumn>
    <ElTableColumn
      prop="id"
      label="id"
      width="50" />
    <ElTableColumn
      prop="name"
      label="Name"
      width="300">
      <template #default="{ row }">
        <NuxtLink
          :to="`/episodes/${row.id}`"
          style="text-decoration: none">
          <ElLink type="primary">
            {{ row.name }}
          </ElLink>
        </NuxtLink>
      </template>
    </ElTableColumn>
    <ElTableColumn
      prop="air_date"
      label="Air date"
      width="200"
      sortable />
    <ElTableColumn
      prop="episode"
      label="Episode"
      width="150"
      sortable />
    <ElTableColumn
      prop="created"
      label="Created"
      sortable>
      <template #default="{ row }">
        {{ dayjs(row.created).format("MM/DD/YYYY") }}
      </template>
    </ElTableColumn>
  </ElTable>
  <ElPagination
    v-if="episodes.length"
    v-model:currentPage="currentPage"
    style="margin-top: auto; justify-content: center; flex-shrink: 0"
    :page-size="20"
    :background="true"
    layout="total, prev, pager, next, jumper"
    :total="totalRows"
    @current-change="updatePage" />
</template>
