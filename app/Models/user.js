class User {
    constructor(id,username,name,bio,dateCreated,lastUpdated){
        this.id = id;
        this.username = username;
        this.name = name;
        this.bio = bio;
        this.dateCreated = new Date();
        this.lastUpdated = new Date();
    }
    get getUserName(){
        return this.username
    }

    get getName(){
        return this.name
    }

    get getBio(){
        return this.bio
    }

    get getDateCreated(){
        return this.dateCreated
    }

    get getLastUpdated(){
        return this.lastUpdated
    }

    set setUserName(Username){
        this.username = Username
    }

    set setBio(Bio){
        this.bio = Bio
    }
}

//Exportamos la clase
module.exports = User