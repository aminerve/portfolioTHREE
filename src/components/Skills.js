import React from "react";
import { FaReact, FaNodeJs, } from "react-icons/fa";
import {
  SiHtml5,
  SiNetlify
} from "react-icons/si";
import { DiCss3} from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap } from "react-icons/bs";

import "../styles/Skills.css";

export const Skills = () => {
  return (
    <>
      <div className="section main" data-aos="fade-right">
        <h2 className="section__title different">Skills</h2>
        <div className="techsection">
          <div>
            <SiJavascript />
            <h5>Bootstrap</h5>
          </div>
          <div>
            <SiHtml5 />
            <h5>Bootstrap</h5>
          </div>
          <div>
            <DiCss3 />
            <h5>Bootstrap</h5>
          </div>
          <div>
            <FaReact />
            <h5>Bootstrap</h5>
          </div>
          <div>
            <FaNodeJs />
            <h5>Bootstrap</h5>
          </div>

          <div>
            <BsBootstrap />
            <h5>Bootstrap</h5>
          </div>
          <div>
            <VscGithub />
            <h5>Bootstrap</h5>
          </div>
          <div>
            <SiNetlify />
            <h5>Bootstrap</h5>
          </div>
        </div>
      </div>
    </>
  );
};