import React from "react";
import { faGithubAlt, faJenkins } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DevPortal() {
  return (
    <>
      <h3 style={{ textAlign: "center", margin: "20px" }}>
        Welcome to Dev page!
      </h3>
      <div style={{justifyContent: "space-around", marginTop:"20px"}}>
        <a href="#" style={{color : "black"}}>
          <FontAwesomeIcon icon={faGithubAlt} size="4x" />
        </a>
        <a href="#" style={{color : "black"}}>
          <FontAwesomeIcon icon={faJenkins} size="4x" />
        </a>
      </div>
    </>
  );
}
