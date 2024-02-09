import React, { useState } from "react";

export function NavButtons() {
  const handleScroolFooter = () => {
    const aboutUsSection = document.getElementById("footer-sec");
    if (aboutUsSection) {
      aboutUsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScroolTestimonials = () => {
    const testimonial = document.getElementById("testimonials-sec");
    if (testimonial) {
      testimonial.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScroolWorks = () => {
    const work = document.getElementById("work-sec");
    if (work) {
      work.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScroolServices = () => {
    const service = document.getElementById("service-sec");
    if (service) {
      service.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <article className="header-btn">
      <button className="drawer-toggle" onClick={toggleDrawer}>
        {isDrawerOpen ? "<" : ">"}
      </button>
      <article className={`drawer ${isDrawerOpen ? "open" : "close"}`}>
        <article className="btns-class drawer-toggle">
          <a href="#" className="header-btns" onClick={handleScroolWorks}>
            WorkFolio
          </a>
          <a href="#" className="header-btns" onClick={handleScroolFooter}>
            About Us
          </a>
          <a href="#" className="header-btns" onClick={handleScroolServices}>
            Services
          </a>
          <a href="#" className="header-btns" onClick={handleScroolFooter}>
            Contact Us
          </a>
          <a
            href="#"
            className="header-btns testimonial-btn"
            onClick={handleScroolTestimonials}
          >
            Testimonials
          </a>
        </article>
      </article>
    </article>
  );
}
