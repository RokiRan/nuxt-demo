<template>
    <span>2333</span>
    <div>ID:{{ route.params.id }}</div>
    <div>{{ data.data }}</div>
</template>
<script lang="ts" setup>
const route = useRoute()
// When accessing /posts/1, route.params.id will be 1
console.log(route.params.id)
// 尝试获取动态数据
const data = await useFetch('/img/feed-app')
console.log(data)
</script>