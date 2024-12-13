import React, { useState, useEffect, useRef, Suspense } from "react";
import NavBar from "./components/NavBar";
import ScrollToTopButton from "./components/ScrollToTopButton";
import "./App.css";

// Lazy load sections
const HeroComponent = React.lazy(() => import("./sections/HeroComponent"));
const FeaturesComponent = React.lazy(() =>
  import("./sections/FeaturesComponent")
);
const PricingComponent = React.lazy(() =>
  import("./sections/PricingComponent")
);
const AboutUsComponent = React.lazy(() =>
  import("./sections/AboutUsComponent")
);
const FormComponent = React.lazy(() => import("./sections/FormComponent"));

const App = () => {
  const [theme, setTheme] = useState("light"); 

  // Sections configuration
  const sectionsConfig = [
    { id: "section1", title: "Features Section", component: FeaturesComponent },
    { id: "section2", title: "Pricing Section", component: PricingComponent },
    { id: "section3", title: "About Us Section", component: AboutUsComponent },
    { id: "section4", title: "Form Section", component: FormComponent },
  ];


  const sectionRefs = useRef(
    sectionsConfig.reduce((acc, section) => {
      acc[section.id] = React.createRef();
      return acc;
    }, {})
  );


  const [resizeState, setResizeState] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });


  useEffect(() => {
    const handleResize = () => {
      clearTimeout(window.resizeTimeout);
      window.resizeTimeout = setTimeout(() => {
        setResizeState({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }, 300); // Delay of 300ms
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

 
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);


  return (
    <div>
      <NavBar
        sectionRefs={sectionRefs.current}
        toggleTheme={toggleTheme}
        theme={theme}
      />
      <Suspense fallback={<div>Loading Hero Section...</div>}>
        <div className="section">
          <HeroComponent />
        </div>
      </Suspense>
      {sectionsConfig.map(({ id, component: Component }) => (
        <Suspense key={id} fallback={<div>Loading {id}...</div>}>
          <div ref={sectionRefs.current[id]} className="section" id={id}>
            <Component />
          </div>
        </Suspense>
      ))}
      <ScrollToTopButton />
    </div>
  );
};

export default App;
