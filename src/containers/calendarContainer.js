import { connect } from 'react-redux';
import Calendar from '../views/Calendar';
import { getDemoDB } from '../actions/calendarActions'

const mapStateToProps = state => {
    console.log(state)
    return {
        events: state.calendar.events,
        clinic: state.calendar.clinicInfo
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getDemoDb: () => { dispatch(getDemoDB()) }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Calendar)