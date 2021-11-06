import React from 'react'
import { Header, Footer } from '../components/navbar/index'
import { topNav, content, footer } from './Match.module.css'
import {button, main} from './Onboarding.module.css'
export default function Onboarding() {
    return (
        <div className={`container-fluid m-0 p-0 ${main}`}>
            <div className={topNav}>
                {/* <Header /> */}
            </div>
            <div className={content}>
                <div className='container'>
                    <div className="row">
                        <div className="col ">
                            <img className='img-fluid' src="https://via.placeholder.com/400x300.png?text=Visit+WhoIsHostingThis.com+Buyers+Guide" alt="" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col mt-5"><h3 className='text-center
                        text-uppercase'>find your mentors and peers</h3></div>
                    </div>
                    <div className="row">
                        <div className="col mt-2">
                            <h6 className='text-center'>Find a mentor or be a mentor-connect whith peers in your community</h6></div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-4 mx-auto mt-5 pt-5">
                            <button className={`shadow ${button}`}>
                                <h3 className='text-center text-capitalize'>next</h3></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={footer}>
                {/* <Footer /> */}
            </div>
        </div>
    )
}

//https://via.placeholder.com/728x90.png?text=Visit+WhoIsHostingThis.com+Buyers+Guide

