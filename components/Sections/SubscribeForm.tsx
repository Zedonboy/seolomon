import React, { useCallback, useState } from 'react';
import { API_URL } from '../../config/api';

interface SubscribeSection {
    text1:string
    text2:string
    text3:string
    gradientStart:string
    gradientEnd:string
}
const SubscribeForm = (props : {data : SubscribeSection}) => {
    let [email, setEmail] = useState("")
    let [submitSuccess, setSubmitSuccess] = useState(false)
    let onSubmit = useCallback((e) => {
        fetch(`${API_URL}/mail-subscribers`, {
            method: "POST",
            body: JSON.stringify({
                email
            })
        }).then(r => {
            if(r.status === 200){
                setSubmitSuccess(true)
            }
        })
    }, [email])
    return (
        <div style={{backgroundImage: `linear-gradient(to right, ${props?.data?.gradientStart || ""}, ${props?.data?.gradientEnd || ""});`}} className="subscribe-area ptb-100">
            <div className="container">
                <div className="subscribe-content">
                    <span className="sub-title">{props?.data?.text1}</span>
                    <h2>{props?.data?.text2}</h2>
                    <p>{props?.data?.text3}</p>
                    
                    {submitSuccess ? (
                        <p className="text-3xl text-green-500">We will keep you updated!</p>
                    ) : (
                        <form onSubmit={onSubmit} className="newsletter-form">
                        <input value={email} onChange={e => {
                            setEmail(e.target.value)
                        }} type="text" className="input-newsletter" placeholder="Enter your email address" name="EMAIL" required />
                        <button type="submit" className="default-btn">Subscribe Now</button>
                    </form>
                    )}
                    
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