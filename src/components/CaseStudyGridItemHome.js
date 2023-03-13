import React from 'react'
import Link from 'next/link'
import Image from 'next/image';

export default function CaseStudyGridItemHome({post}) {
  return (
    <Link href={post.uri}>
        <div className='cursor-pointer pb-[100%] relative group'>
            <Image src={post.caseStudyFields.featuredImage.sourceUrl} alt={post.caseStudyFields.featuredImage.altText} layout='fill' objectFit='cover' className='absolute top-0 left-0 w-full h-full'></Image>
            <div className='flex items-end p-8 bg-black-opaque absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out'>
                <h4 className='text-2xl font-medium'>{post.title}</h4>
            </div>
        </div>
    </Link>
  )
}