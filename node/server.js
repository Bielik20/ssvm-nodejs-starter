const express = require('express');
const fileUpload = require('express-fileupload');
const { create_report } = require('../pkg/ssvm_nodejs_starter_lib.js');

const app = express();
const port = 3000;
app.use(express.static(__dirname + '/public'));
app.use(fileUpload());

app.get('/', (req, res) => res.redirect('/index.html'));

app.post('/report', function (req, res) {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  const json_file = req.files.json_file;
  const assignments = JSON.parse(json_file.data.toString('ascii'));
  const commission_rate = req.body.commission_rate.toString();

  console.log('Received', { assignments, commission_rate });
  console.time(json_file.name);
  const result = create_report(assignments, commission_rate);
  console.timeEnd(json_file.name);
  console.log("Result", JSON.parse(result));
  res.send(result);
});

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
