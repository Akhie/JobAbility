import React from 'react';
import { Link } from 'react-router-dom';


function Footer() {
    return (

        <footer className='text-left footer' style={{ backgroundColor: "#bbe1fa" }}>

            <div className='container text-white pt-4 mb-4'>
                <div className='row mb-4'>
                    <div className='col-sm-12 col-lg-2'>
                        <h2 style={{color:'#002D62'}}>JOBABILITY</h2>
                    </div>
                    <div className='col-sm-12 col-lg-10 '>
                        <p style={{color:"#002D62"}}>Website is founded in 2020 with a mission of making job search of specially able people easy and hasslefree. Everyone needs a job to feed themselves and their family we provide a platform for PWDs to get the job of their choice and numerous other oppurtunities.</p>
                    </div>
                </div>
            </div>

            {/* <div className='container pt-4 mb-4 text-dark'>
                <div className='row mb-4'>
                    <div className='col-sm-6 col-lg-3'>
                        <h4 style={{ Tex: "#4fc3f7" }}>Beginner Courses</h4>
                    </div>
                    <div className='col-sm-6 col-lg-3'>
                        <h4 style={{ Color: "#4fc3f7" }}>Intermediate Courses</h4>
                    </div>
                    <div className='col-sm-6 col-lg-3'>
                        <h4 style={{ Color: "#4fc3f7" }}>Master Courses</h4>
                    </div>
                    <div className='col-sm-6 col-lg-3'>
                        <h4 style={{ Color: "#4fc3f7" }}>Development Courses</h4>
                    </div>
                </div>
            </div> */}

            <div className='container mb-4'>
                <div className='row'>
                    <div className='col-sm-6 col-lg-3'>
                    <h4 style={{ Tex: "#4fc3f7" }}>Job oppurtunities</h4>
                    <br />
                        <Link style={{color:'white'}} to="#"><h5>Govt. Jobs</h5></Link>
                        <Link style={{color:'white'}} to="#"><h5>NGOs Jobs</h5></Link>
                        <Link style={{color:'white'}} to="#"><h5>Other sectors</h5></Link>
                    </div>
                    <div className='col-sm-6 col-lg-3'>
                    <h4 style={{ Tex: "#4fc3f7" }}>Connect With NGOs</h4>
                    <br />
                        <Link style={{color:'white'}} to="#"><h5>National NGOs</h5></Link>
                        <Link style={{color:'white'}} to="#"><h5>NGOs in your state</h5></Link>
                        <Link style={{color:'white'}} to="#"><h5>Local NGOs</h5></Link>
                    </div>
                    <div className='col-sm-6 col-lg-3'>
                    <h4 style={{ Tex: "#4fc3f7" }}>Development</h4>
                    <br />
                        <Link style={{color:'white'}} to="#"><h5>Web Development Team</h5></Link>
                        <Link style={{color:'white'}} to="#"><h5>App Development Tean</h5></Link>
                        <Link style={{color:'white'}} to="#"><h5>Designing Team</h5></Link>
                    </div>
                    <div className='col-sm-6 col-lg-3'>
                    <h4 style={{ Tex: "#4fc3f7" }}>Connect with us</h4>
                    <br />
                        <Link style={{color:'white'}} to="#"><h5>Facebook</h5></Link>
                        <Link style={{color:'white'}} to="#"><h5>Instagram</h5></Link>
                        <Link style={{color:'white'}} to="#"><h5>Twitter</h5></Link>
                    </div>
                </div>
            </div>

            <div class="container-fluid pt-2">
                <center className='pb-2'>
                    <Link to='#' className='btn btn-social-icon btn-google'><i className='fa fa-google-plus'></i></Link>&nbsp;
                    <Link to='#' className='btn btn-social-icon btn-facebook'><i className='fa fa-facebook'></i></Link>&nbsp;
                    <Link to='#' className='btn btn-social-icon btn-twitter'><i className='fa fa-twitter'></i></Link>&nbsp;
                    <Link to='#' className='btn btn-social-icon btn-instagram'><i className='fa fa-instagram'></i></Link>&nbsp;
                    <Link to='#' className='btn btn-social-icon'><i className='fa fa-envelope-o fa-lg'></i></Link>&nbsp;
                </center>

                <center className='pb-1'>
                    <p>Copyright &copy; JOBABILITY. All Rights Reserved | Contact Us: <i className='fa fa-phone'></i> +91 9000000000</p>
                </center>
            </div>
        </footer>

    );
}

export default Footer;