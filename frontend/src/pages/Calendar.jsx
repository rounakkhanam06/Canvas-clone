import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import "../css/CalendarPage.css";

import tasks from "../data/tasks.json";
import comingUp from "../data/comingUpTask.json";

export default function CalendarPage() {
  const [date, setDate] = useState(new Date());

  const allEvents = [
    ...tasks.map((t) => ({ title: t.text, date: new Date(t.due) })),
    ...comingUp.map((c) => ({ title: c.title, date: new Date(c.date) }))
  ];

  const dayEvents = allEvents.filter(
    (event) => event.date.toDateString() === date.toDateString()
  );

  const tileContent = ({ date }) => {
    const hasEvent = allEvents.some(
      (event) => event.date.toDateString() === date.toDateString()
    );
    return hasEvent ? <span className="dot"></span> : null;
  };

  return (
    <div className="calendar-page">
      <div className="calendar-header">
        <h2>Calendar</h2>
        <p>{date.toDateString()}</p>
      </div>

      <div className="calendar-main">
      
        <div className="calendar-wrapper">
          <Calendar
            onChange={setDate}
            value={date}
            tileContent={tileContent}
          />
        </div>

        {/* Events List */}
        <div className="event-section">
          <h3>Events on {date.toDateString()}</h3>
          {dayEvents.length > 0 ? (
            <ul className="event-list">
              {dayEvents.map((event, index) => (
                <li key={index}>{event.title}</li>
              ))}
            </ul>
          ) : (
            <p className="no-events">No events today</p>
          )}
        </div>
      </div>
    </div>
  );
}

