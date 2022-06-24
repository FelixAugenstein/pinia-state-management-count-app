import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
    id: 'counter',
    state: () => ({
        count: 0,
        userName: 'John Doe' // feel free to change the userName to your name
    }),
    getters: {
        oddOrEven: (state) => {
            return (state.count % 2 === 0) ? 'even' : 'odd'
        }
    },
    actions: {
        increaseCount() {
            this.count++
        },
        decreaseCount() {
            this.count--
        }
    }
})
