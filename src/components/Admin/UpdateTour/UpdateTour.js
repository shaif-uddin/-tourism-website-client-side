import { getByTitle } from '@testing-library/dom';
import axios from 'axios';
import React, { useState, useEffect, } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import LoaderSpinner from '../../LoaderSpinner/LoaderSpinner';
import './UpdateTour.css';

const UpdateTour = () => {
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
        axios.put(`https://nameless-refuge-35244.herokuapp.com/tours/${tourParamID}`, data)
            .then(result => {
                alert('Tour Information Successfully Updated')
                reset();
                history.push(`/admin/show/tour`);
            })
            .catch(e => { alert('Updated Error') })
    };

    return (
        <>
            <div className="container p-5">
                <h3 className="text-center mt-3">Update Tour Information</h3>
                {
                    // Wait For Data from server, if server data set to getTour then useEffect of getTour dependency call
                    // Where action set to true, that means data ready to displayed in page 
                    !action ? <></>
                        : getTour?.title ? (
                            <form className="d-flex flex-column gap-3" onSubmit={handleSubmit(onSubmit)}>
                                <input defaultValue={getTour?.title} {...register("title", { required: true })} />
                                {errors.title && <span>This field is required</span>}

                                <input defaultValue={getTour.duration} {...register("duration", { required: true })} />
                                {errors.duration && <span>This field is required</span>}

                                <input defaultValue={getTour.attraction} {...register("attraction", { required: true })} />
                                {errors.attraction && <span>This field is required</span>}

                                <input defaultValue={getTour.location} {...register("location", { required: true })} />
                                {errors.location && <span>This field is required</span>}

                                <input defaultValue={getTour.routes} {...register("routes", { required: true })} />
                                {errors.routes && <span>This field is required</span>}

                                <input defaultValue={getTour.startingPrice} {...register("startingPrice", { required: true })} />
                                {errors.startingPrice && <span>This field is required</span>}

                                <input defaultValue={getTour.tourpicture} {...register("tourpicture", { required: true })} />
                                {errors.tourpicture && <span>This field is required</span>}

                                <input defaultValue={getTour.description} {...register("description", { required: true })} />
                                {errors.description && <span>This field is required</span>}

                                <input type="submit" />
                            </form>)
                            // Until Data fully set to getTour state, it looks for data have title attribute, 
                            // otherwise shows loader
                            : <LoaderSpinner></LoaderSpinner>
                }
            </div>
        </>
    );
};

export default UpdateTour;