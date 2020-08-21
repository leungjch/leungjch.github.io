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
      {/* <h2> {basicInfo.email} </h2> */}

      <div dangerouslySetInnerHTML={{ __html:basicInfo.summary}} />
        <div id="work">
          <h1> Work </h1>
          <ul style={{margin:"1%"}}>
            {work.map((data, index) => {
              return <li key={`work_${index}`} style={{listStyleType:"none"}}>
                <h2>{data.place}</h2>
                <div class="container" style={{flexDirection:"column", justifyContent:"space-between"}}>
                  <div class="item" style={{float:"right"}}>{data.duration}</div>
                  <div class="item">{data.position}</div>
                </div>

                <p style={{margin:"2%"}}>{data.summary}</p>
              </li>
            })}
          </ul>
        </div>

        <div id="projects">
          <h1>Projects</h1> 
          <p> I enjoy working on a variety of projects in my spare time. Check out <a href="github.com/leungjch">my Github</a> to see more. </p>
          <ul style={{margin:"1%"}}>
            {projects.map((data, index) => {
              var image;
              var demo;
              if (/[\/.](webm)$/i.test(data.img)) // if img is gif, use <img> tag, else use Gatsby Image tag
              {
                image = <video autoplay = "true" loop="true" muted = "true" style={{width:"30%", height:'auto', backgroundColor:"white"}}> <source src={data.img} type = "video/webm" /> </video>
              }
              else
              {
                image = <Image filename={data.img} maxHeight={"30vh"} imgStyle={{ objectFit: 'contain' }}
                style={{float:"left"}}
                />
              }
              if (data.linkdemo.length > 0)
              {
                demo = <a href={data.linkdemo}>[demo]</a>
              }
              var repo = <a href={data.linkrepo}>[code]</a>
              return <li key={`projects_${index}`} style={{listStyleType:"none"}}>
                  

                <div>
                  <h2>{data.name} {demo} {repo}</h2>
                  {image}
                  <p style={{float:'top'}}>{data.description}</p>
                  <p>Keywords: <strong>{data.keywords}</strong></p>
                </div>
              </li>
            })}
          </ul>
        </div>


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