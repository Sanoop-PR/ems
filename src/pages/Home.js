import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import HomeTable from '../components/HomeTable'
import EmsSpinner from '../components/EmsSpinner'


function Home() {

  const navigate = useNavigate()
  const [showSpin,setShowSpin] = useState(true)

  const addUser =() =>{
    navigate('/register')
  }

  useEffect(() => {
    setTimeout(() => {
      setShowSpin(false)
    }, 2000);
  }, [])
  

  return (
    <div className="container mt-3">
      <div className="main-div">
        <div className="search-add d-flex justify-content-between">
          <div className="search col-md-6">
            <Form className="d-flex">
              <Form.Control className='me-3 border border-primary' type="email" placeholder="Enter email" />
              <Button className='btn btn-primary'>
                <i class="fa-solid fa-magnifying-glass"></i>
              </Button>
            </Form>
          </div>
          <div className="add-btn">
            <Button onClick={addUser} className='btn btn-success'>
              <i class="fa-solid fa-user-plus"></i>
            </Button>
          </div>
        </div>
        <div className="table-div">
          {
            showSpin?
            <EmsSpinner/>
            :
            <HomeTable/>
          }
        </div>
      </div>
    </div>
  )
}

export default Home