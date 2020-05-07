import { GET_DEMO_DB_STARTED, GET_DEMO_DB_SUCCESS, GET_DEMO_DB_FAILURE } from '../actions/calendarActions.js';
import update from 'immutability-helper';

const calendarState = {
    events: [],
    clinicInfo: {
        owner: '',
        phone: '',
        address: '',
        name: ''
    }
}

const calendar = (state=calendarState, action) => {
    let delta={};
    switch(action.type){
        case GET_DEMO_DB_STARTED:
            console.log(action.type, action, 'getting db')
            break;
        case GET_DEMO_DB_SUCCESS:
            const {payload: {clients}} = action;
            const name = Object.keys(clients).join(''),
                owner = clients[name].owner,
                phone = clients[name].phone,
                address = clients[name].address
            delta = {
                events: {$set: []},
                clinicInfo: {
                    owner: { $set: owner },
                    phone: { $set: phone },
                    address: { $set: address },
                    name: { $set: name },
                }
            }
            console.log(action, 'db success')
            break;
        case GET_DEMO_DB_FAILURE:
            console.log(action, 'db failure')
            break;
        default:
            return state;
    }
    return update(state, delta ? delta : {});
}

export default calendar;