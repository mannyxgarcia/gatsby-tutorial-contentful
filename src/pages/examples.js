import Header from '../examples/Header'
import React from 'react'
import Layout from '../components/layout'
import {graphql} from 'gatsby'

const examples = ({data}) => {
  const {site:{info:{author}}} = data
  return (
    <div>
      <Layout>
      <h1>Hello from Examples page</h1>
      <Header/>
      <h5>author: {author}</h5>
      </Layout>
    </div>
  )
}

export const data = graphql`
query MyQuery {
  site {
    info:siteMetadata {
      title
      description
      author
      data
      person {
        name
        age
      }
    }
  }
}`
export default examples
