<template>
  <label v-memo="key">
    Sort by
    <a-select ref="select" v-model:value="key" class="w-full mt-[10px]">
      <a-select-option value="population">Population</a-select-option>
      <a-select-option value="area">Area</a-select-option>
      <a-select-option value="region">Region</a-select-option>
      <a-select-option value="name">Name</a-select-option>
    </a-select>
  </label>
</template>

<script setup lang="ts">
const key = ref('population')
defineExpose({ key })
</script>
