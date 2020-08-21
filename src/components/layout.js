import React from "react"
import { Link } from "gatsby"
const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
  return (
    <div style={{ margin: `0.2rem auto`, maxWidth: `50%`, padding: `0 1rem` }}>

    <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", flexWrap:"wrap"}}>
      {/* <header style={{ marginBottom: `2.0rem`}}> */}
      <div>
      <h1>Justin Leung</h1>
      </div>
      <div>
      <ul style={{listStyle: `none`}}>
          <ListLink to="#work"><h2>Work</h2></ListLink>
          {/* <ListLink to="/about/">Publications</ListLink> */}
          <ListLink to="#projects"><h2>Projects</h2></ListLink>
        </ul>
      </div>
      {/* </header> */}
    </div>
    {children}

    </div>

  )
}