const router = require('express').Router();

const Users = require('../data/helpers/usersDb.js');

router.get('/', (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

// function withRole(role) {
//   return function(req, res, next) {
//     if (
//       req.decodedJwt &&
//       req.decodedJwt.roles &&
//       req.decodedJwt.roles.includes(role)
//     ) {
//       next();
//     } else {
//       res.status(403).json({ message: 'you have no power here' });
//     }
//   };
// }

module.exports = router;