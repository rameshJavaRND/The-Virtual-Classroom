const initialState = {
    users: [],
    loading: false,
    error: null
}

const users = (state = initialState, action) => {
    switch (action.type) {
        case "GET_USERS_REQUESTED":
            return {...state, loading: true}
        case "GET_USERS_SUCCESSS":
            return {...state, loading: false, users: action.users}
        case "GET_USERS_FAILED":
            return {...state, loading: false, error: "UNABLE TO FETCH USERS"}
        default:
            return state;
    }
}

export default users;