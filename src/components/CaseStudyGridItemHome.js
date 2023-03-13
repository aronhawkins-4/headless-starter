import React from 'react'
import Link from 'next/link'
import { gql } from '@apollo/client';
import { client } from '../lib/apollo-client';
import Image from 'next/image';

export default function CaseStudyGridItemHome({ post }) {
  const slug = 'posts/' + post.slug;
  return (
    <Link href={slug}>
        <div className='pb-[100%] relative group'>
            <Image src={post.featuredImage.node.sourceUrl} alt={post.featuredImage.node.altText} layout='fill' objectFit='cover' className='absolute top-0 left-0 w-full h-full'></Image>
            <div className='flex items-end p-8 bg-black-opaque absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out'>
                <h4 className='text-2xl font-medium'>{post.title}</h4>
            </div>
        </div>
    </Link>
  )
}

export async function getStaticProps({ params = {} } = {}) {
  const { postSlug } = params;
  const data = await client.query({
    query: gql`
    query GetPostById($id: ID!) {
      postBy(id: $id, idType: DATABASE_ID) {
        title
        uri
        slug
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
    `,
    variables: {
      slug: postSlug
    }
  });

  const post = data?.data.postBy;
  console.log(post);

  if ( !post ) {
    return {
      props: {},
      notFound: true
    }
  }

  return {
    props: {
      post
    }
  }
}