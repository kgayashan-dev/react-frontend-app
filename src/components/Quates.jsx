import React, { useEffect, useState } from "react";

const Quotes = () => {
  const [quote, setQuote] = useState("");
  const [randomIndex, setRandomIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomIndex(Math.floor(Math.random() * 1000));
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data[randomIndex].text);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [randomIndex]);

  return (
    <div className="absolute text-xl text-white top-0 ">
      <div className="transform ">
        <h1 className="">{quote}</h1>
      </div>
    </div>
  );
};

export default Quotes;
