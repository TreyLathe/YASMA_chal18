const User = require('../models/user.js');
// Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().populate('thoughts');
    res.json(users);
  } catch (error) {
    console.log(error); // Add console log here
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get a single user by ID
const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id).populate('thoughts');
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.log(error); // Add console log here
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Create a new user
const createUser = async (req, res) => {
  const { username, email } = req.body;
  try {
    const user = await User.create({ username, email });
    res.status(201).json(user);
  } catch (error) {
    console.log(error); // Add console log here
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update a user by ID
const updateUserById = async (req, res) => {
  const { id } = req.params;
  const { username, email } = req.body;
  try {
    const user = await User.findByIdAndUpdate(id, { username, email }, { new: true });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.log(error);  // Add console log here
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete a user by ID
const deleteUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.log(error); // Add console log here
    res.status(500).json({ error: 'Internal server error' });
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

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
  addFriend
};
