let nextId = 1;

const suggestions = [{
  id: `1`,
  title: `Знакомство с Node.js`,
  voters: new Set()
}];

function getAll() {
  return suggestions;
}

function getOne(id) {
  return suggestions.find((suggestion) => suggestion.id === id);
}

function add(title) {
  suggestions.push({
    id: ++nextId + ``,
    title,
    voters: new Set()
  });
}

// eslint-disable-next-line no-undef
module.exports = {
  getAll,
  getOne,
  add
};
