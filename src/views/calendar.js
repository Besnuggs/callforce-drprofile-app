import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const Calendar = ( ) => {

    return {
        <FullCalendar defaultView="dayGridMonth" plugins={[ dayGridPlugin ]} />
    }
}

export default Calendar;