import React from "react";
import './Digit.css';
const Digit = (props) => {
  let digits=String(props.value<10?`0${props.value}`:props.value)
  let firstDigit=digits[0]
  let secondDigit=digits[1]
  return (
    <div className='digit mx-3 text-center justify-content-center align-items-center lh-1' style={{backgroundImage:`linear-gradient(${props.color},grey,black,grey,${props.color})`,filter:`drop-shadow(10px 10px 10px ${props.color})`}}>
      <h1 className='display-2 py-3 d-flex grid justify-content-center align-items-center m-0' style={{color:props.color}}>
        <div className='p-2 m-0 p-0 position-static'>{firstDigit}</div><div className='p-2 m-0 p-0 position-static'>{secondDigit}</div>
      </h1>
    </div>
  );
};

export default Digit;
