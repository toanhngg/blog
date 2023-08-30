const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;
const route = require('./route');
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());

//HTTP logger
//app.use(morgan('combined'))
const hbs = handlebars.create({
  extname: '.hbs',
});
app.engine('hbs', hbs.engine);
//template engine
//app.engine('handlebars',handlebars());
app.set('view ensgine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
//console.log('PATH: ', path.join(__dirname, 'resources/views'))
//console.log(__dirname)
route(app);
// app.get('/', (req, res) => {
//   // res.send(`
//   // <html><head></head><body><h1 style="color: red;">Xin chao moi nguoi</h1></body></html>
//   // `)
//   res.render('home');
// });
// app.get('/news', (req, res) => {
//   res.render('news');
// });
// app.get('/search', (req, res) => {
//   res.render('search');
// });
// app.post('/search', (req, res) => {
//   console.log(req.body.q);
//   //res.render('search');
//   res.send('')
// });
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
