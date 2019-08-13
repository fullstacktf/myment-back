
import {server}  from "../../../../../server";
import  superRequest from "supertest";

describe('LocationRouter',()=>{
    const httpRequest = superRequest(server)

    test('POST /places empty',async  () =>{
        const mockUserData = {"":""}
        
        const res = await httpRequest.post(`/locations/places`)
        .send(mockUserData)
        .set('Accept', 'application/json')
        .set('Origin', 'http://localhost:3000')
        
        expect(res.status).toBe(200);
        expect(res.body).toBe('');

    });
})
