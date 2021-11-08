import React, { useContext } from 'react'
import { Header, Footer } from '../../components/navbar/index'
import { topNav, content, footer } from '../Match.module.css'
import { inputStyle1, button, main } from '../Onboarding.module.css'
import { useHistory } from "react-router-dom";
import { Context } from '../../store/store'

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

                        <div className="row mt-5">
                            <div className="col text-left mx-auto">
                                <h6>What Language(S)
                                </h6>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col text-left mx-auto">
                                <h6>
                                    Do You Normally Speak?</h6>
                            </div>
                        </div>

                        <div className="row mb-4 mt-3">
                            <input
                                className={`${inputStyle1} p-2 
                             shadow form-control d-flex justify-content-start align-items-center`}
                                placeholder='Primary Language ' />
                        </div>

                        <div className="row mb-4">
                            <input
                                className={`${inputStyle1} p-2 
                             shadow form-control d-flex justify-content-start align-items-center`}
                                placeholder='Secondary Language' />                        </div>

                        <div className="row align-items-center">
                            <div className="col-auto mx-auto mt-3 pt-3">
                                <button className={`shadow ${button}`} onClick={next}>
                                    <h3 className='text-center text-capitalize'>next</h3></button>
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
