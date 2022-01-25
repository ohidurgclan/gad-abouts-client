import React from 'react';
import { NavLink } from 'react-router-dom';
import './Package.css';

const Package = (props) => {
    const {_id, name, price, details, img} = props.package;
    return (
        <> 
            <div className="service-card w-100">
                <img className="img img-fluid card-imgs w-25 h-100" src={img} alt="" />
                <div className="service-info w-75 p-3">
                    <h4 className="fw-bold">{name}</h4>
                    <h5>Price: <span className="fw-bold">${price}</span></h5>
                    <div className='content'>
                        <p>{details.slice(0, 250)}  .  .  .<br/></p>
                    <NavLink to={`/package/${_id}`}>
                        Read More
                    </NavLink> 
                    </div>  
                </div>
            </div>
        </>
    );
};

export default Package;