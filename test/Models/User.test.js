const User = require('./../../app/Models/user')

describe("Unit Test's for User Class", () => {
    test('Create User Object', () => {
        //Instanciamos la clase del usuario
        const user = new User(1,'DCloud','Jona','Bio')

        //Aquí validamos los resultados del código
        expect(user.id).toBe(1)
        expect(user.username).toBe('DCloud')
        expect(user.name).toBe('Jona')
        expect(user.bio).toBe('Bio')
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdated).not.toBeUndefined()
    });

    test('Add Getters', () => {
        //Instanciamos nuestra clase User
        const user = new User(1,'DCloud','Jona','Bio')

        //Los parametros a recibir
        expect(user.getUserName).toBe('DCloud')
        expect(user.getName).toBe('Jona')
        expect(user.getBio).toBe('Bio')
        expect(user.getDateCreated).not.toBeUndefined()
        expect(user.getLastUpdated).not.toBeUndefined()
    } )

    test('Add Setters', () => {
        const user = new User(1,'DCloud','Jona','Bio')

        user.setUserName = 'DCloud2'
        expect(user.username).toBe('DCloud2')

        user.setBio = 'Bio2'
        expect(user.bio).toBe('Bio2')
    })
})