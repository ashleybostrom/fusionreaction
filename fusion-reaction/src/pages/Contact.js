import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from '../assets/ash headshot png.png'

export default function Contact() {
    return (
        <div>
            <div className="container text-center p-3">
                <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
                    <Link className="navbar-brand" to="/"></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Portfolio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="contact.html">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <br /><br />

                <img src={Profile} className="rounded-pill mx-auto d-block img-fluid p-3" alt="It's Ricky Panh!" />
                <div className="jumbotron jumbotron-fluid">
                    <div className="container" >
                        <h1 className="display-4">Let's Connect!</h1>
                        <p className="lead">Ashley Bostrom</p>
                        <Link className="lead" to="https://github.com/ashleybostrom">GitHub</Link>
                    </div>
                </div>
                <br /><br />
                <footer>
                <div className="card text-black fixed-bottom align-items-center">
                        <div className="card-body">
                            <h4 className="card-title text-muted">ashleyjeanbostrom@gmail.com</h4>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}
    