import { all } from 'redux-saga/effects';
import watcherUserSagas from "./handlers/fetchUsers";

export default function* studentrootSaga() {
    yield all([watcherUserSagas()]);
}