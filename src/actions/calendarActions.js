import axios from 'axios';
export const GET_DEMO_DB_STARTED = 'GET_DEMO_DB_STARTED';
export const GET_DEMO_DB_SUCCESS = 'GET_DEMO_DB_SUCCESS';
export const GET_DEMO_DB_FAILURE = 'GET_DEMO_DB_FAILURE';

export const POST_DEMO_DB_STARTED = 'POST_DEMO_DB_STARTED';
export const POST_DEMO_DB_SUCCESS = 'POST_DEMO_DB_SUCCESS';
export const POST_DEMO_DB_FAILURE = 'POST_DEMO_DB_FAILURE';

export function getDemoDB () {
    return (dispatch) => {
        dispatch(getDemoDBStart());
        return axios.get('/api/getDb/').then((res) => {
            const {data} = res;
            dispatch(getDemoDBSuccess(data))
        }).catch((err) => {
            dispatch(getDemoDBFailure(err))
        })
    }

};

const getDemoDBStart = () => ({
    type: GET_DEMO_DB_STARTED
})

const getDemoDBSuccess = (db) => ({
    type: GET_DEMO_DB_SUCCESS,
    payload: db
})

const getDemoDBFailure = (error) => ({
    type: GET_DEMO_DB_FAILURE,
    payload: error
})

export function postDemoDB (event) {
    console.log(event)
    return (dispatch) => {
        dispatch(postDemoDBStarted());
        return axios({
            method: 'POST',
            url: '/api/postDb/',
            data: event,
            headers: {
                'content-type': 'application/json',
           },
        }).then((res) => {
            const { data } = res;
            dispatch(postDemoDBSuccess(data));
        }).catch((err) => {
            dispatch(postDemoDBFailure(err));
        })
    }
};

const postDemoDBStarted = () => ({
    type: POST_DEMO_DB_SUCCESS
})

const postDemoDBSuccess = (events) => ({
    type: POST_DEMO_DB_SUCCESS,
    payload: events
})

const postDemoDBFailure = (error) => ({
    type: POST_DEMO_DB_FAILURE,
    payload: error
})