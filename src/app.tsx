import React, { useState, useEffect } from "react";


// Import and apply CSS stylesheet
import "./styles/styles.css";

// Home function that is reflected across the site
export const Home: React.FC = () => {
  const [msg, setMsg] = React.useState("");
  React.useEffect(() => {
    if (msg) {
      return;
    }
    const asyncSetMessage = async () => {
      const resp = await fetch("/hello");
      try {
        setMsg(await resp.text());
      } catch (err) {
        console.error({err})
      }
    }
    asyncSetMessage();
  }, [msg]);
  return msg ? <>Server Message: {msg}</> : "No message :(";
}

export default Home;