
import {server}  from "../../../../../server";
import  superRequest from "supertest";

describe('tagsRouter',()=>{
    const httpRequest = superRequest(server)

    test('POST /all empty',async  () =>{
        const mockUserData = {"":""}
        
        const res = await httpRequest.post(`/tags/all`)
        .send(mockUserData)
        .set('Accept', 'application/json')
        .set('Origin', 'http://localhost:3000')
        
        expect(res.status).toBe(200);
    });
})
