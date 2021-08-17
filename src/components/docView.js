import React, { useEffect, useRef, useState } from "react"
import ReactDOM from "react-dom"

export default function DocView(props) {
  const [iframeTimeoutId, setIframeTimeoutId] = useState(undefined)
  const iframeRef = useRef(null)

  useEffect(() => {
    const intervalId = setInterval(updateIframeSrc, 500)
    setIframeTimeoutId(intervalId)
  }, [])

  function iframeLoaded() {
    clearInterval(iframeTimeoutId)
  }

  function getIframeLink() {
    return `https://docs.google.com/viewerng/viewer?url=${props.url}&embedded=true`
  }
  function updateIframeSrc() {
    console.log("ERROR IS")
    if (iframeRef.current) {
      iframeRef.current.src = getIframeLink()
    }
  }

  return (
    <iframe
      style={{ width: "8.5in", height: "11in" }}
      src={getIframeLink()}
      ref={iframeRef}
      onError={updateIframeSrc}
      onLoad={iframeLoaded}
    ></iframe>
  )
}
