import { all } from 'redux-saga/effects';
import watcherUserSagas2 from "./handlers/fetchUsers";

export default function* facultyrootSaga() {
    yield all([watcherUserSagas2()]);
}