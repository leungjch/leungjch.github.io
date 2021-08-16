import React, { useState } from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import SEO from "../components/seo"
import { Page } from "react-pdf"
import { Document } from "react-pdf/dist/esm/entry.webpack"
import DocView from "../components/docView"

import { pdfjs } from "react-pdf"
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

export default function Resume({ data }) {
  return (
    <Layout title="resume">
      <SEO title="Resume" />
      <DocView
        style={{ width: "300" }}
        src="https://github.com/leungjch/resume/raw/master/Resume_JustinLeung.pdf"
      ></DocView>
    </Layout>
  )
}
