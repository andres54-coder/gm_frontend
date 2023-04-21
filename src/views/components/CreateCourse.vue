<template >
    <h1>Crear Curso</h1>
    <h2 v-if="isLoading">Espere por favor ...</h2>
    <h5 v-if="errorMessage"> {{ errorMessage }}</h5>
    <form @submit.prevent="saveCompany">
        Nombre: <input type="text" v-model="form.name">
        <br>
        inicio: <input type="date" name="name" id="name" v-model="form.start_date"><br>
        fin: <input type="date" v-model="form.end_date"><br>
        <button type="submit">Guardar</button>
    </form><br>
</template>
<script>
import useCourses from '../../composables/useCourses';
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
export default {
    setup() {
        const router = useRouter()
        const form = reactive({
            name: '',
            start_date: '',
            end_date: ''
        })

        const { onSaveCourse, errorMessage, isLoading} = useCourses()

        const saveCompany = async () => {
            await onSaveCourse({ ...form })
            router.push({ name: 'home'})
        }

        return {
            isLoading,
            errorMessage,
            saveCompany,
            form,
        }
    }
}
</script>
