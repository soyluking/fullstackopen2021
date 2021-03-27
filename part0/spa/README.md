# 0.5: Single page app

## Exercise:

Create a diagram depicting the situation where the user goes to the [single page app](https://fullstackopen.com/en/part0/fundamentals_of_web_apps#single-page-app) version of the notes app at https://studies.cs.helsinki.fi/exampleapp/spa.

## Result:

```
note over browser:
The sequence is very similar to the
previous version
end note

browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa
server-->browser: HTML-code
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
server-->browser: main.css
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa.js
server-->browser: spa.js

note over browser:
In SPA version, the JavaScript file
is different (spa.js)
end note

browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
server-->browser: [{ content: "Test note", date: "2021-03-27" }, ...]

note over browser:
Browser renders notes to display
and look similar to the previous version
end note
```

![Diagrama](images/diagram.png?raw=true)
