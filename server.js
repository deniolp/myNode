/* eslint-disable no-undef */
const express = require(`express`);
const cookieParser = require(`cookie-parser`);
const crypto = require(`crypto`);

const mainController = require(`./controllers/main`);
const suggestionController = require(`./controllers/suggestion`);

const sessions = {};

const server = express();

server.set(`view engine`, `pug`);

server.use(express.static(`public`));
server.use(express.urlencoded({extended: true}));
server.use(cookieParser());

server.use((req, res, next) => {
  if (req.cookies.sessionId && sessions[req.cookies.sessionId]) {
    req.session = sessions[req.cookies.sessionId];
  } else {
    const sessionId = crypto.randomBytes(8).toString(`hex`);
    const session = {
      id: sessionId
    };

    sessions[sessionId] = session;

    res.cookie(`sessionId`, sessionId);

    req.session = session;
  }
  console.log(req.session);
  next();
});

server.use((req, res, next) => {
  const username = req.session.username;

  req.username = username;
  res.locals.username = username;

  next();
});

server.use((req, res, next) => {
  if (req.session && req.session.message) {
    res.locals.message = req.session.message;
    delete req.session.message;
  }

  next();
});

server.get(`/`, mainController.showMain);

server.post(`/`, mainController.login);

server.use(`/suggestions`, (req, res, next) => {
  if (req.session && !req.session.username) {
    res.redirect(`/`);
  } else {
    next();
  }
});

server.get(`/suggestions`, suggestionController.showSeggestions);

server.post(`/suggestions`, suggestionController.createSuggestion);

server.get(`/suggestions/:id`, suggestionController.showSeggestion);

server.post(`/suggestions/:id`, suggestionController.toggleVote);

server.listen(3000, `localhost`, () => console.log(`Сервер запущен!`));
