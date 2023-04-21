<template >
    <h1>Editar Curso</h1>
    <h2 v-if="isLoading">Espere por favor ...</h2>
    <h5 v-if="errorMessage"> {{ errorMessage }}</h5>
    <form @submit.prevent="updateCourse">
        Nombre: <input type="text" v-model="course.name">
        <br>
        inicio: <input type="date" v-model="course.start_date"><br>
        fin: <input type="date" v-model="course.end_date"><br>
        <button type="submit">Guardar</button>
    </form><br>
</template>
<script>
import useCourses from '../../composables/useCourses';
import { onMounted } from 'vue'
import { useRoute ,useRouter} from 'vue-router'
export default {
    setup() {
        const route = useRoute()
        const router = useRouter()
        const { onUpdateCourse, course, errorMessage, isLoading, getCourse } = useCourses()

        onMounted(() => getCourse(route.params.id))

        const updateCourse = async () => {
            await onUpdateCourse(route.params.id)
            router.push({ name: 'home' })
        }
        return {
            course,
            isLoading,
            errorMessage,
            updateCourse,
        }
    }
}
</script>
