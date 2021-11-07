import React, { useContext } from 'react'
import { Header, Footer } from '../../components/navbar/index'
import { topNav, content, footer } from '../Match.module.css'
import { input, button, main } from '../Onboarding.module.css'
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
                            <div className="col text-center mx-auto">
                                <h6>Here’s what we’ve found</h6>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col text-center mx-auto">
                                <h6>
                                    Is the information we have correct?</h6>
                            </div>
                        </div>

                        <div className="row mt-5 mb-4">
                            <button type="button" className={`${input} p-2 shadow btn btn-default btn-m d-flex justify-content-start align-items-center`}>
                                <div className={`inline-flex`}>
                                    <span className="material-icons">
                                        person
                                    </span>
                                </div>
                                <div className={`col justify-content-center text-capitalize`}>
                                    Tasha Bhatnagar
                                </div>
                                <div className={`inline-flex`}>
                                    <span className="material-icons">
                                        radio_button_checked
                                    </span>
                                </div>
                            </button>
                        </div>

                        <div className="row mb-4">
                            <button type="button" className={`${input} p-2  shadow btn btn-default btn-m d-flex justify-content-start align-items-center`}>
                                <div className={`inline-flex`}>
                                    <span className="material-icons">
                                        cake
                                    </span>
                                </div>
                                <div className={`col justify-content-center text-capitalize`}>
                                    October 29th 1997
                                </div>
                                <div className={`inline-flex`}>
                                    <span className="material-icons">
                                        radio_button_checked
                                    </span>
                                </div>
                            </button>
                        </div>

                        <div className="row mb-4">
                            <button type="button" className={`${input} p-2  shadow btn btn-default btn-m d-flex justify-content-start align-items-center`}>
                                <div className={`inline-flex`}>
                                    <span className="material-icons">
                                        public
                                    </span>
                                </div>
                                <div className={`col justify-content-center text-capitalize`}>
                                    Indian Citizen
                                </div> <div className={`inline-flex`}>
                                    <span className="material-icons">
                                        radio_button_unchecked
                                    </span>
                                </div>
                            </button>
                        </div>

                        <div className="row mb-4">
                            <button type="button" className={`${input} p-2  shadow btn btn-default btn-m d-flex justify-content-start align-items-center`}>
                                <div className={`inline-flex`}>
                                    <span className="material-icons">
                                        location_on
                                    </span>
                                </div>
                                <div className={`col justify-content-center text-capitalize`}>
                                    New York, NY
                                </div> <div className={`inline-flex`}>
                                    <span className="material-icons">
                                        radio_button_unchecked
                                    </span>
                                </div>
                            </button>
                        </div>

                        <div className="row mb-4">
                            <button type="button" className={`${input} p-2  shadow btn btn-default btn-m d-flex justify-content-start align-items-center`}>
                                <div className={`inline-flex`}>
                                    <span className="material-icons">
                                        list_alt
                                    </span>
                                </div>
                                <div className={`col justify-content-center text-capitalize`}>
                                    New York, NY
                                </div> <div className={`inline-flex`}>
                                    <span className="material-icons">
                                        radio_button_unchecked
                                    </span>
                                </div>
                            </button>
                        </div>

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
