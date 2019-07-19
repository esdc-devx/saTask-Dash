import React from "react"
import Layout from "../components/layout"

export default ({ data }) => {
    console.log(data)
    return (
      <Layout>
        <h1>Page Not Found (404)</h1>
        <p>The page you are looking for couldn't be found.</p>
      </Layout>
    )
  }