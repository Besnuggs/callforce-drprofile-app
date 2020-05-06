import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';


const ModalPopup = (props) => {
  const {show, toggleModal} = props;
  const [form, setForm] = useState({column: '', date: '', startTime: '', endTime: ''})

  console.log(show, toggleModal)

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
            <Form.Group controlId="formBasic">
              <Col>
              <Form.Label>Select column:</Form.Label>

              <Form.Label>Select date:</Form.Label>
                
              <Form.Label>Select start time:</Form.Label>
              
              <Form.Label>Select end time:</Form.Label>
              </Col>
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