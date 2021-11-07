import React, { useContext } from 'react'
import { Header, Footer } from '../../components/navbar/index'
import { topNav, content, footer } from '../Match.module.css'
import { button, main, optStyle } from '../Onboarding.module.css'
import { useHistory } from "react-router-dom";
import { Context } from '../../store/store'

export default function Question() {

    const { store, actions: { next } } = useContext(Context)
    const { OnbQuestion, OnbQuestionIndex } = store
    const { question, opts } = OnbQuestion[OnbQuestionIndex]

    let history = useHistory();
    const goBack = () => {
        history.goBack();
    };

    const populateOptions = () => {
        return (opts.map((opt, index) => {
            return (
                <div index={`opts-${index}`}
                 className={`${optStyle} col-5 p-3 m-2 border shadow
                  text-center text-dark`}>
                    <h3 style={{fontWeight:'900'}}>{opt}</h3>
                </div>
            )
        })
        )
    }

    return (<div className={`container-fluid m-0 p-0 ${main}`}>
        <div className={topNav}>
            <div className='p-3' onClick={goBack}>
                <span className="material-icons" style={{ fontSize: '2em' }}>
                    arrow_back
                </span>
            </div>
        </div>
        <div className={content}>
            <div className='container'>
                <div className="row">
                    <div className="col ">
                        {/* <i/mg className='img-fluid' src="https://via.placeholder.com/400x300.png?text=Visit+WhoIsHostingThis.com+Buyers+Guide" alt="" /> */}
                    </div>
                </div>

                <div className="row">
                    <div className="col-10 mx-auto mt-2">
                        <h6 className='text-center text-capitalize'>
                            {question}
                        </h6>
                    </div>
                </div>

                <div className="row">
                    <div className="col-10 mx-auto mt-2">
                        <h6 className='text-center text-capitalize'>
                            Select your Identity or <b><u>Create you own</u></b>
                        </h6>
                    </div>
                </div>

                <div className="row justify-content-center mt-4">
                    {populateOptions()}
                </div>

                <div className="row align-items-center">
                    <div className="col-auto mx-auto mt-5 pt-5">
                        <span className="material-icons text-center" onClick={next} style={{ fontSize: '4em' }}>
                            arrow_circle_right
                        </span>
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
