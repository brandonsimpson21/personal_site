const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const path = require('path')

const app = express()

const postsRouter = require('./routes/posts')
const indexRouter = require('./routes/index')

app.set('view engine', 'ejs')

app.use('/', indexRouter)
app.use('/posts', postsRouter)

app.use(express.static(path.join(__dirname, 'public')))

app.listen(process.env.PORT)

console.log('listening on port ' + process.env.PORT)

