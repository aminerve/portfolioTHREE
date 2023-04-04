import React from "react";
import '../styles/Type.css'
import Typewriter from "typewriter-effect";


export const Type = () => {
  return (
    <>
      <Typewriter

        options={{

          strings: ["Aiden Minerve","Full Stack Web Developer", "Front-End", "Back-End", "Developer", "Programmer"],

          autoStart: true,
          loop: true,
          deleteSpeed: 50
        }}
      />
    </>
  );
};