<template>
  <!-- TODO: The css variables will be implemented in the near future. The react version already has this feature -->
  <a-config-provider
    :theme="{
      token: {
        colorBgBase: 'rgb(27 29 31)',
        colorTextBase: 'rgb(108 114 127)',
        colorBorderSecondary: 'rgb(40 43 48)',
        colorBorder: 'rgb(40 43 48)',
      },
    }"
  >
    <div class="min-h-screen flex flex-col bg-shark font-semibold text-pale-sky">
      <HeroBanner />
      <slot />
    </div>
  </a-config-provider>
</template>
