import useParams from 'react-router-dom'
// let { id } = useParams();

const studenturl = `http://localhost:8000/student/624480aff5cf7bb1d5f5adff`;





const fetchGetUsers1 = async () => {
    console.log(123);
    try {
        const response = await fetch(studenturl, {
            method: "GET"
        });
        return await response.json();
    } catch (error) {
        throw error;
    }

}



export default fetchGetUsers1;

