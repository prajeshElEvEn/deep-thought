const asyncHandler = require('express-async-handler')
const Event = require('../models/eventModel')

// @desc Get an event by it's unique id
// @route GET /api/v3/app/events/:id
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
        throw new Error(error.message)
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
        throw new Error(error.message)
    }
})

// @desc Creates an event and returns the Id of the event i.e. created
// @route POST /api/v3/app/events
// @access Private

const createEvent = asyncHandler(async (req, res) => {
    const { name, files, tagline, schedule, description, moderator, category, sub_category, rigor_rank } = req.body

    if (!name || !files || !tagline || !schedule || !description || !moderator || !category || !sub_category || !rigor_rank) {
        res.status(400)
        throw new Error('Please fill all fields')
    }

    try {
        const event = new Event({
            name,
            files,
            tagline,
            schedule,
            description,
            moderator,
            category,
            sub_category,
            rigor_rank
        })

        await event.save()

        return res.status(201).json({
            eventId: event._id
        })
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})

// @desc Updates an event by it's unique id
// @route PUT /api/v3/app/events/:id
// @access Private

const updateEvent = asyncHandler(async (req, res) => {
    const eventId = req.params.id
    const { name, files, tagline, schedule, description, moderator, category, sub_category, rigor_rank } = req.body

    try {
        const event = await Event.findByIdAndUpdate(
            eventId,
            {
                name,
                files,
                tagline,
                schedule,
                description,
                moderator,
                category,
                sub_category,
                rigor_rank
            },
            { new: true }
        )

        if (!event) {
            res.status(404)
            throw new Error('Event not found')
        }

        return res.status(200).json({ eventId: event._id })
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})

// @desc Deletes an event by it's unique id
// @route DELETE /api/v3/app/events/:id
// @access Private

const deleteEvent = asyncHandler(async (req, res) => {
    const eventId = req.params.id

    try {
        const event = await Event.findByIdAndDelete(eventId)

        if (!event) {
            res.status(404)
            throw new Error('Event not found')
        }

        return res.status(200).json({ message: 'Event deleted successfully' })
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})

module.exports = {
    getEventById,
    getLatestEvents,
    createEvent,
    updateEvent,
    deleteEvent
}
