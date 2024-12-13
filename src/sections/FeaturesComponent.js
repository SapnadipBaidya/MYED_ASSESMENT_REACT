import React, { useState } from "react";
import "../App.css";
import TeacherFeature from "./featureChildComp/teacherFeature";
import ParentFeature from "./featureChildComp/parentFeature";

function FeaturesComponent() {
  const [activeFeature, setActiveFeature] = useState("teacher"); // Default to "teacher"

  return (
    <div className="features-container">

      <div className="feature-toggle-buttons">
        <button
          className={activeFeature === "teacher" ? "active" : ""}
          onClick={() => setActiveFeature("teacher")}
        >
          For teachers
        </button>
        <button
          className={activeFeature === "parent" ? "active" : ""}
          onClick={() => setActiveFeature("parent")}
        >
          For parents
        </button>
      </div>


      <div className="feature-content">
        {activeFeature === "teacher" && <TeacherFeature />}
        {activeFeature === "parent" && <ParentFeature />}
      </div>
    </div>
  );
}

export default FeaturesComponent;
