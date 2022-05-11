import { defineStore } from 'pinia'
export const mainStore = defineStore('main', {
    state: () => {
        return {
            count: 100,
            count2: 200,
            count3: 300,
        }
    },
    getters: {},
    actions: {
        changeState() {
            this.count += 101
        },
    },
})
