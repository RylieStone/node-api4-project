async function fieldchecker (req, res, next) {
    const {username, password} = req.body
    if (!username || !password) {
        res.status(422).json({message: 'you need to provide a username and password'})
    } else {
        next()
    }
}
module.exports = fieldchecker