<template>
  <MainCard>
    {{ formattedData }}
  </MainCard>
</template>

<script setup lang="ts">
import _ from 'lodash'

import type { CountryDetails } from '@/models/country-details'
export type SortKeys = 'name' | 'population' | 'area' | 'region'

const route = useRoute()

const { data } = await useAsyncData<CountryDetails[]>('countries', () => $fetch('https://restcountries.com/v3.1/all'))

const formattedData = reactive(
  data.value?.find(
    (x) => _.kebabCase(x.name.common) === route.params.country || _.kebabCase(x.name.official) === route.params.country
  ) || {}
)
</script>
