const UserService = require('../../app/Services/UserService') //Importar la clase UserService

describe("Test's for UserService", () => {

    test('1. Create new user using UserService', () => {
        const user = UserService.create(1,'Jonathan','Jona');
        expect(user.username).toBe('Jonathan')
        expect(user.name).toBe('Jona')
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })
})