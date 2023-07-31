import React from "react";
import './../home.css'
import {BsCheck} from 'react-icons/bs'

const Check = ({isComplited}) => {
    return (
       <div className='border'>
        {isComplited &&
        <BsCheck className='check'/>
        }
        </div>
    )
}
  
export default Check;