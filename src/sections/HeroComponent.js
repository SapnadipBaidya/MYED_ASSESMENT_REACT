import React from "react";
import "../App.css";
const vid = "uNb6ZIrxdTQ";
function HeroComponent() {
  return (
    <>
      <h1>A bridge to holistic learning</h1>
      <h2>AI-powered SAAS</h2>
      <ul className="horizontal-list">
        <li>School admin tasks</li>
        <li>Engaging teachers and parents</li>
      </ul>
      <p>Al-powered SaaS to automate school admin tasks, enabling teachers to focus on education and parents to stay engaged</p>
      <iframe
        className="videoSections"
        width="80%"
        height="450"
        src={"https://www.youtube.com/embed/" + vid}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </>
  );
}

export default HeroComponent;
