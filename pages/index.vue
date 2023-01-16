<template>
    <h1 class="text-red-300">Welcome to the homepage</h1>
    <header>
    <nav>
      <ul>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/dashboard">Dashboard</NuxtLink></li>
        <li><NuxtLink to="/posts/1">Post 1</NuxtLink></li>
        <li><NuxtLink to="/posts/2">Post 2</NuxtLink></li>
      </ul>
    </nav>
  </header>
    <AppAlert>
      This is an auto-imported component
    </AppAlert>
</template>
<script lang="ts" setup>
const msg = '你好 Nuxt';
</script>
<style lang="less">
    
</style>