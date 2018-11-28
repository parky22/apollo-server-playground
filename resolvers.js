const { books } = require('./data');


// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
const resolvers = {
  Query: {
    getBooks: () => books,
  },
};

module.exports = resolvers;
