# Palindrome Checker

## Goal

Create a simple web application that uses the `fs` and `http` modules to validate whether a string is a palindrome on the server side.

## Project overview

This app is a Node.js server that serves a static HTML page and checks palindrome input through a custom `/api` endpoint. The browser sends the user's text as a query string, the server normalizes it, and then compares it to its reversed version. If the values match, the app responds with a success message; otherwise, it marks the input as not being a palindrome.

The server is configured to serve:

* `/` for the main page
* `/api` for palindrome validation
* `/css/style.css` for styling
* `/js/main.js` for the client-side logic

The front end includes a text input and button, and it updates the page with the server's JSON response using `fetch()`. The page has a neon sign theme, and the result glows green for a palindrome and red for anything else.

## Demo

<img width="1106" height="633" alt="Screenshot 2026-10-25 at 5 42 02 PM" src="https://github.com/user-attachments/assets/d7b31f99-4ee5-4542-b26f-59a39f442f26" />


## How it works

* The server creates an HTTP listener with `http.createServer()`
* It reads and serves `index.html` from disk using `fs.readFile()`
* The client submits the value from the input field to `/api?pali=...`
* The server removes spaces and special characters, then lowercases the input
* It compares the cleaned value to its reversed version
* The result is returned as JSON and displayed in the UI
* Any other route returns a `404!!` message made with `figlet`

## Run it locally

1. Install the dependency: `npm install figlet`
2. Start the server: `node server.js`
3. Open `http://localhost:8000` in your browser

## Tech used

* Node.js (`http`, `fs`, `url`, `querystring`)
* HTML, CSS, and vanilla JavaScript
* `figlet` for the 404 page
