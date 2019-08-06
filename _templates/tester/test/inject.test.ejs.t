---
inject: true
to: <%= path %>/__test__/<%= name%>.test.ts
skip_if: <%= route  %>
after: "describe"
---
<%
method: method.toUpperCase()
%>
test('<%= method %> <%= route %> empty',async  () =>{
    const mockUserData = {"":""}
    
    const res = await httpRequest.post(`<%= route %>`)
    .send(mockUserData)
    .set('Accept', 'application/json')
    .set('Origin', 'http://localhost:3000')
    
    expect(res.status).toBe(200);
    expect(res.text).toBe('Helo')

});