import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    items: 1,
    navText: [
        "<i class='flaticon-back'></i>",
        "<i class='flaticon-chevron'></i>"
    ]
};

interface TestimonialItem {
    name:string
    occupation: string
    profile:any
    message:string
}
interface TestimonialSection {
    text1:string
    text2:string
    children:TestimonialItem[]
}
const TestimonialStyleOne = (props : {data:TestimonialSection}) => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <div className="testimonials-area">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-7 col-md-12">
                        <div className="testimonials-content">
                            <span className="sub-title">{ props.data.text1 || "Testimonials"}</span>
                            <h2>{props.data.text2}</h2>

                            {display ? <OwlCarousel 
                            //@ts-ignore
                                className="testimonials-slides owl-carousel owl-theme"
                                {...options}
                            >
                                {props.data.children.map(v => (
                                    <div className="single-testimonials-item">
                                    <p>{v.message}</p>

                                    <div className="client-info">
                                        <div className="d-flex align-items-center">
                                            <img src="/images/user1.jpg" alt="image" />
                                            <div className="title">
                                                <h3>{v.name}</h3>
                                                <span>{v.occupation}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                ))}
                                

                               
                            </OwlCarousel> : ''}
                        </div>
                    </div>

                    <div className="col-lg-5 col-md-12">
                        <div className="testimonials-image">
                            <img src="/images/testimonials-img.jpg" alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialStyleOne;