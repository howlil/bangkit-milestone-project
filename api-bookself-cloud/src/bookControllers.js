const {
  addBook,
  getBooks,
  getBookById,
  updateBookById,
  deleteBookById,
} = require("./bookModels");

exports.addBookHandler = (request, h) => {
  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  } = request.payload;

  if (!name || readPage > pageCount) {
    return h
      .response({
        status: "fail",
        message: !name
          ? "Gagal menambahkan buku. Mohon isi nama buku"
          : "Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount",
      })
      .code(400);
  }

  const id = addBook({
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  });

  return h
    .response({
      status: "success",
      message: "Buku berhasil ditambahkan",
      data: {
        bookId,
      },
    })
    .code(201);
};

exports.getBooksHandler = (request, h) => {
  const { name, reading, finished } = request.query;
  let filteredBooks = getBooks();
  if (name) {
    filteredBooks = filteredBooks.filter((book) =>
      book.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  if (reading !== undefined) {
    const isReading = reading === "1";
    filteredBooks = filteredBooks.filter((book) => book.reading === isReading);
  }

  if (finished !== undefined) {
    const isFinished = finished === "1";
    filteredBooks = filteredBooks.filter(
      (book) => book.finished === isFinished
    );
  }

  const resultBooks = filteredBooks.map(({ id, name, publisher }) => ({
    id,
    name,
    publisher,
  }));

  return h
    .response({
      status: "success",
      data: {
        books: resultBooks,
      },
    })
    .code(200);
};


