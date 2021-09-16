import React from 'react';
import './values.css';
import img1 from './assets/images/values/creativity.png'
import img2 from './assets/images/values/timeline.png'
import img3 from './assets/images/values/passion.png'
import img4 from './assets/images/values/cost_effective.png'

function Values(){
    return (
        <>
            <section className="values__container" id="values">
                <div className="left__values__container">
                    <div className="values__card">
                        <div className="row1">
                            <div className="value__card">
                                <div className="value__icon">
                                    <img src={img1} alt="value icon" className="creativity__icon" />
                                </div>
                                <div className="value__title">
                                    Creativity
                                </div>
                            </div>
                            <div className="value__card">
                                <div className="value__icon">
                                    <img src={img3} alt="value icon" />
                                </div>
                                <div className="value__title">
                                    Passion
                                </div>
                            </div>
                        </div>
                        <div className="row2">
                            <div className="value__card">
                                <div className="value__icon">
                                    <img src={img2} alt="value icon" />
                                </div>
                                <div className="value__title">
                                    Timeline
                                </div>
                            </div>
                            <div className="value__card">
                                <div className="value__icon">
                                    <img src={img4} alt="value icon" />
                                </div>
                                <div className="value__title">
                                    Cost effective
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right__values__container">
                    <div className="main__heading">
                        Our values
                    </div>
                    <div className="secondary__heading">
                        <p>
                            Our priority is only <span className="underline">you</span>
                        </p>
                        <p>
                            We compete only with <span className="underline">ourselves</span>
                        </p>
                        <p>
                            We never compromise with <span className="underline">quality</span>
                        </p>
                    </div>
                </div>
            </section>
        </>
    )

}

export default Values;