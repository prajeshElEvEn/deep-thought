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
            return res.status(404).json({ message: 'Event not found' })
        }

        return res.status(200).json(event)
    } catch (error) {
        console.error(error)
        return res.status(500).json({ message: 'Server error' })
    }
})
