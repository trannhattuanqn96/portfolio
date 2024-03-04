import React, { useEffect } from "react";

function Start() {
  useEffect(() => {
    var body = document.body;
    setInterval(createStar, 100);

    function createStar() {
      var right = Math.random() * 500;
      var top = Math.random() * 500;
      var star = document.createElement("div");
      star.classList.add("star");
      body.appendChild(star);
      setInterval(runStar, 10);
      star.style.top = top + "px";
      function runStar() {
        if (right >= window.innerWidth) {
          star.remove();
        }
        right += 1;
        star.style.right = right + "px";
      }
    }
  }, []);
  return null
}

export default Start;
