const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const path = require('path')

const app = express()

const about = require('./routes/About')
const indexRouter = require('./routes/index')

app.set('view engine', 'ejs')

app.use('/', indexRouter)
app.use('/about', about)

app.use(express.static(path.join(__dirname, 'public')))

app.listen(process.env.PORT)

console.log('listening on port ' + process.env.PORT)

