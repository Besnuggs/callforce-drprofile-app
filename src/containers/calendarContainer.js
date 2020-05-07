import { connect } from 'react-redux';
import Calendar from '../views/Calendar';
import { getDemoDB, postDemoDB } from '../actions/calendarActions'

const mapStateToProps = state => {
    return {
        events: state.calendar.events,
        clinic: state.calendar.clinicInfo,
        nextId: state.calendar.nextEventId
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getDemoDb: () => { dispatch(getDemoDB()) },
        postDemoDb: (event) => { dispatch(postDemoDB(event))}
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Calendar)