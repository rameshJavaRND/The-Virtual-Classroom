const initialState = {
    admins: [],
    loading: false,
    error: null
}

const admins = (state = initialState, action) => {
    switch (action.type) {
        case "GET_USERS_REQUESTED":
            return {...state, loading: true}
        case "GET_USERS_SUCCESS":
            return {...state, loading: false, admins: action.admins}
        case "GET_USERS_FAILED":
            return {...state, loading: false, error: "UNABLE TO FETCH USERS"}
        default:
            return state;
    }
}

export default admins;