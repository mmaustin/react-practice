import express from 'express';
const app = express();

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