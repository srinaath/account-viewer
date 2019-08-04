const express  = require('express');
const pg = require('pg');
const path  = require('path')
const cors = require('cors');
const app  = express();
app.use(cors());
const port = 8000

let client
function initPostgres() {
  client = new pg.Client({
    user: "mdtqxfazzhogdc",
    password: "16f5c862bbaf39128b4e902e812f358881a97b298d29972e90624b994a1fc3f5",
    database: "d3fv2mveviovs0",
    port: 5432,
    host: "ec2-23-21-115-109.compute-1.amazonaws.com",
    ssl: true
  });
  client.connect();
}

function getAccountsInfo(req, res) {
  client.query('SELECT * from salesforce.Account', (err, dbRes) => {
    if (dbRes) {
      res.status(200);
      res.json(dbRes.rows);
    }
    return err
  })
};

initPostgres()

app.get('/api/accounts', getAccountsInfo);

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.use(express.static('public'));

app.listen(process.env.PORT);
console.log('Listening on port', process.env.PORT);
