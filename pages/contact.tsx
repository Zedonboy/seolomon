import PageBanner from '../components/Sections/PageBanner';
import Layout from '../components/_App/Layout';
import ContactForm from '../components/Contact/ContactForm';
import { API_URL } from '../config/api';
export default function ContactPage({site}) {
    return (
        <Layout siteData={site}>
            <PageBanner data={{
                pageName: "Contact"
            }}/>
             <div className="contact-info-area pt-100 pb-70">
                <div className="container">
                    {/* <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="contact-info-box">
                                <div className="back-icon">
                                    <i className='bx bx-map'></i>
                                </div>
                                <div className="icon">
                                    <i className='bx bx-map'></i>
                                </div>
                                <h3>Our Address</h3>
                                <p>Canada</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="contact-info-box">
                                <div className="back-icon">
                                    <i className='bx bx-phone-call'></i>
                                </div>
                                <div className="icon">
                                    <i className='bx bx-phone-call'></i>
                                </div>
                                <h3>Contact</h3>
                                <p>Mobile: <a href="tel:+44457895789">(+44) - 45789 - 5789</a></p>
                                <p>E-mail: <a href="mailto:hello@mibix.com">hello@mibix.com</a></p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div className="contact-info-box">
                                <div className="back-icon">
                                    <i className='bx bx-time-five'></i>
                                </div>
                                <div className="icon">
                                    <i className='bx bx-time-five'></i>
                                </div>
                                <h3>Hours of Operation</h3>
                                <p>Monday - Friday: 09:00 - 20:00</p>
                                <p>Sunday & Saturday: 10:30 - 22:00</p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

            <ContactForm />
        </Layout>
    )
}

export async function getServerSideProps() {
    let resp = await fetch(`${API_URL}/site`, {
      method: "GET",
    });
  
    if (resp.status === 200) {
      let site = await resp.json()
  
      return {
        props: {
          site
        },
      };
    } else {
      return {
        notFound:true,
        props: {},
      };
    }
  }
  