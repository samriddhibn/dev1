import React, { useState } from 'react';

function TaskManager() {
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [checkInTimeStamp, setCheckInTimeStamp] = useState('');
  const [checkOutTimeStamp, setCheckOutTimeStamp] = useState('');
  const [task, setTask] = useState('');
  const [calendar, setCalendar] = useState([]);
  const [currentDate, setCurrentDate] = useState('');

  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  // Function to display the current date
  function displayCurrentDate() {
    const currentDate = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    setCurrentDate(currentDate.toLocaleDateString("en-US", options));
  }

  // Function to display the weekly calendar
  function displayWeeklyCalendar() {
    const today = new Date();
    let calendarHTML = [];
    for (let i = 0; i < 6; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      const dayOfWeek = daysOfWeek[date.getDay()];
      const dayOfMonth = date.getDate();
      let dayClass = "day";
      if (i === 0) {
        dayClass += " today";
      }
      calendarHTML.push(<div key={i} className={dayClass}>{dayOfWeek}<br />{dayOfMonth}</div>);
    }
    setCalendar(calendarHTML);
  }

  function addTask() {
    if (task.trim() !== "") {
      const taskList = <div className="task-list"><p>{task}</p></div>;
      setCalendar(prevCalendar => [...prevCalendar, taskList]);
      setTask('');
    }
  }

  function logCheckInTime() {
    setCheckInTimeStamp("Checked in at: " + new Date().toLocaleString());
  }

  function logCheckOutTime() {
    setCheckOutTimeStamp("Checked out at: " + new Date().toLocaleString());
  }

  function updateStatus() {
    if (isCheckedIn) {
      return (
        <div>
          <p>You are checked in.</p>
          <button onClick={() => { setIsCheckedIn(false); logCheckOutTime(); }}>Check out</button>
        </div>
      );
    } else {
      return (
        <div>
          <p>You are checked out.</p>
          <button onClick={() => { setIsCheckedIn(true); logCheckInTime(); }}>Check in</button>
        </div>
      );
    }
  }

  return (
    <div className="container">
      <div className="calendar">
        <h2>Weekly Calendar</h2>
        <div id="calendar">{calendar}</div>
      </div>
      <div className="task-bar">
        <h2>Task for Today</h2>
        <div className="add-task">
          <textarea id="task-input" placeholder="Add a task..." value={task} onChange={(e) => setTask(e.target.value)}></textarea>
          <div id="current-date">{currentDate}</div>
        </div>
      </div>
      <div id="status">{updateStatus()}</div>
      <div id="checkInTime">{checkInTimeStamp}</div>
      <div id="checkOutTime">{checkOutTimeStamp}</div>
      <button id="checkInBtn" onClick={() => { setIsCheckedIn(true); logCheckInTime(); }}>Check-In</button>
      <button id="checkOutBtn" onClick={() => { setIsCheckedIn(false); logCheckOutTime(); }}>Check-Out</button>
      <button id="submitButton" onClick={addTask}>SUBMIT</button>
    </div>
  );
}

export default TaskManager;
