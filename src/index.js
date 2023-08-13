const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express()
const port = 3000
app.use(express.static(path.join(__dirname,'public')))

//HTTP logger
app.use(morgan('combined'))
const hbs = handlebars.create({
  extname: '.hbs'
});
app.engine('hbs', hbs.engine);
//template engine
//app.engine('handlebars',handlebars());
app.set('view engine', 'hbs');
app.set('views',path.join(__dirname, 'resources/views'));
//console.log('PATH: ', path.join(__dirname, 'resources/views'))
console.log(__dirname)
app.get('/', (req, res) => {
  // res.send(`
  // <html><head></head><body><h1 style="color: red;">Xin chao moi nguoi</h1></body></html>
  // `)
  res.render('home'); 
})
app.get('/news', (req, res) => {
  res.render('news'); 
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})