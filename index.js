let express = require('express');
let app = express();
var port = 8080;
let bodyparser = require('body-parser');
let mongoose = require('mongoose');

const cors = require("cors");
app.listen(port, function(){
    console.log("Running on port "+port+"");
})
let apiroutes = require('./router');
app.use(cors({
    origin: '*'
}))


app.use('/api',apiroutes);
app.use(bodyparser.json);
const dbPath = 'mongodb://127.0.0.1:27017/cricket';
const options = {useNewUrlParser: true, useUnifiedTopology: true}
const mongo = mongoose.connect(dbPath, options);
mongo.then(() => {
    console.log('connected');
}, error => {
    console.log(error, 'error');
})