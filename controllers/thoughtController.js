const User = require('../models/thought.js');

const getThoughts = async (req, res) => {
  try {
    console.log('getThoughts function called'); // Add console log here
    const thoughts = await Thought.find();
    res.status(200).json(thoughts);
  } catch (err) {
    console.error(err); // Add console error log here
    res.status(500).json({ error: 'Server error' });
  }
};

const getThought = async (req, res) => {
  try {
    console.log('getThought function called'); // Add console log here
    const thought = await Thought.findById(req.params.id);
    if (!thought) {
      return res.status(404).json({ error: 'Thought not found' });
    }
    res.status(200).json(thought);
  } catch (err) {
    console.error(err); // Add console error log here
    res.status(500).json({ error: 'Server error' });
  }
};

const createThought = async (req, res) => {
  const { thoughtText, username } = req.body;
  try {
    const Thought = await Thought.create({ thoughtText, username });
    res.status(201).json(thought);
  } catch (err) {
    console.error(err); // Add console error log here
    res.status(500).json({ error: 'Server error, you fool' });
  }
};

const updateThought = async (req, res) => {
  try {
    console.log('updateThought function called'); // Add console log here
    const thought = await Thought.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!thought) {
      return res.status(404).json({ error: 'Thought not found' });
    }
    res.status(200).json(thought);
  } catch (err) {
    console.error(err); // Add console error log here
    res.status(500).json({ error: 'Server error' });
  }
};

const deleteThought = async (req, res) => {
  try {
    console.log('deleteThought function called'); // Add console log here
    const thought = await Thought.findByIdAndDelete(req.params.id);
    if (!thought) {
      return res.status(404).json({ error: 'Thought not found' });
    }
    res.status(200).json({ message: 'Thought deleted' });
  } catch (err) {
    console.error(err); // Add console error log here
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {
  getThoughts,
  getThought,
  createThought,
  updateThought,
  deleteThought,
};
