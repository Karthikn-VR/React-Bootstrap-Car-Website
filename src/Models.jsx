import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import CarModel from "./CarModel";
import MustangModel from "./MustangModel";
import PorscheModel from "./PorscheModel";
import HondaModel from "./HondaModel";
import RafatoModel from "./RafatoModel";
import './Models.css';
import Navbar from "./components/CarNav/CarNavBar";

export default function CarouselWithModels() {
  return (
    <div>
      <Navbar />
    <div id="carouselExampleControls" className="carousel slide stylecontainer" data-bs-ride="carousel">
      <div className="carousel-inner">

       
        <div className="carousel-item active">
          <div className="model-container">
            <CarModel />
          </div>
          <div className="carousel-caption d-none d-md-block">
            <h5>Ford Mustang 1965</h5>
            <p>Step into automotive history with the iconic 1965 Ford Mustang.
               This classic American muscle car features a timeless design, 
               with its long hood, short rear deck, and aggressive front grille. 
               In 3D view, explore every detail — from its sculpted body lines 
               and chrome accents to its distinctive tri-bar tail lights and 
               sporty interior. Rotate, zoom, and inspect the Mustang's vintage 
               charm from every angle, capturing the essence of 1960s performance 
               and style</p>
          </div>
        </div>
        

     
        <div className="carousel-item">
          <div className="model-container">
            <MustangModel />
          </div>
          <div className="carousel-caption d-none d-md-block">
            <h5>1967 Classic Muscle Car</h5>
            <p>Experience the bold elegance of this 1967 classic muscle car in 3D. 
              Its long, sleek body, sharp chrome lines, and vintage curves reflect true 
              American design. Rotate and zoom to explore the spacious
               interior, iconic front fascia, and polished wheels. A timeless symbol 
               of power and style, brought to life in stunning detail.</p>
          </div>
        </div>

        
        <div className="carousel-item">
          <div className="model-container">
            <PorscheModel />
          </div>
          <div className="carousel-caption d-none d-md-block">
            <h5>Porsche 911 Carrera 4S</h5>
            <p>Discover the Porsche 911 Carrera 4S in stunning 3D.
               From its iconic curves to its wide rear stance, 
               every detail reflects performance and precision. 
               Explore the aerodynamic body, signature headlights,
               and refined interior. A perfect blend of luxury and 
               speed—crafted for the road, designed for the enthusiast.</p>
          </div>
        </div>

            <div className="carousel-item">
          <div className="model-container">
            <HondaModel />
          </div>
          <div className="carousel-caption d-none d-md-block">
            <h5>Honda S800</h5>
            <p>Explore the classic Honda S800 in interactive 3D. 
              This compact roadster blends vintage charm with sporty elegance. 
              Admire its smooth curves, 
              chrome trim, and minimalist interior. A lightweight legend 
              from the ‘60s, brought to life in stunning detail.</p>
          </div>
        </div>
        <div className="carousel-item">
          <div className="model-container">
            <RafatoModel />
          </div>
          <div className="carousel-caption d-none d-md-block">
            <h5>1967 Ace Rafato</h5>
            <p>Get up close with the 1967 Ace Rafato in full 3D. 
              With its aggressive stance, bold lines, and chrome accents, 
              this muscle car screams raw power. Rotate and zoom to explore 
              its wide body, retro grille, and detailed interior. 
              A true icon of '60s muscle—reborn in immersive detail.</p>
          </div>
        </div>

      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    </div>
  );
}
