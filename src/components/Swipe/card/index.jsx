import React from 'react'
import { main, tag } from './index.module.css'

export default function Index({ tags, icon }) {

    const makeTags = () => {
        return tags && tags.map((el, index) => {
            return <div key={index}
                className={`${tag} col-auto shadow mx-2 
            text-center text-white my-1 px-3 py-1`}>{el}</div>
        })
    }

    return (
        <div className={`${main} border shadow px-1 py-1`}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mt-2 mx-auto"
                     style={{height:'255px'}}>
                        <img className={`img-fluid d-inline-block`} src={icon} alt="" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 mt-2 h-50">
                        <h6 className='text-uppercase'>common interests</h6>
                        <span>{`Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Tempore possimus quos odio? Provident suscipit
                            reprehenderit temporibus? Atque nesciunt eos numquam
                            tempore quis suscipit similique! Exercitationem, aut
                            ex? Provident, nulla fugiat.`.substring(0,100)}</span>
                    </div>
                </div>
                <div className="row mt-4" style={{ overflow: 'hidden', height: '' }}>
                    <h6 className='text-uppercase'>common interests</h6>
                    {makeTags()}</div>
            </div>
        </div>
    )
}
