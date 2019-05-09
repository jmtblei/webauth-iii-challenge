const router = require('express').Router();
const userdb = require('./users-model');
const restricted = require('../auth/restricted-mw');

router.get('/', restricted, checkDepartment('department2'), (req, res) => {
    userdb.findBy({ department: req.decodedToken.department })
      .then(users => {
        res.json(users);
      })
      .catch(err => res.send(err));
});

function checkDepartment(dep) {
    return function(req, res, next) {
      if (
        req.decodedToken &&
        req.decodedToken.department &&
        req.decodedToken.department.includes(dep)
      ) {
        next();
      } else {
        res.status(403).json({ message: "You shall not pass! Not permitted" });
      }
    };
}
module.exports = router;