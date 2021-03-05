import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div style={{textAlign:"center", fontFamily:"Helvetica,sans-serif", fontSize:"2em", lineHeight: "1em"}}>

      <StaticImage
        src="../images/hidden-workforce.png"
        width={470}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Hidden Workforce - Tech Skills Network"
        style={{ marginBottom: `1.45rem` }}
      />

      <p>Hidden Workforce is a network of contract &amp; freelance software developers, architects &amp; testers.</p>

    </div>

  </Layout>
)

export default IndexPage
