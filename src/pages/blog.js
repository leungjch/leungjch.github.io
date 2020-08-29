import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"

export default function Blog({data})
{
    return (
        <Layout>
        <h1 css={css`display: inline-block;border-bottom: 1px solid;`}>
        Blog
        </h1>
        {/* <h4>{data.allMarkdownRemark.totalCount} Posts</h4> */}
        {data.allMarkdownRemark.edges.filter(function({node}) {
          if (node.frontmatter.type === 'blog') { return true }
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
            <small>
            <p style={{marginBottom:"0%"}}>{node.timeToRead} min read — <em>{node.frontmatter.date}</em></p>
            <p>Tags: <strong>{node.frontmatter.tags}</strong></p>

            </small>
            {/* <p>{node.excerpt}</p> */}
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
                timeToRead
                frontmatter {
                  title
                  date(formatString: "DD MMMM, YYYY")
                  type
                  tags
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
  