import { all, call, put, takeEvery } from "redux-saga/effects"
import fetchGetUsers from "../requests/fetchUsers"
import fetchGetUsers1 from "../../../../reduxstudent/saga/sagas/requests/fetchUsers";
import fetchGetUsers2 from "../../../../reduxfaculty/saga/sagas/requests/fetchUsers";


function* handleGetUsers() {
    try {
        // const admins = yield call(fetchGetUsers);
        // yield put({type: "GET_USERS_SUCCESS", admins: admins})
        const [admins, users,faculties] = yield all([call(fetchGetUsers),call(fetchGetUsers1),call(fetchGetUsers2)]);
        yield all([put({type: "GET_USERS_SUCCESS", admins: admins}), put({type: "GET_USERS_SUCCESSS", users: users}), put({type: "GET_USERS_SUCCESS2", faculties: faculties})])
    } catch (error) {
        yield put({type: "GET_USERS_FAILED", message: error.message})
    }
}

function* watcherUserSaga () {
    yield takeEvery("GET_USERS_REQUESTED", handleGetUsers)
}

export default watcherUserSaga;