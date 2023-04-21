<template >
    <h1>Crear Curso</h1>

    <form @submit.prevent="onSaveCourse">
        Nombre: <input type="text">
        <br>
        inicio: <input type="date"><br>
        fin: <input type="date">
    </form><br>
    <span> Presione Enter para Guardar</span>
</template>
<script>
// import axios from 'axios';


export default {
    methods: {

        async onSaveCourse(){
        //const {data} = await axios.post(`http://127.0.0.1:8000/api/courses`);
    }
    },
}
</script>
