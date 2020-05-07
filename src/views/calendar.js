import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux'
import FullCalendar from '@fullcalendar/react';
import Header from '../components/Header';
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';
import ModalPopup from '../components/Modal';
import '../stylings/calendar.css';

const Calendar = (props) => {
    const {events, clinic, nextId, getDemoDb, postDemoDb} = props
    useEffect(() => {
        getDemoDb()
    }, [])

    useEffect(() => {
        console.log(events, clinic)
    }, [clinic, events])

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
            events={events}
            clinicInfo={clinic}
            nextId={nextId}
            postDemoDb={postDemoDb}
        />

        <Header 
            clinicInfo={clinic}
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
            scrollTime={"6:00:00"}
            header={{
                left: 'title',
                center: '',
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
