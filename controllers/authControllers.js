import User from "../models/User.js";

export const register = async(req, res) => {
    const { name, email, password } = req.body

    // if (!name || !email || !password) {
    //   throw new BadRequestError('please provide all values')
    // }
    // const userAlreadyExists = await User.findOne({ email })
    // if (userAlreadyExists) {
    //   throw new BadRequestError('Email already in use')
    // }
    const user = await User.create({ name, email, password })
  
    //const token = user.createJWT()
    res.status(201).json({
      user: {
        email: user.email,
        location: user.location,
        name: user.name,
      },
      location: user.location,
    })    
    //res.json({msg: 'I am registered'});
}

export const login = (req, res) => {
    res.json({msg: 'I have logged in'});
}

export const updateUser = (req, res) => {
    res.json({msg: 'I have updated my profile'});
}