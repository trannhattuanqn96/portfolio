import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../404.css"
function Page404() {

  useEffect(() => {
    var body = document.body;
    setInterval(createStar, 100);
    function createStar() {
      var right = Math.random() * 500;
      var top = Math.random() * window.innerHeight;
      var star = document.createElement("div");
      star.classList.add("star");
      body.appendChild(star);
      setInterval(runStar, 10);
      star.style.top = top + "px";
      function runStar() {
        if (right >= window.innerWidth) {
          star.remove();
        }
        right += 3;
        star.style.right = right + "px";
      }
    }
  },[])

  return (
    <>
      <Container fluid className="fullpage">
        {/* {stars.map(item => {
          return (
            <div className="star" style={{ top: item?.top, right: item?.right }}></div>
          )
        })} */}
        <Container className="container404 ">
          <Row className='row404'>
            <Col
              md={12}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <div class="text404">
                <div>ERROR</div>
                <div>404</div>
                <hr />
                <div>Page Not Found</div>
              </div>
              <div class="astronaut">
                <img src="https://images.vexels.com/media/users/3/152639/isolated/preview/506b575739e90613428cdb399175e2c8-space-astronaut-cartoon-by-vexels.png"
                  alt="" class="src" />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Page404;
