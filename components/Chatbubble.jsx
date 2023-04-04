import React from "react";

function Chatbubble() {
  return (
    <div className="flex flex-col">
      <div className="chat chat-start">
        <div
          className="chat-image avatar tooltip tooltip-left tooltip-info"
          data-tip="Aaron Latham"
        >
          <div className="w-14 rounded-full">
            <img src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80" />
          </div>
        </div>
        <div className="chat-bubble chat-bubble-accent">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis
          dolorum maxime placeat perferendis ad itaque aspernatur temporibus
          corrupti.
        </div>
      </div>
      <span className="pl-16 text-sm flex justify-start mb-4">03/04/2023 &bull; 19:38</span>

      {/* IF CHAT COUNT IS EVEN USE CHAT-END */}

      <div className="chat chat-end">
        <div
          className="chat-image avatar tooltip tooltip-right tooltip-info"
          data-tip="Aaron Latham"
        >
          <div className="w-14 rounded-full">
            <img src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80" />
          </div>
        </div>
        <div className="chat-bubble chat-bubble-secondary">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis
          dolorum maxime placeat perferendis ad itaque aspernatur temporibus
          corrupti.
        </div>
        <div>
        </div>
      </div>
        <span className="pr-16 text-sm flex justify-end">03/04/2023 &bull; 19:39</span>
    </div>
  );
}

export default Chatbubble;
