import React from 'react';
import NavbarStyleTwo from '../components/_App/NavbarStyleTwo';
import PageBanner from '../components/Common/PageBanner';
// import Footer from '../components/Sections/Footer';
import Link from 'next/link';
import Layout from "../components/_App/Layout"

const Custom404 = () => {
    return (
        <Layout>			
			<PageBanner 
                pageTitle="404 Error" 
            />  
			 
			<div className="error-area ptb-100">
				<div className="container">
					<div className="error-content flex items-center flex-col">
						<img src="/images/error.png" alt="image" />
						<h3>Error 404 : Page Not Found</h3>
						<p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
						<Link href="/">
							<a className="default-btn">Back to Homepage</a>
						</Link>
					</div>
				</div>
			</div>
		</Layout>
    )
}

export default Custom404;