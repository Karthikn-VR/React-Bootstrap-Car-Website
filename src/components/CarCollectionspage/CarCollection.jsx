import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./CarCollection.css";
import Navbar from "../CarNav/CarNavBar";
import AboutUs from "../AboutUs/AboutUs";

const CarCollections = () => {
  const [cars, setCars] = useState([]);
  const [newCar, setNewCar] = useState({ title: '', description: '', image: '' });
  const [showForm, setShowForm] = useState(false);

  const handleAddCar = (e) => {
    e.preventDefault();
    setCars([...cars, newCar]);
    setNewCar({ title: '', description: '', image: '' });
    setShowForm(false);
  };
  useEffect(()=>{
    setCars([{
      title: '1940 Lincoln Zephyr',
      description:"The Zephyr was one of America's first streamlined production cars, introduced some 18 months after Chrysler debuted the Airflow. Unlike its direct competitor (and most luxury vehicles available at the time), the Zephyr was powered by inline-eight or V8 engines. Lincoln opted to develop a brand-new V12 for the Zephyr line.'",
      image:'https://s1.cdn.autoevolution.com/images-webp/news/1940-lincoln-zephyr-continental-ditched-its-original-flathead-v12-for-modern-v8-muscle-252474-7.jpg.webp'
     },
    {
      title:'Dodge Challenger SRT Demon 170',
      description:"The HEMI pushed the Demon from 0 to 60 mph in just 1.66 seconds and made it run the quarter mile in an NHRA-certified 8.91 seconds at 151.17 mph. It was a performance achieved by long-term Dodge test driver and SRT engineer Jim Wilder, who was also involved in the development of the muscle car. So, since Wilder knew every inch of the Demon from bumper to bumper, there was nobody more appropriate to try that record run.",
      image:'https://bringatrailer.com/wp-content/uploads/2024/04/2023_dodge_challenger-srt-demon-170_img_1107-48505.jpeg?fit=940%2C627'
     },
    {
      title:'1975 Oldsmobile Delta 88 Ragtop',
      description:'By 1975, the convertible whim was all but gone, with federal bodies stating that the ragtop would be unsafe in a rollover. Hence, everyone in Detroit unceremoniously ditched bar Cadillac, who actually dropped the ragtops with a bang – and a Limited Edition - in 1976',
      image:'https://s1.cdn.autoevolution.com/images-webp/news/owner-took-rare-1975-oldsmobile-delta-88-ragtop-for-an-inspection-dealer-charged-him-45-252413-7.jpg.webp'
    },
    {
    title:'Lamborghini Miura',
    description:'Considered by some to be the sexiest car ever built, the Miura debuted in 1966 as a sleek mid-engine speedster designed to challenge Ferrari.',
    image:'https://hips.hearstapps.com/toc.h-cdn.co/assets/16/14/3200x2136/1971-lamborghini-miura-sv_1.jpg?resize=980:*'
    },
    {
      title:'Mercedes SL 300 Gullwing',
      description:'Among the first sports cars of the post-war era, the Mercedes SL 300 Gullwing was the fastest production car of its time when it was introduced in 1954. As the first direct fuel injection series production car, the SL 300 could travel at an eye-popping 160 miles per hour.',
      image:'https://hips.hearstapps.com/toc.h-cdn.co/assets/16/14/3200x1655/1954-mercedes-300sl-gullwing-a_1.jpg?resize=980:*'
    },
    {
      title:'1970 Ford Mustang Boss 429 Modern Restomod',
      description:'Step into a time machine with a twist — the 1970 Ford Mustang Boss 429 Modern Restomod is where classic American muscle meets cutting-edge innovation. This rare masterpiece blends the iconic design of the original Boss 429 with modern-day engineering, delivering unmatched performance, style, and comfort.',
      image:'https://cdnb.artstation.com/p/assets/images/images/059/412/037/large/rostislav-prokop-boss-4535.jpg?1676328553'
    },
    {
      title:'Dodge Coronet',
      description:"The Dodge Coronet was introduced with the division's first postwar body styles. Lower trim lines were the Wayfarer and Meadowbrook, with the Wayfarer being built on a shorter 115 inch wheelbase.[6] The only engine for Dodge was a 230-cubic-inch (3,800 cc) flat-head straight six cylinder engine with a single barrel Stromberg carburetor, producing 103 hp (77 kW) (gross).",
      image:'https://upload.wikimedia.org/wikipedia/commons/6/64/1951_Dodge_Coronet_Club_Coupe%2C_front_left%2C_07-17-2023.jpg'
    },
    {
      title:'BMW 507',
      description:"The BMW 507 is a grand touring convertible that was produced by German automobile manufacturer BMW from 1956 until 1959. Initially intended to be exported to the United States at a rate of thousands per year, it ended up being too expensive, resulting in a total production figure of 252 cars and heavy financial losses for BMW.",
      image:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/1958_BMW_507_3.3_Front.jpg/500px-1958_BMW_507_3.3_Front.jpg'
    },
    {
      title:'Hudson Hornet',
      description:"The Hudson Hornet (1951–1954) featured a low “step-down” design for superior handling.Powered by a strong inline-six engine, it was dominant in early 1950s NASCAR racing.It remains an iconic classic American car known for performance and innovation.",
      image:'https://images.postwarclassic.com/pics/r2w-1200x800-caradverts/312743/300472f695ad1a3efde9a868bf4911e413ce4e7d.jpg'
    }
    ])
    },[])

  
  return (
    <div>
      <Navbar />
      <div className="collection-bg"></div>
      

      <div className="container mt-5 pt-5">
        <div className="row justify-content-center g-4">
          {cars.map((car, index) => (
            <div className="col-lg-2 col-md-4 col-sm-6" key={index}>
              <div className="card">
                <img src={car.image} className="card-img-top" alt={car.title} />
                <div className="card-body">
                  <h5 className="card-title">{car.title}</h5>
                  <p className="card-text">
                  {car.description.length > 30 
                  ? car.description.slice(0, 29) + '...' 
                  : car.description}
                 </p>
                  <button>Show Details</button>
                </div>
              </div>
            </div>
          ))}

          <div className="col-lg-2 col-md-4 col-sm-6">
            <div
              className="card text-center"
              onClick={() => setShowForm(!showForm)}
              style={{ cursor: "pointer" }}
            >
              <div
                className="card-body d-flex align-items-center justify-content-center"
                style={{ height: "250px" }}
              >
                <h1>+</h1>
              </div>
            </div>
          </div>
        </div>

        {showForm && (
          <div className="mt-4">
            <form onSubmit={handleAddCar}>
              <input
                type="text"
                placeholder="Title"
                className="form-control mb-2"
                required
                value={newCar.title}
                onChange={e => setNewCar({ ...newCar, title: e.target.value })}
              />
              <input
                type="text"
                placeholder="Description"
                className="form-control mb-2"
                required
                value={newCar.description}
                onChange={e => setNewCar({ ...newCar, description: e.target.value })}
              />
              <input
                type="text"
                placeholder="Image URL"
                className="form-control mb-2"
                required
                value={newCar.image}
                onChange={e => setNewCar({ ...newCar, image: e.target.value })}
              />
              <input
                type="submit"
                className="btn btn-success"
                value="Add Car"
              />
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarCollections;
