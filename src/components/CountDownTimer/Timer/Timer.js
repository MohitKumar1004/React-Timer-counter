import React, { useState, useEffect, Fragment } from "react";
import CountDownBox from "../CountDownBox/CountDownBox";
import Background from "../../../assets/Timer-background.jpg"
import './Timer.css';
let interval;
const Timer = (props) => {
    const [date,setDate]=useState("November 5 2023 12:44 GMT+2")
    const [completed, setCompleted] = useState(false);
    function reset(e){
        setCompleted(false)
        setDate(convert(e))
        document.getElementById("message").innerText=""
    }
    function convert(userInput) {
        const date = new Date(userInput);
        const months = [
          "January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"
        ];
        const month = months[date.getMonth()];
        const day = date.getDate();
        const year = date.getFullYear();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        let timezoneOffset = date.getTimezoneOffset();
        let timezoneSign = timezoneOffset > 0 ? "-" : "+";
        timezoneOffset = Math.abs(timezoneOffset);
        const timezoneHours = Math.floor(timezoneOffset / 60);
        const formattedDate = `${month} ${day} ${year} ${hours<10?`0${hours}`:hours}:${minutes} GMT${timezoneSign}${timezoneHours}`;
        return formattedDate;
      }
  const daysInYear = (year) => {
    return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0) ? 366 : 365;
  };
  let now = new Date();
  let selectedDate = new Date(date);
  let millisecondsLeft = selectedDate.getTime() - now.getTime();
  let dLeft = Math.floor(millisecondsLeft / (1000 * 60 * 60 * 24));
  let daysInSelectedYear = daysInYear(selectedDate.getFullYear());
  let yearsLeft = Math.floor(dLeft / daysInSelectedYear);
  let daysLeft = dLeft <= 0 ? 0 : dLeft - yearsLeft * daysInSelectedYear;
  let hoursLeft = Math.floor((millisecondsLeft / (1000 * 60 * 60)) % 24);
  let minutesLeft = Math.floor((millisecondsLeft / (1000 * 60)) % 60);
  let secondsLeft = Math.floor((millisecondsLeft / 1000) % 60);
  let yearsLeftOutput = yearsLeft < 10 ? "0" + yearsLeft : yearsLeft;
  let daysLeftOutput = daysLeft < 10 ? "0" + daysLeft : daysLeft;
  let hoursLeftOutput = hoursLeft < 10 ? "0" + hoursLeft : hoursLeft;
  let minutesLeftOutput = minutesLeft < 10 ? "0" + minutesLeft : minutesLeft;
  let secondsLeftOutput = secondsLeft < 10 ? "0" + secondsLeft : secondsLeft;
  const [timeLeft, setTimeLeft] = useState({
    years: yearsLeft > 0 ? yearsLeftOutput : "00",
    days: daysLeft > 0 ? daysLeftOutput : "00",
    hours: hoursLeft > 0 ? hoursLeftOutput : "00",
    minutes: minutesLeft > 0 ? minutesLeftOutput : "00",
    seconds: secondsLeft > 0 ? secondsLeftOutput : "00",
  });
  useEffect(() => {
    if (completed) {
        document.getElementById("message").innerText="Time is Up"
      clearInterval(interval)
    }
  }, [completed]);
  useEffect(() => {
    if (!completed) {
      interval = setInterval(() => {
        if (millisecondsLeft > 0) {
          now = new Date();
          selectedDate = new Date(date);
          millisecondsLeft = selectedDate.getTime() - now.getTime();
          dLeft = Math.floor(millisecondsLeft / (1000 * 60 * 60 * 24));
          daysInSelectedYear = daysInYear(selectedDate.getFullYear());
          yearsLeft = Math.floor(dLeft / daysInSelectedYear);
          daysLeft = dLeft <= 0 ? 0 : dLeft - yearsLeft * daysInSelectedYear;
          hoursLeft = Math.floor((millisecondsLeft / (1000 * 60 * 60)) % 24);
          minutesLeft = Math.floor((millisecondsLeft / (1000 * 60)) % 60);
          secondsLeft = Math.floor((millisecondsLeft / 1000) % 60);
          yearsLeftOutput = yearsLeft < 10 ? "0" + yearsLeft : yearsLeft;
          daysLeftOutput = daysLeft < 10 ? "0" + daysLeft : daysLeft;
          hoursLeftOutput = hoursLeft < 10 ? "0" + hoursLeft : hoursLeft;
          minutesLeftOutput =
            minutesLeft < 10 ? "0" + minutesLeft : minutesLeft;
          secondsLeftOutput =
            secondsLeft < 10 ? "0" + secondsLeft : secondsLeft;
          setTimeLeft({
            years: yearsLeftOutput,
            days: daysLeftOutput,
            hours: hoursLeftOutput,
            minutes: minutesLeftOutput,
            seconds: secondsLeftOutput,
          });
        } else {
          setTimeLeft({
            years: "00",
            days: "00",
            hours: "00",
            minutes: "00",
            seconds: "00",
          });
          setCompleted(true);
        }
      }, 10);
    }
    return () => {
      clearInterval(interval);
    };
  }, [
    selectedDate,
    now,
    completed,
    yearsLeft,
    daysLeft,
    hoursLeft,
    minutesLeft,
    secondsLeft,
    millisecondsLeft,
    yearsLeftOutput,
    daysLeftOutput,
    hoursLeftOutput,
    minutesLeftOutput,
    secondsLeftOutput,
  ]);
  
  return (
    <div className="wrapper d-flex flex-column text-center vw-100" style={{backgroundImage:`url(${Background})`}}>
        <h1>
          Time until: <span>{props.date}</span>
        </h1>
        <div className="countdown">
          <CountDownBox darkcolor="darkGreen" color="lightGreen"
            left={timeLeft.years}
            divideBy={
              Math.floor(timeLeft.years) / 100 === 0
                ? 100
                : Math.floor(timeLeft.years / 100 + 100)
            }
            label="years"
          />
          <CountDownBox darkcolor="darkGreen" color="lightGreen"
            left={timeLeft.days}
            divideBy={daysInSelectedYear}
            label="days"
          />
          <CountDownBox darkcolor="darkGreen" color="lightGreen" left={timeLeft.hours} divideBy={24} label="hours" />
          <CountDownBox darkcolor="darkGreen" color="lightGreen" left={timeLeft.minutes} divideBy={60} label="minutes" />
          <CountDownBox darkcolor="darkGreen" color="lightGreen" left={timeLeft.seconds} divideBy={60} label="seconds" />
        </div>
        <h1 className="text-danger" id="message"></h1>
        <input className="text-center" type="date" onChange={(e)=>reset(e.target.value)} />
    </div>
  );
};
export default Timer;
