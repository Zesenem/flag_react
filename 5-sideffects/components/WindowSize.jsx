import React, { useState, useEffect } from "react";

export default function WindowSize() {
  const [size, setSize] = useState(getSize());

  function getSize() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize, false);

    return () => {
      window.removeEventListener("resize", handleResize, false);
    };
  }, [setSize]);
  // Empty array means this effect runs only once, like componentDidMount
  // classes, componentDidMount() = ngOnInit() in Angular

  return (
    <>
      <h2>Window Size</h2>
      <p>Width: {size.width}</p>
      <p>Height: {size.height}</p>
      <hr />
      <p>Resize the window to see the effect</p>
    </>
  );
}


