import React from 'react';
import './css/Navbar.css'
function Navbar() {
    function mobileNav(e) {
        let primary_nav_mobile = document.getElementById("primary_nav_mobile");
        primary_nav_mobile.classList.toggle("show")
    }
    return (
        <div>
            <nav id="primary_navbar" className="navbar navbar-dark navbar-expand-lg bg-dark ps-5">
                <div className="container-fluid">
                    <a className="navbar-brand me-5" href="/">Navbar</a>
                    <button onClick={mobileNav} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div id="primary_nav_mobile" className="collapse navbar-collapse">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item m-2">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item m-2">
                                <a className="nav-link" href="/dashboard">Dashboard</a>
                            </li>
                            <li className="nav-item m-2">
                                <a className="nav-link" href="/guest">Guest</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;