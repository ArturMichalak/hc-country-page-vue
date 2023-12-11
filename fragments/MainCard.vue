<template>
  <main
    class="mx-auto relative -top-[60px] pt-6 pb-11 px-8 w-full bg-inherit rounded-xl border border-shark-light flex-grow flex flex-col"
    :class="props.wide ? 'max-w-7xl' : 'max-w-[720px]'"
  >
    <slot />
  </main>
</template>

<script setup lang="ts">
const props = defineProps({
  wide: Boolean,
})
</script>
