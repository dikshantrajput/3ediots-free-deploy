import React from 'react';
import ServiceCard from './ServiceCard.js';
import './services.css';
import img1 from './assets/images/services/android_app.png';
import img2 from './assets/images/services/ios_app.png';
import img3 from './assets/images/services/website.png';
import img4 from './assets/images/services/designing.png';
import img5 from './assets/images/services/marketing.png';
import img6 from './assets/images/services/cloud_computing.png';
import img7 from './assets/images/services/iot.png';
import img8 from './assets/images/services/data_science.png';
import img9 from './assets/images/services/ml.png';

function Services(){
    return (
        <>
            <section className="services__container" id="services">
                <div className="services__heading">
                    <div className="main__heading">
                        Our services
                    </div>
                    <div className="secondary__heading">
                        We are so flexible. If you want something new, we are always ready.
                    </div>
                </div>
                <div className="services__cards">
                    <ServiceCard img={img1} class="service1" title="Android apps" content="We build and deliver apps across  Android devices phones, tablets, TV, etc using latest OS features and tools." />
                    <ServiceCard img={img4} class="service4" title="Creative Designing" content="Attractive, interactive & visually appealing web front-end pages or mobile apps are crucial for the success of a business." />
                    <ServiceCard img={img3} class="service3" title="Websites/Web apps" content="Our experts help businesses design responsive and scalable web apps to transform customer experiences across multiple channels and devices." />
                    {/* <ServiceCard img={img5} class="service5" title="Digital Marketing" content="We are so flexible. If you want something new, we are always ready." /> */}
                    <ServiceCard img={img6} class="service6" title="Cloud computing" content="We conceptualize, design, and develop innovative Cloud Applications that deliver exceptional agility, performance, and interoperability ." />
                    <ServiceCard img={img2} class="service2" title="ios apps" content="We develop brand interactive, dynamic, and user-friendly applications from scratch or revamp your existing app using XCode, AppCode, CodeRunner, RxSwift,etc." />
                    {/* <ServiceCard img={img7} class="service7" title="I.O.T" content="We are so flexible. If you want something new, we are always ready." />
                    <ServiceCard img={img8} class="service8" title="Data Science" content="We are so flexible. If you want something new, we are always ready." />
                    <ServiceCard img={img9} class="service9" title="Machine Learning" content="We are so flexible. If you want something new, we are always ready." /> */}
                </div>
            </section>
        </>
    )
}

export default Services;