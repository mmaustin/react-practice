import express from 'express';
import connectDB from './db/connect.js';
const app = express();
import dotenv from 'dotenv';
dotenv.config();
import { notFoundMiddleware } from './middleware/index.js';

//you can put your response in a middleware, if need be.
//Ahh, this is exactly what nonfound middleware does, geez
//app.use(tryResponse);
//app.use(tryRequest);
//import cors from 'cors';

import authRouter from './routes/authRoutes.js';
import plantationRouter from './routes/plantationRoutes.js'

//app.use(cors());
app.use(express.json());

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/plantation', plantationRouter);

app.use(notFoundMiddleware);

// app.get('/cuz', (req, res) => {
//   res.json({msg: 'i guess they fixed the manhole cover!'});
// })

// const port = 5001

// const start = async () => {
//     app.listen(port, () => {
//       console.log(`Server is listening on port ${port}....`)
//     })
// }

// start()

const port = process.env.PORT || 5001

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL)
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()

//i hope this github ssh key issue is fixed