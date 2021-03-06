const express = require('express');
const router = express.Router();
const multer = require('multer');

const { Vacancy } = require("../models/Vacancy");


var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`)
    },
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname)
        if (ext !== '.pdf') {
            return cb(res.status(400).end('only jpg, png, pdf is allowed'), false);
        }
        cb(null, true)
    }
})

var upload = multer({ storage: storage }).single("file")


//=================================
//             UploadFiles
//=================================


router.post("/uploadfiles", (req, res) => {

    upload(req, res, err => {
        if (err) {
            return res.json({ success: false, err })
        }
        return res.json({ success: true, filePath: res.req.file.path, fileName: res.req.file.filename })
    })

});

//=================================
//             Vacancy
//=================================


router.get("/getJobs", (req, res) => {

    Vacancy.find()
        .populate('writer')
        .exec((err, jobs) => {
            if(err) return res.status(400).send(err);
            res.status(200).json({ success: true, jobs })
        })

});

router.post("/getJob", (req, res) => {

    Vacancy.findOne({ "_id" : req.body.jobId })
    .populate('writer')
    .exec((err, job) => {
        if(err) return res.status(400).send(err);
        res.status(200).json({ success: true, job })
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