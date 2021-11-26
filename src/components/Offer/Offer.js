import React from 'react';
import './Offer.css'
const Offer = () => {
    return (
        <>
            <section className="image-hero mb-5">
                <div className="overlay d-flex flex-column align-items-center justify-content-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className="display-3 text-light text-center">Book now and get <span className="text-info">50% off</span></h1>
                                <p className="text-muted fw-bold text-md-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Offer;