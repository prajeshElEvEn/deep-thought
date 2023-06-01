const express = require('express')
const router = express.Router()

router.route('/events?id=:event_id').get()
router.route('/events?type=latest&limit=5&page=1').get()
router.route('/events').post()
router.route('/events/:id').put()
router.route('/events/:id').delete()

module.exports = router
