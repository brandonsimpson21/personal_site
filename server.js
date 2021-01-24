const express = require('express')
require('dotenv').config()
const path = require('path')
const posts = require('./routes/posts')
const indexRouter = require('./routes/index')

const app = express()

app.set('view engine', 'ejs')

app.use('/', indexRouter)

app.use('/posts', posts)

app.use(express.static(path.join(__dirname, 'public')))

app.listen(process.env.PORT)

console.log('listening on port ' + process.env.PORT)

