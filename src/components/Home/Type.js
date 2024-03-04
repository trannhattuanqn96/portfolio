import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    // thêm string
    <Typewriter
      options={{
        strings: [
          "Web Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
