import React from "react"
import { graphql } from 'gatsby'
import styles from '../components/products.module.css'
import Layout from '../components/layout'
import Image from 'gatsby-image'
import { Link } from 'gatsby'



const products = ({data}) => {
  const products = data.allContentfulProduct.nodes
  
  return (
    <Layout>
      <section className = {styles.page}>
        {products.map(product => {
        return <article key={product.id}>
          <Image fluid={product.image.fluid} alt={product.title}/>
        <h3>{product.title}<span>${product.price}</span></h3>
        <Link to={`/products/${product.slug}`}>more details</Link>
        </article>
        })}
      </section>
    </Layout>
  )
}

export const query = graphql`
{
  allContentfulProduct {
    nodes {
      image {
        fluid {
          src
        }
      }
      id
      price
      title
      info {
        info
      }
      slug
    }
  }
}
`

export default products
