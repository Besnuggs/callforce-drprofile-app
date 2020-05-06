import React, {useState, useEffect} from 'react';
import FullCalendar from '@fullcalendar/react';
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';
import Modal from '../components/Modal';
import '../stylings/calendar.css';

const Calendar = () => {

    function activateModal() {
        alert('hitting function.')
    }

    return(
        <FullCalendar 
            defaultView="resourceTimeGrid"
            plugins={[resourceTimeGridPlugin]}
            customButtons={{
                    addAvailability: {
                        text: 'Add Availability',
                        click: function() {
                            activateModal();
                        },
                    },
            }}
            header={{
                left: 'title',
                center: '',
                right: 'addAvailability today prev,next'
            }}
            
            // events={[
            // { title: 'event 1', date: '2020-05-05', time: '2am' },
            // { title: 'event 2', date: '2020-05-05', time: '12pm' }
            // ]}
            resources={[{id: 'a', title: 'Doctor'}, {id: 'b', title: 'Assistant'}, {id: 'c', title: 'Hygienist'}]}
            datesAboveResources={true}
            schedulerLicenseKey={'GPL-My-Project-Is-Open-Source'}
        />
    )
}

export default Calendar