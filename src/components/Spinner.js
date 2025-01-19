import loading from './loading.gif'
import React from 'react'
export default function Spinner() {
  return (
    <div>
       <div className='text-center'>
        <img src={loading} alt="loading"></img>
      </div>   
    </div>
  )
}
