const User = require('../models/user.js');
// Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
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
    const user = await User.findById(id);
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

// router.post('/api/users/:userId/friends/:friendId', async (req, res) => {
//   const { userId, friendId } = req.params;
//   try {
//     const user = await User.findById(userId);
//     if (!user) {
//       return res.status(404).json({ error: 'User not found' });
//     }
//     // Add friendId to the user's friend list
//     user.friends.push(friendId);
//     await user.save();
//     res.json(user);
//   } catch (error) {
//     console.log(error); // Add console log here
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// // Route to remove a friend from a user's friend list
// router.delete('/api/users/:userId/friends/:friendId', async (req, res) => {
//   const { userId, friendId } = req.params;
//   try {
//     const user = await User.findById(userId);
//     if (!user) {
//       return res.status(404).json({ error: 'User not found' });
//     }
//     // Remove friendId from the user's friend list
//     user.friends = user.friends.filter((friend) => friend.toString() !== friendId);
//     await user.save();
//     res.json(user);
//   } catch (error) {
//     console.log(error); // Add console log here
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
};
