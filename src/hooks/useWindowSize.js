import { useState, useEffect } from "react"

export default function useWindowSize() {

  
  function getSize() {
    if (typeof window !== `undefined`){
    var  width =  window.innerWidth,
     var  height = window.innerHeight,
    }
    return {
      width,
      height
    }
    }
  }

  const [windowSize, setWindowSize] = useState(getSize)

  useEffect(() => {
    function handleResize() {
      setWindowSize(getSize())
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return windowSize

