import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux'
import FullCalendar from '@fullcalendar/react';
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';
import ModalPopup from '../components/Modal';
import '../stylings/calendar.css';

const Calendar = (props) => {
    console.log(props)
    const {getDemoDb} = props
    useEffect(() => {
        getDemoDb()
    }, [])

    //Modal
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
            
            events={[
            { title: 'Available', date: '2020-05-06', startTime: '11:00:00', endTime: '11:30:00', resourceId: 'doctor' },
            { title: 'event 2', date: '2020-05-05', time: '12pm' }
            ]}
            resources={[{id: 'doctor', title: 'Doctor'}, {id: 'assistant', title: 'Assistant'}, {id: 'hygienist', title: 'Hygienist'}]}
            datesAboveResources={true}
            schedulerLicenseKey={'GPL-My-Project-Is-Open-Source'}
        />

        </>
    )
}



export default connect() (Calendar)
