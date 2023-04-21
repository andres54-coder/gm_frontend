import { ref } from 'vue';
import axios from 'axios'
const useCourses = () => { 

    const courses = ref([]);
    const isLoading = ref(true)
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
    
    const onSaveCourse = async(dataEntry) => {
        const {data} = await axios.post(`http://127.0.0.1:8000/api/courses`,dataEntry);
        console.log( data );
    }

    getCourses()

    return {
        onSaveCourse,
        errorMessage,
        isLoading,
        courses,
    }

}
export default useCourses