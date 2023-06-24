const express = require('express');
const model = require('./cricketModel');
const router = express.Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json()
router.get('/Players', async(req, res)=>{
    try{
        const data = await model.find();
        res.json(data);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
})


router.post('/Player', jsonParser, async(req, res)=>{
    console.log(req.body);
    const data = new model({
        name: req.body.name,
        span:req.body.span,
        matches:req.body.matches,
        innings:req.body.innings,
        runs:req.body.runs,
        highestScore:req.body.highestScore,
        centuries:req.body.centuries,
        halfCentury:req.body.halfCentury,
        country:req.body.country,
        wickets:req.body.wickets,
        overs:req.body.overs,

    })

    try{
        const result = await data.save();
        res.status(200).json(data);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
})

router.patch('/Player/:id', jsonParser, async(req,res)=>{
    console.log(req.body);
    try{
        const id = req.params.id;
        const reqdata = req.body;
        const options= {new:true}
        const result = await model.findByIdAndUpdate(
            id, reqdata, options
        )
        res.send(result);
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/Player/:name', async (req, res)=>{
    try{
        const data = await model.find({name:{$regex: req.params.name}  });
        res.json(data);

    }
    catch(error){
        res.status(500).json({message: error.message});
    }
});

router.delete('/DeletePlayer/:id', async (req, res)=>{
    try{
        const data = await model.findByIdAndDelete(req.params.id);
        res.json("Successfull")
    }
    catch(error){
        res.status(400).json({message: error.message});
    }
});

module.exports = router;