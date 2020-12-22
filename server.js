const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')


const app = express()

const blogRouter = require('./routes/blog')
const indexRouter = require('./routes/index')

app.set('view engine', 'ejs')

app.use('/', indexRouter)
app.use('/blog', blogRouter)

app.listen(process.env.PORT)
console.log('listening on port ' + process.env.PORT)

