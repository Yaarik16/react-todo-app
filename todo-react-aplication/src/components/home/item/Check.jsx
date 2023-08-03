import React from "react";
import './../home.css'
import {BsCheck} from 'react-icons/bs'
import cn from 'classnames'

const Check = ({isComplited}) => {
    return (
    //    <div className={`border ${isComplited ? 'back' : '' } `}>
        <div className={cn('border', {
            'back':isComplited,
        }
        )}>
        {isComplited &&
        <BsCheck className='check'/>
        }
        </div>
    )
}
  
export default Check;