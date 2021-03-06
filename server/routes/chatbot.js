// routed from api/call_bot

const expres = require('express');
const router=expres.Router();

router.post('/in',(req,res)=>{
    console.log(req);
});

router.post('/register',(req,res)=>{
    // put data in database req.details={name:name,age:age,city:city,pin:pin,state:state,skill1:skill1,skill2:skill2,disability:disability,application_mode:mode}
    console.log(req);
});

router.post('/update',(req,res)=>{
    // req.number=number,req.pin=new_pin
    // update the pin number.
    // create token
    console.log(req);
});

router.post('/login',(req,res)=>{
    // req.number=number,req.pin:pin
    // create token
    console.log(req);
});


// impliment this auth function just to check whether token/flag set to this no or not;


router.get('/new_jobs',auth,(req,res)=>{
    console.log(req);
    // return jobs in json format {zero:{description:string,deadlne:date,location:string,post:post},one:{},two:{}} same zero to nine;
});

router.post('/close',(req,res)=>{
    // destroy the token or say flag;
    console.log(req);
});