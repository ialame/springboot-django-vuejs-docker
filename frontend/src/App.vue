<template>
  <div>
    <h1>Test Vue.js & Spring Boot</h1>
    <button @click="callApi">Tester l'API</button>
    <p>{{ response }}</p>
    <hr />
    <h1>Test Vue.js avec Django</h1>
    <button @click="callApiDjango">Tester l'API</button>
    <p>{{ responseDjango }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"; // Importation de la Composition API
    const response = ref('');
    const responseDjango = ref('');

const callApi = async () => {
  try {
    const res = await fetch('/spring-boot-api/hello');
    response.value = await res.text();
  } catch (error) {
    console.error('Erreur:', error);
    response.value = "Erreur lors de l'appel API Spring Boot";
  }
};

const callApiDjango = async () => {
  try {
    const res = await fetch('/django-api/api/hello');
    responseDjango.value = await res.text();
  } catch (error) {
    console.error('Erreur:', error);
    responseDjango.value = "Erreur lors de l'appel API Django";
  }
};
</script>

<style>
h1 {
  color: #42b983;
}
</style>
