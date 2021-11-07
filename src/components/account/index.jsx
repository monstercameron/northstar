import React, { useContext } from 'react'
import Style from './index.module.css'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";
import { Context } from '../../store/store'

export default function Index() {

    const { store, actions:{next} } = useContext(Context)

    let history = useHistory();
    const goBack = () => {
      history.goBack();
    };

    return (
        <div className={`container registration text-center mt-5`}>
            <div className={`justify-content-lg-center mx-4 pt-5`}>
                <div className={`row align-items-center`}>
                    <div className="col-auto mx-auto">
                        <div className="row" style={{ color: '#0A6CBC' }}>
                            <div className="col-auto text-right m-0 p-0">
                                <span style={{ fontWeight: '400', fontSize: '2em' }}>fresh</span></div>
                            <div className="col-auto m-0 p-0">
                                <span style={{ fontWeight: '900', fontSize: '2em' }}>BONDS</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mb-5">
                    <span style={{ fontWeight: '900', color: '#0A6CBC' }}>
                        lorem ipsum dolor
                    </span>
                </div>
                <div className="row mt-5 mb-4">
                    <button type="button" className={`${Style.btnMicrosoft} p-3 shadow btn btn-default btn-m d-flex justify-content-start align-items-center`}>
                        <div className={`inline-flex`}>
                            <span className="material-icons">
                                mail_outline
                            </span>
                        </div>
                        <div className={`col justify-content-center text-capitalize`}>
                            company email
                        </div>
                    </button>
                </div>

                <div className="row mt-4 mb-4">
                    <button type="button" className={`${Style.btnApple} p-3  shadow btn btn-default btn-m d-flex justify-content-start align-items-center`}>
                        <div className={`inline-flex`}>
                            <span className="material-icons">
                                lock
                            </span>
                        </div>
                        <div className={`col justify-content-center text-capitalize`}>
                            password
                        </div> <div className={`inline-flex`}>
                            <span className="material-icons">
                                visibility
                            </span>
                        </div>
                    </button>
                </div>

                <div className="row mt-4 mb-5">
                    <button type="button" className={`${Style.btnLinkedIn} p-3  shadow btn btn-default btn-m d-flex justify-content-start align-items-center`}>
                        <div className={`inline-flex`}>
                            <span className="material-icons">
                                lock
                            </span>
                        </div>
                        <div className={`col justify-content-center text-capitalize`}>
                            confirm password
                        </div> <div className={`inline-flex`}>
                            <span className="material-icons">
                                visibility
                            </span>
                        </div>
                    </button>
                </div>

                {/* <div className={`row`}>
                    <small className={`${Style.strike}`}>or</small>
                </div> */}

                <div className="row mt-5 mb-5">
                    <button type="button" onClick={next} className={`${Style.btnEmail} p-3  shadow btn btn-default btn-m d-flex justify-content-start align-items-center`}>
                        <div className={`col justify-content-center text-capitalize`}>
                            join the squad
                        </div>
                    </button>
                </div>
            </div>
            <div className='row mt-5'>
                <div className="col-10 mx-auto mt-5"
                style={{fontSize:'.7em'}}>
                    By creating an account, you agree to freshBONDS
                    Terms of use and Privacy policy.
                </div>
            </div>
        </div>
    )
}