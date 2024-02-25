const User = require('../models/user.js');
// Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().populate('thoughts').populate('friends').select('-__v');
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
    const user = await User.findById(id).populate('thoughts').populate('friends').select('-__v');
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

const addFriend = async (req, res) => {
  const { userId, friendId } = req.params;
  try {
    const user = await User.findByIdAndUpdate(userId, { $addToSet: { friends: friendId } }, { new: true });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.log(error); // Add console log here
    res.status(500).json({ error: 'Internal server error' });
  }
};

const deleteFriend = async (req, res) => {
  const { userId, friendId } = req.params;
  try {
    const user = await User.findByIdAndUpdate(userId, { $pull: { friends: friendId } }, { new: true });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.log(error); // Add console log here
    res.status(500).json({ error: 'Internal server error' });
  }
};




module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
  addFriend,
  deleteFriend
};
