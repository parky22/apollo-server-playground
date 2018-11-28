const { gql } = require('apollo-server');

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
const typeDefs = gql`
  type Author {
    firstName: String
    middleName: String
    lastName: String
    age: Int
    books: [Book]
  }

  # This "Book" type can be used in other type declarations.
  type Book {
    title: String
    author: Author
    favorite: Boolean
  }

  # The "Query" type is the root of all GraphQL queries.
  # (A "Mutation" type will be covered later on.)
  type Query {
    getBooks: [Book]
    getAuthors: [Author]
  }
`;

module.exports = {
  typeDefs,
};
