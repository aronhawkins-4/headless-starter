import Head from 'next/head';
import Link from 'next/link';
import { gql } from '@apollo/client';
import Image from 'next/image';
import Button from '../components/Button';
import heroImage1 from '../public/matt_filming.jpg';
import { client } from '../lib/apollo-client';
import styles from '../styles/Home.module.css'
import CaseStudyGridItemHome from '../components/CaseStudyGridItemHome';

export default function Home({ page }) {
  const { title, description } = page;
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* <section className="grid grid-cols-2 min-h-screen">
          <div className='py-24 px-16 flex flex-col justify-center gap-8'>
            <h1 className="font-medium text-6xl leading-tight">We provide brand strategy and content creation for your growing business.</h1>
            <h3 className="font-normal text-5xl leading-tight">Think of us as your own creative department.</h3>
            <Button text='Start Here' />
          </div>
          <div className='relative'>
            <Image src={heroImage1} alt="test" layout='fill' objectFit='cover'></Image>
          </div>
        </section>
        <section className='flex flex-col p-24 align-center justify-center'>
          <div className='flex flex-col gap-4 text-center'>
            <h3 className="font-normal text-5xl leading-tight">Case Studies &amp; Portfolio</h3>
            <h2 className='font-medium text-9xl'>Recent Work</h2>
          </div>
          <div className='grid grid-cols-2'>
            {
              posts.map((post) => {
                return (
                  <CaseStudyGridItemHome  />
                )
              })
            }
          </div> 
        </section> */}
      </main>
    </div>
)}


// export async function getStaticProps() {

// const GET_POSTS = gql`
//   query GetCaseStudies {
//     caseStudies {
//       nodes {
//         title
//         uri
//         id
//         caseStudyFields {
//           category
//           featuredImage {
//             sourceUrl
//           }
//         }
//       }
//     }
//   }
//   `;
// const response = await client.query({
//     query: GET_POSTS
// });

// const posts = response?.data?.CaseStudies?.nodes;
// console.log(posts);
// if ( !posts ) {
//   return {
//     props: {},
//     notFound: true
//   }
// }

// return {
//   props: {
//     posts
//   }
// }
// }
