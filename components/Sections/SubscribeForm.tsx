import React from 'react';

interface SubscribeSection {
    text1:string
    text2:string
    text3:string
}
const SubscribeForm = (props : {data : SubscribeSection}) => {
    return (
        <div className="subscribe-area ptb-100">
            <div className="container">
                <div className="subscribe-content">
                    <span className="sub-title">{props.data.text1}</span>
                    <h2>{props.data.text2}</h2>
                    <p>{props.data.text3}</p>
                    
                    <form className="newsletter-form">
                        <input type="text" className="input-newsletter" placeholder="Enter your email address" name="EMAIL" required />
                        <button type="submit" className="default-btn">Subscribe Now</button>
                    </form>
                </div>
            </div>

            <div className="shape9"><img src="/images/shape/shape9.png" alt="image" /></div>
            <div className="shape10"><img src="/images/shape/shape10.png" alt="image" /></div>
            <div className="shape11"><img src="/images/shape/shape11.png" alt="image" /></div>
            <div className="shape12"><img src="/images/shape/shape12.png" alt="image" /></div>
        </div>
    )
}

export default SubscribeForm;