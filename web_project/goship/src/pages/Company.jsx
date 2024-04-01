import React from 'react';

const OurCompanyPage = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Our Company</h2>
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-3">
            <div className="card-header bg-orange text-white">
              Company Information
            </div>
            <div className="card-body">
              <h5 className="card-title">About Us</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget libero tristique, condimentum ligula et, fermentum turpis. Proin quis libero id mi rhoncus commodo.
              </p>
              <button className="btn btn-primary">Learn More</button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-3">
            <div className="card-header bg-orange text-white">
              Our Mission
            </div>
            <div className="card-body">
              <h5 className="card-title">Our Goal</h5>
              <p className="card-text">
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris condimentum turpis eget mi laoreet, nec sodales sapien placerat.
              </p>
              <button className="btn btn-primary">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCompanyPage;
