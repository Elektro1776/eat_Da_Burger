const express = require('express');
const bodyParser = require('body-parser');
// const hbs = require('hbs');
const exphbs = require('express-handlebars');
const path = require('path');
const homeRouter = require('./controllers/homeController');
const app = express();
const port = process.env.PORT || 3000
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
var hbs = exphbs.create({
    defaultLayout: 'main',
    // helpers      : helpers,

    // Uses multiple partials dirs, templates in "shared/templates/" are shared
    // with the client-side of the app (see below).
    partialsDir: [
        // 'shared/templates/',
        path.join(__dirname + '/views/partials/')
    ]
});
console.log(' WHAT IS HBS ?', hbs);
// Register `hbs` as our view engine using its bound `engine()` function.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')))

// app.set('views', path.join(__dirname, '/views'));
app.use(homeRouter);
app.listen(port, () => {
  console.log('SERVER STARTED ON :', port);
})
