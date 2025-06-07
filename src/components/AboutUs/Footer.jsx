import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Footer() {
  return (
    <div className="container-fluid bg-dark text-white mt-5">
      <footer className="py-5">
        <div className="row px-5">
          {/* Explore Section */}
          <div className="col-2">
            <h5>Explore</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Home</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Gallery</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Showroom</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Vintage Events</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Collections</a></li>
            </ul>
          </div>

          {/* Services Section */}
          <div className="col-2">
            <h5>Services</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Restoration</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Customization</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Maintenance</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Parts Ordering</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Storage</a></li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="col-2">
            <h5>Support</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Contact Us</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">FAQs</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Shipping Info</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Return Policy</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="col-4 offset-1">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of what’s new and exciting from us.</p>
              <div className="d-flex w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                <button className="btn btn-primary" type="button">Subscribe</button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="d-flex justify-content-between py-4 my-4 border-top px-5">
          <p>&copy; 2025 Vintage Cars Inc. Made By Karthikeyan V.R 	&#x1F496;
          </p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <a className="text-white" href="#"><i className="bi bi-twitter"></i></a>
            </li>
            <li className="ms-3">
              <a className="text-white" href="#"><i className="bi bi-instagram"></i></a>
            </li>
            <li className="ms-3">
              <a className="text-white" href="#"><i className="bi bi-facebook"></i></a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
