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
  


console.log()