import React from 'react'
import './CountDownBox.css'
const CountDownBox = (props) => {
  return (
    <div className="countdown box">
        <div className="countdown box circles">
            <svg height="130" width="130">
                <circle stroke={props.darkcolor} strokeWidth="19" fill="none" r="47" cx="70" cy="65"/>
                <circle stroke={props.color} fill="none" strokeDashoffset={ (-((props.left/props.divideBy)*47*2*Math.PI)+47*2*Math.PI) } strokeDasharray={47*2*Math.PI} strokeWidth="7" r="47" cx="70" cy="65"/>
            </svg>
            <div className="countdown box left">{props.left}</div>
        </div>
        <h2 className="countdown box label">{props.label}</h2>
    </div>
  )
}
export default CountDownBox
