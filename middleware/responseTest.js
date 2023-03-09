const tryResponse = (req, res, next) => {
    res.send('What it don\'t do!?');
    next();
}
export default tryResponse;

export const tryRequest = (req, res, next) => {
    req.bloodPressure = '120/80';
    next();
}
