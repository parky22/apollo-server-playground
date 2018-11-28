// This is a (sample) collection of books we'll be able to query
// the GraphQL server for.  A more complete example might fetch
// from an existing data source like a REST API or database.
const books = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: {
      firstName: 'J.K.',
      lastName: 'Rowling',
      age: 52,
    },
  },
  {
    title: 'Jurassic Park',
    author: {
      firstName: 'Michael',
      lastName: 'Crichton',
      age: 66,
    },
    favorite: false,
  },
  {
    title: 'Americanah',
    author: {
      firstName: 'Chimamanda',
      middleName: 'Ngozi',
      lastName: 'Adichie',
      age: 41,
    },
    favorite: true,
  },
  {
    title: 'Just Mercy',
    author: {
      firstName: 'Bryan',
      lastName: 'Stevenson',
      age: 58,
    },
  },
  {
    title: 'Cannery Row',
    author: {
      firstName: 'John',
      lastName: 'Steinbeck',
      age: 66,
    },
  },
  {
    title: 'One Hundred Years of Solitude',
    author: {
      firstName: 'Gabriel',
      lastName: 'Garcia Marquez',
      age: 87,
    },
    favorite: true,
  },
];

module.exports = {
  books,
};
