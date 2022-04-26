const User = require('../Models/user')  

class userService {
    static create(id,username,name){
        return new User(id, username, name, "Sin Bio")
    }

    static getInfo(User){
        return [User.id, User.username, User.name, User.bio]
    }
}

module.exports = userService