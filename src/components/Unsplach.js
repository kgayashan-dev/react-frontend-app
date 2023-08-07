import React, { useState, useEffect } from "react";
import axios from "axios";
import Date from "./Date";
import img1 from "../assetes/e.jpg";
// import img2 from "../assetes/c.jpg";
// import img3 from "../assetes/d.jpg";
// import Quates from "./Quates";

const Unsplach = () => {
  // const imges = [img1, img2, img3];
  const [background, setBackground] = useState(img1);

  useEffect(() => {
    const fetchBackground = async () => {
      try {
        const response = await axios.get(
          "https://api.unsplash.com/photos/random?client_id=XUCsCmgqu-w-qq3BZz1YYe7pwe5FATvbpTY1UDTgba0"
        );
        setBackground(response.data.urls.regular);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBackground();
  }, []);

  return (
    <div>
      <div className="img overflow-hidden h-screen">
        <img src={background} alt="" />
      </div>
     
      <div className="overlay" ></div>
      <div className="flex flex-col gap-2 justify-center ">
        <div className="">
          <Date />
        </div>
       
      </div>
    </div>
  );
};

export default Unsplach;
