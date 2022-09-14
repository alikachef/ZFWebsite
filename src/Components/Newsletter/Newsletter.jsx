import React from "react";
import "./newsletter.css";


const Newsletter = () => {
  return (
    <section>
      <div className="newsletter">
        <div className="text-center">
          <h2 className="title">Subscribe Our Newsletter</h2>
          <div className="subscribe">
            <input type="email-text" placeholder="Email" />
            <button className="sub-btn">Subscribe</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;