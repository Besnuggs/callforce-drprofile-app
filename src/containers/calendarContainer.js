import { connect } from 'react-redux';
import Calendar from '../views/Calendar';
import {getDemoDb} from '../actions/calendarActions'

const mapStateToProps = state => {
    return {
        dentistEvents: state,
        assistantEvents: state,
        hygientistsEvents: state
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getDemoDb: () => {dispatch()}
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Calendar)