import { ref } from 'vue';
import axios from 'axios'
const useCourses = () => { 

    const course = ref([]);
    const courses = ref([]);
    const isLoading = ref()
    const errorMessage = ref()
    
    const getCourses = async() => {

        isLoading.value =  true

        const {data}  = await axios.get(`http://127.0.0.1:8000/api/courses`)
        console.log( data );
        if( data.length > 0 ){
            courses.value = data
            errorMessage.value = null
        }else{
            errorMessage.value = 'no hay cursos disponibles'
        }
        isLoading.value =  false
    }

    const getCourse = async(id) => {

        isLoading.value =  true

        const {data}  = await axios.get(`http://127.0.0.1:8000/api/courses/${id}`)
        if( data.id ){
            course.value = {...data}
            console.log( course.value );
            errorMessage.value = null
        }
        if(data.error){
            errorMessage.value = data.error
        }
        isLoading.value =  false
    }
    
    const onSaveCourse = async (dataEntry) => {
        isLoading.value =  true
        const {data} = await axios.post(`http://127.0.0.1:8000/api/courses`,dataEntry);
        if( data.length > 0 ){
            errorMessage.value = null
        }else{
            errorMessage.value = 'Ocurrio un error en la solicitud'
        }
        isLoading.value =  false
    }

    const onUpdateCourse = async (id) => {
        isLoading.value =  true
        const {data} = await axios.put(`http://127.0.0.1:8000/api/courses/${id}`,course.value);
        if( data.id ){
            errorMessage.value = null
        }else if(data.error){
            errorMessage.value = 'Ocurrio un error en la solicitud'
        }
        isLoading.value =  false
    }

    const onDeleteCourse = async (id) => {
        isLoading.value =  true
        const {data} = await axios.delete(`http://127.0.0.1:8000/api/courses/${id}`);
        if( data.message ){
            courses.value = courses.value.filter(course => course.id != id)
            if (courses.value.length === 0) {
                errorMessage.value = 'no hay cursos disponibles'
            }
        }else{
            errorMessage.value = 'Ocurrio un error en la solicitud'
        }
        isLoading.value =  false
    }


    return {
        onDeleteCourse,
        onUpdateCourse,
        onSaveCourse,
        errorMessage,
        getCourses,
        isLoading,
        getCourse,
        courses,
        course,
    }

}
export default useCourses