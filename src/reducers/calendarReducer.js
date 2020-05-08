import { GET_DEMO_DB_STARTED, GET_DEMO_DB_SUCCESS, GET_DEMO_DB_FAILURE, POST_DEMO_DB_STARTED, POST_DEMO_DB_SUCCESS, POST_DEMO_DB_FAILURE } from '../actions/calendarActions.js';
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
        case POST_DEMO_DB_STARTED:
            console.log('Posting to db');
            break;
        case POST_DEMO_DB_SUCCESS:
            console.log('Success', action.payload)
            // const latestDBUpdate = action.payload.clients,
            //     latestClientName = Object.keys(latestDBUpdate).join('');

            // const latestDoctorEvents = clients[latestClientName].doctors.availabilities,
            // latestAssistantEvents = clients[latestClientName].assistants.availabilities,
            // latestHygientistEvents = clients[latestClientName].hygientists.availabilities,
            // latestConsolidatedEvents = doctorEvents.concat(hygientistEvents, assistantEvents);
            
            // const latestNextEventId = consolidatedEvents.length + 1; 
            
            // console.log(latestConsolidatedEvents, latestNextEventId)
            // delta = {
            //     events: { $set: latestConsolidatedEvents },
            //     nextEventId: { $set: nextEventId }
            // }
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