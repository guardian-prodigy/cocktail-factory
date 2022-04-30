import React from "react";
import AnimatedText from "../components/TextAnimation";
const About = () => {
  return (
    <section className="section about-section">
      <h1 className="section-title">about us</h1>
      <p>
        Welcome to my cocktail website! My name is Akash, and I am a <span>{<AnimatedText/>}</span>. For more information, please visit view my packages{" "}
        <a
          href="https://www.fiverr.com/akash_lewis/make-a-professional-website-for-you"
          style={{ color: "green", textDecoration: "underline" }}
        >
          here
        </a>
      </p>
    </section>
  );
};

export default About;
