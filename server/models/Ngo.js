const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const moment = require("moment");

const ngoSchema = mongoose.Schema({
    name: {
        type:String,
        maxlength:50
    },
    address: {
        type:String,
    },
    email: {
        type:String,
        trim:true,
        unique: 1 
    },
    password: {
        type: String,
        minglength: 5
    },
    website:{
        type: String
    },
    contact:{
        type: String
    },
    discription: {
        type:String,
        maxlength: 50
    },
    image: String,
    token : {
        type: String,
    },
    tokenExp :{
        type: Number
    }
})


ngoSchema.pre('save', function( next ) {
    var ngo = this;
    
    if(ngo.isModified('password')){    
        // console.log('password changed')
        bcrypt.genSalt(saltRounds, function(err, salt){
            if(err) return next(err);
    
            bcrypt.hash(ngo.password, salt, function(err, hash){
                if(err) return next(err);
                ngo.password = hash 
                next()
            })
        })
    } else {
        next()
    }
});

ngoSchema.methods.comparePassword = function(plainPassword,cb){
    bcrypt.compare(plainPassword, this.password, function(err, isMatch){
        if (err) return cb(err);
        cb(null, isMatch)
    })
}

ngoSchema.methods.generateToken = function(cb) {
    var ngo = this;
    console.log('ngo',ngo)
    console.log('ngoSchema', ngoSchema)
    var token =  jwt.sign(ngo._id.toHexString(),'secret')
    var oneHour = moment().add(1, 'hour').valueOf();

    ngo.tokenExp = oneHour;
    ngo.token = token;
    ngo.save(function (err, ngo){
        if(err) return cb(err)
        cb(null, ngo);
    })
}

ngoSchema.statics.findByToken = function (token, cb) {
    var ngo = this;

    jwt.verify(token,'secret',function(err, decode){
        ngo.findOne({"_id":decode, "token":token}, function(err, ngo){
            if(err) return cb(err);
            cb(null, ngo);
        })
    })
}

const Ngo = mongoose.model('Ngo', ngoSchema);

module.exports = { Ngo }