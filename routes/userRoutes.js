
const router = require("express").Router();
const User = require("../models/User.js");

// Endpoint
router.post("/register", async (req, res) => {
  try {
    // 1. Take username, email and password from req.body
    const { username, email,  password } = req.body;

    // 2. Find user with User.findOne({ email })
    // If user exists -> res.status(400).json({ message: "..." })
    const existingUser = await User.findOne({email})

    if (existingUser) {
        return res.status(400).json({ message: "User already exists with this email" });
    }

    // 3. Create new user with User.create({ username, email, password })
    const newUser = await User.create( { username, email,  password });


    // 4. Return res.status(201).json(...), clean password
    const userObject = newUser.toObject();
    delete userObject.password;

    return res.status(201).json(userObject)

  } catch (err) {
    console.log(err);
    
    res.status(500).json(err);
  }
});

module.exports = router;