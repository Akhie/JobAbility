import React from 'react';
//import pic1 from "../images/title.png";
import '../Components/media.css';

function Top(){
    return <div>
        <div class="row main">
<div class="col-lg-6 center">
<br /><br />
<div style={{textAlign:"left", marginLeft:"18%"}}>
<h1 style={{color:"#002D62", fontWeight:'bold'}}>JOBABILITY</h1>
</div>
  <p class="head">Dream big Achieve big. Special job portal for special peoples. </p>
   <a class="but" href="jobs"><button data-aos="zoom-in-up" type="button" class="soc btn btn-success btn-lg button">Explore Jobs</button></a>
   <a class="but" href="getngo"><button data-aos="zoom-in-up" type="button" class="soc btn btn-dark btn-lg button">NGOs for you</button></a>
   <br /><br /><br />
</div>
<div class="col-lg-6 center">
  <img class="pisa img-fluid" src="https://cdn.pixabay.com/photo/2013/06/06/15/36/group-117192_1280.png" alt=""></img>
</div>
    </div>
    </div>
}
export default Top;