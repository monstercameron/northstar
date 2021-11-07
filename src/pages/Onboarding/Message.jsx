import React, { useContext } from 'react'
import { Header, Footer } from '../../components/navbar/index'
import { topNav, content, footer } from '../Match.module.css'
import { button, main, message } from '../Onboarding.module.css'
import { useHistory } from "react-router-dom";
import { Context } from '../../store/store'

export default function Message() {

    const { store, actions } = useContext(Context)

    let history = useHistory();
    const next = () => history.push('/match')
    const goBack = () => {
        history.goBack();
    };


    return (<div className={`container-fluid m-0 p-0 ${main}`}>
        <div className={topNav}>
            <div className='p-3' onClick={goBack}>
                <span className="material-icons" style={{ fontSize: '2em' }}>
                    arrow_back
                </span>
            </div>
        </div>
        <div className={content}>
            <div className='container pt-5'>
                <div className="row">
                    <div className="col ">
                        {/* <i/mg className='img-fluid' src="https://via.placeholder.com/400x300.png?text=Visit+WhoIsHostingThis.com+Buyers+Guide" alt="" /> */}
                    </div>
                </div>
                <div className="row">
                    <div className="col-8 mx-auto mt-5">
                        <h3 className='text-center
                text-uppercase'>WE’VE GOT YOU IN
                            OUR SYSTEM
                        </h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-10 mx-auto mt-2">
                        <h5 className='text-center'>
                            Now let’s make you feel at home!
                        </h5>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-6 mx-auto mt-3 pt-5">
                        <button className={`shadow ${message}`} onClick={next}>
                            <h5 className='text-center text-capitalize'>Let’s Find
                                Fresh Faces!</h5></button>
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
