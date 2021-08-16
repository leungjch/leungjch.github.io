import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import SEO from "../components/seo"
import Image from "../components/image"

export default function Work({ data }) {
  const basicInfo = data.basicInfoYaml.basic_info
  const work = data.workYaml.work
  const projects = data.projectsYaml.projects

  console.log(basicInfo, work, projects)
  return (
    <Layout title="work">
      <SEO title="Work" />

      <div style={{ marginRight: "10%" }}>
        {/* <h2> {basicInfo.email} </h2> */}

        <div id="work">
          <ul style={{ margin: "1%" }}>
            {work.map((data, index) => {
              return (
                <li key={`work_${index}`} style={{ listStyleType: "none" }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      verticalAlign: "middle",
                      alignItems: "middle",
                      marginBottom: "3%",
                    }}
                  >
                    <div
                      style={{
                        flexGrow: 1,
                        width: "10%",
                        marginRight: "2%",
                        marginLeft: "2%",
                      }}
                    >
                      <Image
                        filename={data.img}
                        maxHeight={"15vh"}
                        imgStyle={{
                          objectFit: "scale-down",
                          objectPosition: "left",
                          borderWidth: "5px",
                          borderColor: "black",
                        }}
                      />
                    </div>

                    <div style={{ width: "90%" }}>
                      <div style={{ marginBottom: "5%" }}>
                        <h3>{data.place}</h3>
                        <div style={{ float: "right" }}>
                          <h4>{data.duration}</h4>
                        </div>
                        <div>
                          <h4>{data.position}</h4>
                        </div>
                        <div style={{ float: "right" }}>
                          <h4>{data.location}</h4>
                        </div>
                      </div>
                      <div style={{ margin: "3%", marginTop: "1%" }}>
                        <p>{data.summary}</p>
                      </div>
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
        location
        img
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
