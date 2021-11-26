import React from "react";
import './Banner.css'
import ContactModal from "../ContactModal/ContactModal";

const Banner = () => {
  return (
    <div className="banner">
      <div className="d-flex justify-content-center align-items-center flex-column text-area">
        <h1 className="display-3"><i className='bx bx-happy bx-spin' style={{ color: '#fffdfd' }} ></i>Tra<span className="text-primary">velBD</span></h1>
        <h1 className="display-3">The new Adventure</h1>
        <p className="text-center">Stay healthy while traveling</p>
        <button className="btn btn-sm rounded-3 btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Contact Us</button>
      </div>
      <ContactModal></ContactModal>
    </div>
  );
};

export default Banner;
