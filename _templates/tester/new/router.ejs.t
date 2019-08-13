---
to: <%= path %>/__test__/<%= name %>.test.ts
---
<%
 method = method.toUpperCase()
%>
import {server}  from "../../../../../server";
import  superRequest from "supertest";

describe('<%= name %>',()=>{
    const httpRequest = superRequest(server)

    test('<%= method %> <%= route %> empty',async  () =>{
        const mockUserData = {"":""}
        
        const res = await httpRequest.post(`/users/login`)
        .send(mockUserData)
        .set('Accept', 'application/json')
        .set('Origin', 'http://localhost:3000')
        
        expect(res.status).toBe(200);
    });
})
<% if(locals.testing){ -%>

<%
 method = method.toUpperCase()
%>
import {server}  from "../../../../../server";
import  superRequest from "supertest";

describe('<%= name %>',()=>{
    const httpRequest = superRequest(server)

    test('<%= method %> <%= route %> empty',async  () =>{
        const mockUserData = {"":""}
        
        const res = await httpRequest.post(`/users/login`)
        .send(mockUserData)
        .set('Accept', 'application/json')
        .set('Origin', 'http://localhost:3000')
        
        expect(res.status).toBe(200);
    });
})
<% }else{} -%>