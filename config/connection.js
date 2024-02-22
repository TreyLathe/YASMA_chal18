const { connect, connection } = require('mongoose');

connect('mongodb://localhost/yasma', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected successfully');
}).catch((error) => {
  console.log('MongoDB connection error:', error);
});

module.exports = connection;