import {server}  from "../../../../../server";
import  superRequest from "supertest";

describe('UserRouters',()=>{
    const httpRequest = superRequest(server)

    test('POST /login empty',async  () =>{
        const mockUserData = {"":""}
        
        const res = await httpRequest.post(`/users/login`)
        .send(mockUserData)
        .set('Accept', 'application/json')
        .set('Origin', 'http://localhost:3000')
        
        expect(res.status).toBe(200);
        expect(res.text).toBe('Helo')

    });
    // test('POST /login undefined',()=>{
    //     const userMock:undefined=undefined


    // }),
    // test('POST /login misspelling',()=>{
    //     const userMock = {}


    // }),
    // test('POST /login user',()=>{
    //     const userMock = {
    //         id:1,
    //         first_name:'Armando',
    //         last_name:'de canha',
    //         username:'ArmandoDeCanha',
    //         password:'123456',
    //         email:'armando@gmail.com'
    //     }

    // })

})
