const users = require('./users')
let idnum = 3
const id = () => {
    return idnum++
}
function register({username, password}) {
    const newUser = {id: id(), username: username, password: password}
    users.push(newUser)
    return newUser
}
function login({username, password}) {
    const user = users.filter(user => user.username == username)[0]
    if (user.password == password) {
        return `Welcome ${username}!`
    } else {
        return 'your password is incorrect'
    }
}
function getUsers() {
    const usernames = {usernames: []}
    users.map(user => usernames.usernames.push(user.username))
    return usernames
}
module.exports = {
    register,
    login,
    getUsers
}