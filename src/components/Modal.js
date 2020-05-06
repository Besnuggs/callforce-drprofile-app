import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';


const ModalPopup = (props) => {
  const {show, toggleModal} = props;
  const [form, setForm] = useState({column: '', date: '', startTime: '', endTime: ''})

  
  function submitForm(){

    console.log('saving form data')
    toggleModal()
  }

    return (
        <Modal
        show={show}
        animation={true}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header>
          <Modal.Title>Save Availability</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group as={Col} controlId="formGridColumn">
              <Form.Label>Column:</Form.Label>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridDate">
              <Form.Label>Date:</Form.Label>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridStartTime">
              <Form.Label>Start:</Form.Label>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEndTime">
              <Form.Label>End:</Form.Label>
            </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleModal}>
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