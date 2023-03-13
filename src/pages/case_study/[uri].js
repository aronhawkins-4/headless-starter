import Head from 'next/head'
import { gql } from '@apollo/client'
import { myClient } from '../../lib/apollo-client'
import Image from 'next/image'
import Button from 'src/components/Button'


export default function CaseStudy({post}) {
  var i=0;
  return (

    <div>
      <Head>
        <title>{ post.title }</title>
        <meta name="description" content={`Read more about ${post.title}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <div className='relative w-full h-96'>
            <Image src={post.caseStudyFields.featuredImage.sourceUrl} alt={post.caseStudyFields.featuredImage.altText} layout='fill' objectFit='cover'></Image>
        </div>
        <div className='p-24 pb-16 grid grid-cols-3'>
            <div className='col-span-2'>
                <h1 className='text-7xl font-medium'>{post.title}</h1>
                <h2 className='text-2xl'>{post.caseStudyFields.category}</h2>
            </div>
            <div className='col-span-1'>
                <ul className='list-style-none'>
                    {
                      post.caseStudyFields.services.map((service) => {
                            return (
                                <li key={i++} className='text-xl'>{service}</li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className='mt-8'>
                <Button text='home' link='/'></Button>
            </div>

          
        </div>
        
      </main>
    </div>
  )
}

export async function getStaticProps({ params }) {
  const GET_CASE_STUDY_BY_URI = gql`
    query GetPostGrid($id: ID!) {
      caseStudy(id: $id, idType: URI) {
        title
        uri
        caseStudyFields {
          featuredImage {
            sourceUrl
            altText
          }
          image1 {
            altText
            sourceUrl
          }
          image2 {
            altText
            sourceUrl
          }
          image3 {
            altText
            sourceUrl
          }
          quote
          services
          category
        }
      }
    }
    `
  const response = await myClient.query({
    query: GET_CASE_STUDY_BY_URI,
    variables: {
      id: params.uri
    }
  })
  const post = response?.data?.caseStudy
  return {
    props: {
      post
    }
  }
}
export async function getStaticPaths() {
  const paths = []
  return {
    paths,
    fallback: 'blocking'
  }
}