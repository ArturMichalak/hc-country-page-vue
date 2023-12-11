<template>
  <span> Found {{ props.countriesCount }} {{ props.countriesCount ? 'countries' : 'country' }} </span>
</template>

<script setup lang="ts">
const props = defineProps({
  countriesCount: {
    type: Number,
    required: true,
  },
})
</script>
