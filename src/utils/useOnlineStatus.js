import { useState, useEffect } from "react";

const status = () => {
  const [isOnline, setIsOnline] = useState(true);
  function checkStatus() {
    window.addEventListener("online", (e) => {
      console.log("online");
      setIsOnline(true);
    });
    window.addEventListener("offline", (e) => {
      console.log("offline");
      setIsOnline(false);
    });
  }
  useEffect(() => {
    checkStatus();
  }, []);
  return isOnline;
};

export default status;
