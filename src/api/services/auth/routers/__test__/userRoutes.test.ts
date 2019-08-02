import {server}  from "../../../../../server";
import  request from "supertest";

describe('UserRouters',()=>{
    beforeEach(() => {

    });
    afterEach(()=>{

    })
    test('POST /login empty', done =>{
        const userMock = {}
        const res =  Post(`/users/login`,userMock)
        expect(res).toBe(200);
        done();
    }),
    test('POST /login undefined',()=>{
        const userMock:undefined=undefined


    }),
    test('POST /login misspelling',()=>{
        const userMock = {}


    }),
    test('POST /login user',()=>{
        const userMock = {
            id:1,
            first_name:'Armando',
            last_name:'de canha',
            username:'ArmandoDeCanha',
            password:'123456',
            email:'armando@gmail.com'
        }

    })

})

export function Post(url: string, body: Object){
    const httpRequest = request(server).post(url);
    httpRequest.send(body);
    httpRequest.set('Accept', 'application/json')
    //httpRequest.set('Origin', 'http://localhost:3000')
    return httpRequest;
  }