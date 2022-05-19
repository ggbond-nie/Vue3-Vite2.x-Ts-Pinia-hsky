<template lang="pug">
n-button Default
n-button(type='tertiary')
    | Tertiary
n-button(type='info') 我是你爸爸
div 我是大哥
div {{ store.count2 }}
div {{ store.count3 }}
button(@click='store.count++')
    | {{ store.count }}
br
TestPinia
n-button(@click='getList') 我是 ggbond
</template>
<script lang="ts" setup>
import { inxGeneral } from '../api/index'
import { mainStore } from '../store/index'
import TestPinia from './testpinia.vue'
const store = mainStore()
const getList = async () => {
    const params = {
        module_id: 'AHINDUSTRY0027',
        size: 10000000,
        rule_id: 'AHGCJ0491',
    }
    const res = await inxGeneral(params)
    console.log(res)
}
</script>
