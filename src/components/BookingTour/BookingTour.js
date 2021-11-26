import { getByTitle } from '@testing-library/dom';
import axios from 'axios';
import React, { useState, useEffect, } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import LoaderSpinner from '../LoaderSpinner/LoaderSpinner';

const BookingTour = () => {
    const { user } = useAuth();
    const { tourParamID } = useParams();
    const [action, setAction] = useState(false);
    const [getTour, setTour] = useState({});
    const history = useHistory();
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();

    useEffect(() => {
        setAction(false);
        axios.get(`https://nameless-refuge-35244.herokuapp.com/tours/${tourParamID}`)
            .then(result => {
                setTour(result.data);
            })
            .catch(e => { })
            .finally(() => { });
    }, [tourParamID]);

    // Another useEffect, if Server response with data and set to getState then again re-render page
    // to show value in form 
    useEffect(() => {
        setAction(true);
    }, [getTour]);

    const onSubmit = data => {
        data['price'] = data.bookiedTourStartingPrice;
        data['status'] = 'pending';
        console.log(data)
        axios.post(`https://nameless-refuge-35244.herokuapp.com/tour/booked`, data)
            .then(result => {
                alert('Your Booking Request Send Successfully')
                reset();
                history.push(`/user/show/tours`);
            })
            .catch(e => { alert('Booking Error, Reload Page Please') })
    };
    return (
        <>
            <div className="container p-5">
                <h3 className="text-center mt-5">Booked Your Tour</h3>
                {
                    // Wait For Data from server, if server data set to getTour then useEffect of getTour dependency call
                    // Where action set to true, that means data ready to displayed in page 
                    !action ? <></>
                        : getTour?.title ? (
                            <form className="d-flex flex-column gap-3 w-75 mx-auto" onSubmit={handleSubmit(onSubmit)}>
                                <label hidden>Tour ID</label>
                                <input defaultValue={getTour?._id} hidden  {...register("bookiedTourID",)} />
                                <label hidden></label>
                                <input defaultValue={getTour?.title} readOnly  {...register("bookiedTourTitle",)} />
                                <label >Email</label>
                                <input defaultValue={user?.email} readOnly  {...register("email",)} />
                                <label>Full Name</label>
                                <input defaultValue={user?.displayName} {...register("fullName",)} />
                                <label hidden></label>
                                <input defaultValue={getTour.duration} readOnly hidden  {...register("bookiedTourDuration",)} />
                                <label hidden></label>
                                <input defaultValue={getTour.attraction} readOnly hidden  {...register("bookiedTourAttraction",)} />
                                <label hidden></label>
                                <input defaultValue={getTour.routes} readOnly hidden  {...register("bookiedTourRoutes",)} />
                                <label>Tour Cost</label>
                                <input defaultValue={getTour.startingPrice} readOnly  {...register("bookiedTourStartingPrice",)} />

                                <label>Total Members</label>
                                <input defaultValue="1" min="1" max="40" {...register("totalMembers", { required: true })} placeholder="Total Members For Tour" />
                                {errors.totalMembers && <span>Please Give How Many Members You Want To Avail This Journey?</span>}
                                <label>Contact</label>
                                <input {...register("contact", { required: true })} placeholder="Your Contact Number Please" />
                                {errors.contact && <span>Please Provide Contact Number</span>}

                                <input className="w-25 mx-auto btn btn-primary" type="submit" />
                            </form>)
                            // Until Data fully set to getTour state, it looks for data have title attribute, 
                            // otherwise shows loader
                            : <LoaderSpinner></LoaderSpinner>
                }
            </div>
        </>
    );
};

export default BookingTour;