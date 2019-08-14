
import {server}  from "../../../../../server";
import  superRequest from "supertest";

describe('ActivitiesRouter',()=>{
    const httpRequest = superRequest(server)

    // test('POST /all empty',async  (done) =>{
    //     const mockUserData = {"":""}
        
    //     const res = await httpRequest.post(`/activities/all`)
    //     .send(mockUserData)
    //     .set('Accept', 'application/json')
    //     .set('Origin', 'http://localhost:3000')
        
    //     expect(res.status).toBe(200);
    //     expect(res.body).toBe('');
    // }),
    // test('POST /category empty',async  (done) =>{
    //     const mockUserData = {"":""}
        
    //     const res = await httpRequest.post(`/activities/all`)
    //     .send(mockUserData)
    //     .set('Accept', 'application/json')
    //     .set('Origin', 'http://localhost:3000')
        
    //     expect(res.status).toBe(200);
    //     expect(res.body).toBe('');
    // }),
    test('POST /find with post data',async  (done) =>{
        const mockUserData = {country : 'España',
                                city: 'Santa Cruz de Tenerife',
                                zone: 'Plaza',
                                tags: ['Fiesta','Rural']}
        
        const res = await httpRequest.post(`/activities/find`)
        .send(mockUserData)
        .set('Accept', 'application/json')
        .set('Origin', 'http://localhost:3000')
        
        expect(res.status).toBe(200);
        expect(res.body).toBe('');
    });
});

