const UserService = require('../../app/Services/UserService') //Importar la clase UserService

describe("Test's for UserService", () => {

    test('1. Create new user using UserService', () => {
        const user = UserService.create(1,'Jona','Jonathan');
        expect(user.username).toBe('Jona')
        expect(user.name).toBe('Jonathan')
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })
})