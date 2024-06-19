import React,{useEffect, useState} from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form  from 'react-bootstrap/Form';
import { useDispatch, useSelector } from "react-redux";
import { updateTaskInList } from "../Slices/tasksSlice";

const MyVerticallyCenteredModal = (props) => {
    const { selectedTask } = useSelector((state) => state.tasks);

    const [name, setName ] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')
    const [mobilenumber, setMobileNumber] = useState('')
    const [id, setId] = useState(0)
    const dispatch = useDispatch()
    const updateTask = () => {
        props.onHide();
        dispatch(updateTaskInList({name, email, age, mobilenumber, id}))
    };
    useEffect(() => {
        if (Object.keys(selectedTask).length !== 0) {
        setName(selectedTask.name);
        setEmail(selectedTask.email);
        setAge(selectedTask.age);
        setMobileNumber(selectedTask.mobilenumber);
        setId(selectedTask.id);
    }
}, [selectedTask]);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Update Task
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" value={name} placeholder="Enter Student Name " onChange={(e => setName(e.target.value))}
      />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" value={email} placeholder="Enter Student Email" onChange={(e) => setEmail(e.target.value)}
      />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Age</Form.Label>
      <Form.Control type="number" value={age} placeholder="Enter Student Age" onChange={(e) => setAge(e.target.value)}
      />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>MobileNumber</Form.Label>
      <Form.Control type="number" value={mobilenumber} placeholder="Enter Student mobileNumber" onChange={(e) => setMobileNumber(e.target.value)}
      />
    </Form.Group>
    
  </Form>
      </Modal.Body>
      <Modal.Footer>
        <div className="text-end">
            <Button variant="primary" type="submit" onClick={(e) => updateTask(e)}>
              Update Task
            </Button>
          </div>
      </Modal.Footer>
    </Modal>
  );
};

export default MyVerticallyCenteredModal;