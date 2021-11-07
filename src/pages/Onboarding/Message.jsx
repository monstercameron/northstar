import React, { useContext } from 'react'
import { Header, Footer } from '../../components/navbar/index'
import { topNav, content, footer } from '../Match.module.css'
import { button, main } from '../Onboarding.module.css'
import { useHistory } from "react-router-dom";
import { Context } from '../../store/store'

export default function Message() {

    const { store, actions:{next} } = useContext(Context)

    let history = useHistory();
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
        <div className='container'>
            <div className="row">
                <div className="col ">
                    {/* <i/mg className='img-fluid' src="https://via.placeholder.com/400x300.png?text=Visit+WhoIsHostingThis.com+Buyers+Guide" alt="" /> */}
                </div>
            </div>
            <div className="row">
                <div className="col mt-5"><h3 className='text-center
                text-uppercase'>message<p />
                    Check Your Inbox.</h3></div>
            </div>
            <div className="row">
                <div className="col-10 mx-auto mt-2">
                    <h6 className='text-center'>
                        Please verify your identity
                        so we can import your
                        company information.
                    </h6>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-4 mx-auto mt-3 pt-5">
                    <button className={`shadow ${button}`} onClick={next}>
                        <h3 className='text-center text-capitalize'>next</h3></button>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-8 mx-auto pt-5">
                    Didn’t get it? <b><u>Resend Email</u></b>
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
