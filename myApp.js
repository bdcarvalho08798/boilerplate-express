let express = require('express');
let app = express();





require('dotenv').config(); 


// app.use(express.static(__dirname + "/public"));

// // Assets at the /public route
// app.use("/public", express.static(__dirname + "/public"));


// app.get('/json', (req, res) => {
//     res.json({ message: "Hello json" });
//   });


  app.get('/json', (req, res) => {
    var message ="";
    if (process.env.MESSAGE_STYLE === "uppercase") {
        message = "Hello json".toUpperCase();
    }else{
        message = "Hello json";
    }
    res.json({ message: message});
  });
  























 module.exports = app;
