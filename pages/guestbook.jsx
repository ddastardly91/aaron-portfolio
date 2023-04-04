import Chatbubble from "@/components/Chatbubble";
import React from "react";

function Guestbook() {
  return (
    <div className="p-6 bg-neutral">
      <div className="text-center mb-5">
        <button className="btn btn-primary">Sign Guestbook</button>
      </div>
      <Chatbubble />
    </div>
  );
}

export default Guestbook;
