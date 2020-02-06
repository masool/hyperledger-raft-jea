const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

var network = require('./fabric/network.js');

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())


app.post('/createUserData', (req, res) => { 
  console.log(req.body);    
      network.encodeAndStoreUserData(req.body.appId,req.body.first_name,req.body.last_name,req.body.username,req.body.password,req.body.phone)
      .then((response) => {
        res.send(response)
      });
    })  

app.get('/getUserHash', (req, res) => {
   console.log(req);
   network.decodeAndGetData(req.body.appId)
      .then((response) => {           
           res.send(response)
          });
    })

    

app.listen(process.env.PORT || 8081)
