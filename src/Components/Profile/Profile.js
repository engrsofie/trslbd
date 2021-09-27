import React from "react";
import pic4 from "../images/pic4.png";
import pic5 from "../images/pic5.png";
import pic6 from "../images/pic6.png";
import pic7 from "../images/pic7.png";
import logo from "../images/logo.png";
import { Card, Image } from "react-bootstrap";
import "./Profile.css";
const Profile = () => {
  return (
    <div className="container mt-4">
      <div className="coint text-center">
        <p>Welcome to Trade Route Sourcing</p>
        <small>Manufacturing and Exporting Garments since year 2015.</small>
      </div>
      <div className="row mt-3">
        <div className="col-md-4 text-center card-size mb-3 img-size size1 text-size ">
          <div className="border border-danger h-100">
            <div className="bg-img1">
              <Image src={pic4} roundedCircle />

              <h4>Products</h4>
              <p>
                From winding to Packing, the art is everywhere in the production
                of our top quality winter wears.{" "}
              </p>
              <h1 class=" crd-txt1 underline-gap">
                {" "}
                <a href="">LEARN MORE</a>
              </h1>
            </div>
          </div>
        </div>
        {/* <div className="col-md-3 text-center card-size mb-3 img-size size2 text-size">
          <div className="border border-danger h-100">
            <div className="bg-img2">
              <Image src={pic5} roundedCircle />

              <h4>Machineries</h4>
              <p>
                From winding to Packing, the art is everywhere in the production
                of our top quality winter wears.{" "}
              </p>
              <h1 class=" crd-txt1 underline-gap">
                {" "}
                <a href="">LEARN MORE</a>
              </h1>
            </div>
          </div>
        </div> */}
        <div className="col-md-4 text-center card-size mb-3 img-size size3 text-size">
          <div className="border border-danger h-100">
            <div className="bg-img3">
              <Image src={pic6} roundedCircle />

              <h4>Customers</h4>
              <p>
                From winding to Packing, the art is everywhere in the production
                of our top quality winter wears.{" "}
              </p>
              <h1 class=" crd-txt1 underline-gap">
                {" "}
                <a href="">LEARN MORE</a>
              </h1>
            </div>
          </div>
        </div>
        <div className="col-md-4 text-center card-size mb-3 img-size size4 text-size">
          <div className="border border-danger h-100">
            <div className="bg-img4">
              <Image src={logo} roundedCircle />

              <h4>Profile</h4>
              <p>
                From winding to Packing, the art is everywhere in the production
                of our top quality winter wears.{" "}
              </p>
              <h1 class=" crd-txt1 underline-gap">
                {" "}
                <a href="">LEARN MORE</a>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
