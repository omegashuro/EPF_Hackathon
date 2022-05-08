const express = require('express')
const router = express.Router()
const Job = require('../models/job')
const Candidate = require('../models/candidate')

/***************
 Job
****************/

// get all jobs
router.get('/jobs', function(req, res, next) {
  Job.find({})
    .then(function(jobs) {
      res.send(jobs)
    })
    .catch(next)
})

// get one job
router.get('/jobs/:id', function(req, res, next) {
  Job.findOne({ _id: req.params.id })
    .then(function(job) {
      res.send(job)
    })
    .catch(next)
})

// add new job
router.post('/jobs', function(req, res, next) {
  Job.create(req.body)
    .then(function(job) {
      res.send(job)
    })
    .catch(next)
})

// update job
router.put('/jobs/:id', function(req, res, next) {
  Job.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(function() {
      Job.findOne({ _id: req.params.id }).then(function(job) {
        res.send(job)
      })
    })
    .catch(next)
})

// delete job
router.delete('/jobs/:id', function(req, res, next) {
  Job.findByIdAndRemove({ _id: req.params.id })
    .then(function(job) {
      res.send(job)
    })
    .catch(next)
})

// /***************
//  Candidate
// ****************/

// get all jobs
router.get('/candidates', function(req, res, next) {
  Candidate.find({})
    .then(function(candidates) {
      res.send(candidates)
    })
    .catch(next)
})

// get one job
router.get('/candidates/:id', function(req, res, next) {
  Candidate.findOne({ _id: req.params.id })
    .then(function(candidate) {
      res.send(candidate)
    })
    .catch(next)
})

// add new candidate
router.post('/candidates', function(req, res, next) {
  Candidate.create(req.body)
    .then(function(candidate) {
      res.send(candidate)
    })
    .catch(next)
})

// update candidate
router.put('/candidates/:id', function(req, res, next) {
  Candidate.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(function() {
      Candidate.findOne({ _id: req.params.id }).then(function(candidate) {
        res.send(candidate)
      })
    })
    .catch(next)
})

// delete candidate
router.delete('/candidates/:id', function(req, res, next) {
  Candidate.findByIdAndRemove({ _id: req.params.id })
    .then(function(candidate) {
      res.send(candidate)
    })
    .catch(next)
})

module.exports = router
