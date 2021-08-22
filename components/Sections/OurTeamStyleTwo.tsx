import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    margin: 30,
    navText: [
        "<i class='flaticon-back'></i>",
        "<i class='flaticon-chevron'></i>"
    ],
    responsive: {
        0: {
            items: 1,
        },
        576: {
            items: 2,
        },
        768: {
            items: 2,
        },
        992: {
            items: 4,
        }
    }
};

interface Member {
name: string
role:string
profile:any
}
interface TeamSection {
    text1:string
    text2:string
    text3:string
    children : Member[]
}

const OurTeamStyleTwo = (props : {data : TeamSection}) => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <div className="team-area-two ptb-100">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">{props.data.text1}</span>
                    <h2>{props.data.text2}</h2>
                    <p>{props.data.text3}</p>
                </div>

                {display ? <OwlCarousel 
                //@ts-ignore
                    className="team-slides owl-carousel owl-theme"
                    {...options}
                >
                    {props.data.children.map(v => (
                        <div className="single-team-member">
                        <div className="image">
                            <img src={v.profile.url} alt="team-image" />

                            <ul className="social-link">
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-twitter'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-instagram'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
                            </ul>
                        </div>

                        <div className="content">
                            <h3>{v.name}</h3>
                            <span>{v.role}</span>
                            <i className="flaticon-share-icon"></i>
                        </div>
                    </div>
                    ))}
                   
                </OwlCarousel> : ''}
            </div>

            <div className="shape17">
                <img src="/images/shape/shape17.png" alt="image" />
            </div>
        </div>
    )
}

export default OurTeamStyleTwo;