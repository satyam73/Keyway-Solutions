import React from 'react';
import Navbar from './Navbar';
import "./css/Guest.css";

function Dashboard() {
    return (
        <div>
            <Navbar />
            <div className="container-fluid" id="guest_container">
                <div className="row">
                    <div className="col-8 col-md-10">
                        <h1>Guest</h1>
                        <p>This is the ParaGraph of the DashBoard Section</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;