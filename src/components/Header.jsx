import React from 'react'
import Testpng from "../assets/Testpng"

const Header = () => {
  return (
    <div>
      <div className="d-flex justify-content-evenly align-items-center">
        <Testpng />
        <h1 className='display-5'>TASK TRACKER</h1>
      </div>
    </div>
  )
}
export default Header
