import React from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Quote from '../assets/01-quote.png';
import Moviegram from '../assets/moviegram.png';
import Groom from '../assets/gogroomhomepage.png';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Home() {
    return (
        <div>
            <div className="container p-3">
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
                                <Link className="nav-link" to="/Contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <br /><br />
                <hr className="my-2" />
                <h2 className="display-4 pl-3">Moviegram</h2>
                <Row>
                    <Col sm={7}>
                        <figure className="figure" />
                        <img src={Moviegram} className="figure-img img-fluid d-block shadow-sm p-3 mb-5 bg-white rounded" alt="A screenshot of moviegram" />
                        <figcaption className="figure-caption">A screenshot of our group project application Moviegram</figcaption>
                    </Col>
                    <Col sm={5} my-auto> This group project was a collaborative effort using our newly attained knowledge of HTML, CSS, JS, Routing, APIs, and connecting our friend end to back end. <br /><br />
                        <p>Github Repository: <a href='https://github.com/ashleybostrom/moviegram'>https://github.com/ashleybostrom/moviegram</a></p>
                    </Col>
                </Row>
                <hr className="my-2" />
                <Row>
                <Col sm={6}>
                        <figure className="figure" />
                        <img src={Groom} className="figure-img img-fluid d-block shadow-sm p-3 mb-5 bg-white rounded" alt="A screenshot of GoGroom App" />
                        <figcaption className="figure-caption">A screenshot of our deployed GoGroom group project application.</figcaption>
                    </Col>
                    <Col sm={6} my-auto>
                        <br /> <br /><br /> <br />
                    This MERN applcation was the culmination of our Bootcamp course bringing together all of the technologies we learned, including GraphQL, Node, Express, and React. <br /><br />
                        <p>Deployed Application: <a href='https://shrouded-lowlands-65870.herokuapp.com/'>Go Groom</a></p>
                        <p>Github Repository: <a href='https://github.com/JennyBloemen/GoGroom/'>https://github.com/JennyBloemen/GoGroom/</a></p>
                    </Col>
                </Row>
            </div>
            <br /><br /><br />
            <footer>
            <div className="card text-black fixed-bottom align-items-center">
                    <div className="card-body">
                        <h4 className="card-title text-muted">ashleyjeanbostrom@gmail.com</h4>
                        <div classname="card-text">
                        <img src={Quote} div className="card text-center" alt="A quote to live by as a developer" />
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}