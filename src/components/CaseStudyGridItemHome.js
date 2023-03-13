import React from 'react'
import Link from 'next/link'
import { gql } from '@apollo/client';
import { myClient } from '../lib/apollo-client';
import Image from 'next/image';

export default function CaseStudyGridItemHome({post}) {
  const slug = 'posts/' + post.slug;
  return (
    <Link href={slug}>
        <div className='pb-[100%] relative group'>
            <Image src={post.caseStudyFields.featuredImage.sourceUrl} alt={post.caseStudyFields.featuredImage.altText} layout='fill' objectFit='cover' className='absolute top-0 left-0 w-full h-full'></Image>
            <div className='flex items-end p-8 bg-black-opaque absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out'>
                <h4 className='text-2xl font-medium'>{post.title}</h4>
            </div>
        </div>
    </Link>
  )
}

// export async function getStaticProps({ params = {} } = {}) {
//   const { postSlug } = params;
//   const data = await myClient.query({
//     query: gql`
//     query GetPostById($id: ID!) {
//       caseStudy(id: $id, idType: DATABASE_ID) {
//         title
//         uri
//         slug
//         }
//       }
//     }
//     `,
//     variables: {
//       slug: postSlug
//     }
//   });

//   const post = data?.data.caseStudy;
//   console.log(post);

//   if ( !post ) {
//     return {
//       props: {},
//       notFound: true
//     }
//   }

//   return {
//     props: {
//       post
//     }
//   }
// }