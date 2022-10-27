import React ,{useContext} from 'react'
import './bootstrap-grid.css'
import './bootstrap-reboot.css'
import './bootstrap.css'
import './bootstrap-utilities.css'
import {FormDataContext} from "../App"
import { Link } from 'react-router-dom'


function Dashboard() {
  const {formData}=useContext(FormDataContext)

  return (
    <div>
      <Link to="/">Back</Link>
      {formData && 
      <>
      <h3>{`Welcome ${formData[0]?.firstName}`}</h3>
      <div>
        <div>FirstName
          <h4>{`${formData[0]?.firstName}`}</h4>
        </div>
        <div>LastName
        <h4>{`${formData[0]?.lastName}`}</h4>
        </div>
        <div>Email
        <h4>{`${formData[0]?.email}`}</h4>
        </div>
      </div>
      </>}
        
        
    </div>
  )
}

export default Dashboard