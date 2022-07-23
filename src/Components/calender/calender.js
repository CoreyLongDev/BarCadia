import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import './calender.css'

export default class DemoApp extends React.Component {
  render() {
    return (
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        weekends={true}
        events={[
          { title: "Presentation Day", date: "2022-07-23" },
          { title: "MVC Tournament", date: "2022-07-12" },
          { title: "$2 Drafts", date: "2022-07-15"},
          { title: "First Friday All-Nighter", date: "2022-07-01"}
        ]}
      />
    );
  }
}
