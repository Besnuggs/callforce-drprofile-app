import { combineReducers } from 'redux'
import calendar from './calendarReducer'

const rootReducer = () => combineReducers({
    calendar: calendar
})

export default rootReducer;