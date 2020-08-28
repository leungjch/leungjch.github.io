import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
  const data = useStaticQuery(
	  graphql`
	  	query {
		    file(relativePath: { eq: "images/favicon.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
  `)

  return (
    <div style={{ margin: `0.2rem auto`, maxWidth: `60%`, padding: `0 1rem` }}>
	<Img
	  fixed = {data.file.childImageSharp.fixed}
	 />
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
	  <ListLink to="/blog/"><h2>Articles</h2></ListLink>
	  <ListLink to="/notes/"><h2>Notes</h2></ListLink>
        </ul>
      </div>
      {/* </header> */}
    </div>
    {children}

    </div>

  )
}
