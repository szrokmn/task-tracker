import React, {useState, useEffect} from 'react'
import AddTaskForm from '../components/AddTaskForm'
import TaskList from "../components/TaskList"
import Button from "react-bootstrap/Button"
import axios from 'axios'

const Home = () => {

  const [isOpen, setIsOpen] = useState(false)
  const [text, setText] = useState("Show Task Bar") 
  const [task, setTask] = useState([]);
  const url = "https://63524782a9f3f34c373920ec.mockapi.io/api/tasks";

  const toggle = (e) => {
    setIsOpen(!isOpen);
    const buttonText = isOpen ? "Show Task Bar"  : "Hide Task Bar"   
    setText(buttonText);       
  }

  const getTask = async() => {
    const {data} = await axios(url)
    setTask(data)
    console.log(data)
  }

  useEffect(() => {
    getTask()
  }, []);
  

  return (
    <>
      <Button variant="danger" size="lg" onClick={(e) => {toggle()}}>{text}</Button> 
      {isOpen && <AddTaskForm/>}
      <TaskList/>
      
    </>
  )
}

export default Home

