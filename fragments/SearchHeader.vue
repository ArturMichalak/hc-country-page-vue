<template>
  <div class="flex justify-between items-center mb-10">
    <CountriesCounter :countries-count="props.countriesLength" />
    <a-config-provider
      :theme="{
        token: {
          colorBgBase: 'rgb(40 43 48)',
          colorTextPlaceholder: 'rgb(108 114 127)',
        },
      }"
      ><a-input
        v-model:value="phrase"
        size="large"
        placeholder="Search by Name, Region, Subregion"
        class="bg-shark-light min-h-[44px] flex items-center max-w-[340px] rounded-xl pb-.5"
      >
        <template #prefix><i-search class="h-6" /></template>
      </a-input>
    </a-config-provider>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ countriesLength: number }>()
const phrase = ref('')
defineExpose({ phrase })
</script>
