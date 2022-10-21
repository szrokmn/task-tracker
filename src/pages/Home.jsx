import React from 'react'
import AddTaskForm from '../components/AddTaskForm'
import TaskList from "../components/TaskList"

const Home = () => {
  return (
    <>
      <TaskList/>
      <AddTaskForm/>
    </>
  )
}

export default Home

