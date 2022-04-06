import useParams from 'react-router-dom'
// let { id } = useParams();
const adminurl = `http://localhost:8000/admin/62434725bddc4f3d46cf9064`;



const fetchGetUsers = async () => {
    console.log(123);
    try {
        const response = await fetch(adminurl, {
            method: "GET"
        });
        return await response.json();
    } catch (error) {
        throw error;
    }

}







export default fetchGetUsers;

