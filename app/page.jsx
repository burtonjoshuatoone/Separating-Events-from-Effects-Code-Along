"use client";

import App from "./Notify.jsx";
import Timer from "./Delay.jsx";
import Timer1 from "./FixIt1.jsx";
import Timer2 from "./Freezer.jsx";

export default function Journey() {
  return (
    <>
      <div>
        <App />
      </div>
      <div>
        <Timer />
      </div>
      <div>
        <Timer1 />
      </div>
      <div>
        <Timer2 />
      </div>
    </>
  );
}
