import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Empowering Your Everyday with AI",
          "AI Solutions for Real Life Problems",
          "Transforming Daily Tasks with AI",
          "Innovative AI for Smarter Living",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
