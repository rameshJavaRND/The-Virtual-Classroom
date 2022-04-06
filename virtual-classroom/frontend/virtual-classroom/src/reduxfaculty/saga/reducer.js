const initialState = {
    faculties: [],
    loading: false,
    error: null
}

const faculties = (state = initialState, action) => {
    switch (action.type) {
        case "GET_USERS_REQUESTED":
            return {...state, loading: true}
        case "GET_USERS_SUCCESS2":
            return {...state, loading: false, faculties: action.faculties}
        case "GET_USERS_FAILED":
            return {...state, loading: false, error: "UNABLE TO FETCH USERS"}
        default:
            return state;
    }
}

export default faculties;