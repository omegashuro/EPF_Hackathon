const mongoose = require('mongoose')
const Schema = mongoose.Schema

// job Schema
const CandidateSchema = new Schema({
  firstName: {
    type: String,
    required: [true, 'First Name field is required']
  },
  lastName: {
    type: String,
    required: [true, 'Last Name field is required']
  },
  location: {
    type: String,
    required: [true, 'Location field is required']
  },
  resumeUrl: {
    type: String,
    required: [true, 'Resume URL field is required']
  },
  onCreated: {
    type: Date,
    default: Date.now
  },
  isAvailable: {
    type: Boolean,
    default: true
  }
})

const Candidate = mongoose.model('cadidates', CandidateSchema)

module.exports = Candidate
