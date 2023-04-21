<template>
  <main>
    <h1>Course list</h1>
    <router-link :to="{name:'create-course'}" > Crear</router-link>
    <hr>
    <div v-if="courses.length > 0">
      <ul>
        <li v-for="{ name, start_date, end_date, id } in courses" :key="id">
          <h4>{{ name }} - inicio : {{ start_date }} - fin: {{ end_date }} </h4>
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
import useCourses from '../composables/useCourses';

export default {
  setup() {
    const {
      errorMessage,
      isLoading,
      courses,
    } = useCourses();
    ;

    return {
      errorMessage,
      isLoading,
      courses,
    }
  }
}
</script>