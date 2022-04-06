import { combineReducers } from 'redux'
import admins from "./reduxadmin/saga/reducer"
import users from "./reduxstudent/saga/reducer"
import faculties from "./reduxfaculty/saga/reducer"

export default combineReducers({
   admins,users,faculties
})