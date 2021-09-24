import React from "react";
// import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBIcon } from "mdbreact"
// import { MDBFooter } from "mdbreact";

import "bootstrap/dist/css/bootstrap.min.css";
import "../css/loggingpage.css";
import imgg from "../Frontend_images/brand.jpg";
class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <header id="home-section">
          <div class="dark-overlay">
            <div class="home-inner container">
              <div class="row">
                <div class="col-lg-8 ">
                  <h1>Channel your doctors</h1>
                  <div class="d-flex">
                    <div class="p-4 align-self-start">
                      <i class="fas fa-check fa-2x"></i>
                    </div>
                    <div class="p-4 align-self-end">
                      You can channel Any doctor you want , don't need to stay
                      any Que. Just logging as simple
                    </div>
                  </div>

                  <div class="d-flex">
                    <div class="p-4 align-self-start">
                      <i class="fas fa-check fa-2x"></i>
                    </div>
                    <div class="p-4 align-self-end">
                      This service was recommende by Sri lanaka Health Ministry.
                      24 hours Avialable,Very fast efficient Service
                    </div>
                  </div>

                  <div class="row">
                    <div className="col-md-6 offset-4">
                      <a
                        href="http://localhost:3000/auth/google"
                        class="btn btn-danger btn-lg active"
                        role="button"
                        aria-pressed="true"
                      >
                        <div className="row text-sign">
                          <div className="col-md-4 text-center">
                            <i class="fab fa-google-plus-square fa-3x"></i>
                          </div>
                          <div className="col-md-8">
                            <p2 className="d-block ">Signing In</p2>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4">
                  <div className="row d-none d-lg-block">
                    <img
                      src={imgg}
                      class="img-fluid mb-3 rounded-circle"
                      alt="brand"
                    />
                    <div className="row">
                      <h1 className="text-center">IChannel</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <footer id="main-footer" class="py-5 bg-primary text-white">
          <div class="container">
            <div class="row text-center">
              <div class="col-md-6 ml-auto">
                <p class="lead">
                  &copy; {new Date().getFullYear()} Copyright:Ichanneling.com
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default LogIn;
