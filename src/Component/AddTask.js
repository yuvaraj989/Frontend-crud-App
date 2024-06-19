import React, { useState } from 'react'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { addTaskToList } from '../Slices/tasksSlice';
import { useDispatch } from 'react-redux';



const Addtask = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')
    const [mobilenumber, setMobileNumber] = useState('')

    const addtask = (e) =>{
        e.preventDefault();
        dispatch (addTaskToList({name, email, age, mobilenumber})) 
        setName('')
        setEmail('')
        setAge('')
        setMobileNumber('') 
        
    }
  return (
    
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" value={name} placeholder="Enter Student Name " onChange={(e => setName(e.target.value))}
      />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Email    </Form.Label>
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
    <div className="text-end">
      <Button variant="primary" type="submit" onClick={(e) => addtask(e)}>
        Add Task
      </Button>
    
    </div>
  </Form>
  )
}

export default Addtask