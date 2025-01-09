import React from 'react';
import bannerimg from "../assets/body/banner.jpeg"; // Ensure the image path is correct
 const Banner = () => {

  return (
    <>
      {/* banner start */}
      <div className="banner">
        <img src={bannerimg} alt="Banner" className="bannerImg" />
        <div className="textOverlay">
          <h1>More Comfortable.</h1>
          <h1>More Classy.</h1>
          <p>Make your living experience even more memorable</p>
        </div>
      </div>
      {/* banner end */}
    </>
  );
};

export default Banner;
