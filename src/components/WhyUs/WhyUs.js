import React from 'react';

const WhyUs = () => {
    return (
        <>
            <section className="services">
                <div className="container text-center">
                    <h1 className="mb-5 mt-5">Why We Are Best</h1>
                    <div className="row">
                        <div className="col-lg-4">
                            <i className="fas fa-umbrella-beach fa-5x"></i>
                            <h3>Amazing travel</h3>
                            <ul>
                                <li className="text-start fs-6">Your entire holiday is designed around your requirements.</li>
                                <li className="text-start fs-6">Explore your interests at your own speed.</li>
                                <li className="text-start fs-6">Create the perfect trip with the help of our specialists.</li>
                            </ul>
                        </div>
                        <div className="col-lg-4">
                            <i className="fas fa-route fa-5x"></i>
                            <h3>Best location</h3>
                            <li className="text-start fs-6">Our travel experts have complete knowledge of destination.</li>
                            <li className="text-start fs-6">Our travel experts will handle your trip from start to finish.</li>
                        </div>
                        <div className="col-lg-4">
                            <i className="fas fa-headset fa-5x"></i>
                            <h3>24X7 support</h3>
                            <ul>
                                <li className="text-start fs-6">4/7 emergency Bangladesh contact number while travelling +031-354987.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default WhyUs;