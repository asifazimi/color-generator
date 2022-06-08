import React, { useState, useEffect } from "react";

// Covert rgb to hex string
import rgbToHex from "./utils";

// react icons
import { FaCheck } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

// Animation
import { alertAnimate } from "./animation";
import { clipboardAnimate } from "./animation";
import { motion } from "framer-motion";

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  // States
  const [alert, setAlert] = useState(false);

  // Seprating the rgb values with ,
  const bcg = rgb.join(",");

  //   Using from function above as we defined already
  const hex = rgbToHex(...rgb);

  let hexValue = `#${hexColor}`;

  //   To disapear the alert after a seconds
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [alert]);

  if (alert) {
    hexValue = null;
  }

  return (
    <>
      <article
        className={`color ${index > 10 && "color-light"} `}
        style={{ backgroundColor: `rgb(${bcg})` }}
        onClick={() => {
          setAlert(true);
          navigator.clipboard.writeText(hexValue);
        }}
      >
        <p className="percent-value">{weight}%</p>
        <p className="color-value">{hexValue}</p>
        {alert && (
          <>
            <motion.p
              variants={alertAnimate}
              initial="hidden"
              animate="show"
              className={`alert ${index > 10 && "color-light"}`}
            >
              <FaCheck className="check" />
            </motion.p>
            <motion.p
              variants={clipboardAnimate}
              initial="hidden"
              animate="show"
              className="clipboard"
            >
              <FaCheckCircle className="check-icon" />
              <span>Color copied to the clipboard!</span>
            </motion.p>
          </>
        )}
      </article>
    </>
  );
};

export default SingleColor;

// When we say all(10) in our library it means we want to generate 10 colors with lightness colors and 10 colors with darkness colors for this specific color
// And this 10 means that 100 is divided by 10 and this Values generates 20 colors for us
