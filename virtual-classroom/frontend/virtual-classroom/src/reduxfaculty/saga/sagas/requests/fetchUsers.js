import useParams from 'react-router-dom'
// let { id } = useParams();

const facultyurl = `http://localhost:8000/faculty/624afc3974d780ef8eeb50e3`;





const fetchGetUsers2 = async () => {
    console.log(123);
    try {
        const response = await fetch(facultyurl, {
            method: "GET"
        });
        return await response.json();
    } catch (error) {
        throw error;
    }

}



export default fetchGetUsers2;

