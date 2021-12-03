import React from 'react'
import PropTypes from "prop-types";

export const GifCard = ({ title, url }) => {
    return (
        <article className="col-sm-6 col-md-4 col-lg-3 animate__animated animate__fadeIn animate_slow">
            <div className="card h-100">
                <img src={ url } className="card-img-top" alt={ title } />

                <div className="card-body">
                    <h5 className="card-title">{ title }</h5>
                </div>
            </div>
        </article>
    )
}

GifCard.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}