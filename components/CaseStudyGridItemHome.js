import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { gql } from '@apollo/client';
import { getApolloClient } from '../lib/apollo-client';
import Image from 'next/image';

export default function CaseStudyGridItemHome({ post }) {
  return (
    <Link href={post.uri} >
        <div className='pb-[100%] relative group'>
            <Image src='' alt='' layout='fill' objectFit='cover' className='absolute top-0 left-0 w-full h-full'></Image>
            <div className='bg-black-opaque absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100'>
                <h4 className='mt-auto'>{post.title}</h4>
            </div>
        </div>
    </Link>
  )
}