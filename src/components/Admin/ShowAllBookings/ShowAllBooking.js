import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import LoaderSpinner from '../../LoaderSpinner/LoaderSpinner';

const ShowAllBooking = () => {
    const { user } = useAuth();
    const [loader, setLoader] = useState(false);
    const [action, setAction] = useState(true);
    const [getUserTours, setUserTours] = useState([]);

    useEffect(() => {
        setLoader(true);
        axios.get(`https://nameless-refuge-35244.herokuapp.com/user/bookings`)
            .then(result => {
                setUserTours(result.data);
                setLoader(false);
            })
            .catch(e => { })
            .finally(() => { setLoader(false) });
    }, [action]);

    const deleteBooking = bookingID => {
        const prompt = window.confirm('Want To Delete?');
        if (prompt === true) {
            console.log('hello')
            setAction(false);
            axios.delete(`https://nameless-refuge-35244.herokuapp.com/user/bookings/delete/${bookingID}`)
                .then(result => {
                    console.log(result)
                    setAction(true)
                })
                .finally(() => {
                    setAction(false);
                })
        }
    }

    const cancelBooking = bookingID => {
        const prompt = window.confirm('Want To Cancel  Booking?');
        if (prompt === true) {
            setAction(false);
            axios.put(`https://nameless-refuge-35244.herokuapp.com/user/bookings/cancel/${bookingID}`)
                .then(result => {
                    setAction(true)
                })
                .finally(() => {
                    setAction(false);
                })
        }
    }

    const confirmBooking = bookingID => {
        const prompt = window.confirm('Want To Confirm  Booking?');
        if (prompt === true) {
            setAction(false);
            axios.put(`https://nameless-refuge-35244.herokuapp.com/user/bookings/confirm/${bookingID}`)
                .then(result => {
                    setAction(true)
                })
                .finally(() => {
                    setAction(false);
                })
        }
    }

    return (
        <div className="container mt-5">
            <h5 className="text-center pt-5 text-info">All User Bookings List</h5>
            <div className="row">
                <div className="col-12 table-responsive">
                    {
                        loader ? <>
                            <p className="text-center">Please Wait</p>
                            <LoaderSpinner></LoaderSpinner>
                        </>
                            :
                            <table className="table table-sm table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Booking No</th>
                                        <th scope="col">Title</th>
                                        <th scope="col">Final Price</th>
                                        <th scope="col">Duration</th>
                                        <th scope="col">Members</th>
                                        <th scope="col">Contact</th>
                                        {/* <th scope="col">Email</th> */}
                                        <th scope="col">Status</th>
                                        <th scope="col">Cancel</th>
                                        <th scope="col">Confirm</th>
                                        <th scope="col">Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        getUserTours.map((userTour, index) => {
                                            const {
                                                _id: bookingID,
                                                bookiedTourTitle,
                                                contact,
                                                price,
                                                totalMembers,
                                                email,
                                                bookiedTourDuration: duration,
                                                status
                                            } = userTour || {};
                                            return <tr key={index}>
                                                <th scope="row">{index + 1}</th>
                                                <td><span>{bookingID}</span></td>
                                                <td>{bookiedTourTitle}</td>
                                                <td>{price}</td>
                                                <td>{duration}</td>
                                                <td>{contact}</td>
                                                <td>{totalMembers}</td>
                                                {/* <td>{email}</td> */}
                                                <td>{status}</td>
                                                <td>
                                                    <button onClick={() => cancelBooking(bookingID)}
                                                        className="btn btn-sm btn-danger text-light">
                                                        X
                                                    </button>
                                                </td>
                                                <td>
                                                    <button onClick={() => confirmBooking(bookingID)}
                                                        className="btn btn-sm btn-success text-info">
                                                        CONFIRM</button>
                                                </td>
                                                <td>
                                                    <button onClick={() => deleteBooking(bookingID)}
                                                        className="btn btn-sm btn-danger text-light">
                                                        DELETE</button>
                                                </td>
                                            </tr>
                                        })}
                                </tbody>
                            </table>
                    }
                </div>
            </div>
        </div>
    );
};

export default ShowAllBooking;