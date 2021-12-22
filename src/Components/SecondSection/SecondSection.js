import React from 'react'

const SecondSection = () => {
    return (
        <div className="" id="all-items">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-9">
                    <div id="overview" className="pt-3 pb-3 pt-md-5 pb-md-5">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-md-12">
                                    <div className="line position-relative">
                                        <h2 className="text-uppercase pb-2">Project Highlights</h2>
                                        <span className="bg-danger position-absolute start-50 span-line"></span>
                                    </div>
                                    <div className="">
                                        <table className="table table-bordered">
                                            <tbody>
                                                <tr>
                                                    <th>RERA No</th>
                                                    <td>PR/210928/004316</td>
                                                </tr>
                                                <tr>
                                                    <th>Development Size</th>
                                                    <td>6.8 Acres
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>Number of Units</th>
                                                    <td>950 units</td>
                                                </tr>

                                                <tr>
                                                    <th>Bedrooms</th>
                                                    <td>
                                                        3, 4 </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="all" className="pt-3 pb-3 pt-md-5 pb-md-5 bg-light">
                        <div className="container">
                            <h2 className="text-center pt-2 pb-2">About Avalon Park @ The Prestige City</h2>
                            <div className="row">
                                <div className="col-md-12">
                                    <p>Your home at Avalon Park is a well designed haven that is abundant with natural light and ventilation, thanks to imaginative and intelligent planning.</p>
                                    <p>Open the windows and allow Mother Nature herself to keep your home cool and ventilated. The savings on power aside, there’s nothing quite like breathing in fresh air, is there? What’s more, look out of any window and you will see a tapestry of green pleasantness.</p>
                                    <p>Finally, you have a choice of sizes and room configurations to perfectly suit your need across three-bed and four-bed homes.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="master-plan" className="pt-3 pb-3 pt-md-0 pb-md-0">
                        <div className="container-fluid">
                            <h2 className="pt-2 pb-2 text-center">Master Plan & Floor Plans</h2>
                            <div className="row">
                                <div className="col-md-12">
                                    <ul className="nav nav-tabs" id="myTab1" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <a className="nav-link text-dark active" id="home-tab" data-bs-toggle="tab"
                                                href="#home1" role="tab" aria-controls="home"
                                                aria-selected="true">All</a>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <a className="nav-link text-dark" id="profile-tab1" data-bs-toggle="tab"
                                                href="#profile1" role="tab" aria-controls="profile1"
                                                aria-selected="false">Master Plan</a>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <a className="nav-link text-dark" id="contact-tab1" data-bs-toggle="tab"
                                                href="#contact1" role="tab" aria-controls="contact1"
                                                aria-selected="false">3BHK</a>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <a className="nav-link text-dark" id="contact-tab1" data-bs-toggle="tab"
                                                href="#contact2" role="tab" aria-controls="contact2"
                                                aria-selected="false">4BHK</a>
                                        </li>
                                    </ul>
                                    <div className="tab-content mt-3" id="myTabContent1">
                                        <div className="tab-pane fade show active" id="home1" role="tabpanel"
                                            aria-labelledby="home-tab1">
                                            <div id="master-plan" className="pt-3 pb-3 pt-md-5 pb-md-5">
                                                <div className="container">
                                                    <div className="row justify-content-center">
                                                        <div className="col-md-4">
                                                            <div className="spotlight-group text-center m-1">
                                                                <a className="spotlight"
                                                                    href="./images/projects/avalon-park/masterplan.png"
                                                                    data-description="Location Map"><img
                                                                        src="./images/projects/avalon-park/masterplan.png"
                                                                        alt="Location Map"
                                                                        className="thumb-1 rounded img-fluid" /></a>
                                                                    <h6 className="fw-bold text-center pt-2 pb-2">Master Plan</h6>
                                                            </div>
                                                        </div>
                                                        {/* <div className="col-md-4">
                                                            <div className="spotlight-group text-center m-1">
                                                                <a className="spotlight"
                                                                    href="./images/projects/avalon-park/numbering-plan.png"
                                                                    data-description="Location Map"><img
                                                                        src="./images/projects/avalon-park/numbering-plan.png"
                                                                        alt="Location Map"
                                                                        className="thumb-1 rounded img-fluid" /></a>
                                                                <h6 className="fw-bold text-center pt-2 pb-2">Numbering Plan</h6>
                                                            </div>
                                                        </div> */}
                                                        <div className="col-md-4">
                                                            <div className="spotlight-group text-center m-1">
                                                                <a className="spotlight"
                                                                    href="./images/projects/avalon-park/3bhk/type-d1-3-bed-1361-sq-ft.png"
                                                                    data-description="Location Map"><img
                                                                        src="./images/projects/avalon-park/3bhk/type-d1-3-bed-1361-sq-ft.png"
                                                                        alt="Location Map"
                                                                        className="thumb-1 rounded img-fluid" /></a>
                                                                <h6 className="fw-bold text-center pt-2 pb-2">Tpye D1 - 3 BR - 1361 Sq. ft</h6>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="spotlight-group text-center m-1">
                                                                <a className="spotlight"
                                                                    href="./images/projects/avalon-park/3bhk/type-e1-3-bed-1536-sq-ft.png"
                                                                    data-description="Location Map"><img
                                                                        src="./images/projects/avalon-park/3bhk/type-e1-3-bed-1536-sq-ft.png"
                                                                        alt="Location Map"
                                                                        className="thumb-1 rounded img-fluid" /></a>
                                                                <h6 className="fw-bold text-center pt-2 pb-2">Tpye E1 - 3 BR - 1536 Sq. ft</h6>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="spotlight-group text-center m-1">
                                                                <a className="spotlight"
                                                                    href="./images/projects/avalon-park/3bhk/type-e2-3-bed-1599-sq-ft.png"
                                                                    data-description="Location Map"><img
                                                                        src="./images/projects/avalon-park/3bhk/type-e2-3-bed-1599-sq-ft.png"
                                                                        alt="Location Map"
                                                                        className="thumb-1 rounded img-fluid" /></a>
                                                                <h6 className="fw-bold text-center pt-2 pb-2">Tpye E2 - 3 BR - 1599 Sq. ft</h6>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="spotlight-group text-center m-1">
                                                                <a className="spotlight"
                                                                    href="./images/projects/avalon-park/3bhk/type-e3-3-bed-1620-sq-ft.png"
                                                                    data-description="Location Map"><img
                                                                        src="./images/projects/avalon-park/3bhk/type-e3-3-bed-1620-sq-ft.png"
                                                                        alt="Location Map"
                                                                        className="thumb-1 rounded img-fluid" /></a>
                                                                <h6 className="fw-bold text-center pt-2 pb-2">Tpye E3 - 3 BR - 1620 Sq. ft</h6>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-4">
                                                            <div className="spotlight-group text-center m-1">
                                                                <a className="spotlight"
                                                                    href="./images/projects/avalon-park/3bhk/type-e7-3-bed-1657-sq-ft.png"
                                                                    data-description="Location Map"><img
                                                                        src="./images/projects/avalon-park/3bhk/type-e7-3-bed-1657-sq-ft.png"
                                                                        alt="Location Map"
                                                                        className="thumb-1 rounded img-fluid" /></a>
                                                                <h6 className="fw-bold text-center pt-2 pb-2">Tpye E7 - 3 BR - 1657 Sq. ft</h6>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-4">
                                                            <div className="spotlight-group text-center m-1">
                                                                <a className="spotlight"
                                                                    href="./images/projects/avalon-park/3bhk/type-f3-3-bed-1898-sq-ft.png"
                                                                    data-description="Location Map"><img
                                                                        src="./images/projects/avalon-park/3bhk/type-f3-3-bed-1898-sq-ft.png"
                                                                        alt="Location Map"
                                                                        className="thumb-1 rounded img-fluid" /></a>
                                                                <h6 className="fw-bold text-center pt-2 pb-2">Tpye E3 - 3 BR - 1898 Sq. ft</h6>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-4">
                                                            <div className="spotlight-group text-center m-1">
                                                                <a className="spotlight"
                                                                    href="./images/projects/avalon-park/4bhk/type-g1-4-bed-2204-sq-ft.png"
                                                                    data-description="Location Map"><img
                                                                        src="./images/projects/avalon-park/4bhk/type-g1-4-bed-2204-sq-ft.png"
                                                                        alt="Location Map"
                                                                        className="thumb-1 rounded img-fluid" /></a>
                                                                <h6 className="fw-bold text-center pt-2 pb-2">Tpye G2 - 4 BR - 2204 Sq. ft</h6>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-4">
                                                            <div className="spotlight-group text-center m-1">
                                                                <a className="spotlight"
                                                                    href="./images/projects/avalon-park/4bhk/type-g2-4-bed-2290-sq-ft.png"
                                                                    data-description="Location Map"><img
                                                                        src="./images/projects/avalon-park/4bhk/type-g2-4-bed-2290-sq-ft.png"
                                                                        alt="Location Map"
                                                                        className="thumb-1 rounded img-fluid" /></a>
                                                                <h6 className="fw-bold text-center pt-2 pb-2">Tpye G2 - 4 BR - 2290 Sq. ft</h6>
                                                            </div>
                                                        </div>

                                                        <div className="text-center pt-3">
                                                            <a href=""
                                                                className="btn btn-primary text-uppercase ps-5 pe-5 pt-2 pb-2"
                                                                data-bs-toggle="modal" data-bs-target="#modal">enquire
                                                                now</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="profile1" role="tabpanel1"
                                            aria-labelledby="profile-tab">
                                            <div id="master-plan" className="pt-3 pb-3 pt-md-5 pb-md-5">
                                                <div className="container">
                                                     {/* <div className="line position-relative text-center mb-5">
                                                        <h2 className="text-uppercase pb-2">Master Plan</h2>
                                                        <span className="bg-danger position-absolute start-50 span-line"></span>
                                                    </div> */}
                                                    <div className="row justify-content-center">
                                                        <div className="col-md-6">
                                                            <div className="spotlight-group text-center m-1">
                                                                <a className="spotlight"
                                                                    href="./images/projects/avalon-park/masterplan.png"
                                                                    data-description="Location Map"><img
                                                                        src="./images/projects/avalon-park/masterplan.png"
                                                                        alt="Location Map"
                                                                        className="thumb-1 rounded img-fluid" /></a>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="spotlight-group text-center m-1">
                                                                <a className="spotlight" href="./images/projects/avalon-park/numbering-plan.png"
                                                                    data-description="Location Map"><img
                                                                        src="./images/projects/avalon-park/numbering-plan.png" alt="Location Map"
                                                                        className="thumb-1 rounded img-fluid" /></a>
                                                            </div>
                                                        </div>
                                                        {/* <div className="col-md-4">
                                                            <div className="spotlight-group text-center m-1">
                                                                <a className="spotlight" href="./images/floor-plans/master-plan-03.png"
                                                                    data-description="Location Map"><img
                                                                        src="./images/floor-plans/master-plan-03.png" alt="Location Map"
                                                                        className="thumb-1 rounded img-fluid"></a>
                                                            </div>
                                                        </div> */}
                                                        <div className="text-center pt-3">
                                                            <a href=""
                                                                className="btn btn-primary text-uppercase ps-5 pe-5 pt-2 pb-2"
                                                                data-bs-toggle="modal" data-bs-target="#modal">enquire
                                                                now</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="contact1" role="tabpanel1"
                                            aria-labelledby="contact-tab1">
                                            <div id="floor-plans" className="pt-3 pb-3 pt-md-5 pb-md-5 bg-white">
                                                <div className="container">
                                                    {/* <h2 className="text-center pt-2 pb-2">Floor Plans</h2> */}
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <div className="spotlight-group text-center m-1">
                                                                <a className="spotlight"
                                                                    href="./images/projects/avalon-park/3bhk/type-d1-3-bed-1361-sq-ft.png"
                                                                    data-description="Location Map"><img
                                                                        src="./images/projects/avalon-park/3bhk/type-d1-3-bed-1361-sq-ft.png"
                                                                        alt="Location Map"
                                                                        className="thumb-1 rounded img-fluid" /></a>
                                                                <h6 className="fw-bold text-center pt-2 pb-2">Tpye D1 - 3 BR - 1361 Sq. ft</h6>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="spotlight-group text-center m-1">
                                                                <a className="spotlight"
                                                                    href="./images/projects/avalon-park/3bhk/type-e1-3-bed-1536-sq-ft.png"
                                                                    data-description="Location Map"><img
                                                                        src="./images/projects/avalon-park/3bhk/type-e1-3-bed-1536-sq-ft.png"
                                                                        alt="Location Map"
                                                                        className="thumb-1 rounded img-fluid" /></a>
                                                                <h6 className="fw-bold text-center pt-2 pb-2">Tpye E1 - 3 BR - 1536 Sq. ft</h6>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="spotlight-group text-center m-1">
                                                                <a className="spotlight"
                                                                    href="./images/projects/avalon-park/3bhk/type-e2-3-bed-1599-sq-ft.png"
                                                                    data-description="Location Map"><img
                                                                        src="./images/projects/avalon-park/3bhk/type-e2-3-bed-1599-sq-ft.png"
                                                                        alt="Location Map"
                                                                        className="thumb-1 rounded img-fluid" /></a>
                                                                <h6 className="fw-bold text-center pt-2 pb-2">Tpye E2 - 3 BR - 1599 Sq. ft</h6>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="spotlight-group text-center m-1">
                                                                <a className="spotlight"
                                                                    href="./images/projects/avalon-park/3bhk/type-e3-3-bed-1620-sq-ft.png"
                                                                    data-description="Location Map"><img
                                                                        src="./images/projects/avalon-park/3bhk/type-e3-3-bed-1620-sq-ft.png"
                                                                        alt="Location Map"
                                                                        className="thumb-1 rounded img-fluid" /></a>
                                                                <h6 className="fw-bold text-center pt-2 pb-2">Tpye E3 - 3 BR - 1620 Sq. ft</h6>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-4">
                                                            <div className="spotlight-group text-center m-1">
                                                                <a className="spotlight"
                                                                    href="./images/projects/avalon-park/3bhk/type-e7-3-bed-1657-sq-ft.png"
                                                                    data-description="Location Map"><img
                                                                        src="./images/projects/avalon-park/3bhk/type-e7-3-bed-1657-sq-ft.png"
                                                                        alt="Location Map"
                                                                        className="thumb-1 rounded img-fluid" /></a>
                                                                <h6 className="fw-bold text-center pt-2 pb-2">Tpye E7 - 3 BR - 1657 Sq. ft</h6>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-4">
                                                            <div className="spotlight-group text-center m-1">
                                                                <a className="spotlight"
                                                                    href="./images/projects/avalon-park/3bhk/type-f3-3-bed-1898-sq-ft.png"
                                                                    data-description="Location Map"><img
                                                                        src="./images/projects/avalon-park/3bhk/type-f3-3-bed-1898-sq-ft.png"
                                                                        alt="Location Map"
                                                                        className="thumb-1 rounded img-fluid" /></a>
                                                                <h6 className="fw-bold text-center pt-2 pb-2">Tpye E3 - 3 BR - 1898 Sq. ft</h6>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-4">
                                                            <div className="spotlight-group text-center m-1">
                                                                <a className="spotlight"
                                                                    href="./images/projects/avalon-park/4bhk/type-g1-4-bed-2204-sq-ft.png"
                                                                    data-description="Location Map"><img
                                                                        src="./images/projects/avalon-park/4bhk/type-g1-4-bed-2204-sq-ft.png"
                                                                        alt="Location Map"
                                                                        className="thumb-1 rounded img-fluid" /></a>
                                                                <h6 className="fw-bold text-center pt-2 pb-2">Tpye G2 - 4 BR - 2204 Sq. ft</h6>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-4">
                                                            <div className="spotlight-group text-center m-1">
                                                                <a className="spotlight"
                                                                    href="./images/projects/avalon-park/4bhk/type-g2-4-bed-2290-sq-ft.png"
                                                                    data-description="Location Map"><img
                                                                        src="./images/projects/avalon-park/4bhk/type-g2-4-bed-2290-sq-ft.png"
                                                                        alt="Location Map"
                                                                        className="thumb-1 rounded img-fluid" /></a>
                                                                <h6 className="fw-bold text-center pt-2 pb-2">Tpye G2 - 4 BR - 2290 Sq. ft</h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="contact2" role="tabpanel2"
                                            aria-labelledby="contact-tab1">
                                            <div id="floor-plans" className="pt-3 pb-3 pt-md-5 pb-md-5 bg-white">
                                                <div className="container">
                                                    {/* <h2 className="text-center pt-2 pb-2">Floor Plans</h2> */}
                                                    <div className="row">

                                                        <div className="col-md-4">
                                                            <div className="spotlight-group text-center m-1">
                                                                <a className="spotlight"
                                                                    href="./images/projects/avalon-park/4bhk/type-g1-4-bed-2204-sq-ft.png"
                                                                    data-description="Location Map"><img
                                                                        src="./images/projects/avalon-park/4bhk/type-g1-4-bed-2204-sq-ft.png"
                                                                        alt="Location Map"
                                                                        className="thumb-1 rounded img-fluid" /></a>
                                                                <h6 className="fw-bold text-center pt-2 pb-2">Tpye G2 - 4 BR - 2204 Sq. ft</h6>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-4">
                                                            <div className="spotlight-group text-center m-1">
                                                                <a className="spotlight"
                                                                    href="./images/projects/avalon-park/4bhk/type-g2-4-bed-2290-sq-ft.png"
                                                                    data-description="Location Map"><img
                                                                        src="./images/projects/avalon-park/4bhk/type-g2-4-bed-2290-sq-ft.png"
                                                                        alt="Location Map"
                                                                        className="thumb-1 rounded img-fluid" /></a>
                                                                <h6 className="fw-bold text-center pt-2 pb-2">Tpye G2 - 4 BR - 2290 Sq. ft</h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="amenities" className="pt-3 pb-3 pt-md-5 pb-md-5 ps-md-3 pe-md-3">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="line position-relative text-center mb-5">
                                            <h2 className="text-uppercase pb-2">Amenities</h2>
                                            <span className="bg-danger position-absolute start-50 span-line"></span>
                                        </div>
                                        <div className="owl-carousel owl-theme" id="amenities-slider">
                                            <div className="item p-5 border rounded text-center">
                                                <div className="text-center">
                                                    <img src="./images/amenities/club.png" alt=""
                                                        className="img-fluid border border-danger rounded-circle p-2" />
                                                    <p className="text-center fw-bold">
                                                        Clubhouse
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="item p-5 border rounded text-center">
                                                <div className="text-center">
                                                    <img src="./images/amenities/swimmer.png" alt=""
                                                        className="img-fluid border border-danger rounded-circle p-2" />
                                                    <p className="text-center fw-bold">
                                                        Swimming Pool
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="item p-5 border rounded text-center">
                                                <div className="text-center">
                                                    <img src="./images/amenities/exercise.png" alt=""
                                                        className="img-fluid border border-danger rounded-circle p-2" />
                                                    <p className="text-center fw-bold">
                                                        Gymanasium
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="item p-5 border rounded text-center">
                                                <div className="text-center">
                                                    <img src="./images/amenities/tennis-court.png" alt=""
                                                        className="img-fluid border border-danger rounded-circle p-2" />
                                                    <p className="text-center fw-bold">
                                                        Tennis Court
                                                    </p>
                                                </div>
                                            </div>
                                            {/* <div className="item p-5 border rounded text-center">
                                            <div className="text-center">
                                                <img src="./images/amenities/basket-ball.png" alt="" className="img-fluid border border-danger rounded-circle p-2" />
                                                <p className="text-center fw-bold">
                                                    Basketball Court
                                                </p>
                                            </div>
                                        </div> */}
                                            <div className="item p-5 border rounded text-center">
                                                <div className="text-center">
                                                    <img src="./images/amenities/cricket.png" alt=""
                                                        className="img-fluid border border-danger rounded-circle p-2" />
                                                    <p className="text-center fw-bold">
                                                        Cricket Nets
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="item p-5 border rounded text-center">
                                                <div className="text-center">
                                                    <img src="./images/amenities/garden.png" alt=""
                                                        className="img-fluid border border-danger rounded-circle p-2" />
                                                    <p className="text-center fw-bold">
                                                        Zen Garden
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="item p-5 border rounded text-center">
                                                <div className="text-center">
                                                    <img src="./images/amenities/party-lawn.png" alt=""
                                                        className="img-fluid border border-danger rounded-circle p-2" />
                                                    <p className="text-center fw-bold">
                                                        Party Lawn
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="item p-5 border rounded text-center">
                                                <div className="text-center">
                                                    <img src="./images/amenities/playground.png" alt=""
                                                        className="img-fluid border border-danger rounded-circle p-2" />
                                                    <p className="text-center fw-bold">
                                                        Play Area
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="item p-5 border rounded text-center">
                                                <div className="text-center">
                                                    <img src="./images/amenities/pets.png" alt=""
                                                        className="img-fluid border border-danger rounded-circle p-2" />
                                                    <p className="text-center fw-bold">
                                                        Pet Park
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-center mt-4">
                                            <a href="" className="btn btn-primary text-uppercase ps-5 pe-5 pt-2 pb-2">Enquire Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        

                        {/* <div id="pricing" className="pt-3 pb-3 pt-md-5 pb-md-5">
                            <div className="container">
                                <h2 className="pt-2 pb-2 text-center">Pricing</h2>
                                <div className="row justify-content-center">
                                    <div className="col-md-12">
                                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <a className="nav-link text-dark active" id="home-tab" data-bs-toggle="tab"
                                                    href="#home" role="tab" aria-controls="home"
                                                    aria-selected="true">Apartments</a>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <a className="nav-link text-dark" id="profile-tab" data-bs-toggle="tab"
                                                    href="#profile" role="tab" aria-controls="profile"
                                                    aria-selected="false">Villas</a>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <a className="nav-link text-dark" id="contact-tab" data-bs-toggle="tab"
                                                    href="#contact" role="tab" aria-controls="contact"
                                                    aria-selected="false">Plots</a>
                                            </li>
                                        </ul>
                                        <div className="tab-content mt-3" id="myTabContent">
                                            <div className="tab-pane fade show active" id="home" role="tabpanel"
                                                aria-labelledby="home-tab">
                                                <div className="table-responsive-sm">
                                                    <table
                                                        className="table text-center align-middle table-striped table-bordered">
                                                        <thead>
                                                            <tr className="bg-dark">
                                                                <th className="text-center text-white">Type</th>
                                                                <th className="text-center text-white">Area</th>
                                                                <th className="text-center text-white">Price</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                            <tr>
                                                                <td>1 BHK</td>
                                                                <td>650 Sq.ft.</td>
                                                                <td><a href="" className="btn btn-danger text-uppercase"
                                                                        data-bs-toggle="modal"
                                                                        data-bs-target="#modal">Price Breackup</a></td>
                                                            </tr>
                                                            <tr>
                                                                <td>2 BHK</td>
                                                                <td>950 Sq.ft.</td>
                                                                <td><a href="" className="btn btn-danger text-uppercase"
                                                                        data-bs-toggle="modal"
                                                                        data-bs-target="#modal">Price Breackup</a></td>
                                                            </tr>

                                                            <tr>
                                                                <td>3 BHK</td>
                                                                <td>1400 - 1900 Sq.ft.</td>
                                                                <td><a href="" className="btn btn-danger text-uppercase"
                                                                        data-bs-toggle="modal"
                                                                        data-bs-target="#modal">Price Breackup</a></td>
                                                            </tr>


                                                            <tr>
                                                                <td>4 BHK</td>
                                                                <td>2200 Sq.ft.</td>
                                                                <td><a href="" className="btn btn-danger text-uppercase"
                                                                        data-bs-toggle="modal"
                                                                        data-bs-target="#modal">Price Breackup</a></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="profile" role="tabpanel"
                                                aria-labelledby="profile-tab">
                                                <div className="table-responsive-sm">
                                                    <table
                                                        className="table text-center align-middle table-striped table-bordered">
                                                        <thead>
                                                            <tr className="bg-dark">
                                                                <th className="text-center text-white">Type</th>
                                                                <th className="text-center text-white">Area</th>
                                                                <th className="text-center text-white">Price</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                            <tr>
                                                                <td>4 BHK</td>
                                                                <td>On Request</td>
                                                                <td><a href="" className="btn btn-danger text-uppercase"
                                                                        data-bs-toggle="modal"
                                                                        data-bs-target="#modal">Price Breackup</a></td>
                                                            </tr>

                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="contact" role="tabpanel"
                                                aria-labelledby="contact-tab">
                                                <div className="table-responsive-sm">
                                                    <table
                                                        className="table text-center align-middle table-striped table-bordered">
                                                        <thead>
                                                            <tr className="bg-dark">
                                                                <th className="text-center text-white">Type</th>
                                                                <th className="text-center text-white">Area</th>
                                                                <th className="text-center text-white">Price</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                            <tr>
                                                                <td>30 x 40</td>
                                                                <td>1200 Sq.ft.</td>
                                                                <td><a href="" className="btn btn-danger text-uppercase"
                                                                        data-bs-toggle="modal"
                                                                        data-bs-target="#modal">Sold Out</a></td>
                                                            </tr>


                                                            <tr>
                                                                <td>40 x 40</td>
                                                                <td>1600 Sq.ft.</td>
                                                                <td><a href="" className="btn btn-danger text-uppercase"
                                                                        data-bs-toggle="modal"
                                                                        data-bs-target="#modal">Sold Out</a></td>
                                                            </tr>

                                                            <tr>
                                                                <td>60 x 50</td>
                                                                <td>3000 Sq.ft.</td>
                                                                <td><a href="" className="btn btn-danger text-uppercase"
                                                                        data-bs-toggle="modal"
                                                                        data-bs-target="#modal">Price Breackup</a></td>
                                                            </tr>

                                                            <tr>
                                                                <td>40 x 70</td>
                                                                <td>2800 Sq.ft.</td>
                                                                <td><a href="" className="btn btn-danger text-uppercase"
                                                                        data-bs-toggle="modal"
                                                                        data-bs-target="#modal">Price Breackup</a></td>
                                                            </tr>

                                                            <tr>
                                                                <td>Odd Sizes</td>
                                                                <td>On Request</td>
                                                                <td><a href="" className="btn btn-danger text-uppercase"
                                                                        data-bs-toggle="modal"
                                                                        data-bs-target="#modal">Price Breackup </a></td>
                                                            </tr>

                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="virtual-tour" className="pt-3 pb-3 pt-md-5 pb-md-5 bg-light">
                            <div className="container">
                                <div className="line position-relative text-center">
                                    <h2 className="text-uppercase pb-2">Virtual Tour</h2>
                                    <span className="bg-danger position-absolute start-50 span-line"></span>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="m-1 text-center">
                                            <video width="350" height="280" controls>
                                                <source src="./videos/video-1.mp4" type="video/mp4">
                                                Your browser does not support the video tag.
                                            </video>
                                            <div className="text-center">
                                                <a href="" className="btn btn-danger text-uppercase ps-5 pe-5 pt-2 pb-2"
                                                    data-bs-toggle="modal" data-bs-target="#modal">Enquire Now</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="m-1 text-center">
                                            <video width="350" height="280" controls>
                                                <source src="./videos/video-2.mp4" type="video/mp4">
                                                Your browser does not support the video tag.
                                            </video>
                                            <div className="text-center">
                                                <a href="" className="btn btn-danger text-uppercase ps-5 pe-5 pt-2 pb-2"
                                                    data-bs-toggle="modal" data-bs-target="#modal">Enquire Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                        {/* <div id="location" className="pt-3 pb-3 pt-md-5 pb-md-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="line position-relative text-center mb-5">
                                        <h2 className="text-uppercase pb-2">Location Map</h2>
                                        <span className="bg-danger position-absolute start-50 span-line"></span>
                                    </div>
                                    <div className="spotlight-group text-center m-1">
                                        <a className="spotlight" href="./images/overview.png" data-description="Location Map"><img
                                                src="./images/overview.png" alt="Location Map" className="thumb-1 img-fluid"></a>
                                    </div>
                                    <div className="text-center pt-3">
                                        <a href="" className="btn btn-danger text-uppercase ps-5 pe-5 pt-2 pb-2" data-bs-toggle="modal"
                                            data-bs-target="#modal">Schedule Site visit</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    </div>

                    <div id="pricing-sheet" className="pt-3 pb-3 pt-md-5 pb-md-5">
                        <div className="container">
                            <h2 className="pt-2 pb-2 text-center">Pricing</h2>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="table-responsive-sm">
                                        <table className="table text-center align-middle table-striped table-bordered">
                                            <thead>
                                                <tr className="bg-dark">
                                                    <th className="text-center text-white">Type</th>
                                                    <th className="text-center text-white">Area</th>
                                                    <th className="text-center text-white">Price</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                
                                                <tr>
                                                    <td>1 BHK</td>
                                                    <td>650 Sq.ft.</td>
                                                    <td><a href="" className="btn btn-primary text-uppercase" data-bs-toggle="modal"
                                                            data-bs-target="#modal">Price Breackup</a></td>
                                                </tr>
                                                <tr>
                                                    <td>2 BHK</td>
                                                    <td>950 Sq.ft.</td>
                                                    <td><a href="" className="btn btn-primary text-uppercase" data-bs-toggle="modal"
                                                            data-bs-target="#modal">Price Breackup</a></td>
                                                </tr>
                                            </tbody>
                                        </table> 
                                    </div>       
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="information" className="pt-3 pb-3 pt-md-3 pb-md-3 bg-light rounded">
                        <div className="container">
                            <div className="row bg-white shadow">
                                <div className="col-md-9 border-dark border-start border-5 align-self-center">
                                    <div className="p-2">
                                        <h2>Need more information?</h2>
                                        <p className="m-0">Don't hesitate to download the brochure to
                                            know more details of this project.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-3 align-self-center">
                                    <div className="text-center">
                                        <a href="" className="btn btn-primary text-uppercase ps-5 pe-5 pt-2 pb-2" data-bs-toggle="modal" data-bs-target="#modal">Enquire Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 bg-light">
                    <div className="pt-3 pb-5 sticky-top custom1 bg-white shadow">
                        <h4 className="text-uppercase text-center text-white bg-dark fw-bold p-2">Enquire Now</h4>
                        <div className="form rounded p-2 w-100">
                            
                            <div className="pb-3">
                                <div className="form-floating mb-2">
                                    <input type="text"
                                        className="form-control"
                                        name="name" id="name" placeholder="name@example.com" />
                                    <label for="name"><i className="far fa-user fs-5 me-3"></i> Name</label>
                                    {/*  <span id="name-info" className="text-danger"></span> */}
                                </div>
                                <div className="form-floating mb-2">
                                    <input type="email"
                                        className="form-control"
                                        name="email" id="email" placeholder="name@example.com" />
                                    <label for="email"><i className="far fa-envelope fs-5 me-3"></i> Email ID</label>
                                    {/* <span id="email-info" className="text-danger"></span> */}
                                </div>
                                <div className="form-floating mb-2">
                                    <input type="tel" id="phone" className="form-control"
                                    name="phone" placeholder="Phone No" />
                                    <label for="phone"></label>
                                    {/* <span id="phone-info" className="text-danger"></span> */}
                                </div>
                                <div className="form-floating mb-2">
                                    <select className="form-select" id="project" name="project" aria-label="Floating label select example">
                                      <option selected></option>
                                      <option value="The Great Acres">The Great Acres</option>
                                      <option value="Aspen Greens">Aspen Greens</option>
                                      <option value="Avalon Park">Avalon Park</option>
                                      <option value="Eden Park">Eden Park</option>
                                    </select>
                                    <label for="floatingSelect">Select Project</label>
                                </div>
                                <div className="text-center">
                                    <button className="btn btn-sm btn-warning w-100 text-uppercase p-2"
                                        onClick="sendContact();" name="submit" type="submit">Get Instant
                                        Call Back</button>
                                </div>
                                <div id="mail-status"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        

        <div id="all" className="pt-3 pb-3 pt-md-5 pb-md-5 bg-light">
            <div className="container">
                <h2 className="text-center pt-2 pb-2">Other Prestige City Projects</h2>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card text-center m-1 border-0 shadow">
                            <img src="./images/slider/eden-park/eden-park-2.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                              <h2 className="card-title text-uppercase">Eden Park</h2>
                              <p className="card-text">Sarjapur Road, Bangalore</p>
                              <h4 className="fw-bold mb-3">1 / 2 Bed Apartments</h4>
                              <a href="./eden-park.html" target="_blank" className="btn btn-primary stretched-link">Read more</a>
                            </div>
                          </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card text-center m-1 border-0 shadow">
                            <img src="./images/slider/aspen-greens/aspen-greens-1.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                              <h2 className="card-title text-uppercase">Aspen Greens</h2>
                              <p className="card-text">Sarjapur Road, Bangalore</p>
                              <h4 className="fw-bold mb-3">4 Bed Villas</h4>
                              <a href="./eden-park.html" target="_blank" className="btn btn-primary stretched-link">Read more</a>
                            </div>
                          </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card text-center m-1 border-0 shadow">
                            <img src="./images/slider/the-great-acres/the-great-acres-4.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                              <h2 className="card-title text-uppercase">The Great Acres</h2>
                              <p className="card-text">Sarjapur Road, Bangalore</p>
                              <h4 className="fw-bold mb-3">Plot</h4>
                              <a href="./eden-park.html" target="_blank" className="btn btn-primary stretched-link">Read more</a>
                            </div>
                          </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="about-developer" className="pt-3 pb-3 pt-md-5 pb-md-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="line position-relative text-center mb-5">
                            <h2 className="text-uppercase pb-2">About Developer</h2>
                            <span className="bg-danger position-absolute start-50 span-line"></span>
                        </div>
                        <div className="">
                            <p className="text-center">
                                Over the last decade, the Prestige Group has firmly established itself as one of the
                                leading
                                and most successful developers of real estate in India by imprinting its indelible mark
                                across all asset classes. Founded in 1986, the group’s turnover is today in excess of Rs
                                3518 Cr (for FY 15); a leap that has been inspired by CMD Irfan Razack and marshaled by
                                his
                                brothers Rezwan Razack and Noaman Razack. As of 30th June 2020, the group has completed
                                247
                                projects covering 134 million sft, and currently has 45 ongoing projects covering over
                                53
                                million sft, 56 mn sft of upcoming projects, and holds a land bank of 262 acres with
                                potential developable area of 27 mn sft.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="footer" className="pt-3 pb-3 pt-md-5 bg-dark">
            <div className="container">
                <div className="row pt-2">
                    <div className="col-md-12">
                        <div className="text-center">
                            <img src="./images/footer.png" alt="footer-logo" className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <p className="text-justify text-white pt-2">
                            Disclaimer : The content is for information purposes only and does not constitute an offer
                            to
                            avail of any service. Prices mentioned are subject to change without notice and properties
                            mentioned are subject to availability. Images for representation purposes only. This is the
                            official website of authorized marketing partner. We may also send updates to
                            the mobile number/email id
                            registered with us. All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* <!-- <div id="li-ri-btn" className="">
        <div className="right-fix-btn">
            <a href="" className="btn btn-danger text-uppercase" data-bs-toggle="modal" data-bs-target="#modal">brochure
            </a>
        </div>
        <!-- <div className="left-fix-btn">
            <a href="" className="btn btn-danger text-uppercase" data-bs-toggle="modal" data-bs-target="#modal">Read More</a>
        </div> --> */}
    </div>
    )
}

export default SecondSection
