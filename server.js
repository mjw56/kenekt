// @flow

const express = require('express');
const http = require('http');
const path = require('path');
const sockets = require('./sockets');
const session = require('express-session');

const GrantExpress = require('grant-express');
const grant = new GrantExpress(require('./oauth'));

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(session({ secret: process.env.KENEKT_SESSION_SECRET }))

// mount grant
app.use(grant)

app.get('/handle_github_callback', function (req, res) {
  res.end(JSON.stringify(req.query, null, 2))
});

app.get('/handle_instagram_callback', function (req, res) {
  res.end(JSON.stringify(req.query, null, 2))
});

app.get('/handle_twitter_callback', function (req, res) {
  res.end(JSON.stringify(req.query, null, 2))
});

const server = http.createServer(app);

server.listen(3000, () => {
    console.log(`==> Server is listening on port 3000`);
    console.log(`==> 🌎  Go to localhost:3000`);
});

sockets.init(server);
