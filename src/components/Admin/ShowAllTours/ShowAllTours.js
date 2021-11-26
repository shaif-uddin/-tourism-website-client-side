import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LoaderSpinner from '../../LoaderSpinner/LoaderSpinner';
import './ShowAllTours.css'
const ShowAllTours = () => {
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
        <>
            <div className="container-fluid p-5">
                <h1 className="text-center mt-3">All Tour Lists</h1>
                <div className="row">
                    <div className="col-12 table-responsive">
                        <table className="table table-sm table-info table-bordered table-striped table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Duration</th>
                                    <th scope="col">Location</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Routes</th>
                                    <th scope="col">Update</th>
                                </tr>
                            </thead>
                            {
                                spinner ? <>
                                    <span className="text-center fw-bold fs-2">Please Wait!!!!!!</span>
                                    <LoaderSpinner></LoaderSpinner>
                                </>
                                    :
                                    <tbody>
                                        {
                                            tours?.map((singleTour, index) => {
                                                const {
                                                    _id: tourID,
                                                    title,
                                                    duration,
                                                    location,
                                                    routes,
                                                    startingPrice
                                                } = singleTour || {};
                                                return (
                                                    <tr key={index}>
                                                        <th scope="row">{index + 1}</th>
                                                        <td>{title}</td>
                                                        <td>{duration}</td>
                                                        <td>{location}</td>
                                                        <td>{startingPrice}</td>
                                                        <td>{routes}</td>
                                                        <td>
                                                            <Link to={`/admin/tour/update/${tourID}`}
                                                                className="btn btn-sm btn-primary w-100">
                                                                Update</Link>
                                                        </td>
                                                    </tr>
                                                )
                                            })}
                                    </tbody>
                            }
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShowAllTours;