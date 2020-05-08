import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux'
import FullCalendar from '@fullcalendar/react';
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';
import dayGridPlugin from '@fullcalendar/daygrid';
import ModalPopup from '../components/Modal';

const Calendar = (props) => {
    const {events, clinic, nextId, getDemoDb, postDemoDb} = props
    const calendarRef = React.createRef()
    useEffect(() => {
        getDemoDb()
    }, [])

    useEffect(() => {
        console.log(events, clinic)
    }, [clinic, events])

    //Modal
    const [show, setShow] = useState(false)

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
            events={events}
            clinicInfo={clinic}
            nextId={nextId}
            postDemoDb={postDemoDb}
        />
       
        <FullCalendar 
            defaultView="resourceTimeGrid"
            ref={calendarRef}
            plugins={[resourceTimeGridPlugin, dayGridPlugin]}
            allDaySlot={false}
            customButtons={{
                    addAvailability: {
                        text: 'Add Availability',
                        click: function() {
                            toggleModal();
                        },
                    },
                    changeToDayView: {
                        text: 'day',
                        click: function() {
                            let calendarApi = calendarRef.current.getApi();
                            calendarApi.changeView('resourceTimeGrid');
                        }
                    }
            }}
            scrollTime={"6:00:00"}
            header={{
                left: 'title',
                center: 'dayGridMonth changeToDayView',
                right: 'addAvailability today prev,next'
            }}
            events={events}
            resources={[{id: 'doctor', title: 'Doctor'}, {id: 'assistant', title: 'Assistant'}, {id: 'hygienist', title: 'Hygienist'}]}
            datesAboveResources={true}
            schedulerLicenseKey={'GPL-My-Project-Is-Open-Source'}
        />
        </>
    )
}


export default connect() (Calendar)
