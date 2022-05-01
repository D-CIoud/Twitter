const Userview = require('../../app/views/UserView')

describe('Tests for UserView', () => {
    test('Return an error object when try to create a new user with a null payload', () => {
        const payload = null
        const result = Userview.CreateUser(payload)

        expect(result.error).toMatch(/payload no existe/)
    })

    test('Return an error object when try to create a new user with a null payload with invalid properties', () => {
        const payload = {username: null, name: 12, id: 'id'}
        const result = Userview.CreateUser(payload)

        expect(result.error).toMatch(/Necesitan tener un valor válido/)
    })
})