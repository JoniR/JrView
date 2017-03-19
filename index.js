var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var express = require('express');
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
        response.render('pages/index');
    });

    app.listen(app.get('port'), function () {
        console.log('Node app is running on port', app.get('port'));
    });
});

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

app.get("/api/lastconsumption", function(req, res) {
  db.collection(data).find({}).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get data.");
    } else {
      //res.status(200).json(docs);
        // Mockup data
        res.status(200).json([{"value":9599,"end_time":"2017-03-19T13:51:00+0200","start_time":"2017-03-19T13:51:00+0200"}]);
    }
  });
});

app.get("/api/lastproduction", function(req, res) {
  db.collection(data).find({}).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get data.");
    } else {
      //res.status(200).json(docs);
        // Mockup data
        res.status(200).json([{"value":7617,"end_time":"2017-03-19T13:51:00+0200","start_time":"2017-03-19T13:51:00+0200"}]);
    }
  });
});