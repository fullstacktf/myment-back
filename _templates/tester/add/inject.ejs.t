---
inject: true
to: <%= path %>/<%= name%>.ts
before: "export const <%= name %>: Router = router;"
---
router.<%=method%>('<%= route %>',(req,res) => {
    controller.handleRequest(req.body)
    .then( data => res.json(data) )
    .catch()
})
