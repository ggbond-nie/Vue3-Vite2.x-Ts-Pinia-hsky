<template>
    <div @click="handleme">我是pina小弟</div>
    <button>{{ count }}</button> <br />
    <button>{{ count2 }}</button><br />
    <button>{{ count3 }}</button><br />
    <div @click="store.changeState">我是调用actions事件</div>
</template>
<script lang="ts" setup>
import { mainStore } from '../store/index'
import { storeToRefs } from 'pinia'
const store = mainStore()
const { count, count2, count3 } = storeToRefs(store)
const handleme = () => {
    store.$patch((state) => {
        state.count = state.count + 10
        state.count2 = state.count2 + 20
        state.count3 = state.count3 + 30
    })
}
</script>
