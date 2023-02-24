<template>
  <h2 v-if="isLoading">Espere por favor...</h2>
  <h2 v-else>Usuarios</h2>
  <h5 v-if="errorMessage">{{ errorMessage }}</h5>

  <div v-if="users.length > 0">
    <ul>
      <li v-for="user in users" :key="user.id">
        <h4>{{ user.first_name }} {{ user.last_name }}</h4>
        <h6>{{ user.email }}</h6>
      </li>
    </ul>
  </div>

  <button @click="prevPage">Atrás</button>
  <button @click="nextPage">Adelante</button>
  <div>
    <span>Pagina {{ currentPage }}</span>
  </div>
</template>

<script>
import useUser from "@/composables/useUser";
export default {
  setup() {
    const { users, isLoading, currentPage, errorMessage, prevPage, nextPage } =
      useUser();

    return {
      users,
      isLoading,
      currentPage,
      errorMessage,
      prevPage,
      nextPage,
    };
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
  width: 100%;
}

div {
  display: flex;
  justify-content: center;
  text-align: center;
}
</style>
