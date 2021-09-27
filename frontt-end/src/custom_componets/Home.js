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
      doctorName: "",
      hospital_location: "",
      date: "",
      time: "",
      id: "RES-IT-" + Math.floor(Math.random() * 10000000),
      doctor_selection: [
        "Sumudu Lakruwan",
        "Uditha chamara",
        "Jayanath Perera",
      ],
      hospital_selection: [
        "Asiri Hospital",
        "Hemas  Hospital",
        "jewling Hospital",
      ],
    };
  }

  componentDidMount() {
    //check whether user is authenticated
    const option = {
      method: "GET",
      credentials: "include",
    };

    fetch("http://localhost:3000/profile/", option)
      .then(res => res.json())
      .then(res => {
        this.setState({
          loggedIn: res.status,
          userName: res.name,
        });
        console.log(res);
      });
  }
  //reset values
  resetForm = () => {
    this.setState({
      doctorName: "",
      hospital_location: "",
      date: "",
      time: "",
    });
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  //submit form
  submitHandler = event => {
    event.preventDefault();
    event.target.className += " was-validated";

    if (
      this.state.doctorName != "" &&
      this.state.hospital_location != "" &&
      this.state.date != "" &&
      this.state.time != ""
    ) {
      var reservation_data = {
        doctorName: this.state.doctorName,
        hospital_location: this.state.hospital_location,
        date: this.state.date,
        time: this.state.time,
        id: this.state.id,
      };

      console.log(reservation_data);
      const option = {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(reservation_data),
        headers: {
          "Content-Type": "application/json",
        },
      };

      // call end point to make reservation by sending email and creating google calendar event
      fetch("http://localhost:3000/profile/reserve", option)
        .then(res => res.json())
        .then(res => {
          if (res.status) {
            toast.success("Email and Calendar Event created Successfully");
            setTimeout(() => {
              window.location.reload();
            }, 2000);
          } else {
            toast.error("Error creating Email and Calendar Event");
          }
        });
    }
  };

  render() {
    var i = 0;
    var k = 0;

    const Doctor_Select = this.state.doctor_selection.map(doctor => {
      return (
        <option key={i++} value={doctor}>
          {doctor}
        </option>
      );
    });

    const Hospital_Select = this.state.hospital_selection.map(hospital => {
      return (
        <option key={i++} value={hospital}>
          {hospital}
        </option>
      );
    });

    return (
      <div>
        <Router>
          <nav class="navbar navbar-expand-sm navbar-light bg-light ">
            <div className="container cus-alig">
              <a href="/home" class="navbar-brand">
                <img src={imgg} width="50" height="50" alt="" />
                <h3 class="d-inline align-middle p-1 text-dark">IChannel</h3>
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
                  <p className="d-inline-block px-1">
                    {this.state.userName ? this.state.userName : ""}
                  </p>
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
                    <form onSubmit={this.submitHandler}>
                      <div class="form-group">
                        <label
                          for="name"
                          htmlFor="doctor"
                          className="text-black p-2"
                        >
                          Select Doctor Name
                        </label>
                        <select
                          value={this.state.doctorName}
                          name="doctorName"
                          onChange={this.changeHandler}
                          id="doctor"
                          className="form-control"
                          required
                        >
                          <option value="">---Choose Doctor---</option>
                          {Doctor_Select} enter doctors names
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
                          value={this.state.hospital_location}
                          name="hospital_location"
                          onChange={this.changeHandler}
                          id="HospitalName"
                          className="form-control"
                          required
                        >
                          <option value="">
                            ---Choose Hosptital Location---
                          </option>
                          {Hospital_Select}
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
                      <button
                        class="btn btn-warning btn-block m-1"
                        type="reset"
                        onClick={this.resetForm}
                      >
                        reset
                      </button>
                    </form>
                  </div>
                  <ToastContainer autoClose={2000} position="bottom-right" />
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
