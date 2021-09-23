import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "../css/loggingpage.css";
import imgg from "../Frontend_images/brand.jpg";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBFormInline,
  MDBAnimation,
} from "mdbreact";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import Error from './Error';
// import "../style.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      userName: "",
      collapseID: "",
      city: "",
      hotel: "",
      date: "",
      time: "",
      persons: "",
      id: "RES-IT-" + Math.floor(Math.random() * 10000000),
      city_selection: ["Colombo", "Kandy", "Galle"],
      hotel_selection: ["Shangri-La Hotel", "Jetwing Hotel", "Cinnamon Hotel"],
    };
  }

  //   changeHandler = event => {
  //     this.setState({ [event.target.name]: event.target.value });
  //   };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : "",
    }));

  render() {
    return (
      <div>
        <Router>
          <nav class="navbar navbar-expand-sm navbar-light bg-light ">
            <div className="container cus-alig">
              <a href="/home" class="navbar-brand">
                <img src={imgg} width="50" height="50" alt="" />
                <h3 class="d-inline align-middle p-1 text-dark">IChanneling</h3>
              </a>

              <button
                class="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbarNav"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item">
                    <a class="nav-link" href="/home">
                      Home
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/home">
                      Profile
                    </a>
                  </li>
                </ul>
              </div>
              <div className=" ml-auto  d-none d-md-flex">
                <div class="nav-item text-dark mr-3 cus-flexx ">
                  <i class="fas fa-user-circle fa-2x px-1"></i>
                  <p className="d-inline-block px-1">Sumudu</p>
                </div>
              </div>
            </div>
          </nav>
        </Router>
        <div className="home-background">
          <div className="container ">
            <div className="row text-white">
              <div className="col-md-4 text-white">
                <div className="d-flex flex-column cus-heigt justify-content-center">
                  <div class="card card-heigh text-black text-left">
                    <div class="card-body">
                      <h4 class="card-title">Channel Your Doctor</h4>
                      <hr />
                      <p class="card-text text-secondary">
                        Select your best doctor,we will care the rest!
                      </p>
                      <a
                        class="btn btn-danger"
                        href="http://localhost:3000/auth/logout"
                      >
                        Log Out
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <div class="container">
                  <div className="card card-body mt-4 ">
                    <form>
                      <div class="form-group">
                        <label for="name" className="text-black p-2">
                          Select Doctor Name
                        </label>
                        <select
                          value={this.state.city}
                          name="city"
                          onChange={this.changeHandler}
                          id="defaultFormRegisterNameEx"
                          className="form-control"
                          required
                        >
                          <option value="">---Choose Doctor---</option>
                          {/* {citiySelection}  enter doctors names */}
                        </select>
                      </div>
                      <div class="form-group">
                        <label
                          htmlFor="HospitalName"
                          className="text-black p-1"
                        >
                          Hotel Name
                        </label>
                        <select
                          value={this.state.hotel}
                          name="hotel"
                          onChange={this.changeHandler}
                          id="HospitalName"
                          className="form-control"
                          required
                        >
                          <option value="">
                            ---Choose Hosptital Location---
                          </option>
                          {/* {hotelSelection} */}
                        </select>
                      </div>
                      <div class="form-group">
                        <label htmlFor="resrvdate" className="text-black">
                          Date
                        </label>
                        <input
                          value={this.state.date}
                          onChange={this.changeHandler}
                          type="date"
                          id="resrvdate"
                          className="form-control"
                          name="date"
                          required
                        />
                      </div>
                      <div class="form-group">
                        <label htmlFor="reservtime" className="text-black">
                          Time
                        </label>

                        <input
                          value={this.state.time}
                          onChange={this.changeHandler}
                          type="time"
                          id="reservtime"
                          className=" form-control"
                          name="time"
                          placeholder="hh:mm am/pm"
                          required
                        />
                      </div>

                      <div class="form-group">
                        <label htmlFor="revridentity" className="grey-text">
                          Reservation Id
                        </label>
                        <input
                          value={this.state.id}
                          onChange={this.changeHandler}
                          type="text"
                          id="revridentity"
                          className="form-control"
                          name="id"
                          placeholder="ID"
                          readOnly
                        />
                      </div>
                      <button class="btn btn-primary btn-block" type="submit">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
