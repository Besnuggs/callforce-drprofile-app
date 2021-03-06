import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from 'react-time-picker';

const ModalPopup = (props) => {
  const {show, toggleModal, events, clinicInfo, nextId, postDemoDb} = props;
  const [form, setForm] = useState({column: 'doctor', date: new Date()});
  const [startTime, setStartTime] = useState('06:00');
  const [endTime, setEndTime] = useState('07:00');

  function submitForm(){
    //Edge Cases: StartTime is ahead of EndTime, or if the submitted time interferes with an existing time slot, or if no time is specified for either start or end time.
    if(!formTimesExist()){
      return alert('Warning: Invalid Time Slot. Ensure start and end times exist.')
    } else if(!formTimesValidator()){
      return alert('Warning: Invalid Time Slot. Start time is later than end time.');
    } 

    const startDateTime = timeToDateFormatter(startTime),
      endDateTime = timeToDateFormatter(endTime);

    if (overlappingTimes(startDateTime, endDateTime)){
      return alert('Warning: Time Slots overlap existing time slots.')
    }

    const event={
      title: 'Available',
      start: startDateTime,
      end: endDateTime,
      resourceId: form.column,
      id: nextId,
      backgroundColor: getColorByResourceId(form.column)
    }
    postDemoDb(event)
    handleToggle();
  }

  function getColorByResourceId(resourceId){
    if(resourceId === "hygienist"){
      return "#AEF1B4"
    } else if (resourceId === "doctor"){
      return "#76c1d4"
    } else if (resourceId === "assistant") {
      return "#f7f7f7"
    }
  }

  function formTimesExist(time){
    if(!startTime || !endTime) return false;
    return true;
  }

  function formTimesValidator(){
    if(startTime > endTime) {
      return false;
    } else {
      return true;
    };
  }

  function handleToggle(){
    toggleModal()
    setForm({column: 'doctor', date: new Date()})
    setStartTime('06:00')
    setEndTime('07:00')
  }

  function overlappingTimes(startDateTime, endDateTime){
    let eventsOfChosenColumn;

    if( events ){
      eventsOfChosenColumn = events.filter(event => event.resourceId === form.column);
    } else {
      return false;
    }
    for(let i = 0; i < eventsOfChosenColumn.length; i++){
        const eventStartTime = eventsOfChosenColumn[i].start,
          eventStopTime = eventsOfChosenColumn[i].end;

        if(startDateTime >= eventStartTime && startDateTime <= eventStopTime){
          return true;
        } else if (endDateTime >= eventStartTime && endDateTime <= eventStopTime){
          return true;
        } else if (startDateTime <= eventStartTime && endDateTime >= eventStartTime){
          return true;
        }
    }
    return false;
  }

  function timeToDateFormatter(time){
    const timeArray = time.match(/[0-9]{2}/g),
      hours = timeArray[0],
      minutes = timeArray[1];
    return new Date(new Date(form.date).setHours(hours, minutes, 0, 0)).toISOString();
  }

  function handleStartTime(e){
    setStartTime(e);
  }

  function handleEndTime(e){
    setEndTime(e);
  }

  function handleChange(e){
    if(!e){
      return setForm({...form, date: new Date()})
    }
    if(e instanceof Date){
      setForm({...form, date: e});
    } else {
      setForm({...form, column: e.target.value});
    }
  }

    return (
        <Modal
          show={show}
          onHide={handleToggle}
          animation={true}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
        <Modal.Header>
          <Modal.Title>Save Availability: {clinicInfo.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group as={Col} controlId="formGridColumn">
              <Form.Label>Column:</Form.Label>
              <Form.Control 
                as="select" 
                value={form.column}
                onChange={handleChange}
              >
                <option key="1" value="doctor">Doctor</option>
                <option key="2" value="assistant">Assistant</option>
                <option key="3" value="hygienist">Hygienist</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridDate">
              <Form.Label>Date:</Form.Label>
              <DatePicker
                customInput={
                  <input
                    style={{width: '436px', position: 'relative', left: 0, borderRadius: '4px', border: '1px solid #bab9b2'}}
                    type="input"
                  />
                }
                selected={form.date}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridStartTime">
              <Form.Label>Start:</Form.Label>
              <div>
                <TimePicker
                  name='startTime'
                  onChange={handleStartTime}
                  value={startTime}
                  disableClock={true}
                  className="time-picker"
                />
              </div>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEndTime">
              <Form.Label>End:</Form.Label>
              <div>
                <TimePicker
                  name='endTime'
                  onChange={handleEndTime}
                  value={endTime}
                  disableClock={true}
                />
              </div>
            </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleToggle}>
            Close
          </Button>
          <Button variant="primary" onClick={submitForm}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    )
}

export default ModalPopup;