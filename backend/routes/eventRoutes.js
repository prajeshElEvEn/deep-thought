const express = require('express')
const router = express.Router()
const {
    getEventById,
    getLatestEvents,
    createEvent,
    updateEvent,
    deleteEvent
} = require('../controllers/eventController')

router.route('/events/:id').get(getEventById)
router.route('/events/:limit/:page').get(getLatestEvents)
router.route('/events').post(createEvent)
router.route('/events/:id').put(updateEvent)
router.route('/events/:id').delete(deleteEvent)

module.exports = router
