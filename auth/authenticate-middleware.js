

module.exports = (req, res, next) => {
    return res.status(401).json({ message: 'You shall not pass!' })
};