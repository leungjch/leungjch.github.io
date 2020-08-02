import React from "react"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import { css } from "@emotion/core"

import { useStaticQuery, Link, graphql } from "gatsby"

import Image from "../components/image"
import SEO from "../components/seo"
import Header from "../components/header"

export default function Home({ data }) {

  const basicInfo = data.basicInfoYaml.basic_info;
  const work = data.workYaml.work;
  const projects = data.projectsYaml.projects;

  console.log(basicInfo, work, projects)
  return (
    <Layout>
      <div>

        <p> {basicInfo.summary} </p>

        <h1> Work </h1>
        <ul>
          {work.map((data, index) => {
            return <li key={`work_${index}`} style={{listStyleType:"none"}}>
              <h2>{data.place}</h2>
              <p>{data.duration}</p>
              <p>{data.position}</p>
              <p>{data.summary}</p>
            </li>
          })}
        </ul>
        

        <h1>Projects</h1> 
        <p> I enjoy working on a variety of projects in my spare time. </p>
        <ul>
          {projects.map((data, index) => {
            return <li key={`projects_${index}`} style={{listStyleType:"none"}}>
              <h2>{data.name}</h2>
              <Image filename={data.img} maxHeight={"30vh"} imgStyle={{ objectFit: 'contain' }}/>
              <p>{data.description}</p>
              <p>Keywords: <strong>{data.keywords}</strong></p>
            </li>
          })}
        </ul>


        {/* <h1 css={css`display: inline-block;border-bottom: 1px solid;`}>
        Blog
        </h1>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
            <h3
              css={css`
                margin-bottom: ${rhythm(1 / 4)};
              `}
            >
              {node.frontmatter.title}{" "}
              <span
                css={css`
                  color: #bbb;
                `}
              >
                — {node.frontmatter.date}
              </span>
            </h3>
            <p>{node.excerpt}</p>
            </Link>
          </div>
        ))} */}
      </div>
    </Layout>
  )
}


export const query = graphql`
  query {
    basicInfoYaml {
      basic_info {
        name
        image
        email
        phone
        url
        summary
        location {
          city
          countryCode
          region
        }
        social {
          github
        }
      }
    }

    workYaml {
      work {
        place
        duration
        summary
        position
      }
    }

    projectsYaml {
      projects {
        name
        keywords
        description
        img
        linkrepo
        linkdemo

      }
    }
}
`
  
//     allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
//       totalCount
//       edges {
//         node {
//           id
//           frontmatter {
//             title
//             date(formatString: "DD MMMM, YYYY")
//           }
//           fields {
//             slug
//           }
//           excerpt
//         }
//       }
//     }
//   }
// `