import {server}  from "../../../../../server";
import  superRequest from "supertest";

describe('UserRouters',()=>{

    test('POST /login empty',  async () =>{
        const mockUserData = {"":""}
        
        return superRequest(server).post("/users/login")
        .then(response => {
            expect(response.status).toBe(200)
            expect(response.text).toBe('Hello')
        })

    }),
    test('POST /login undefined', async ()=>{
        let userMock:undefined;
        return superRequest(server).post("/users/login")
        .send(userMock)
        .then(response => {
            expect(response.status).toBe(200)
            expect(response.text).toBe('Hello')
        })

    }),
    test('POST /register user', async ()=>{
        const userMock = {
            id:1,
            first_name:'Armando',
            last_name:'de canha',
            username:'ArmandoDeCanha',
            password:'123456',
            email:'armando@gmail.com'
        };
        return superRequest(server).post("/users/register")
        .send(userMock)
        .then(response => {
            expect(response.status).toBe(200)
            expect(response.text).toBe('')
        })

    });

})
