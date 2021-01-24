const express = require('express')
const router = express.Router()
const fs = require('fs')

const posts = require('../posts/posts_list')


router.get('/', (req, res) => {
    res.render('posts',  {posts: posts, page:'Blog', menuId:'Blog'})
})

router.get("/:article", (req, res) => {
    res.render(req.params.article.toString(), {page:"post"})

});

module.exports = router