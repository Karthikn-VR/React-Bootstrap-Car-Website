import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CarHomepage.css';
import Navbar from '../CarNav/CarNavBar';
import Text from '../Text/Text';
import { motion } from "framer-motion"



const CarHomepage = () => {
    

  return (

    
    <div className="page-wrapper">
     
   <div className='bg-image'></div>
 
      <Navbar />
      
      <Text />
      <div className="tiers">
        <h6><em>Wide, performance-focused 
           tires ensure superior grip and
           handling on every road.</em></h6>
      </div>

            <div className="tiers-2">
        <h6><em>High-grip performance tires designed for 
          stability, control, and a smooth, 
          aggressive ride..</em></h6>
      </div>

      <div className="windows">
        <h6>
          <em>
            Sleek, tinted windows
           blend style with privacy and
          aerodynamic efficiency.
          </em>
        </h6>
      </div>

      <div className="interier">
        <h6>
          <em>
            A driver-focused cabin 
            with premium materials,
            sporty accents,and cutting-edge
            tech for an immersive ride.
          </em>
        </h6>
      </div>

      <div className="hood">
        <h6><em>A high-performance engine that 
          roars with power, delivering the 
          classic Mustang thrill on every drive.</em></h6>
      </div>

      <div className="grill">
        <h6><em>Signature front grille with 
          bold lines gives the Mustang its 
          iconic, fierce look.</em></h6>
      </div>
      
   
</div>


   
  );
};

export default CarHomepage;
