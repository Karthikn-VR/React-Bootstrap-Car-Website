import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './AboutUs.css'; 
import car1 from './images/car1.png';
import car2 from './images/car2.png';
import car3 from './images/car3.png';
import Navbar from "../CarNav/CarNavBar";
import Footer from "./Footer";


const carData = [
  {
    title: "1967 Ford Mustang",
    description: "An iconic American muscle car with timeless appeal.",
    image: car1
  },
  {
    title: "1955 Mercedes-Benz 300SL",
    description: "Famous for its gullwing doors and precision engineering.",
    image: car2
  },
  {
    title: "1963 Chevrolet Corvette",
    description: "A beautifully sculpted sports car with rich racing history.",
    image: car3
  }
];

export default function AboutUs() {
  return (
    <div className="container py-5">
        <Navbar />
    
      <div className="text-center mb-5 text-light">
        <h1 className="display-4 fw-bold text-light">About Us</h1>
        <p className="lead text-secondary text-light">
          At ClassicLuxury, we celebrate the golden era of automobiles by curating and showcasing timeless classics. Our mission is to preserve automotive history with elegance.
        </p>
      </div>

    
      <div className="row">
        {carData.map((car, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100 shadow-sm border-0">
              <img src={car.image} className="card-img-top" alt={car.title} />
              <div className="card-body">
                <h5 className="card-title">{car.title}</h5>
                <p className="card-text text-muted">{car.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
