import express from 'express';
const app = express();
//import { tryRequest, tryResponse } from './middleware/index.js';

//you can put your response in a middleware, if need be.
//Ahh, this is exactly what nonfound middleware does, geez
//app.use(tryResponse);
//app.use(tryRequest);
//import cors from 'cors';

import authRouter from './routes/authRoutes.js';

//app.use(cors());
app.use(express.json());

app.use('/api/v1/auth', authRouter);

// app.get('/cuz', (req, res) => {
//   res.json({msg: 'i guess they fixed the manhole cover!'});
// })

const port = 5001

const start = async () => {
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}....`)
    })
}

start()