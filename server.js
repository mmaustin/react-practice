import express from 'express';
import connectDB from './db/connect.js';
const app = express();
import dotenv from 'dotenv';
dotenv.config();
import { notFoundMiddleware, errorHandlerMiddleware } from './middleware/index.js';
import 'express-async-errors';

// const express = require('express');
// const app = express();

//import {loadStripe} from '@stripe/stripe-js';
//const stripe = await loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');
//const stripe = await loadStripe('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
//console.log(stripe);
//const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
//console.log(stripe); ;

//you can put your response in a middleware, if need be.
//Ahh, this is exactly what nonfound middleware does, geez
//app.use(tryResponse);
//app.use(tryRequest);
//import cors from 'cors';

// import authRouter from './routes/authRoutes.js';
// import plantationRouter from './routes/plantationRoutes.js'

// //app.use(cors());
// app.use(express.json());

// app.use('/api/v1/auth', authRouter);
// app.use('/api/v1/plantation', plantationRouter);

// app.use(notFoundMiddleware);
// app.use(errorHandlerMiddleware);

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

app.use(express.static('public'));

const YOUR_DOMAIN = 'http://localhost:3000';



app.post('/create-checkout-session', async (req, res) => {

  const price = await stripe.prices.create({
    unit_amount: 2200,
    currency: 'usd',
    product: 'prod_OSJJ54DmYBCp65',
  });

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: price.id,
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });
  res.redirect(303, session.url);

});

app.listen(5001, () => console.log('Running on port 5001'));

// const port = process.env.PORT || 5001

// const start = async () => {
//   try {
//     await connectDB(process.env.MONGO_URL)
//     app.listen(port, () => {
//       console.log(`Server is listening on port ${port}...`)
//     })
//   } catch (error) {
//     console.log(error)
//   }
// }

// start()

//i hope this github ssh key issue is fixed