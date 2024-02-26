const express = require('express');
const router = require('express').Router();

const {
    getThoughts,
    getThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction
  } = require('../../controllers/thoughtController');


router.route('/').get(getThoughts).post(createThought);
router.route('/:id').get(getThought).put(updateThought).delete(deleteThought);
router.route('/:thoughtId/reactions').post(addReaction);
module.exports = router;
