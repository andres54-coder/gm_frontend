<template>
  <main>
    <h1>Course list</h1>
    <h2 v-if="isLoading">Espere por favor ...</h2>
    <router-link :to="{name:'create-course'}" > Crear</router-link>
    <hr>
    <h5 v-if="errorMessage"> {{ errorMessage }}</h5>
    <div v-if="courses.length > 0">
      <ul>
        <li v-for="{ name, start_date, end_date, id } in courses" :key="id">
          <h4>{{ name }} - inicio : {{ start_date }} - fin: {{ end_date }} </h4><router-link :to="{name:'update-course', params:{id}}" > Actualizar</router-link> 
          <button @click="deleteCourse(id)"> Eliminar </button>
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
import useCourses from '../composables/useCourses';
import { onMounted } from 'vue';
export default {
  setup() {
    const {
      onDeleteCourse,
      getCourses,
      errorMessage,
      isLoading,
      courses,
    } = useCourses();
    onMounted(getCourses)
    return {
      errorMessage,
      isLoading,
      courses,
      deleteCourse: (id) => onDeleteCourse(id),
    }
  }
}
</script>
<style>
  button {
    margin-left: 5px;
    background-color: transparent;
    text-decoration: none;
    color: hsla(160, 100%, 37%, 1);
    transition: 0.4s;
  }
</style>