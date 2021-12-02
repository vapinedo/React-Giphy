import React from 'react'

export const GifCard = ({ title, url }) => {
    return (
        <article className="col-sm-6 col-md-4 col-lg-3">
            <div className="card h-100">
                <img src={ url } className="card-img-top" alt={ title } />

                <div className="card-body">
                    <h5 className="card-title">{ title }</h5>
                </div>
            </div>
        </article>
    )
}
