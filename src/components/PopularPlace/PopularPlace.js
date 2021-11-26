import React from 'react';
import './PopularPlace.css';
const PopularPlace = () => {
    return (
        <>
            <section>
                <div className="container text-center">
                    <h1 className="mb-5 mt-5">Most popular places</h1>

                    <div className="row">
                        <div className="col-lg-4 ">
                            <div className="card">
                                <h2 className="c-1 overlay-c">Narsingdi Jamidar Bari</h2>
                                <img src="http://photos.tourtoday.com.bd/wp-content/uploads/2017/04/narsingdi-jamidar-bari-16-300x300.jpg" className="img-card" />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card">
                                <h2 className="c-1 overlay-c">Jatiyo Sriti Shoudho</h2>
                                <img src="http://photos.tourtoday.com.bd/wp-content/uploads/2017/04/Jatiyo-Sriti-Shoudho-4-300x300.jpg" className="img-card" />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card">
                                <h2 className="c-1 overlay-c">Way to Saint Martin – Cox’s Bazar</h2>
                                <img src="http://photos.tourtoday.com.bd/wp-content/uploads/2017/02/saint-martin-04-300x300.jpg" className="img-card" />
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3 mb-5">
                        <div className="col-lg-4 ">
                            <div className="card">
                                <h2 className="c-1 overlay-c">Shohagpalli Resort, Picnic Spot -Gazipur</h2>
                                <img src="http://photos.tourtoday.com.bd/wp-content/uploads/2017/02/shohagpalli-gazipur-11-300x300.jpg" className="img-card" />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card">
                                <h2 className="c-1 overlay-c">Sonadia Island – Cox’s Bazaar</h2>
                                <img src="http://photos.tourtoday.com.bd/wp-content/uploads/2018/04/moheshkhali-tour-photo-09-300x300.jpg" className="img-card" />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card">
                                <h2 className="c-1 overlay-c">Aalu Tila Guha – Khagrachari</h2>
                                <img src="http://tourtoday.com.bd/wp-content/uploads/2021/10/Aalu-Tila-Guha-500x305.jpg" className="img-card" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PopularPlace;