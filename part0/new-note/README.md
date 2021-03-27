# 0.4: new note

## Exercise:

Create a similar diagram depicting the situation where the user creates a new note on page https://studies.cs.helsinki.fi/exampleapp/notes by writing something into the text field and clicking the submit button.

## Result:

```
note over browser:
Browser send the user input
to the server
end note
browser->server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note

note over server:
Server save new data and send
response to the browser
end note
server-->browser: URL REDIRECT https://studies.cs.helsinki.fi/exampleapp/notes

note over browser:
Browser reloads the Notes page and get all other
resources (main.css, main.js and data.json)
end note

browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/notes
server-->browser: HTML-code
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
server-->browser: main.css
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.js
server-->browser: main.js
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
server-->browser: [{ content: "New note added", date: "2021-03-27" }, ...]

note over browser:
Browser show the updated notes list
with the note that is added
end note
```

![Diagrama](images/diagram.png?raw=true)
