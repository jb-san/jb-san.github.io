import React from "react"
import Layout from "gatsby-theme-blog/src/components/layout"
import { Styled } from "theme-ui"
export default function projects(props) {
  return (
    <Layout title={"X3M"} {...props}>
      <Styled.h1>Projects</Styled.h1>
    </Layout>
  )
}
