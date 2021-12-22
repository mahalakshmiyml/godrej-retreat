import React from 'react'

const TopMenubar = () => {
    return (
        <div id="main-header" className="sticky-top border-top border-danger shadow">
        <div id="top-header" className="p-2 p-md-1">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 d-none d-md-block text-white align-self-center">
                        <i className="fa fa-map-marker-alt"></i> Sarjapura Road Bangalore.
                    </div>
                    <div className="col-md-4 align-self-center">
                        <div className="text-center">
                            <a className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#modal"><i
                                className="fa fa-spinner fa-flip fa-download"></i> Brochure</a>
                        </div>
                    </div>
                    <div className="col-md-4 align-self-center">
                        <div className="text-center">
                            <a href="tel:+918095999000" className="anchor btn btn-secondary text-white m-1"><i
                                className="fa fa-phone-volume"></i> +91-80959 99000</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <header className="header-transparent">
            <div className="menu-header">
                <div className="">
                    <nav className="navbar navbar-expand-lg navbar-light bg-white">
                        <div className="container">
                            <a className="navbar-brand" href="/"><img src="./images/logo-1.png" alt="" /></a>
                            {/* <a className="btn btn-primary text-white d-block d-md-none" href="tel:8095999000"><i
                                className="fa fa-phone-volume"></i> 8095999000</a> */}
                            {/* <a href="#all-virtual-tour" className="d-block d-md-none"><img src="./images/360.png" alt=""
                                    className="img-fluid"></a> */}
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                                <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#overview">Overview</a>
                                    </li>
                                   
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink"
                                            role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            The Prestige City Projects
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-light rounded"
                                            aria-labelledby="navbarDarkDropdownMenuLink">
                                            <li><a className="dropdown-item" href="avalon-park.html">Avalon Park</a></li>
                                            <li><a className="dropdown-item" href="eden-park.html">Eden Park</a></li>
                                            <li><a className="dropdown-item" href="the-great-acres.html">The Great Acres</a>
                                            </li>
                                            <li><a className="dropdown-item" href="aspen-greens.html">Aspen Greens</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#master-plan">Master Plan</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#pricing-sheet">Pricing</a>
                                    </li>
                                    <li className="nav-item border-0">
                                        <a className="nav-link" href="#about-developer">About Developer</a>
                                    </li>
                                     {/* <li className="nav-item border border-dark rounded">
                                        <a className="nav-link float-end" data-bs-toggle="modal" data-bs-target="#modal"><i className="fas fa-flash fa-download"></i> Brochure</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="btn btn-danger text-white" href="tel:08095999000">call +91 80959 99000</a>
                                    </li>  */}
                                </ul>
                                {/* <div className="d-flex">
                                    <a href="#virtual-tour"><img src="./images/360.png" alt="" className="img-fluid"></a>
                                </div>  */}
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    </div>
    )
}

export default TopMenubar
