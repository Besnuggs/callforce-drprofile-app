import { GET_DEMO_DB_STARTED, GET_DEMO_DB_SUCCESS, GET_DEMO_DB_FAILURE, POST_DEMO_DB_STARTED, POST_DEMO_DB_SUCCESS, POST_DEMO_DB_FAILURE } from '../actions/calendarActions.js';
import update from 'immutability-helper';

const initialState = {
    events: [],
    clinicInfo: {
        owner: '',
        phone: '',
        address: '',
        name: ''
    },
    nextEventId: null
}

const calendar = (state=initialState, action) => {
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
        case POST_DEMO_DB_STARTED:
            console.log('Posting to db');
            break;
        case POST_DEMO_DB_SUCCESS:
            const latestClient = action.payload.clients
            const latestClientName = Object.keys(action.payload.clients).join('');

            const latestDoctorEvents = latestClient[latestClientName].doctors.availabilities,
            latestAssistantEvents = latestClient[latestClientName].assistants.availabilities,
            latestHygientistEvents = latestClient[latestClientName].hygientists.availabilities,
            latestConsolidatedEvents = latestDoctorEvents.concat(latestHygientistEvents, latestAssistantEvents);
            
            const latestNextEventId = latestConsolidatedEvents.length + 1; 
            
            delta = {
                events: { $set: latestConsolidatedEvents },
                nextEventId: { $set: latestNextEventId }
            }
            break;
        case POST_DEMO_DB_FAILURE:
            console.log('Failure', action.payload);
            break;
        default:
            return state;
    }
    return update(state, delta ? delta : {});
}

export default calendar;