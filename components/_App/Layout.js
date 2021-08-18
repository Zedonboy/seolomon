import React from 'react'
import Head from "next/head"
import GoTop from './GoTop'

const Layout = ({ children }) => {
    return(
        <>
            <Head>
                <title>Seolomon - AI SEO content writer</title>
                <link rel="shortcut icon" type="image/png" href="/favicon.png"/>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="Seolomon - AI SEO content writer" />
                <meta name="og:title" property="og:title" content="Seolomon - AI SEO content writer"></meta>
                <meta name="twitter:card" content="Seolomon - AI SEO content writer"></meta>
                <link rel="canonical" href="https://seolomon.vercel.app/"></link>
            </Head>

            {children}
  
            <GoTop scrollStepInPx="100" delayInMs="10.50" />
        </>
    );
}

export default Layout;