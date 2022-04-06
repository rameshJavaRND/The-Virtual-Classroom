import { fork } from "redux-saga/effects";
import { spawn } from "redux-saga/effects";
import { all } from "redux-saga/effects";
import { call } from "redux-saga/effects";
// import adminrootSaga from "./reduxadmin/saga/sagas/adminrootSaga";
// import studentrootSaga from "./reduxstudent/saga/sagas/studentrootSaga";
import watcherUserSaga from "./reduxadmin/saga/sagas/handlers/fetchUsers";
import watcherUserSagas from "./reduxstudent/saga/sagas/handlers/fetchUsers";
import watcherUserSagas2 from "./reduxfaculty/saga/sagas/handlers/fetchUsers";

 export default function* rootsaga () {
    const sagas = [
      watcherUserSaga,
      watcherUserSagas,
      watcherUserSagas2
    ];
  

    yield all(sagas.map(saga =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga)
            break
          } catch (e) {
            console.log(e)
          }
        }
      }))
    );
  }

   

