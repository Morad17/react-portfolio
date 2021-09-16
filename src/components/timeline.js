import React from 'react'

const Timeline = ({ title, date, content }) => {
    return (
        <div className="timeline-box">
            <div className="timeline-title">{title}</div>
            <div className="timeline-date">{date}</div>
            <div className="timeline-content">{content}</div>
            <span className="timeline-point"></span>
        </div>
    )
}

export default Timeline
