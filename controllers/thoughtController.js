const {Thought, User} = require('../models/');

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

//get thought by id
const getThought = async (req, res) => {
  const { id } = req.params;
  try {
    console.log('getThought function called'); // Add console log here
    const thought = await Thought.findById(id).populate('reactions');
    if (!thought) {
      return res.status(404).json({ error: 'Thought not found' });
    }
    res.status(200).json(thought);
  } catch (err) {
    console.error(err); // Add console error log here
    res.status(500).json({ error: 'Server error' });
  }
};

// Create a route to add a friend to a user
const addFriend = async (req, res) => {
  const { id } = req.params;
  try {
    console.log('addFriend function called'); // Add console log here
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    const friend = await User.findById(id);
    if (!friend) {
      return res.status(404).json({ error: 'Friend not found' });
    }
    user.friends.push(id);
    await user.save();
    res.status(200).json({ message: 'Friend added successfully' });
  } catch (err) {
    console.error(err); // Add console error log here
    res.status(500).json({ error: 'Server error' });
  }
};


const createThought = async (req, res) => {
  const { thoughtText, username } = req.body;
  try {
    const thought = await Thought.create({ thoughtText, username });
    const user = await User.findOneAndUpdate({ username }, { $push: { thoughts: thought._id }},{ new: true })
    if (!user) {(res.status(404).json({ error: 'no thought with user' }));}
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
