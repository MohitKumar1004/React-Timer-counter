import React from 'react'
import Digit from './Digit/Digit'

const CountDown = (props) => {
  return (
    <div className='d-flex justify-content-center flex-sm-row align-items-center flex-column'>
      <Digit color='palegreen' value={props.time.minutes}/>
      <Digit color='skyblue' value={props.time.seconds}/>
      <Digit color='salmon' value={props.time.milliseconds}/>
    </div>
  )
}
export default CountDown
