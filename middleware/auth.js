// eslint-disable-next-line no-undef
module.exports = function auth(req, res, next) {
  if (req.session && !req.session.username) {
    res.redirect(`/`);
  } else {
    next();
  }
};
