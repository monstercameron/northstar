import React from 'react'
import { main, topNav, content, footer } from './Match.module.css'
import Swipe from '../components/Swipe/index'
import {Header, Footer} from '../components/navbar/index'
import Matched from './../components/Matched/index'

export default function Match() {
    return (
        <div className={`container-fluid m-0 p-0 ${main}`}>
            <div className={topNav}>
                <Header />
            </div>
            <div className={content}>
                <Matched />
                <Swipe />
            </div>
            <div className={footer}>
                <Footer />
            </div>
        </div>
    )
}
