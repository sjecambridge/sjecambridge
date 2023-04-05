import React from "react";
import { ReactDOM } from "react";
import '../src/css/event.css'

class Event extends React.Component {
    render() {
        return (
        <section className="event-section">
            <h1>Upcoming Events</h1>
            <div className="event-container">
                <div className="event">
                    <div className="event-img">
                        <img src='https://images.unsplash.com/photo-1438232992991-995b7058bbb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80' alt="" />
                    </div>
                    <div className="event-content">
                        <h3>Event 1</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquet nisl, vel aliquet nisl nisl sit amet nisl. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquet nisl, vel aliquet nisl nisl sit amet nisl.</p>
                    </div>
                </div>
            </div>
        </section>
        );
    }
}

export default Event;