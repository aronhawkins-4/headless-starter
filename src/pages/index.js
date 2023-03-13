
import { gql } from '@apollo/client';
import { myClient } from '../lib/apollo-client';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import Image from 'next/image';
import Link from 'next/link';

import Button from '../components/Button';
import CaseStudyGridItemHome from '../components/CaseStudyGridItemHome';

import heroImage1 from '../../public/images/matt_filming.jpg';
import hollyTyping from '../../public/images/holly_typing.jpg';
import cameraSetup from '../../public/images/camera_setup.jpg';


export default function Home({ posts }) {
  return (
    <div>
       <main>
        <section className="grid grid-cols-2 min-h-screen">
          <div className='py-24 px-16 flex flex-col justify-center gap-8'>
            <h1 className="font-medium text-6xl leading-tight">We provide brand strategy and content creation for your growing business.</h1>
            <h3 className="font-normal text-5xl leading-tight">Think of us as your own creative department.</h3>
            <Button text='Start Here' />
          </div>
          <div className='relative'>
            <Image src={heroImage1} alt="test" layout='fill' objectFit='cover' className='object-center'></Image>
          </div>
        </section>
        <section className='flex flex-col p-24 align-center justify-center gap-16'>
          <div className='flex flex-col gap-4 text-center'>
            <h3 className="font-normal text-5xl leading-tight">Case Studies &amp; Portfolio</h3>
            <h2 className='font-medium text-9xl'>Recent Work</h2>
          </div>
          <div className='grid grid-cols-2 gap-8'>
          {
            posts.map((post) => {
              return (
                <CaseStudyGridItemHome key={post.id} post={post} />
              )
            })
          }
          </div>
        </section>
        <section className='grid grid-cols-2'>
          <div className='relative pb-[66%] flex justify-center items-center'>
            <Image src={hollyTyping} alt="test" layout='fill' objectFit='cover' className='object-center'></Image>
            <h2 className='absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-1 text-9xl font-medium'>FAQ</h2>
          </div>
          <Link href='/services' >
          <div className='relative pb-[66%] flex justify-center items-center'>
            <Image src={cameraSetup} alt="test" layout='fill' objectFit='cover' className='object-center'></Image>
            <h2 className='absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-1 text-9xl font-medium'>Services</h2>
          </div>
          </Link>
          

        </section>
      </main>
    </div>
  )
}

export async function getStaticProps() {

  const data = await myClient.query({
    query: gql`
    query GetPostGrid {
      caseStudies {
        nodes {
          id
          title
          uri
          slug
          caseStudyFields {
            featuredImage {
              sourceUrl
              altText
            }
          }
        }
      }
    }
    `,
  });

  const posts = data?.data.caseStudies.nodes;

  return {
    props: {
      posts
    }
  }
}