import React from "react"
import { Link } from "gatsby"
import Layout from '../components/layout'

const blog = () => {
  return (
    <Layout>
      <h1>this is our blog page</h1>
      <br />
      <Link to="/">home</Link>
    </Layout>
  )
}

export default blog
