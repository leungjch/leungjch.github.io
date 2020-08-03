# justinleung.me

## How the website works

I built the website with Gatsby.js, a static site generator which uses React.js and GraphQL.

I templated my resume data in YAML, a human-readable "markup" language. I used the Gatsby plugin `gatsby-trasnformer-yaml` to fetch the data via GraphQL queries, which I render in my pages.  

I deploy the website with`npm run deploy`, which creates a build on the `master` branch. I store the source code on the `source` branch. I registered the [justinleung.me](justinleung.me) domain on NameCheap, which gives out a free 1-year .me domain to students.

