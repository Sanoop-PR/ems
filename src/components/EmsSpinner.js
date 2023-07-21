import React from 'react'
import Spinner from 'react-bootstrap/Spinner';


function EmsSpinner() {
  return (
    <div className='text-center mt-3'>
        <div className='d-flex justify-content-center align-items-center'>
            <Spinner animation="grow" />
            <span>Loading...</span>
        </div>
    </div>
  )
}

export default EmsSpinner