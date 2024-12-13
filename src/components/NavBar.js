import React from "react";

const NavBar = ({ sectionRefs, toggleTheme, theme }) => {
  const handleScroll = (sectionId) => {
    const section = sectionRefs[sectionId].current;
    if (section) {
      const topOffset = section.offsetTop;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <img src="/images/logohorz.png" alt="logo"   style={{ width: "15vh", height: "auto" , backgroundColor:"white" ,borderRadius:"5vh",paddingLeft:"2vh",paddingRight:"2vh"}}/>
      <ul className="nav-items">
        <li onClick={() => handleScroll("section1")}>Features</li>
        <li onClick={() => handleScroll("section2")}>Pricing</li>
        <li onClick={() => handleScroll("section3")}>About Us</li>
        <li onClick={() => handleScroll("section4")}>Book Demo</li>
        <li><div className="theme-switch">
        <input
          type="checkbox"
          onChange={toggleTheme}
          checked={theme === "dark"}
        />

      </div></li>
      </ul>
      
    </nav>
  );
};

export default NavBar;