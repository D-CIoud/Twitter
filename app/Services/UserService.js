const User = require('../Models/user')  

class userService {
    static create(id,username,name){
        return new User(id, username, name, "Sin Bio")
    }

    static getInfo(User){
        return [User.id, User.username, User.name, User.bio]
    }

    static updateUsername(User,updatedUserName){
        User.username = updatedUserName
        return User
    }

    static GetAllUserNames([User1,User2,User3,User4,User5]){
        return [User1.username,User2.username,User3.username,User4.username,User5.username]
    }
}

module.exports = userService