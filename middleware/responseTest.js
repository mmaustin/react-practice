const tryResponse = (req, res, next) => {
    res.send('What it do!');
    next();
}
export default tryResponse;