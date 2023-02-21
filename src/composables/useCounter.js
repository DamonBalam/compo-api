import { ref } from 'vue'
const useCounter = (init = 0) => {
    const counter = ref(init);

    return {
        counter,


        increase: () => counter.value++,
        decrease: () => counter.value--,
    };
}


export default useCounter