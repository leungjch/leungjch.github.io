import React from "react"
import { Link } from "gatsby"
const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)



export default function Layout({ children }) {
  return (
    <div style={{ margin: `0.2rem auto`, maxWidth: `55%`, padding: `0 0.2rem` }}>
      <header style={{ marginBottom: `1.0rem` }}>
        <h1 style={{float:`none`}}>Justin Leung</h1>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/">Work</ListLink>
          <ListLink to="/about/">Publications</ListLink>
          <ListLink to="/contact/">Projects</ListLink>
        </ul>

      </header>
      {children}
    </div>
  )
}