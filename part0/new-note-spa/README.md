# 0.6: New note

## Exercise:

Create a diagram depicting the situation where the user creates a new note using the single page version of the app.

## Result:

```
note over browser:
JavaScript code it fetched from the server
process the data and send to server
end note

note over browser:
Also adds the data processed to the current
notes skipping the server for this process
end note

browser->server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
browser->server: { content: "Test note", date: "2021-03-27T15:15:59.905Z" }
server-->browser: 201 Created

note over server:
Server save the data and responds
with status code 201 created
end note
```

![Diagrama](images/diagram.png?raw=true)
