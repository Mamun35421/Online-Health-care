import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { _id, name, picture, fee, address } = service;
    return (
        <div className="col-lg-4 col-sm-6 col-12 g-4">
            <div className="card">
                <img src={picture} class="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Name: {name}</h5>
                    <h5>{fee}</h5>
                    <p className="card-text">{address}</p>
                </div>
                <Link className='service-btn py-3' to={`/booking/${_id}`}>
                    <button className='btn btn-danger service '>Book {name}
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Service;