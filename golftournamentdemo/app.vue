<script setup>
useHead({
  title: 'SRK',
  meta: [
    { name: 'description', content: 'The bridge' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ]
})
</script>
<template>
  <NuxtLayout>
    <NuxtRouteAnnouncer />
    <div>
      <NuxtPage />
    </div>
  </NuxtLayout>
</template>
<style>
.v-btn {
  text-transform: none !important;
}
</style>
