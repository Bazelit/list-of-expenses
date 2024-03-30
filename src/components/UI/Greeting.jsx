import React, { useState, useEffect } from "react";

const Greeting = () => {
  const [timeOfDay, setTimeOfDay] = useState("");

  useEffect(() => {
    const currentTime = new Date().getHours();

    if (currentTime >= 6 && currentTime < 12) {
      setTimeOfDay("🌅Доброе утро!");
    } else if (currentTime >= 12 && currentTime < 18) {
      setTimeOfDay("☀️Добрый день!");
    } else if (currentTime >= 18 && currentTime < 24) {
      setTimeOfDay("🌙Добрый вечер!");
    } else {
      setTimeOfDay("🌃Доброй ночи!");
    }
  }, []);

  return <h1>{timeOfDay}</h1>;
};

export default Greeting;
