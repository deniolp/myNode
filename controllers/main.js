function showMain(req, res) {
  res.render(`index`);
}

function login(req, res) {
  req.session.username = req.body.username;

  res.redirect(`/`);
}

// eslint-disable-next-line no-undef
module.exports = {
  showMain,
  login
};
