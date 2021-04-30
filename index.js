const express = require('express');
const path = require('path');
const exphbs  = require('express-handlebars');
const logger = require('./middleware/logger');
const members = require('./Members');

const app = express();

// init middleware
// app.use(logger);

// setting tup handlebars
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// set static folder
// app.use(express.static(path.join(__dirname, 'public')));

// member API routes
app.use('/api/members', require('./routes/api/members'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});