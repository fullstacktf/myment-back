import {server}  from "../../../../../server";
import  superRequest from "supertest";

describe('UserRouters',()=>{

    const httpRequest = superRequest(server)
    test('POST /login empty',  done =>{
        const mockUserData = {"":""}
        const res =  httpRequest.post(`/users/login`)
        .send(mockUserData)
        .set('Accept', 'application/json')
        .set('Origin', 'http://localhost:3000')
        .then(res => {
            expect(res.status).toBe(200);
            done();
        })

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
