var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var express = require('express');
var moment = require('moment');
var unirest = require('unirest');
var ObjectID = mongodb.ObjectID;

var data = "data";

var app = express();
app.use(bodyParser.json());

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;

// Connect to the database before starting the application server.
mongodb.MongoClient.connect(process.env.MONGODB_URI, function (err, database) {
    if (err) {
        console.log(err);
        process.exit(1);
    }

    // Save database object from the callback for reuse.
    db = database;
    console.log("Database connection ready");

    app.set('port', (process.env.PORT || 5000));

    app.use(express.static(__dirname + '/public'));

    // views is directory for all template files
    app.set('views', __dirname + '/views');
    app.set('view engine', 'ejs');

    app.get('/', function (request, response) {
        CheckLastValue();
        response.render('pages/index');
    });

    app.listen(app.get('port'), function () {
        console.log('Node app is running on port', app.get('port'));
    });
});

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({
        "error": message
    });
}


app.get("/api/lastconsumption", function (req, res) {
    db.collection(data).find({
        "variable": 193
    }).sort({
        start_time: -1
    }).limit(1).toArray(function (err, docs) {
        if (err) {
            handleError(res, err.message, "Failed to get data.");
        } else {
            res.status(200).json(docs);
        }
    });
});

app.get("/api/lastproduction", function (req, res) {
    db.collection(data).find({
        "variable": 192
    }).sort({
        start_time: -1
    }).limit(1).toArray(function (err, docs) {
        if (err) {
            handleError(res, err.message, "Failed to get data.");
        } else {
            res.status(200).json(docs);
        }
    });
});

app.get("/api/lastfrequency", function (req, res) {
    db.collection(data).find({
        "variable": 177
    }).sort({
        start_time: -1
    }).limit(1).toArray(function (err, docs) {
        if (err) {
            handleError(res, err.message, "Failed to get data.");
        } else {
            res.status(200).json(docs);
        }
    });
});

app.get("/api/lastbalance", function (req, res) {
    db.collection(data).find({
        "variable": 198
    }).sort({
        start_time: -1
    }).limit(1).toArray(function (err, docs) {
        if (err) {
            handleError(res, err.message, "Failed to get data.");
        } else {
            res.status(200).json(docs);
        }
    });
});

app.get("/api/refresh", function (req, res) {

    res.status(200).json([{
        "val": CheckLastValue(),
        "foo": "bar"
    }]);
});

function CheckLastValue() {
    var now = moment().subtract(3, 'minutes');
    db.collection('data').find().sort({
        start_time: -1
    }).limit(1).toArray(function (err, docs) {

        if (docs.length == 0) {
            getValuesFromFG(193);
            getValuesFromFG(192);
            getValuesFromFG(177);
            getValuesFromFG(198);
        } else {
            var last_timestamp = moment(docs[0].start_time);
            if (last_timestamp < now) {
                getValuesFromFG(193);
                getValuesFromFG(192);
                getValuesFromFG(177);
                getValuesFromFG(198);
            }
        };
    });
};

function getValuesFromFG(var_id) {

    var req = unirest("GET", "https://api.fingrid.fi/v1/variable/" + var_id + "/events/json");

    req.query({
        "start_time": moment().subtract(1, 'days').format(), // moment().startOf('hour').format(), //
        "end_time": moment().format()
    });

    req.headers({
        "cache-control": "no-cache",
        "x-api-key": process.env.FINGRID_API
    });

    req.end(function (res) {
        if (res.error) {
            console.log(res.error)
        };

        var consumption = res.body;

        for (var j in consumption) {
            consumption[j].variable = var_id;

            /*
            db.collection('data').update({
                "value": consumption[j].value,
                "end_time": consumption[j].end_time,
                "start_time": consumption[j].start_time,
                "variable": consumption[j].variable
            }, {
                "value": consumption[j].value,
                "end_time": consumption[j].end_time,
                "start_time": consumption[j].start_time,
                "variable": consumption[j].variable
            }, {
                upsert: true
            }, function (err, records) {
                if (err) throw err;
                console.log("Values for " + var_id + " has been inserted to DB");
            });
            */
        }
        
        db.collection('data').insert(consumption, function (err, records) {
            if (err) throw err;
        });
        
        /* TODO
        This logic have one big fail.. it insert duplicate values every time when new set has been fetch. Anyway this is much faster than update.
        There we need to delete duplicate values
        */
        
    });
};
