import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import LoaderSpinner from '../LoaderSpinner/LoaderSpinner';

const MyTours = () => {
    const { user } = useAuth();
    const [loader, setLoader] = useState(false);
    const [action, setAction] = useState(true);
    const [getUserTours, setUserTours] = useState([]);

    useEffect(() => {
        setLoader(true);
        axios.get(`https://nameless-refuge-35244.herokuapp.com/user/bookings/${user?.email}`)
            .then(result => {
                if (result.status === 200) {
                    setUserTours(result.data);
                    setLoader(false);
                }
            })
            .catch(e => { })
            .finally(() => { setLoader(false) });
    }, [action, user?.email]);

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
    return (
        <div className="container mt-5">
            <h5 className="text-center pt-5 text-info">User Booking List: {user?.email}</h5>
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

                                                {/* Cancel Button Activate only Wher status is pending  */}
                                                {
                                                    status === 'pending' && (<td>
                                                        <button onClick={() => cancelBooking(bookingID)}
                                                            className="btn btn-sm btn-danger text-light">
                                                            X
                                                        </button>
                                                    </td>
                                                    )
                                                }
                                                {
                                                    status !== 'pending' && (
                                                        <td>
                                                            <button disabled
                                                                className="btn btn-sm btn-secondary text-light">
                                                                X</button>
                                                        </td>
                                                    )
                                                }

                                                {/* If Booking Status not confirm then user can delete booking from history  */}
                                                {
                                                    status !== 'confirm' && (
                                                        <td>
                                                            <button onClick={() => deleteBooking(bookingID)}
                                                                className="btn btn-sm btn-danger text-light">
                                                                DELETE</button>
                                                        </td>
                                                    )
                                                }
                                                {
                                                    status === 'confirm' && (
                                                        <td>
                                                            <button disabled
                                                                className="btn btn-sm btn-secondary text-light">
                                                                DELETE</button>
                                                        </td>
                                                    )
                                                }
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

export default MyTours;