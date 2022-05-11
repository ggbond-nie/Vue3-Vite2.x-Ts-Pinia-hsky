<template lang="pug">
div 我是大哥
div {{ store.count2 }}
div {{ store.count3 }}
button(@click='store.count++')
    | {{ store.count }}
br
TestPinia
</template>
<script lang="ts" setup>
import { mainStore } from '../store/index'
import TestPinia from './testpinia.vue'
const store = mainStore()
console.log(store.count, 11)
</script>
