import React from 'react';

const ContactModal = () => {
    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Book Now</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div>
                                <label className="form-label">Name</label>
                                <input type="email" className="form-control form-control-sm" placeholder="Full Name" />
                            </div>
                            <div>
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control form-control-sm" placeholder="your@mail.com" />
                            </div>
                            <div>
                                <label className="form-label">Contact Number</label>
                                <input type="text" className="form-control form-control-sm" placeholder="Contact Number" />
                            </div>
                            <div>
                                <label className="form-label">Package/Tour Name</label>
                                <input type="text" className="form-control form-control-sm" placeholder="Where You Want To Travel" />
                            </div>
                            <div>
                                <label className="form-label">Your Query</label>
                                <textarea rows="4" className="form-control form-control-sm" placeholder="Type Your Query Here" />
                            </div>
                        </form>
                        <button className="btn btn-sm btn-primary d-block mx-auto mt-1">Submit Query</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactModal;