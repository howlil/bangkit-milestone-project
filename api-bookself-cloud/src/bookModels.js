const { nanoid } = require("nanoid");

let books = [];

exports.addBook = async ({
  name,
  year,
  author,
  summary,
  publisher,
  pageCount,
  readPage,
  reading,
}) => {
  const id = await nanoid(16);
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;
  const finished = pageCount === readPage;

  const book = {
    id,
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    finished,
    reading,
    insertedAt,
    updatedAt,
  };
  books.push(book);
  return id;
};

exports.getBooks = () => books.map((book) => ({ id, name, publisher }));

exports.getBookById = (id) => books.find((book) => book.id === id);

exports.updateBookById = (id, updates) => {
  const index = books.findIndex((book) => book.id === id);
  if (index !== -1) {
    books[index] = {
      ...books[index],
      ...updates,
      updatedAt: new Date().toISOString(),
      finished: updates.pageCount === updates.readPage,
    };
    return true;
  }
  return false;
};

exports.deleteBookById = (id) => {
  const initialLength = books.length;
  books = books.filter((book) => book.id !== id);
  return books.length < initialLength;
};
