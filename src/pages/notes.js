import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import SEO from "../components/seo"

export default function Notes({data})
{
    return (
        <Layout title="notes">
        <SEO title="Notes" />

        <p>This is a collection of notes on courses that I've taken in the past as a CS student at University of Waterloo, as well as other stuff that I've been learning about. They are by no means comprehensive or well-formatted. </p> 


        {/* <h1 css={css`display: inline-block;border-bottom: 1px solid;`}>
        Notes
        </h1> */}
        {/* <h4>{data.allMarkdownRemark.totalCount} Posts</h4> */}
        {data.allMarkdownRemark.edges.filter(function({node}) {
          if (node.frontmatter.type === 'note') { return true }
          else  { return false 
          }}).map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
            <h2
              css={css`
                margin-bottom: ${rhythm(1 / 4)};
              `}
            >
              {node.frontmatter.title}{" "}
              {/* <span
                css={css`
                  color: #bbb;
                `}
              >
                — {node.frontmatter.date}
              </span> */}
            </h2>
            {/* <p>{node.excerpt}</p> */}
            <small>
              <p style={{marginBottom:"0%"}}>{node.wordCount.words} words — <em>{node.frontmatter.date}</em></p>
              <p>Tags: <strong>{node.frontmatter.tags}</strong></p>
            </small>
            </Link>
          </div>
        ))}

        </Layout>
    )
}

export const query = graphql`
    query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            totalCount
            edges {
              node {
                id
                frontmatter {
                  title
                  date(formatString: "DD MMMM, YYYY")
                  type
                  tags
                }
                wordCount {
                  words
                }
                fields {
                  slug
                }
                excerpt
              }
            }
          }
    }
  `
  
