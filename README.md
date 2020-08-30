# justinleung.me | Justin Leung's website

## Build instructions
At the root directory, run `npm run build` to install dependencies, then run `gatsby develop` to start modifying the site at `localhost:8000` with hot reload capability.

The source code is hosted on the `source` branch, and the compiled build is on the `master` branch, which is then served on Github pages and my custom domain. Therefore, I push all my commits to `source`, not `master` (this is just a note for myself). 

To deploy the website on Github pages / custom domain, run `npm run deploy`. 

## How the website works

I built the website with Gatsby.js, a static site generator which uses React.js and GraphQL.

I template my resume data in YAML, a human-readable "markup" language. I used the Gatsby plugin `gatsby-transformer-yaml` to fetch the data via GraphQL queries, which I render in my pages.  

To write blog posts and post my notes, I used `gatsby-transformer-remark`, which parses Markdown files. The plugin `gatsby-remark-katex` allows for KaTeX math integration, which is a must have for notes. I used the plugin `gatsby-remark-prism` to enable syntax highlighting for code in my notes/articles.

I deploy the website with `npm run deploy`, which creates a build on the `master` branch. I store the source code on the `source` branch. I registered the [justinleung.me](https://justinleung.me) domain on NameCheap, which gives out a free 1-year .me domain to students.
