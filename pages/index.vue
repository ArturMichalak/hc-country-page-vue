<template>
  <MainCard wide>
    <div class="flex justify-between">
      <CountriesCounter :countries-count="source.length" />
      <div><a-input-search placeholder="Search by Name, Region, Subregion" /></div>
    </div>
    <div class="flex flex-grow">
      <form class="max-w-[260px] flex-grow mr-8 flex flex-col gap-8">
        <a-select ref="select" v-model:value="sortKey">
          <a-select-option value="population">Population</a-select-option>
          <a-select-option value="area">Area</a-select-option>
          <a-select-option value="region">Region</a-select-option>
          <a-select-option value="name">Name</a-select-option>
        </a-select>
      </form>
      <div class="relative overflow-auto flex-grow">
        <a-config-provider
          v-if="data !== null"
          :theme="{
            token: {
              colorBgBase: 'rgb(27 29 31)',
              colorTextBase: 'rgb(108 114 127)',
            },
          }"
        >
          <a-table sticky class="absolute" :data-source="source" :columns="columns">
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
        </a-config-provider>
      </div>
    </div>
  </MainCard>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { CountryDetails } from '@/models/country-details'

const sortKey = ref('population')

const columns = [
  { title: 'Flag', dataIndex: 'flag', key: 'flag' },
  { title: 'Name', dataIndex: 'name' },
  { title: 'Population', dataIndex: 'population' },
  { dataIndex: 'area', key: 'area' },
  { title: 'Region', dataIndex: 'region' },
]
const { data } = await useAsyncData<CountryDetails[]>('countries', () => $fetch('https://restcountries.com/v3.1/all'))

const source =
  (data.value !== null &&
    data.value.map(({ name, flag, area, population, region }) => ({
      name: name.common || name.official,
      flag,
      area,
      population,
      region,
    }))) ||
  []
</script>
