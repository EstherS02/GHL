require("./db/mongoose");
const express = require("express");
const app = express();
const timeslots = require("./utiles/timeslots");
const Event = require("./models/event");

const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());


function getAvailTimeslots(req, res) {
    const year = req.query.year;
    const month = req.query.month;
    const day = req.query.day;
    timeslots.getAvailTimeslots(this.auth, year, month, day)
        .then(function(data) {
            res.status(200).send(data);
        })
        .catch(function(err) {
            console.log("err:",err)
            res.status(500).send(err);
        });
}

function createEvent(req, res) {
    var newEvent = new Event(req.body);
    Event.findOne(
        {
            date: req.body.date,
            time: req.body.time,
            duration: req.body.duration
    }).then((event)=>{
        if(event){
            res.status(422).send({
                "event" : "Already Exists"
            })
        }
        return newEvent.save();
    }).then((createdEvent)=>{
        res.status(200).send({
            "event" : createdEvent
        })
    }).catch((err)=>{
        res.status(500).send(err);
    });
}

function getAllEvents(req,res) {
    Event.find({
        date: {
            $gte: req.query.StartDate,
            $lt: req.query.EndDate
        }
    }).then((events)=>{
        res.status(200).send({
            "event" : events
        })
    }).catch((err)=>{
        res.status(500).send(err);
    })
}


app.get('/api/timeslots', getAvailTimeslots);
app.post('/api/create_event', createEvent);
app.post('/api/events', getAllEvents);


app.listen(4500,()=>{
    console.log('Server is up on port 4500');
});