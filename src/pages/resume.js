import React, { useState } from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import SEO from "../components/seo"
import DocView from "../components/docView"

export default function Resume({ data }) {
  return (
    <Layout title="resume">
      <SEO title="Resume" />
      <DocView
        style={{ width: "300" }}
        url="https://github.com/leungjch/resume/raw/master/resume-justin-leung.pdf"
      ></DocView>
    </Layout>
  )
}
