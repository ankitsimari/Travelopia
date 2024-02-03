import React, { useState } from "react";

export default function Hero() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="hero">

    {/* Image */}

      <img
        src="https://images.unsplash.com/photo-1433838552652-f9a46b332c40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />

      {/* Text */}

      <div className="text">
        <h1>
        EXPERIENTIAL TRAVEL
          <span className="lastWord"> BRANDS</span>
        </h1>
        <button onClick={() => setIsActive(true)}>Click Here</button>
      </div>

    {/* overlay */}
      <div className="overlay"></div>

      {/*  Alert */}
      <div className={isActive ? "modal-container show" : "NoPopup"}>
        <div className="modal">
          <h3>Hello World</h3>
          <button className="closeBtn" onClick={() => setIsActive(false)}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
