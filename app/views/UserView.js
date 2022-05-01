const { GetAllUserNames } = require('../Services/UserService')
const UserService = require('../Services/UserService')

class Userview{
    static CreateUser(Payload)
    {
        if (Payload === null) //Validar si el Payload es nulo
        {
            return {error: 'payload no existe '}
        }
        else if (!(Payload.hasOwnProperty('username')) || !(Payload.hasOwnProperty('name')) || !(Payload.hasOwnProperty('id'))) //Si alguna propiedad no existe en el objeto
        {
            return {error: `Necesitan tener un valor válido`}
        }
        else if(Payload.username === null || Payload.name === null || Payload.id === null)
        {
            return {error: `Necesitan tener un valor válido`}
        }
        else
        {
            return UserService.create(Payload.id,Payload.username,Payload.name)
        }
    }
}

module.exports = Userview