const { GetAllUserNames } = require('../Services/UserService')
const UserService = require('../Services/UserService')

class Userview{
    static CreateUser(Payload)
    {
        if (Payload === null) //Validar si el Payload es nulo
        {
            return {error: 'payload no existe '}
        }
        else if(Payload.username === null )
        {
            return {error: `Necesitan tener un valor válido`}
        }
    }
}

module.exports = Userview