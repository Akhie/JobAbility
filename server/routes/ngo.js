const express = require('express');
const router = express.Router();
const { Ngo } = require("../models/Ngo");

const { auth2 } = require("../middleware/auth2");

//=================================
//             ngo
//=================================

router.get("/auth2", auth2, (req, res) => {
    res.status(200).json({
        _id: req.ngo._id,
        isAdmin: req.ngo.role === 0 ? false : true,
        isAuth: true,
        email: req.ngo.email,
        name: req.ngo.name,
        lastname: req.ngo.lastname,
        disability: req.ngo.disability,
        role: req.ngo.role,
        image: req.ngo.image,
    });
});

router.post("/ngoregister", (req, res) => {

    const ngo = new Ngo(req.body);
    ngo.save((err, doc) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).json({
            success: true
        });
    });
});

router.post("/ngologin", (req, res) => {
    Ngo.findOne({ email: req.body.email }, (err, ngo) => {
        if (!ngo)
            return res.json({
                loginSuccess: false,
                message: "Auth failed, email not found"
            });

        ngo.comparePassword(req.body.password, (err, isMatch) => {
            if (!isMatch)
                return res.json({ loginSuccess: false, message: "Wrong password" });

            ngo.generateToken((err, ngo) => {
                if (err) return res.status(400).send(err);
                res.cookie("w_authExp", ngo.tokenExp);
                res
                    .cookie("w_auth", ngo.token)
                    .status(200)
                    .json({
                        loginSuccess: true, ngoId: ngo._id
                    });
            });
        });
    });
});

router.get("/getNgos", (req, res) => {

    Ngo.find()
        .exec((err,ngos)=>{
            if(err)
            return res.status(400).json({success: false})
            return res.status(200).json({success: true, ngos})
        })
 });

router.get("/logout", auth2, (req, res) => {
    Ngo.findOneAndUpdate({ _id: req.ngo._id }, { token: "", tokenExp: "" }, (err, doc) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).send({
            success: true
        });
    });
});

module.exports = router;
