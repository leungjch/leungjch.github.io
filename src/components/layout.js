import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
const ListLink = props => (
  <li style={{ display: `block`, margin: `0.1rem` }}>
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
        fluid(maxWidth:100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `)

  return (
    <div style={{display:"flex", flexDirection:"row", alignContent:"flex-start"}}>


        <div style={{margin:"0%", padding:"0.2rem"}}>


          <ul style={{listStyle: `none`}}>
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

        <div style={{ marginLeft: "1%", marginRight:"5%", maxWidth: `100%`, padding: `0.2rem` }}>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap" }}>
        {/* <header style={{ marginBottom: `2.0rem`}}> */}
        <h1
              >Justin Leung</h1>
        {/* </header> */}
      </div>
      {children}

    </div>


    </div>

  )
}
