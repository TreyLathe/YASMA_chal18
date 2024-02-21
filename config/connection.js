const { connect, connection } = require('mongoose');

connect('mongodb://localhost/yasma', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;