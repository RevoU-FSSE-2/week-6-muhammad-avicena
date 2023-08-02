var express = require('express');
var router = express.Router();

/* GET users listing. */
const user = [
  {
    _id: "64b855b6c2e758344febd050",
    userName: "Zidane",
    userEmail: "zidane.dev@gmail.com",
    userPhone: 6281227057176,
    userAdress: "Living in dream",
    __v: 0
  },
  {
    _id: "64b855b6c2e758344febd050",
    userName: "Avicena",
    userEmail: "avicena.dev@gmail.com",
    userPhone: 6281227057176,
    userAdress: "Living in dream",
    __v: 0
  },
  {
    _id: "64b855b6c2e758344febd050",
    userName: "Najmy",
    userEmail: "najmy.dev@gmail.com",
    userPhone: 6281227057176,
    userAdress: "Living in dream",
    __v: 0
  },
  {
    _id: "64b855b6c2e758344febd050",
    userName: "Adri",
    userEmail: "adri.dev@gmail.com",
    userPhone: 6281227057176,
    userAdress: "Living in dream",
    __v: 0
  },
  {
    _id: "64b855b6c2e758344febd050",
    userName: "Sarra",
    userEmail: "avicena.dev@gmail.com",
    userPhone: 6281227057176,
    userAdress: "Living in dream",
    __v: 0
  },
  {
    _id: "64b855b6c2e758344febd050",
    userName: "Hilmi",
    userEmail: "Hilmi.dev@gmail.com",
    userPhone: 6281227057176,
    userAdress: "Living in dream",
    __v: 0
  },
  {
    _id: "64b855b6c2e758344febd050",
    userName: "Sigit",
    userEmail: "sigit.dev@gmail.com",
    userPhone: 6281227057176,
    userAdress: "Living in dream",
    __v: 0
  },
  {
    _id: "64b855b6c2e758344febd050",
    userName: "Denis",
    userEmail: "denis.dev@gmail.com",
    userPhone: 6281227057176,
    userAdress: "Living in dream",
    __v: 0
  },
  {
    _id: "64b855b6c2e758344febd050",
    userName: "Alifa",
    userEmail: "alifa.dev@gmail.com",
    userPhone: 6281227057176,
    userAdress: "Living in dream",
    __v: 0
  }
];


router.get('/', function(req, res, next) {
  // Create the response object with the desired structure
  const response = {
    message: "List of all users | Team 3 members",
    users: [user]
  };

  // Send the JSON response
  res.json(response);
});

module.exports = router;
