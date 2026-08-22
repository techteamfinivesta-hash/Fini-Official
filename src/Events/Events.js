import React, { useState, useEffect } from "react";
import "./Events.css";
import events from "./EventsList"; 
import FinWeekBanner from './FinWeek25/FINWEEK.png';
import Aos from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet-async";

const Events = () => {

  const [showFinWeekEvents, setShowFinWeekEvents] = useState(false);

  const toggleFinWeekEvents = () => {
    setShowFinWeekEvents(!showFinWeekEvents);
  };

  const finWeekEvents = events.filter(event => event.name.startsWith("FinWeek - Day"));
  
  const renderAfterFinWeekEvents = () => {
    const firstFinWeekIndex = events.findIndex(event => event.name.startsWith("FinWeek - Day") && event.year === 2025);
    return events.filter((event, index) => event.year === 2025 && !event.name.startsWith("FinWeek - Day") && index < firstFinWeekIndex + 1).map((event, index) => (
      <div key={index} className="event-flex1">
        <div className="event-element">
          <div className="event-background-box" style={{ backgroundColor: event.backgroundColor }}></div>
          <div className={`event-image-box event-element${index % 5 + 1}`}>
            <a href={event.link} target="_blank" rel="noreferrer">
              <img src={event.photo} alt={event.name} />
            </a>
          </div>
        </div>
        <h2 className="event-title">{event.name}</h2>
      </div>
    ));
  };

  const renderBeforeFinWeekEvents = () => {
    const lastFinWeekIndex = events.findIndex(event => event.name.startsWith("FinWeek - Day") && event.year === 2025) + finWeekEvents.length - 1;
    return events.filter((event, index) => event.year === 2025 && !event.name.startsWith("FinWeek - Day") && index > lastFinWeekIndex).map((event, index) => (
      <div key={index} className="event-flex1">
        <div className="event-element">
          <div className="event-background-box" style={{ backgroundColor: event.backgroundColor }}></div>
          <div className={`event-image-box event-element${index % 5 + 1}`}>
            <a href={event.link} target="_blank" rel="noreferrer">
              <img src={event.photo} alt={event.name} />
            </a>
          </div>
        </div>
        <h2 className="event-title">{event.name}</h2>
      </div>
    ));
  };

  const renderEventsByYear = (year) => {
    return events
      .filter(event => event.year === year && !event.name.startsWith("FinWeek - Day"))
      .map((event, index) => (
        <div key={index} className="event-flex1">
          <div className="event-element">
            <div className="event-background-box" style={{ backgroundColor: event.backgroundColor }} ></div>
            <div className={`event-image-box event-element${index % 5 + 1}`}>
              <a href={event.link} target="_blank" rel="noreferrer">
                <img src={event.photo} alt={event.name} />
              </a>
            </div>
          </div>
          <h2 className="event-title">{event.name}</h2>
        </div>
      ));
  };

  useEffect(() => {
      Aos.init({
          duration: 1000, 
      });
  }, []);

  return (
    <div className="event-Events">
      <Helmet>
        <link rel="preload" as="image" href={FinWeekBanner} />
      </Helmet>
      <div className="event-events-header">
        <h1>Our Events</h1>
        <p>
          Discover the latest happenings and <br />
          exciting upcoming events here
        </p>
      </div>
      <h1 className="event-Year">2026</h1>
      <div className="event-divs">{renderEventsByYear(2026)}</div>
      <div className="event-green-line" />

      <h1 className="event-Year">2025</h1>
      <div className="event-divs">{renderAfterFinWeekEvents()}</div>
      <div className="banner-container" onClick={toggleFinWeekEvents}>
        <img src="https://res.cloudinary.com/dtoiqexe1/image/upload/v1756801236/FINWEEK2_nagfgl.jpg" loading="eager" alt="FinWeek Banner" className="finweek-banner" /> {/*to load faster */}
        <div className={`banner-arrow ${showFinWeekEvents ? 'banner-arrow-rotate' : ''}`}></div>
      </div>
      {showFinWeekEvents && (
        <div className="event-divs finweek-grid" data-aos="fade-down">
          {finWeekEvents.map((event, index) => (
            <div key={index} className={`event-flex1 ${index % 3 === 2 ? 'span-two' : ''}`}>
              <div className="event-element">
                <div className="event-background-box" style={{ backgroundColor: event.backgroundColor }}></div>
                <div className={`event-image-box event-element${index % 5 + 1}`}>
                  <a href={event.link} target="_blank" rel="noreferrer">
                    <img src={event.photo} alt={event.name} />
                  </a>
                </div>
              </div>
              <h2 className="event-title">{event.name}</h2>
            </div>
          ))}
        </div>
      )}
      <div className="event-divs">{renderBeforeFinWeekEvents()}</div>
      <div className="event-green-line" />
      <h1 className="event-Year">2024</h1>
      <div className="event-divs">{renderEventsByYear(2024)}</div>
      <div className="event-green-line" />
      <h1 className="event-Year">2023</h1>
      <div className="event-divs">{renderEventsByYear(2023)}</div>
    </div>
  );
};

export default Events;