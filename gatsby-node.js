/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`)

const { createFilePath } = require(`gatsby-source-filesystem`)
const { notEqual } = require("assert")
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark` && node.frontmatter.type === `blog`) {
    const slug = createFilePath({ node, getNode, basePath: `pages/blog-posts` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
  if (node.internal.type === `MarkdownRemark` && node.frontmatter.type === `note`) {
    const slug = createFilePath({ node, getNode, basePath: `pages/notes-posts` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              type
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    if (node.frontmatter.type === `blog`)
    {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/blog-post.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.fields.slug,
        },
      })
    }
    if (node.frontmatter.type === `note`)
    {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/note-post.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.fields.slug,
        },
      })
    }
  })
}



// // You can delete this file if you're not using it
// exports.onCreateWebpackConfig = ({ actions }) => {
//     actions.setWebpackConfig({
//       node: {
//         fs: 'empty',
//         child_process: 'empty',
//         module: "empty",
//         net: "empty",
//         tls: "empty"
//       }
//     })
//   }