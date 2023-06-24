const { text } = require('body-parser');
var mongoose = require('mongoose');

var cricketSchema = mongoose.Schema({
    name:{
        type: String
    },
    span:{
        type:String
    },
    matches:{
        type:Number
    },
    innings:{
        type:Number
    },
    runs:{
        type:Number
    },
    highestScore:{
        type:Number
    },
    centuries:{
        type:Number
    },
    halfCentury:{
        type:Number
    },
    country:{
        type:String
    },
    wickets:{
        type:Number
    },
    overs:{
        type:Number
    }
})

module.exports= mongoose.model('cricket', cricketSchema, 'cricket');
