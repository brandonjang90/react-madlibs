import React from "react";

const Story = ({ story, onRestart }) => {
  return (
    <div>
      <h2>Story Time</h2>
      <p>{story}</p>
      <button onClick={onRestart}>Start Over</button>
    </div>
  );
}

export default Story;
