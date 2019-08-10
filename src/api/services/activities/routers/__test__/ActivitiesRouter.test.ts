
import {server}  from "../../../../../server";
import  superRequest from "supertest";

describe('ActivitiesRouter',()=>{
    const httpRequest = superRequest(server)

    test('POST / empty',async  (done) =>{
        const mockUserData = {"":""}
        
        const res = await httpRequest.post(`/activities/getAll`)
        .send(mockUserData)
        .set('Accept', 'application/json')
        .set('Origin', 'http://localhost:3000')
        
        expect(res.status).toBe(200);
    });
})
