import React from 'react';
import './About.css'
const About = () => {
    return (
        <>
            <section className="mb-5 mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="https://i.ibb.co/Ss01d94/birishiri-photos-02-500x305.jpg" className="d-block w-100" alt="..." />
                                        <div className="carousel-caption d-none d-md-block  overlay-about">
                                            <h5>Birishiri – Netrokona</h5>
                                            <p>Nature lies here very naturally. And this autumn its paradise. </p>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src="https://i.ibb.co/MkMzNmv/satala-lily-village-500x305.jpg" className="d-block w-100" alt="..." />
                                        <div className="carousel-caption d-none d-md-block overlay-about">
                                            <h5>Satala lily village</h5>
                                            <p>There are lot of swamp in Gopalganj district. Balakaira swamp is one of the famous of theme. </p>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src="https://i.ibb.co/XyBZxbG/mahera-zamindar-bari-500x305.jpg" className="d-block w-100" alt="..." />
                                        <div className="carousel-caption d-none d-md-block  overlay-about">
                                            <h5>Mohera Jomidar Bari</h5>
                                            <p>Mahera zamindar bari (Mahera Landlord House) is one of the most beautiful
                                                historical place and architect of Tangail District. </p>
                                        </div>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <h1>About Happy Tra<span className="text-primary">velBD</span></h1>

                            <p className="mt-5">It is part of our policy to offer customers only the very best,
                                no matter which part of the world they arrive from. <br />
                                Managed by a set of professionals, supported by perfectly maintained fleet,
                                quality drivers, well- mannered staff, best office infrastructure, round the clock support and that extra urge to ensure
                                a hassle-free holiday to make our guests feel comfortable and at home while holidaying.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;