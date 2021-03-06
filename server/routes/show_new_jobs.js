// in folder routes

// being routed from /api/@me

const express=require('express');
const router=express.Router();
const {user}=require('../models/User');
const {auth}=require('../middleware/auth');
const db=require('../config/db');

// export function update_my_jobs_table(id){
//     // nosql query to pick all entries from main table with physical requirements mathing with mine.

// }

// export function return_jobs(id){
//     // nosql query to find top 50 jobs from db in latest to older posts.
//     // return dictionary 
// }

router.get("/new_jobs",auth,(req,res)=>{
    // const disablility=req.user.disablility;
    // update_my_jobs_table(req.user._id); // returning table content in time sorted way., remove deadline crossed jobs.
    // res.status(200).json(return_jobs(req.user._id)) //return only top 50; return_jobs returns a dictionary or object.
    res.status(200).send('recieved');
});

//............................... ADMINISTRATIVE ACTIONS ...........................
// bots will be maintaining the same.
router.post("/clear_raw_table_and_create_backup",(req,res)=>{
    // remove all documents having deadline older then the current time.
    res.status(200).send('revieved');
});

router.post("/clear_main_table_and_create_backup",(req,res)=>{
    // remove all documents having deadline older then the current time.
    res.status(200).send('recieved');
});
