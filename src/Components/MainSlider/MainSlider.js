import React from 'react'

const MainSlider = () => {
    return (
        <div id="slider">
        <div className="owl-carousel owl-theme" id="main-slider">
            {/* <div className="item">
                <div className="spotlight-group text-center m-1">
                    <a className="spotlight" href="./images/slider/image-1.png" data-description="Location Map"><img
                            src="./images/slider/image-1.png" alt="Location Map" className="thumb-1 rounded img-fluid"></a>
                </div>
            </div> */}
            <div className="item">
                <div className="spotlight-group text-center m-1">
                    <a className="spotlight" href="./images/slider/avalon-park/avalon-park-1.png" data-description="Location Map"><img
                            src="./images/slider/avalon-park/avalon-park-1.png" alt="Location Map" className="thumb-1 rounded img-fluid" /></a>
                </div>
            </div>
            <div className="item">
                <div className="spotlight-group text-center m-1">
                    <a className="spotlight" href="./images/slider/avalon-park/avalon-park-2.png" data-description="Location Map"><img
                            src="./images/slider/avalon-park/avalon-park-2.png" alt="Location Map" className="thumb-1 rounded img-fluid" /></a>
                </div>
            </div>
             {/* <div className="item">
                <div className="spotlight-group text-center m-1">
                    <a className="spotlight" href="./images/slider/image-4.png" data-description="Location Map"><img
                            src="./images/slider/image-4.png" alt="Location Map" className="thumb-1 rounded img-fluid"></a>
                </div>
            </div>  */}
        </div>
    </div>
    )
}

export default MainSlider
