
import React from "react";
import "./about.css";

const stats = [
  { number: "2012", label: "Founded" },
  { number: "100+", label: "Unique Recipes" },
  { number: "10,000+", label: "Cakes Served" },
  { number: "15", label: "Awards for Excellence" },
];

const About = () => (
  <section className="about-section-container">
    <div className="about-content">
      <h2 className="about-title">ABOUT</h2>
      <p className="about-desc">
        At Sweet Moments Cake Shop, every bite tells a story of love,
        celebration, and craftsmanship. We specialize in creating freshly baked
        cakes, cupcakes, pastries, and desserts that add joy to every occasion —
        from birthdays and weddings to just-because moments. Our expert bakers
        use only the finest ingredients — farm-fresh eggs, rich butter, pure
        vanilla, and the best chocolates — to craft cakes that are as beautiful
        as they are delicious. Whether you prefer classic flavors or custom
        designer cakes, we promise perfection in every layer. At Sweet Moments,
        we believe cakes aren’t just desserts — they’re memories made edible.
        Visit us to experience sweetness baked fresh every day!
      </p>
      <div className="about-stats">
        {stats.map((item, idx) => (
          <div className="stat-block" key={idx}>
            <div className="stat-number">{item.number}</div>
            <div className="stat-label">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
    <div className="about-image-wrapper">
      <img src="/images/cake.jpg" alt="About" className="about-image" />
    </div>
  </section>
);

export default About;
