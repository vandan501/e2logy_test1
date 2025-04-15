import React, { useState } from 'react';

function ToggleText() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <h1>Toggle Text Task</h1>
      <button onClick={toggleVisibility}>
        Toggle Text
      </button>

      {isVisible && <p>This text should appear or disappear</p>}
    </div>
  );
}

export default ToggleText;
