import {  call, put, takeEvery } from "redux-saga/effects"
import fetchGetUsers2 from "../requests/fetchUsers"

function* handleGetUsers() {
    try {
        const faculties = yield call(fetchGetUsers2);
        yield put({type: "GET_USERS_SUCCESS2", faculties: faculties})
    } catch (error) {
        yield put({type: "GET_USERS_FAILED", message: error.message})
    }
}

function* watcherUserSagas2 () {
    yield takeEvery("GET_USERS_REQUESTED", handleGetUsers)
}

export default watcherUserSagas2;