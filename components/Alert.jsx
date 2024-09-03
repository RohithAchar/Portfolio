"use client";

import { useEffect, useState } from "react";

const Alert = ({ message }) => {
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  }, []);
  return (
    <div
      className={`fixed top-5 p-4 text-accent border right-10 z-50 w-60 bg-secondary/5 p-4 rounded-lg mt-2 hover:border border-accent/10 ${
        isVisible ? "slide-in" : "slide-out"
      }`}
    >
      {message}
    </div>
  );
};

export default Alert;
