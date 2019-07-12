import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div id={'content'}>
      <Link to={`/`}>
        <h2 id={'title'}>{data.site.siteMetadata.title}</h2>
      </Link>
      {children}
    </div>
  )
}
