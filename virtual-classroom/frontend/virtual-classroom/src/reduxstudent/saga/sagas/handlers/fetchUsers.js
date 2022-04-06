import {  call, put, takeEvery } from "redux-saga/effects"
import fetchGetUsers from "../requests/fetchUsers"

function* handleGetUsers() {
    try {
        const users = yield call(fetchGetUsers);
        yield put({type: "GET_USERS_SUCCESSS", users: users})
    } catch (error) {
        yield put({type: "GET_USERS_FAILED", message: error.message})
    }
}

function* watcherUserSagas () {
    yield takeEvery("GET_USERS_REQUESTED", handleGetUsers)
}

export default watcherUserSagas;