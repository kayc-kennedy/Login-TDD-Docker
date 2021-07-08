const request = require('supertest');
const app = require('../../src/app')
const truncate = require('../utils/truncate');

const factory = require('../factories');

describe('Authentication', () => {
    beforeEach(async ()=> {
        await truncate();
    });

    it('should receive JWT token when authenticated with valid credentials', async ()=> {
        const user = await factory.create('User', {
            password:'123'
        })
        
        const response = await request(app)
            .post('/sessions')
            .send({
                email: user.email,
                password: '123'
            })
        expect(response.status).toBe(200)          
    });

    it('shold not authenticate with credentils invalids', async()=>{
        const user = await factory.create('User', {
            password:'123456'
        })
        const response = await request(app)
            .post('/sessions')
            .send({
                email: user.email,
                password: '123'
            })
        expect(response.status).toBe(401)          
    
    })

    it('should return jwt token when authenticated', async()=>{
        const user = await factory.create('User', {
            password:'123'
        })
        const response = await request(app)
            .post('/sessions')
            .send({
                email: user.email,
                password: '123'
            })
        console.log(response.body)
        expect(response.body).toHaveProperty('token');          
    })

})