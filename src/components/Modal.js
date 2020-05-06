import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const ModalPopup = () => {

    function handleSave(){

    }

    function handleClose(){

    }

    return (
        <Modal.Dialog>
            <Modal.Body>
                <Form.Group>

                </Form.Group> 
            </Modal.Body>

            <Modal.Footer>
                <Button variant="primary">Save changes</Button>
            </Modal.Footer>
        </Modal.Dialog>
    )
}

export default ModalPopup;