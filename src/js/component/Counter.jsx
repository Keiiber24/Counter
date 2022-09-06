import React from "react";
import PropTypes from 'prop-types';

export const Counter = (props) =>{
    return (
        <div className="card">
            <div className="card-body">
                <h4>{props.unit}</h4>
            </div>
        </div>
    )
}

Counter.propTypes = {
    seconds: PropTypes.number,
}