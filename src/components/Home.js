import React from 'react';
import Navbar from './Navbar';
function Home() {
    function login(e) {
        localStorage.setItem("isLogged", 1);
        alert("login successful");
    }
    function logout(e) {
        localStorage.removeItem("isLogged");
        alert("logout successful");

    }
    return (
        <div>
            <Navbar />
            <div className="container-fluid" id="guest_container">
                <div className="row">
                    <div className="col-8 col-md-10">
                        <h1>Home</h1>
                        <p>This is the paragraph of the home Section</p>
                        <button onClick={login} className='btn btn-success fs-3 p-3 m-2'>LogIn</button>
                        <button onClick={logout} className='btn btn-danger fs-3 p-3 m-2'>Logout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;