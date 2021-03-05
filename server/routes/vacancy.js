const express = require('express');
const router = express.Router();

const { Vacancy } = require("../models/Vacancy");


//=================================
//             Vacancy
//=================================


router.get("/getVacancy", (req, res) => {

    Vacancy.find()
        .populate('writer')
        .exec((err, videos) => {
            if(err) return res.status(400).send(err);
            res.status(200).json({ success: true, videos })
        })

});



router.post("/uploadVacancy", (req, res) => {

    const vacancy = new Vacancy(req.body)

    vacancy.save((err, video) => {
        if(err) return res.status(400).json({ success: false, err })
        return res.status(200).json({
            success: true 
        })
    })

});


module.exports = router;
