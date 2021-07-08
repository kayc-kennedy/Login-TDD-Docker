const {User} = require("../../src/app/models");

describe('Authentication', () => {
    it('should receive JWT token when authenticated with valid credentials', async ()=> {
        const user = await User.create({
            name: "kayc teste",
            email: "opa@gmai.com",
            password:'123'
        });
        console.log(user);

        expect(user.email).toBe('opa@gmai.com')
    })
})