import React from 'react'

const Timeline = ({ data }) => {
    return (
        <div className="timeline-box">
            <div className="timeline-date">{data.date}</div>
            <div className="timeline-title">{data.title}</div>
            <div className="timeline-content">{data.content}</div>
            <span className="timeline-point"></span>
        </div>
    )
}

export default Timeline
