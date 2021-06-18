import React, { useContext, useEffect, useRef } from "react";
import emoji from "react-easy-emoji";

import { Fade } from "react-reveal";
import { init } from "ityped";
import "./Greeting.css";

import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";

import { illustration, greeting } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const { isDark } = useContext(StyleContext);
  const textRef = useRef();

    useEffect(() => {
      init(textRef.current, {
        showCursor: false,
        typeSpeed: 60,
        backSpeed: 1,
        backDelay: 1400,
        strings: [
          "I love to interact with Machines from an Abstract level.🚀",
        ],
      });
    }, []);

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                {greeting.title}{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                
                <span ref={textRef}></span>
              </p>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                <Button
                  text="See my resume"
                  newTab={true}
                  href={greeting.resumeLink}
                />
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={landingPerson} />
            ) : null}
          </div>
        </div>
      </div>
    </Fade>
  );
}
