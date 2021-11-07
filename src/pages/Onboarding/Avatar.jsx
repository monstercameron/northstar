import React, { useContext } from 'react'
import { Header, Footer } from '../../components/navbar/index'
import { topNav, content, footer } from '../Match.module.css'
import { inputStyle1, button, main, avatar } from '../Onboarding.module.css'
import { useHistory } from "react-router-dom";
import { Context } from '../../store/store'

//import ze birds
import bird1 from '../../media/images/bird1.png'
import bird2 from '../../media/images/bird2.png'
import bird3 from '../../media/images/bird3.png'
import bird4 from '../../media/images/bird4.png'
import bird5 from '../../media/images/bird5.png'
import bird6 from '../../media/images/bird6.png'

export default function Basic() {

    const { store, actions: { next } } = useContext(Context)

    let history = useHistory();
    const goBack = () => {
        history.goBack();
    };


    return (<div className={`container-fluid m-0 p-0 ${main}`}>
        <div className={topNav}>
            <div className='p-2' onClick={goBack}>
                <span className="material-icons" style={{ fontSize: '2em' }}>
                    arrow_back
                </span>
            </div>
        </div>
        <div className={content}>
            <div className='container'>
                <div className="row">
                    <div className="col-10 mx-auto">

                        <div className="row mt-1">
                            <div className="col-7 text-center mx-auto">
                                <h3>PICK YOUR
                                    AVATAR
                                </h3>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col text-center mx-auto">
                                <h6>Having an anonymous avatar until you find an authentic buddy match!
                                    <p />
                                    Please pick the one that best suits you.
                                </h6>
                            </div>
                        </div>

                        <div className={`row mb-5 mt-3 ${avatar}`}>
                            <div className={`shadow p-3`}>
                                <img src={bird1} className='img-fluid h-100' alt="" />
                            </div>
                            <div className={`shadow p-3`}>
                                <img src={bird2} className='img-fluid h-100' alt="" />
                            </div>
                            <div className={`shadow p-3`}>
                                <img src={bird3} className='img-fluid h-100' alt="" />
                            </div>
                            <div className={`shadow p-3`}>
                                <img src={bird4} className='img-fluid h-100' alt="" />
                            </div>
                            <div className={`shadow p-3`}>
                                <img src={bird5} className='img-fluid h-100' alt="" />
                            </div>
                            <div className={`shadow p-3`}>
                                <img src={bird6} className='img-fluid h-100' alt="" />
                            </div>
                        </div>

                        <div className="row mt-0">
                            <div className="col text-center mx-auto">
                                <h6>
                                    We want you to have the opportunity to connect with
                                    people at the workplace based on common interests!
                                </h6>
                            </div>
                        </div>

                        <div className="row align-items-center">
                            <div className="col-auto mx-auto mt-2 pt-1">
                                <span className="material-icons text-center" onClick={next} style={{ fontSize: '4em' }}>
                                    arrow_circle_right
                                </span>
                            </div>
                        </div>

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
