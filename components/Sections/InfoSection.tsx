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
const InfoSection = (props : {data : InfoSection}) => {
    const ref = useRef()
    const controls = useAnimation()
    const textControl = useAnimation()
    useEffect(() => {
        let observer = new IntersectionObserver((e, o) => {
            e.forEach(entry => {
                if(entry.isIntersecting){
                    controls.start({
                        x:0,
                        opacity: 1,
                        transition: {
                            delay: 0.6,
                            duration: 1
                        }
                    })

                    textControl.start(
                        {
                            x:0,
                            opacity: 1,
                            transition: {
                                delay: 0.6,
                                duration: 1
                            }
                        }
                    )
                }
            })
        }, {
            root : null,
            rootMargin: "0px",
            threshold: [0, 1.0]
        })

        if(ref.current){
            observer.observe(ref.current)
        }
    }, [])
    return (
        <div ref={ref} className="project-start-area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <motion.div initial={{
                            x: -10,
                            opacity: 0
                        }} animate={controls} className="project-start-image rounded-3xl overflow-hidden">
                            <img className="rounded-3xl" src={props?.data?.cover?.url} alt="image" />
                        </motion.div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <motion.div initial={{
                            x: 10,
                            opacity: 0
                        }} animate={textControl} className="project-start-content">
                            <span className="sub-title">{props?.data?.preText}</span>
                            <h2>{props?.data?.title}</h2>
                            <p>{props?.data?.secondaryText}</p>
                            
                            <Link href={props?.data?.actionBtnLink || ""}>
                                <a className="default-btn">{props?.data?.actionBtnText}</a>
                            </Link>
                        </motion.div>
                    </div>
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

export default InfoSection;