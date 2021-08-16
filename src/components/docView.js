import React, { Component } from "react"
import ReactDOM from "react-dom"

class DocView extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    var url =
      "https://docs.google.com/viewerng/viewer?url=" +
      this.props.src +
      "&embedded=true"
    return (
      <iframe style={{ width: "8.5in", height: "11in" }} src={url}></iframe>
    )
  }
}

export default DocView
