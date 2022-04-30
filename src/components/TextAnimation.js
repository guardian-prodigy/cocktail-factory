import React from "react";

//importing typewriter-effect
import Typewriter from "typewriter-effect";
import ".././index.css";

function AnimatedText() {
  return (
    <span className="AnimatedText">
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("Content Creator")
            .pauseFor(1000)
            .deleteAll()
            .typeString("Web-Designer")
            .pauseFor(1000)
            .deleteAll()
            .typeString("Web-Developer")
            .start();
        }}
      />
    </span>
  );
}

export default AnimatedText;
