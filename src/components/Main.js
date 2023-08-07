import React, { useState, useEffect } from "react";
import music from "../assetes/music.mov";
import rd from "../assetes/rd.mp4";
import Date from "./Date";

const Main = () => {
  const [background, setBackground] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setBackground(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  useEffect(() => {
    if (!background) {
      setBackground(require("../assetes/b.jpg").default);
    }
  }, [background]);

  return (
    <div className="main">
      <div className="overlay"></div>
      {background ? (
        <img src={background} alt="Background" />
      ) : (
        <video src={music} autoPlay loop muted />
      )}
      <div className="absolute text-8xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <input type="file" onChange={handleImageChange} />

      </div>
    </div>
  );
};

export default Main;
