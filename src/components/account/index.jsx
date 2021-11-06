import React from "react";
import Style from './index.module.css'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faMicrosoft } from "@fortawesome/free-brands-svg-icons";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function index (){
    //console.log(Style)
    return (
        <div className={`container registration text-center`}>
            <div className={`justify-content-lg-center mx-4`}>
                <div className={`row mb-2`}>
                    <img src="#" alt="title logo"/>
                </div>
                <div className="row mt-3 mb-3">
                    <button type="button" className={`${Style.btnMicrosoft} btn btn-default btn-m d-flex justify-content-start align-items-center`}>
                        <div className={`inline-flex`}>
                            <FontAwesomeIcon icon={faMicrosoft} size="1x" />
                        </div>
                        <div className={`col justify-content-center`}>
                            Sign up with Microsoft
                        </div>
                    </button>
                </div>

                <div className="row mt-3 mb-3">
                    <button type="button" className={`${Style.btnApple} btn btn-default btn-m d-flex justify-content-start align-items-center`}>
                        <div className={`inline-flex`}>
                            <FontAwesomeIcon icon={faApple} size="1x" />
                        </div>
                        <div className={`col justify-content-center`}>
                            Sign up with Apple
                        </div>
                    </button>
                </div>
                
                <div className="row mt-3 mb-3">
                    <button type="button" className={`${Style.btnLinkedIn} btn btn-default btn-m d-flex justify-content-start align-items-center`}>
                        <div className={`inline-flex`}>
                            <FontAwesomeIcon icon={faLinkedin} size="1x" />
                        </div>
                        <div className={`col justify-content-center`}>
                            Sign up with LinkedIn
                        </div>
                    </button>
                </div>
                <div class={`row`}>
                    <small className={`${Style.strike}`}>or</small>
                </div>

                <div className="row mt-3 mb-3">
                    <button type="button" className={`${Style.btnEmail} btn btn-default btn-m d-flex justify-content-start align-items-center`}>
                        <div className={`inline-flex`}>
                            <FontAwesomeIcon icon={faEnvelope} size="1x" />
                        </div>
                        <div className={`col justify-content-center`}>
                            Sign up with Email
                        </div>
                    </button>
                </div>
            </div>
            <small>By creating an account you agree to CLUBCAUSE Terms of use and Privacy Policy</small>
        </div>
    )
}