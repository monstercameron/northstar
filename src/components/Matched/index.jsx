import React, { useContext } from 'react'
import { main } from './index.module.css'
import { Context } from '../../store/store'
import { useHistory } from "react-router-dom";

import bird2 from '../../media/images/bird2.png'

export default function Matched() {
    let history = useHistory();
    const next = () => history.push('/feed')

    const { store: { matched }, actions } = useContext(Context)
    if (!matched) {
        return ''
    }
    return (<div className={`${main} container`} onClick={next}>
        <div className='shadow'>
            <div className="row">
                <div className="mx-auto mt-4">
                    <img src={bird2} className='img-fluid' alt="" />
                </div>
            </div>
            <div className="row">
                <div className="col-10 text-center mx-auto">
                    <h3> Great News, Tasha! </h3>
                    <h4 style={{ color: '3DA8FF' }}>
                        Niya Rodriguez has
                        match with you 98%
                    </h4>
                </div>
            </div>
        </div>
    </div>

    )
}
