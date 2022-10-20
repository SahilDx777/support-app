const express = require('express')
const { get } = require('mongoose')
const router = express.Router({ mergeParams: true })
const { getNotes, addNotes } = require('../controllers/noteController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getNotes).post(protect, addNotes)

module.exports = router
