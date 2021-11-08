import React from 'react'
import { main } from './index.module.css'

export default function Index({reset, next}) {
    return (
        <div className='row mt-1 pt-1 align-items-center text-center'>
            <div className="col py-4" onClick={reset}><span className="material-icons">
                restart_alt
            </span></div>
            <div className="col py-4"><span className="material-icons">
                cancel
            </span></div>
            <div className="col py-4"><span className="material-icons">
                stars
            </span></div>
            <div className="col py-4" onClick={next}><span className="material-icons">
                favorite
            </span></div>
            <div className="col py-4"><span className="material-icons">
                bolt
            </span></div>
        </div>
    )
}
