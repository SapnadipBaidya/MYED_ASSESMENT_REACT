import React, { useState, useEffect } from "react";

function TeacherFeature() {
  const features = [
    {
      logo: "/images/attendanceLogo.png",
      featureImage: "/images/attendance.png",
      altText: "Attendance Feature",
      titletext: "Attendance with AI-face recognition in 3s"
    },
    {
      logo: "/images/reportlogo.png",
      featureImage: "/images/reports.png",
      altText: "Reports Feature",
      titletext: "Student report management"
    },
    {
      logo: "/images/tick.png",
      featureImage: "/images/calender.png",
      altText: "Calendar Feature",
      titletext: "Track task and notices"
    },
    {
      logo: "/images/messagesLogo.png",
      featureImage: "/images/messages.png",
      altText: "Messages Feature",
      titletext: "Communicate with parent hassle-free"
    },
  ];

  const [loadingState, setLoadingState] = useState(
    features.map(() => true) 
  );

  const handleImageLoad = (index) => {
    setLoadingState((prevState) => {
      const newState = [...prevState];
      newState[index] = false;
      return newState;
    });
  };

  return (
    <div>
      <h2>
        AI-driven SaaS streamlines teachers' daily tasks, empowering them to
        prioritize education and enhance parent involvement.
      </h2>
      <div className="image-container">
        {features.map((feature, index) => (
          <div className="item" key={index}>
            {loadingState[index] && (
              <div className="loading-spinner">
                <div className="spinner"></div>
              </div>
            )}

            <img
              className="customImgLogo"
              src={feature.logo}
              alt={feature.altText}
              style={{ maxWidth: "10vh", height: "auto" }}
              loading="lazy" 
              onLoad={() => handleImageLoad(index)} 
            />
            <p>{feature.titletext}</p>
            <img
              className="customImg"
              src={feature.featureImage}
              alt={feature.altText}
              style={{ width: "20vh", height: "auto" }}
              loading="lazy" // Lazy load the feature image
              onLoad={() => handleImageLoad(index)} // Trigger image load handler
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeacherFeature;