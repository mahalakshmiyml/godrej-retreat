import React from 'react'

const FirstSection = () => {
    return (
        <div>
            <div className="pt-3 pb-3 pt-md-5 pb-md-5 bg-light">
        <div className="container bg-white shadow p-3">
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <div className="text-center">
                        <img src="./images/projects/avalon-park-@-the-prestige-city-logo.png" alt="" className="img-fluid" />
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="m-1">
                                <h2>Avalon Park @ The Prestige City</h2>
                                <p>Sarjapur Main Road, Bangalore</p>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="">
                                <a href="" className="btn btn-dark text-uppercase ps-5 pe-5 pt-2 pb-2 m-1 float-start float-md-start"
                                    data-bs-toggle="modal" data-bs-target="#modal">79.99 Lakhs Onwards</a>
                                <a href="" className="btn btn-warning float-start float-md-end text-uppercase ps-5 pe-5 pt-2 pb-2 m-1"
                                    data-bs-toggle="modal" data-bs-target="#modal">Download Brochure</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
    )
}

export default FirstSection
