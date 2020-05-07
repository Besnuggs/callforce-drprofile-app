import React, {useState, useEffect} from 'react';
import FullCalendar from '@fullcalendar/react';
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';
import ModalPopup from '../components/Modal';
import '../stylings/calendar.css';

const Calendar = (props) => {
    console.log(props)
    const [show, setShow] = useState(true)

    function toggleModal(){
        if ( show ){
            setShow(false)
        } else {
            setShow(true)
        }
    }

    
    return(
        <>
        <ModalPopup 
            show={show}
            toggleModal={toggleModal}
        />
       
        <FullCalendar 
            defaultView="resourceTimeGrid"
            plugins={[resourceTimeGridPlugin]}
            customButtons={{
                    addAvailability: {
                        text: 'Add Availability',
                        click: function() {
                            toggleModal();
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

        </>
    )
}

export default Calendar
