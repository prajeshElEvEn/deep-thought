const asyncHandler = require('express-async-handler')
const Event = require('../models/eventModel')

// @desc Get an event by it's unique id
// @route GET /api/v3/app/events?id=:event_id
// @access Public

const getEventById = asyncHandler(async (req, res) => {
    const eventId = req.params.id

    try {
        const event = await Event.findById(eventId)

        if (!event) {
            res.status(404)
            throw new Error('Event not found')
        }

        return res.status(200).json(event)
    } catch (error) {
        res.status(500)
        throw new Error('Server error')
    }
})

// @desc Gets an event by it's recency and paginates results by page number and limit of events per page
// @route GET /api/v3/app/events?type=latest&limit=5&page=1
// @access Public

const getLatestEvents = asyncHandler(async (req, res) => {
    const limit = parseInt(req.params.limit) || 5
    const page = parseInt(req.params.page) || 1

    try {
        const totalEvents = await Event.countDocuments()
        const totalPages = Math.ceil(totalEvents / limit)
        const skip = (page - 1) * limit

        const events = await Event.find()
            .sort({ schedule: -1 })
            .skip(skip)
            .limit(limit)

        return res.status(200).json({
            totalEvents,
            totalPages,
            currentPage: page,
            events,
        })
    } catch (error) {
        res.status(500)
        throw new Error('Server error')
    }
})
