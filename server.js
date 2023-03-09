import express from 'express';
const app = express();
import { tryResponse } from './middleware/index.js';

//you can put your response in a middleware, if need be.
//Ahh, this is exactly what nonfound middleware does, geez
app.use(tryResponse);

app.get('/', (req, res) => {
    //res.send('What it do!');
})

const port = 5001

const start = async () => {
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}....`)
    })
}

start()