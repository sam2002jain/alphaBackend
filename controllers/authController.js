const User = require('../models/userModel');

const signUp = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already registered' });
    }

    // Create new user
    const user = new User({ email, password });
    await user.save();

    res.status(201).json({
      message: 'User created successfully',
      user: {
        id: user._id,
        email: user.email,
      },
    });
  } catch (error) {
    console.error('Sign up error:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Verify password using comparePassword method
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    res.json({
      message: 'Sign in successful',
      user: {
        id: user._id,
        email: user.email,
      },
    });
  } catch (error) {
    console.error('Sign in error:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = { signUp, signIn };
