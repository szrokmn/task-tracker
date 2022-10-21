import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from "react";
import axios from 'axios';

const AddTaskForm = ({b}) => {

const [formTask, setFormTask] = useState("")
const [date, setDate] = useState("")

const handleSubmit = (e) => {
  e.preventDefault();
  const newTask = {formTask, date}
  console.log(newTask, "aaaaa")  
}

const addNewTask = async(newTask)=>{
  const url = "https://63524782a9f3f34c373920ec.mockapi.io/api/tasks";  //post yapacağımız için
  try {
    await axios.post(url, newTask)
  } catch (error) {
    
  }
  getTask()
}

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Task</Form.Label>
          <Form.Control type="text" placeholder="Enter task" onChange={(e) => setFormTask(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" onChange={(e) => setDate(e.target.value)}/>
        </Form.Group>
        <div className="text-center">
          <Button variant="primary w-50" type="submit">
            SAVE
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default AddTaskForm
