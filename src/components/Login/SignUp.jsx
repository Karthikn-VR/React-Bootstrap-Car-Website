import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function SignIn() {

  
  return (
    <div className="signin">
      <div
        className="modal fade"
        id="exampleModalCenter1"
        tabIndex="-1"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">

            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalCenterTitle">Sign-in</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            

            <div className="modal-body">
              <form>
                
                <div className="form-group mb-3">
                  <label htmlFor="exampleInputName1">Name</label>
                  <input
                    type="name"
                    className="form-control"
                    id="exampleInputName1"
                    aria-describedby="emailHelp"
                    placeholder="Enter Nmae"
                  />
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="exampleInputPassword1">Set Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                </div>

                <div className="form-group form-check mb-3">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Sign in
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
