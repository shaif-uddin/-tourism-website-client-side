import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LoaderSpinner from '../LoaderSpinner/LoaderSpinner';

const ShowTours = () => {
    const [spinner, setSpinner] = useState(false);
    const [tours, setTours] = useState([]);
    useEffect(() => {
        setSpinner(true);
        let url = "https://nameless-refuge-35244.herokuapp.com/tours";
        axios.get(url)
            .then(result => {
                setTours(result.data)
                setSpinner(false)
            })
            .catch(e => { })
            .finally(() => { setSpinner(false) });
    }, [])
    return (
        <div className="container p-5 mx-auto">
            <h1 className="mt-5 text-center">Our Packages</h1>
            {
                spinner ? <>
                    <span className="text-center fw-bold fs-2">Please Wait!!!!!!</span>
                    <LoaderSpinner></LoaderSpinner>
                </>
                    : (
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            {
                                tours.map((tour, index) => {
                                    return <div className="col">
                                        <div className="card h-100">
                                            <img src={tour?.tourpicture} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">{tour?.title}</h5>
                                                <p className="card-text">{tour?.description.slice(0, 150)}.....</p>
                                                <small className="fw-bold text-start text-md-center text-info">Starting Price: USD {tour?.startingPrice} </small><br />
                                                <small className="fw-bold text-start text-md-center text-info">Tour Duration {tour?.duration} Days </small>
                                            </div>
                                            <div className="card-footer">
                                                <Link className="text-decoration-none" to={`/tour/booking/${tour?._id}`}>
                                                    <button
                                                        className="btn btn-sm btn-warning 
                                                    text-light fw-bold 
                                                    d-block mx-auto">
                                                        Booking Now
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    )
            }
        </div>
    );
};

export default ShowTours;