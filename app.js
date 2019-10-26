const express = require("express");
const app = express();

app.get('/api/timestamp', (req, res) => {
    var date = new Date();
    res.json({ unix: date.getTime(), utc: date.toUTCString() });
});

app.get('/api/timestamp/:datestring', (req, res) => {
    var dateString = req.params.datestring;
    var date = new Date(isNaN(dateString) ? dateString : parseInt(dateString));

    if(date instanceof Date && isFinite(date)){
        res.json({ unix: date.getTime(), utc: date.toUTCString() });
    }
    else {
        res.json({ error: "Invalid Date" });
    }
});

app.listen(process.env.PORT | 3000);