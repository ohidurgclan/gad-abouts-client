import React from 'react';
import { NavLink } from 'react-router-dom';
import Rating from 'react-rating'
import './Package.css';

const Package = (props) => {
    const { _id, title, name, star, cost, detail, img } = props.package;
    return (
        <> 
            <div className="service-card w-100">
                <img className="img img-fluid card-imgs w-25 h-100" src={img} alt="" />
                <div className="service-info w-75 p-3">
                    <div className="d-flex justify-content-between">
                        <h3 className="fw-bold">{title}</h3>
                        <h5 style={{fontSize: '2.4vmin'}}>Price: <span className="fw-bold pt-5">${cost}</span></h5>
                    </div>
                    <div className="d-flex justify-content-between">
                        <Rating
                            style={{fontSize: '2.5vmin'}}
                            initialRating={star}
                            emptySymbol="bi bi-star rate-color"
                            fullSymbol="bi bi-star-fill rate-color"
                        />
                        <h5 style={{fontSize: '2.4vmin', fontWeight: '600'}}>Posted  By <span style={{color: '#5c0a3f'}}>{name}</span></h5>
                    </div>
                    <div className='content mt-3'>
                        <p>{detail?.slice(0 ,230)}  .  .  .<br/></p>
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