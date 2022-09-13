import React from 'react';
import Navbar from './Navbar';
import "./css/Dashboard.css";
function Dashboard() {
    function showVerticalNavbar(e) {
        let element = document.querySelector(".vertical_navbar_collapse");
        let nav = document.querySelector(".vertical_navbar");
        nav.classList.toggle("mobile")
        element.classList.toggle("show");

    }
    return (
        <div>
            <Navbar />
            <nav className="navbar navbar-expand-lg navbar-light bs-side-navbar vertical_navbar">
                <a className="navbar-brand vertical_nav_logo" href="#">Navbar</a>
                <button onClick={showVerticalNavbar} className="navbar-toggler vertical_nav_button" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse vertical_navbar_collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto vertical_navbar_ul">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                Dropdown
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="container-fluid" id="dashboard_container">
                <div className="row">
                    <div className="col-8 col-md-10">
                        <h1>Dashboard</h1>
                        <p>This is the paragraph of the Dashboard Section</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;