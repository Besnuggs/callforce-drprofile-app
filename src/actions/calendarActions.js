import axios from 'axios';
export const GET_DEMO_DB = 'GET_DEMO_DB';
export const GET_DEMO_DB_STARTED = 'GET_DEMO_DB_STARTED';
export const GET_DEMO_DB_SUCCESS = 'GET_DEMO_DB_SUCCESS';
export const GET_DEMO_DB_FAILURE = 'GET_DEMO_DB_FAILURE';

export const PUT_DEMO_DB = 'PUT_DEMO_DB';
export const PUT_DEMO_DB_STARTED = 'PUT_DEMO_DB_STARTED';
export const PUT_DEMO_DB_SUCCESS = 'PUT_DEMO_DB_SUCCESS';
export const PUT_DEMO_DB_FAILURE = 'PUT_DEMO_DB_FAILURE';

export const POST_DEMO_DB = 'POST_DEMO_DB';
export const POST_DEMO_DB_STARTED = 'POST_DEMO_DB_STARTED';
export const POST_DEMO_DB_SUCCESS = 'POST_DEMO_DB_SUCCESS';
export const POST_DEMO_DB_FAILURE = 'POST_DEMO_DB_FAILURE';

export const DELETE_DEMO_DB = 'DELETE_DEMO_DB';
export const DELETE_DEMO_DB_STARTED = 'DELETE_DEMO_DB_STARTED';
export const DELETE_DEMO_DB_SUCCESS = 'DELETE_DEMO_DB_SUCCESS';
export const DELETE_DEMO_DB_FAILURE = 'DELETE_DEMO_DB_FAILURE';

export function getDemoDB () {
    console.log('Get DB TIE!')
    return (dispatch, getState) => {
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

export function putDEMODB () {
    return {

    }
};

export function postDEMODB () {
    return {

    }
};

export function deleteDEMODB () {
    return {

    }
};

