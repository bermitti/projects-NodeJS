const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const errorController = require('./controllers/error.js')

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.set("view engine", "pug");
app.set("views", "views"); // это указывать не обязательно. Шаблоны по умолчанию в папке views

// доступ к папке public
app.use(express.static(path.join(__dirname, 'public')));

// парсим тело запроса
app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin', adminRoutes);
// хорошая практика ставить роуты c '/' в конце
app.use(shopRoutes);


// если не сработало ни одно middleware выше, это сработает для любого пути
app.use(errorController.get404)

app.listen(3000);