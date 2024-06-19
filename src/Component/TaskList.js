import React, { useState } from 'react'
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import MyVerticallyCenteredModal from './UpdateTask';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedTask, removeTaskFromList } from '../Slices/tasksSlice';

function TaskList() {
    const {tasksList} = useSelector((state) => state.tasks)
    const [modalShow,setModalShow] = useState(false)
    const dispatch = useDispatch()
    const updateTask = (task) => {
        console.log('updateTask');
        setModalShow(true)
        dispatch(setSelectedTask(task))
    }

    const deleteTask = (task) =>{
        console.log('deleteTask');
        dispatch(removeTaskFromList(task))
    }
        
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr className="text-center">
            <th>S.NO</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>MobileNumber</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {
          tasksList && tasksList.map((task,index)=> {
             return(
              <tr className="text-center" key={task.id} >
                <td>{index + 1}</td>
                <td>{task.name}</td>
                <td>{task.email}</td>
                <td>{task.age}</td>
                <td>{task.mobilenumber}</td>
                <td>
                  <Button
                    variant="primary"
                    className="mx-3">
                   
                  
                    <i className="bi bi-pencil-square" onClick={() => updateTask(task)}></i>
                  </Button>
                  <Button variant="primary">
                    <i className="bi bi-trash3" onClick={() => deleteTask(task)} ></i>
                  </Button>
                </td>
              </tr>

             )

          }) 
        }
                 
                
              
                  
        </tbody>
      </Table>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />          
      
    </>
  )
}
  


export default TaskList