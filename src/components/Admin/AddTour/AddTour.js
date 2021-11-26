import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import LoaderSpinner from '../../LoaderSpinner/LoaderSpinner';
import './AddTour.css';

const AddTour = () => {
    const [spinner, setSpinner] = useState(false);
    const { register, reset, handleSubmit } = useForm();

    const onSubmit = data => {
        setSpinner(true);
        console.log(data)
        axios.post('https://nameless-refuge-35244.herokuapp.com/tours', data)
            .then(response => {
                console.log(response)
                if (response.status === 200) {
                    reset();
                    alert('Tour Added Successfully')
                    setSpinner(false);
                }
            })
            .catch(e => { })
            .finally(() => { setSpinner(false) });
    }
    return (
        <>
            <div className="p-5 container mt-5">
                <h1 className="text-center fw-bold">Tour Add Panel</h1>
                <div className="row">
                    <div className="col-12 mx-auto">
                        {
                            spinner ? <>
                                <span className="text-center fw-bold fs-2">Please Wait, Data saved in processing</span>
                                <LoaderSpinner></LoaderSpinner>
                            </>
                                :
                                <form className="d-flex flex-column gap-1" onSubmit={handleSubmit(onSubmit)}>
                                    <label>Tour Title</label>
                                    <input required {...register("title",)} placeholder="Tour Title" />

                                    <div className="d-flex justify-content-between">
                                        <label>Location</label>
                                        <input required type="text" {...register("location",)} placeholder="Destination of Tour" />
                                        <label>Duration</label>
                                        <input required type="number" defaultValue="1" min="1" max="120" {...register("duration",)} placeholder="Duration of Tour" />
                                        <label>Approx Cost</label>
                                        <input required type="number" defaultValue="10" min="1" {...register("startingPrice",)} placeholder="approximate cost" />
                                    </div>

                                    <label>Tour Acctivities</label>
                                    <textarea rows="1" {...register("attraction",)} placeholder="Tour Activities" />

                                    <label>Places Visited</label>
                                    <textarea rows="1" {...register("routes",)} placeholder="Tour Routes" />

                                    <label>Picture URL</label>
                                    <input required {...register("tourpicture",)} placeholder="Tour Related Picture" />

                                    <label>Description</label>
                                    <textarea {...register("description",)} placeholder="Description" />

                                    <input className="btn btn-primary fw-bold mt-1 d-block mx-auto " type="submit" value="Submit Tour" />
                                </form>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddTour;