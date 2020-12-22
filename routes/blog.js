const express = require('express')
const router = express.Router()



router.get('/', (req, res) => {
    var posts = [
        {title: "this is a title 1",
        date: new Date(),
        description: "This is a description"
        },
        {title: "this is a title 2",
            date: new Date(),
            description: "This is a description"
        }]
    res.render('blog',  {posts: posts, page:'Blog', menuId:'Blog'})
})

module.exports = router