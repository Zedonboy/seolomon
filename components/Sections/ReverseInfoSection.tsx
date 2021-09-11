import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import {motion, useAnimation} from "framer-motion"
interface InfoSection {
    cover: any,
    title: string,
    preText: string,
    secondaryText:string,
    actionBtnLink:string,
    actionBtnText:string
}
const RInfoSection = (props : {data : InfoSection}) => {
    let ref = useRef()
    let imgControl = useAnimation()
    let textControl = useAnimation()
    useEffect(() => {
        let observer = new IntersectionObserver((e, o) => {
            e.forEach(entry => {
                if(entry.isIntersecting){
                    imgControl.start({
                        x:0,
                        opacity: 1,
                        transition: {
                            delay: 0.5,
                            duration: 1
                        }
                    })

                    textControl.start(
                        {
                            x:0,
                            opacity: 1,
                            transition: {
                                delay: 0.5,
                                duration: 1
                            }
                        }
                    )
                }
            })
        }, {
            root: null,
            rootMargin: "0px",
            threshold: [0, 1.0]
        })

        if(ref.current){
            observer.observe(ref.current)
        }

        return () => {
            observer.unobserve(ref.current)
        }
    }, [])
    return (
        <div ref={ref} className="project-start-area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    
                    <motion.div initial={{
                        x: -10,
                        opacity:0
                    }} animate={textControl} className="col-lg-6 col-md-12">
                        <div className="project-start-content">
                            <span className="sub-title">{props?.data?.preText}</span>
                            <h2>{props?.data?.title}</h2>
                            <p>{props?.data?.secondaryText}</p>
                            
                            <Link href={props?.data?.actionBtnLink || ""}>
                                <a className="default-btn">{props?.data?.actionBtnText}</a>
                            </Link>
                        </div>
                    </motion.div>
                    <motion.div initial={{
                        x: 10,
                        opacity: 0
                    }} animate={imgControl} className="col-lg-6 col-md-12">
                        <div className="project-start-image rounded-3xl overflow-hidden">
                            <img className="rounded-3xl" src={props?.data?.cover?.url} alt="image" />
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="shape2"><img src="/images/shape/shape2.png" alt="image" /></div>
            <div className="shape3"><img src="/images/shape/shape3.png" alt="image" /></div>
            <div className="shape5"><img src="/images/shape/shape5.png" alt="image" /></div>
            <div className="shape6"><img src="/images/shape/shape6.png" alt="image" /></div>
            <div className="shape7"><img src="/images/shape/shape7.png" alt="image" /></div>
            <div className="shape13"><img src="/images/shape/shape13.png" alt="image" /></div>
        </div>
    )
}

export default RInfoSection;