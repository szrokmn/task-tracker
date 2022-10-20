import AddTaskForm from './AddTaskForm'
import {useState} from "react";

const Header = ({tasks, setTasks}) => {

const [show, setShow] = useState(false);
const [btnStyle, setBtnStyle] = useState({
  name:"SHOW ADD TASK BAR",
  bgColor:"purple"
});

const handleShow = () => {
  if (show) {
    setBtnStyle({
      name: 'SHOW ADD TASK BAR',
      bgColor: 'purple',
    })
  }else {
    setBtnStyle({
      name: 'CLOSE ADD TASK BAR',
      bgColor: 'red',
  })
}
setShow(!show);
};
console.log(show);

  return (
    <header className='header'>
      <h1>TASK TRACKER</h1>
      <button className="btn" onClick={handleShow} style={{backgroundColor:btnStyle.bgColor}}> {btnStyle.name} </button>
      {show && <AddTaskForm tasks={tasks} setTasks={setTasks} />}
    </header>
  )
}

export default Header
