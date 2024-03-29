import React from "react"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import { css } from "@emotion/core"
import styles from "../styles/global.css"

import { useStaticQuery, Link, graphql } from "gatsby"

import Image from "../components/image"
import SEO from "../components/seo"
import Header from "../components/header"

export default function Home({ data }) {
  const basicInfo = data.basicInfoYaml.basic_info
  const work = data.workYaml.work
  const projects = data.projectsYaml.projects

  console.log(basicInfo, work, projects)
  return (
    <Layout title="">
      <SEO title="Home" />

      <div style={{ marginRight: "10%" }}>
        {/* <h2> {basicInfo.email} </h2> */}

        <div dangerouslySetInnerHTML={{ __html: basicInfo.summary }} />

        <div id="projects">
          <h2>Projects</h2>
          <p>
            {" "}
            I'm a maker at heart. Over the years, I've worked on a variety of
            projects in my spare time. Check out{" "}
            <a href="https://github.com/leungjch">my Github</a> to see more.{" "}
          </p>
          <ul style={{ margin: "1%" }}>
            {projects.map((data, index) => {
              var image
              var demo
              if (/[\/.](webm)$/i.test(data.img)) {
                // if img is gif, use <img> tag, else use Gatsby Image tag
                image = (
                  <video
                    autoplay="true"
                    loop="true"
                    muted="true"
                    style={{
                      width: "100%",
                      maxHeight: "33vh",
                      backgroundColor: "white",
                      padding: "2px",
                    }}
                  >
                    {" "}
                    <source src={data.img} type="video/webm" />{" "}
                  </video>
                )
              } else {
                image = (
                  <Image
                    filename={data.img}
                    maxHeight={"33vh"}
                    imgStyle={{
                      objectFit: "scale-down",
                      objectPosition: "right",
                    }}
                  />
                )
              }
              if (data.linkdemo.length > 0) {
                demo = <a href={data.linkdemo}>[demo]</a>
              }

              var repo;
              if (data.linkrepo.length > 0)
              {
                repo = <a href={data.linkrepo}>[code]</a>
              }
              return (
                <li
                  key={`projects_${index}`}
                  style={{ listStyleType: "none", marginLeft: "-22%" }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      verticalAlign: "middle",
                      alignItems: "middle",
                      border: "black",
                      marginBottom: "5%",
                    }}
                  >
                    <div
                      className="zoom"
                      style={{
                        flexGrow: 1,
                        width: "30%",
                        marginRight: "5%",
                        marginLeft: "2%",
                        justifyContent: "center",
                      }}
                    >
                      {image}
                    </div>
                    <div style={{ width: "70%" }}>
                      <h3 style={{ margin: "0% 0 2% 0" }}>
                        {data.name} {demo} {repo}
                      </h3>
                      <p>{data.description}</p>
                      <p>
                        Keywords: <strong>{data.keywords}</strong>
                      </p>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
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
