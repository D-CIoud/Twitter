const userService = require('../../app/Services/UserService');
const UserService = require('../../app/Services/UserService') //Importar la clase UserService

describe("Test's for UserService", () => {

    test('1. Create new user using UserService', () => {
        const user = UserService.create(1,'Jona','Jonathan')
        expect(user.name).toBe('Jonathan')
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })

    test('2. Get all user data in a list', () => {
        const user = UserService.create(1,'Jona','Jonathan')
        const userInfoInList = userService.getInfo(user)
    
        expect(userInfoInList[0]).toBe(1)
        expect(userInfoInList[1]).toBe('Jona')
        expect(userInfoInList[2]).toBe('Jonathan')
        expect(userInfoInList[3]).toBe('Sin Bio')
    })

    test('3. Update UserName', () => {
        const user = userService.create(1, 'Jona', 'Jonathan')
        userService.updateUsername(user, "DCloud")

        expect(user.username).toBe('DCloud')
    })

    test('4. Given a list of users, give me the list of usernames', () =>{
        const user1 = userService.create(1, 'Jona', 'Jonathan')
        const user2 = userService.create(2, 'Ito', 'Alejandro')
        const user3 = userService.create(3, 'ChechoGod', 'Cecilio')
        const user4 = userService.create(4, 'JBruce', 'Bruce')
        const user5 = userService.create(5, 'Tranz', 'Alexis')
   
        const usernames = UserService.GetAllUserNames([user1,user2,user3,user4,user5])

        expect(usernames).toContain('Jona')
        expect(usernames).toContain('Ito')
        expect(usernames).toContain('ChechoGod')
        expect(usernames).toContain('JBruce')
        expect(usernames).toContain('Tranz')
    })
})