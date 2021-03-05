import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div style={{textAlign:"center"}}>

      <StaticImage
        src="../images/hidden-workforce.png"
        width={470}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Hidden Workforce - Tech Skills Network"
        style={{ marginBottom: `1.45rem` }}
      />

      <p>Hidden Workforce is a network of contract/freelance software developers, architects &amp; testers.</p>
      <p>Our members can scale up for larger projects, and add credibility to contractual substitution clauses.</p>
      <p>This means we all remain independent, whilst being able to move beyond personal service if required.</p>




    </div>

  </Layout>
)

export default IndexPage
