// eslint-disable-next-line no-undef
const Suggestion = require(`../models/suggestion`);

function showSuggestions(req, res) {
  const suggestions = Suggestion.getAll();

  res.render(`suggestions`, {
    suggestions
  });
}

function showSuggestion(req, res) {
  const suggestion = Suggestion.getOne(req.params.id);

  res.render(`suggestion`, {
    suggestion
  });
}

function createSuggestion(req, res) {
  const title = req.body.title;

  Suggestion.add(title);

  req.session.message = `Предложение принято`;

  res.redirect(`/suggestions`);
}

function toggleVote(req, res) {
  const username = req.username;
  const suggestion = Suggestion.getOne(req.params.id);

  if (suggestion.voters.has(username)) {
    suggestion.voters.delete(username);
    req.session.message = `Голос отменён`;
  } else {
    suggestion.voters.add(username);
    req.session.message = `Голос принят`;
  }

  res.redirect(`back`);
}

// eslint-disable-next-line no-undef
module.exports = {
  showSuggestions,
  showSuggestion,
  createSuggestion,
  toggleVote
};
