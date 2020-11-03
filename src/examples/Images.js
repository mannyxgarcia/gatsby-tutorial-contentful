import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
// import img from '../images/image1.jpeg'
import Image from 'gatsby-image'

const getImages = graphql`
{
  fixed: file(relativePath: {eq: "image1.jpeg"}) {
    childImageSharp{
      fixed{
        ...GatsbyImageSharpFixed
      }
    }
  }
  fluid: file(relativePath: {eq: "image2.jpeg"}) {
    childImageSharp{
      fluid{
        src
      }
    }
  }
}
`

const Images = () => {
  const data = useStaticQuery(getImages)
  console.log(data)
  return (
    <div>
    <Image fixed={data.fixed.childImageSharp.fixed}/>
    </div>
  )
}

export default Images
