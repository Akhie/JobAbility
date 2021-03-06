const { Ngo } = require('../models/Ngo');

let auth2 = (req, res, next) => {
  let token = req.cookies.w_auth;

  Ngo.findByToken(token, (err, ngo) => {
    if (err) throw err;
    if (!ngo)
      return res.json({
        isAuth: false,
        error: true
      });

    req.token = token;
    req.ngo = ngo;
    next();
  });
};

module.exports = { auth2 };
