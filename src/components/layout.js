import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "./layout.css"
const ListLink = props => (
  <li style={{ paddingBottom: "2px", marginBottom:"5%"}}>
    <Link to={props.to} activeClassName={`active`}
    style = {{color:"#373737"}}>{props.children}</Link>
  </li>
)

export default function Layout({ title, children }) {
  const data = useStaticQuery(
    graphql`
	  	query {
		    file(relativePath: { eq: "images/favicon.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid{
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `)

  return (
    <div style={{ display: "flex", margin: "auto", marginTop:"2%", maxWidth: "65rem", flexDirection: "row", alignContent: "flex-start" }}>


      <div style={{ padding: "0.2rem" }}>


        <ul style={{ listStyle: `none`, padding:"0.1rem"}}>
          <ListLink to="/">
            <Img
              fluid={data.file.childImageSharp.fluid}
            />
          </ListLink>
          <ListLink to="/#work"><h3>Work</h3></ListLink>
          {/* <ListLink to="/about/">Publications</ListLink> */}
          <ListLink to="/#projects"><h3>Projects</h3></ListLink>
          <ListLink to="/blog/"><h3>Blog</h3></ListLink>
          <ListLink to="/notes/"><h3>Notes</h3></ListLink>
          <ListLink to="https://github.com/leungjch"><h3>Github</h3></ListLink>


        </ul>
      </div>

      <div style={{ marginLeft: "2%", marginRight: "2%", maxWidth: `100%`, padding: `0.2rem` }}>
          {/* <header style={{ marginBottom: `2.0rem`}}> */}
          <span>
          <h1
          >Justin Leung<span> <code style={{color:"#6398ac", fontSize:"0.75em"}}>@{title}</code></span></h1>

          </span>
          {/* </header> */}
        {children}

      </div>


    </div>

  )
}
