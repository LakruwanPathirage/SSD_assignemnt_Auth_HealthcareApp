import React from "react";
// import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBIcon } from "mdbreact"
// import { MDBFooter } from "mdbreact";

import "bootstrap/dist/css/bootstrap.min.css";
import "../css/loggingpage.css";
import imgg from "../Frontend_images/istockphoto-1284636209-1024x1024.jpg";
class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      // <MDBContainer>
      //     <MDBRow>
      //         <MDBCol>
      //             <MDBJumbotron style={{ padding: 0 }}>
      //                 <MDBCol className="text-white text-center py-5 px-4 my-5" style={{ backgroundImage: `url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)` }}>
      //                     <MDBCol md="2" className="rounded mx-auto d-block">
      //                         <img src={require("./images/MainLogo.png")} className="img-fluid" alt="Main Logo" />
      //                     </MDBCol>
      //                     <MDBCol md="2" className="rounded mx-auto d-block">
      //                         <MDBCardTitle className="text-center font-bold">RESERVE IT</MDBCardTitle>
      //                     </MDBCol>
      //                     <MDBCol className="py-5">
      //                         <p className="mx-5">We are a Online Platform that enables you to reserve dinning oppertunity at most popular Hotels in Sri Lanka. You
      //                         can login and resgister to our platform using any of the social logins mention below. We will ensure getting you a reservation.
      //                             </p>
      //                         <MDBRow>
      //                             {/* call http://localhost:3000/auth/google to begin OAuth flow  */}
      //                             <MDBCol><MDBBtn href="http://localhost:3000/auth/google" color="danger" size="lg"><MDBIcon fab icon="google-plus-g" className="pr-1" /> Google</MDBBtn></MDBCol>
      //                             <MDBCol> <MDBBtn color="primary" size="lg"><MDBIcon fab icon="facebook-f" className="pr-1" /> Facebook</MDBBtn></MDBCol>
      //                         </MDBRow>
      //                     </MDBCol>
      //                 </MDBCol>
      //             </MDBJumbotron>
      //         </MDBCol>
      //     </MDBRow>

      //     <MDBFooter color="blue" className="font-small pt-4 mt-4">
      //         <div className="footer-copyright text-center py-3">
      //             <MDBContainer fluid>
      //                 &copy; {new Date().getFullYear()} Copyright: Ranmal Dewage <a href="https://ranmaldewage.wordpress.com/posts/"> ranmaldewage.wordpress.com </a>
      //             </MDBContainer>
      //         </div>
      //     </MDBFooter>
      // </MDBContainer>
      <div>
        <header id="home-section">
          <div class="dark-overlay">
            <div class="home-inner container">
              <div class="row">
                <div class="col-lg-8 d-none d-lg-block">
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
                      <button type="button" class="btn btn-danger ">
                        <div className="row text-sign">
                          <div className="col-md-4 text-center">
                            <i class="fab fa-google-plus-square fa-3x"></i>
                          </div>
                          <div className="col-md-8">
                            <p2 className="d-block ">Signing In</p2>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4">
                  <div className="row">
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
