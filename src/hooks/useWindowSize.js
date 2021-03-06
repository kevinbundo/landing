import { useState, useEffect } from "react"

export default function useWindowSize() {
  function getSize() {
    return {
      width: global.innerWidth,
      height: global.innerHeight,
    }
  }
  const [windowSize, setWindowSize] = useState(getSize)

  useEffect(() => {
    function handleResize() {
      setWindowSize(getSize())
    }

    global.addEventListener("resize", handleResize)

    return () => window.addEventListener("resize", handleResize)
  }, [])

  return windowSize
}
