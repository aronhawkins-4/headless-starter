import Head from 'next/head'
import Link from 'next/link'
import { gql } from '@apollo/client';

import client from '../lib/apollo-client';


export default function Post() {
  return (
    <div></div>
    // <div className={styles.container}>
    //   <Head>
    //     <title>{ post.title }</title>
    //     <meta name="description" content={`Read more about ${post.title} on ${site.title}`} />
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>

    //   <main className={styles.main}>
    //     <h1 className={styles.title}>
    //       { post.title }
    //     </h1>

    //     <div className={styles.grid}>
    //       <div className={styles.content} dangerouslySetInnerHTML={{
    //         __html: post.content
    //       }} />
    //     </div>

    //     <p className={styles.backToHome}>
    //       <Link href="/">
    //         <a>
    //           &lt; Back to home
    //         </a>
    //       </Link>
    //     </p>
    //   </main>
    // </div>
  )
}
