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

    test('Return an error object when try to create a new user with a null payload with missing properties', () => {
        const payload = {username: 'UserName'}
        const result = Userview.CreateUser(payload)

        expect(result.error).toMatch(/Necesitan tener un valor válido/)
    })

    test('Create a User by a given valid Payload', () => {
        const payload = {username: 'UserName', id: 1, name: 'name'}
        const result = Userview.CreateUser(payload)

        expect(result.name).toBe('name')
        expect(result.username).toBe('UserName')
        expect(result.id).toBe(1)
     
    })
})