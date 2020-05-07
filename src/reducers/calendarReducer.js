import { GET_DEMO_DB_STARTED, GET_DEMO_DB_SUCCESS, GET_DEMO_DB_FAILURE } from '../actions/calendarActions.js';
import update from 'immutability-helper';

const calendarState = {
    events: [],
    clinicInfo: {
        owner: '',
        phone: '',
        address: '',
        name: ''
    },
    nextEventId: null
}

const calendar = (state=calendarState, action) => {
    let delta={};
    switch(action.type){
        case GET_DEMO_DB_STARTED:
            console.log('Retrieving Database.')
            break;
        case GET_DEMO_DB_SUCCESS:
            const {payload: {clients}} = action;
            const name = Object.keys(clients).join(''),
                owner = clients[name].owner,
                phone = clients[name].phone,
                address = clients[name].address;

            const doctorEvents = clients[name].doctors.availabilities,
                assistantEvents = clients[name].assistants.availabilities,
                hygientistEvents = clients[name].hygientists.availabilities,
                consolidatedEvents = doctorEvents.concat(hygientistEvents, assistantEvents)
            
            const nextEventId = consolidatedEvents.length + 1;    
            delta = {
                events: { $set: consolidatedEvents },
                clinicInfo: {
                    owner: { $set: owner },
                    phone: { $set: phone },
                    address: { $set: address },
                    name: { $set: name },
                },
                nextEventId: { $set: nextEventId }
            }
            console.log(action, 'db success')
            break;
        case GET_DEMO_DB_FAILURE:
            console.error('%cFailure: Unable to retrieve db. Check Network tab.', 'color:red')
            break;
        default:
            return state;
    }
    return update(state, delta ? delta : {});
}

export default calendar;