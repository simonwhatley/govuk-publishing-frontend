const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
  res.render('index')
})

router.get('/components', function (req, res) {
  res.redirect('/')
})

router.get('/generate-url', function (req, res) {
  const slug = req.query.title.toLowerCase()
    .replace(/[^\w\s-]/g, '') // remove non-word [a-z0-9_], non-whitespace, non-hyphen characters
    .replace(/[\s_-]+/g, '-') // swap any length of whitespace, underscore, hyphen characters with a single -
    .replace(/^-+|-+$/g, '')
  res.send(slug)
})

module.exports = router
