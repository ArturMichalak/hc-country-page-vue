<template>
  <MainCard wide>
    <SearchHeader ref="search" :countries-length="source.length" />
    <div class="flex flex-grow">
      <form class="max-w-[260px] flex-grow mr-8 flex flex-col gap-8">
        <SortCountries ref="sort" />
      </form>
      <div class="relative overflow-auto flex-grow">
        <a-table
          v-if="data !== null"
          sticky
          class="absolute"
          :data-source="source"
          :columns="columns"
          :custom-row="customRow"
        >
          <template #headerCell="{ column }">
            <template v-if="column.key === 'area'"> Area (km<sup>2</sup>) </template>
          </template>

          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'flag'">
              <i class="inline-block not-italic text-[50px] leading-[38px]">
                {{ record.flag }}
              </i>
            </template>
          </template>
        </a-table>
      </div>
    </div>
  </MainCard>
</template>

<script setup lang="ts">
import _ from 'lodash'
import { ref, computed } from 'vue'

import type { CountryDetails } from '@/models/country-details'
export type SortKeys = 'name' | 'population' | 'area' | 'region'

const sort = ref<{ key: SortKeys }>({ key: 'population' })
const search = ref<{ phrase: string }>({ phrase: '' })

const columns = [
  { title: 'Flag', dataIndex: 'flag', key: 'flag' },
  { title: 'Name', dataIndex: 'name' },
  { title: 'Population', dataIndex: 'population' },
  { dataIndex: 'area', key: 'area' },
  { title: 'Region', dataIndex: 'region' },
]

const customRow = (record: { name: string }) => ({
  onClick: () => {
    navigateTo(`/${_.kebabCase(record.name)}`)
  },
})

const { data } = await useAsyncData<CountryDetails[]>('countries', () => $fetch('https://restcountries.com/v3.1/all'))

const formattedData = reactive(
  (data.value !== null &&
    data.value.map(({ name, flag, area, population, region, subregion }) => ({
      name: name.common || name.official,
      flag,
      area,
      population,
      region,
      subregion,
      commonName: name.common,
      officialName: name.official,
    }))) ||
    []
)

const source = computed(() => {
  const searchWords = search.value.phrase.toLocaleLowerCase().split(' ')
  const source = formattedData.filter((r) =>
    searchWords.some(
      (w) =>
        r.commonName.toLocaleLowerCase().includes(w) ||
        r.officialName.toLocaleLowerCase().includes(w) ||
        r.region.toLocaleLowerCase().includes(w) ||
        r.subregion?.toLocaleLowerCase().includes(w)
    )
  )
  source.sort((a, b) => (a.population < b.population ? 1 : -1))
  const sortKey = sort.value?.key as unknown as SortKeys
  if (sortKey === 'area') {
    source.sort((a, b) => (a[sortKey] < b[sortKey] ? 1 : -1))
  } else if (sortKey !== 'population') {
    source.sort((a, b) => (a[sortKey] > b[sortKey] ? 1 : -1))
  }
  return source
})
</script>
