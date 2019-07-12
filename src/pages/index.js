import React from "react"
import Layout from "../components/layout"

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <h1>Dashboard Home</h1>
      <p>Todo, add data dump from trello.</p>
    </Layout>
  )
}
