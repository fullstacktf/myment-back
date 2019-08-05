---
inject: true
to: app/routes.js
skip_if: <%= name %>
before: "module.exports = app"
---