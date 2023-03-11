import express from 'express';
const app = express();
//import { tryRequest, tryResponse } from './middleware/index.js';

//you can put your response in a middleware, if need be.
//Ahh, this is exactly what nonfound middleware does, geez
//app.use(tryResponse);
//app.use(tryRequest);

import authRouter from './routes/authRoutes.js';

app.use(express.json());

app.use('/api/v1/auth', authRouter);

// app.get('/', (req, res) => {
//   const bp = req.bloodPressure;
//   res.send(bp);
// })

const port = 5001

const start = async () => {
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}....`)
    })
}

start()