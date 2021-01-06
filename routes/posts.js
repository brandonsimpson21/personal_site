const express = require('express')
const router = express.Router()
const fs = require('fs')

const posts = require('../posts/posts_list') //TODO put posts in database

router.get('/', (req, res) => {
    res.render('posts',  {posts: posts, page:'Blog', menuId:'Blog'})
})

router.get("/:article", (req, res) => {
    res.render("../posts/" + req.params.article + '/' + req.params.article) //todo change when in db

});

module.exports = router