import React, { useState } from "react";
import "./Timeline.css";

interface TimelineEvent {
  id: string;
  date: string;
  description: string;
  image: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

const Timeline: React.FC<TimelineProps> = ({ events }) => {
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);

  const handleEventClick = (eventId: string) => {
    setSelectedEvent((prevSelectedEvent) =>
      prevSelectedEvent === eventId ? null : eventId
    );
  };

  return (
    <div className="timeline-container">
      <div className="timeline">
        <div className="timeline-line" />
        {events.map((event) => (
          <div>
            <div
              key={event.id}
              className={`timeline-event ${
                selectedEvent === event.id ? "selected" : ""
              }`}
              onClick={() => handleEventClick(event.id)}
            >
              <div className="event-image">
                <img src={event.image} height={40} alt={event.image} />
              </div>
              <div
                className={`timeline-event-circle ${
                  selectedEvent === event.id ? "selected" : ""
                }`}
              />
              <div className="event-date">{event.date}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="event-description">
        {events.map((event) => (
          <div>
            {selectedEvent === event.id && <div>{event.description}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
