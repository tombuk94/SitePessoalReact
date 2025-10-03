import React from "react";


function Phase({ icon, title, text, highlight }) {
  return (
    <div className={`phase ${highlight ? "highlight" : ""}`}>
      <div className="phase-icon">{icon}</div>
      <div className="phase-content">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default function ProjectPhases() {
  return (
    <section className="project-phases">
      <h2>
        Project <span>phases</span>
      </h2>
      <div className="phases-container">
        <Phase
          icon="⏰"
          title="Kick Off"
          text="Initial meeting to align objectives and define timetable"
          highlight
        />
        <Phase
          icon="📋"
          title="Requirements"
          text="Detailed survey of needs and flowcharts"
        />
        <Phase
          icon="⚙️"
          title="Development"
          text="System configuration and full documentation"
          highlight
        />
        <Phase
          icon="✔️"
          title="Tests"
          text="Joint validation with the client’s team"
        />
        <Phase
          icon="👤"
          title="Training"
          text="End-user training"
          highlight
        />
        <Phase
          icon="💬"
          title="Support"
          text="Post-implementation assisted operation"
        />
      </div>
    </section>
  );
}
