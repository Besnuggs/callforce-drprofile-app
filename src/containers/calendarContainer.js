import { connect } from 'react-redux';
import Calendar from '../views/Calendar';
import {getDemoDb} from '../actions/calendarActions'

const mapStateToProps = state => {
    console.log(state)
    return {
        dentistEvents: state.calendar.dentists,
        assistantEvents: state.calendar.assistants,
        hygientistsEvents: state.calendar.hygientists
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getDemoDb: () => {dispatch()}
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Calendar)