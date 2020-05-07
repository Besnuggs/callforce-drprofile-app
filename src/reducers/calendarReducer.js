import {GET_DEMO_DB} from '../actions/calendarActions.js';
import update from 'immutability-helper';

const calendarState = {
    dentists: {events: 'first event'},
    assistants: {},
    hygientists: {},
    clinicInfo: {}
}

const calendar = (state=calendarState, action) => {
    let delta={};
    switch(action.type){
        case GET_DEMO_DB:
        console.log(action.type, action)
            delta = {

            }
        break;
        default:
            return state;
    }
    return update(state, delta ? delta : {});
}

export default calendar;