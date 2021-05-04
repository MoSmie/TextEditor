const fs = require('fs')
const express = require('express')
const app = express()
const port = 3000;
app.use(express.static("../app"));
app.use(express.json());

app.get("/api/text", (req, res) => {
  fs.readFile('./data.json', function (err, data) {
    if (err) {
      res.status(404).json({});
    } else {
      res.json(JSON.parse(data))
    }
  })
});

app.put("/api/text", function (req, res) {
  const newText = JSON.stringify(req.body)
  fs.writeFile('./data.json', newText, function () {
    res.status(200).json({})
  })
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});