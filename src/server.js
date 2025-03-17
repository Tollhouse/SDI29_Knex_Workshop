const express = require('express');
const app = express();
const server = app;
const port = 8080;

const knex = require('knex')(require('../knexfile.js')[process.env.NODE_ENV||'development']);

server.use(express.json());
server.listen(port, () => console.log(`Express server listening on ${port}`));


app.get('/', function (req, res) {
    knex('name_table')
      .join('contact_info', 'name_table.id', 'contact_info.name_id')
      .select(
        'name_table.name',
        'contact_info.number'
      )
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => {
        res.status(500).json({
          message: 'There was an error fetching the data. Please try again later.'
        });
      });
  });
  
  app.get('/different', function (req, res) {
    knex('name_table')
      .select(
        "*"
      )
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => {
        res.status(500).json({
          message: 'There was an error fetching the data. Please try again later.'
        });
      });
  });

  app.post('/add', function (req, res){
    const data = JSON.stringify(req.body)
    knex('name_table')
    .insert(
        req.body
    )
    .then(() =>{
        console.log(data)
        res.status(200).send(`Working`);
    })

  });

console.log()