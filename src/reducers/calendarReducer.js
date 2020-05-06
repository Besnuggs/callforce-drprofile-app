import {GET_DEMO_DB} from '../actions/calendarActions.js'

const calendarState = {
    dentists: {},
    assistants: {},
    hygientists: {},
    clinicInfo: {}
}

const calendar = (state=calendarState, action) => {
    const delta={};
    switch(action.type){
        case GET_DEMO_DB:
        console.log(action.type, action)
            delta = {

            }
        break;
    }
}