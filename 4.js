/*Write a program that accepts a list of objects representing books [title,author,and year] and a callback function.The program should use the map function to create a new list containing only  the titles of the books , and then pass this new list to the callback function .The callback function should then log the titles to the console in alphabetical order. */
                                                                                                                                                                                                                                                                                                


const books = [
  { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
];

function logTitlesInAlphabeticalOrder(titleList) {
  const sortedTitles = titleList.sort();
  console.log("Titles in alphabetical order:");
  sortedTitles.forEach((title) => {
    console.log(title);
  });
}

function extractTitlesAndCallCallback(bookList, callback) {
  const titles = bookList.map((book) => book.title);
  callback(titles);
}

extractTitlesAndCallCallback(books, logTitlesInAlphabeticalOrder);
