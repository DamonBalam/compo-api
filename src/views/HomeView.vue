<template>
  <div class="home">
    <h1>Reactive vs Ref</h1>

    <div>{{ ironman }}</div>
    <div>{{ hulk }}</div>

    <button @click="changeIronman">Change IronMan</button>
    <button @click="changeHulk">Change Hulk</button>

    <div>Ironman: {{ ironmanIsAlive }}</div>
    <div>Hulk: {{ hulkIsAlive }}</div>
    <button @click="changeStatus">Change</button>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
export default {
  name: "HomeView",

  setup() {
    const ironman = ref({ name: "Tony", age: 50 });
    const hulk = reactive({ name: "Bruce", age: 50 });

    const ironmanIsAlive = ref(false);
    const hulkIsAlive = ref(true);

    const changeStatus = () => {
      hulkIsAlive.value = !hulkIsAlive.value;
    };

    return {
      ironman,
      hulk,
      ironmanIsAlive,
      hulkIsAlive,

      changeStatus,
      changeIronman: () => {
        ironman.value.name = "Tony Stark";
        ironman.value.age = 55;
      },
      changeHulk: () => {
        hulk.name = "Bruce Banner";
        hulk.age = 55;
      },
    };
  },
};
</script>
