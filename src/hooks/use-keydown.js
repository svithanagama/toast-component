import React from "react";

export default function useKeyDown(key, callback) {
  React.useEffect(() => {
    // Effect logic:
    function handleEscapePress(event) {
      if(event.key === key) {
        callback(event);
      }
    }

    window.addEventListener('keydown', handleEscapePress);

    // Cleanup function:
    return () => {
      window.removeEventListener('keydown', handleEscapePress);
    };
  }, [key, callback]);
}
