const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')


const app = express()

const postsRouter = require('./routes/posts')

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index')
})

app.use('/posts', postsRouter)
console.log('listening on port ' + process.env.PORT)


app.listen(process.env.PORT)

