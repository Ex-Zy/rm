<script setup lang="ts">
import dayjs from 'dayjs'
import {
  ElTable,
  ElTableColumn,
  ElAvatar,
  ElPagination,
  ElLink,
  ElTag,
  vLoading,
} from 'element-plus'
import CharacterService from '../services/character.service'
import type { Character } from '@types'

const props = defineProps<{
  page: number
  loading: boolean
  totalRows: number
  characters: Character[]
}>()
const emit = defineEmits<(e: 'update:page', page: number | string) => void>()

const currentPage = ref(1)
watchEffect(() => (currentPage.value = props.page))

const updatePage = (page: number) => {
  emit('update:page', page)
}
</script>

<template>
  <ElTable
    v-loading="loading"
    :data="characters"
    style="width: 100%; flex-grow: 1; margin-bottom: 15px; height: 100px"
    stripe
    border
  >
    <ElTableColumn prop="id" label="id" width="50" />
    <ElTableColumn prop="name" label="Name" width="250">
      <template #default="{ row }">
        <NuxtLink :to="`/characters/${row.id}`" style="text-decoration: none">
          <ElLink type="primary">
            {{ row.name }}
          </ElLink>
        </NuxtLink>
      </template>
    </ElTableColumn>
    <ElTableColumn prop="image" label="Avatar" width="80">
      <template #default="{ row }">
        <ElAvatar :size="50" :src="row.image" />
      </template>
    </ElTableColumn>
    <ElTableColumn prop="species" label="Species" width="100" />
    <ElTableColumn prop="created" label="Created" sortable>
      <template #default="{ row }">
        {{ dayjs(row.created).format('MM/DD/YYYY') }}
      </template>
    </ElTableColumn>
    <ElTableColumn prop="gender" label="Gender" width="100" />
    <ElTableColumn prop="status" label="Status" width="100" align="center">
      <template #default="{ row }">
        <ElTag
          :type="CharacterService.transformStatusIntoType(row.status)"
          effect="dark"
          round
          size="large"
        >
          {{ row.status }}
        </ElTag>
      </template>
    </ElTableColumn>
    <ElTableColumn prop="location" label="Location">
      <template #default="{ row }">
        {{ row.location.dimension }}
      </template>
    </ElTableColumn>
    <ElTableColumn prop="type" label="Type">
      <template #default="{ row }">
        {{ row.type || 'Unknown' }}
      </template>
    </ElTableColumn>
  </ElTable>
  <ElPagination
    v-if="characters.length"
    v-model:currentPage="currentPage"
    style="margin-top: auto; justify-content: center; flex-shrink: 0"
    :page-size="20"
    :background="true"
    layout="total, prev, pager, next, jumper"
    :total="totalRows"
    @current-change="updatePage"
  />
</template>
