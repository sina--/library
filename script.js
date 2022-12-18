let testLibrary = [
	{
		title : 'Animal Farm',
		author : 'George Orwell',
		published : '1945',
		id : '0000',
		state : 'unread',
	},
];

let myLibrary = [];
let shelf = document.getElementById('library');

function Book() {
}

function init() {
	for (i = 0; i < testLibrary.length; i++) {
		let book = document.createElement('div');
		book.setAttribute('id', testLibrary[i].id);
		book.setAttribute('class', 'book-card');
		let bookTitle = document.createElement('h1');
		let details = document.createElement('div');
		details.setAttribute('class', 'details');
		let bookAuthor = document.createElement('h2');
		let bookYear = document.createElement('h2');
		bookTitle.setAttribute('class', 'book-title');
		bookTitle.textContent = testLibrary[i].title;
		shelf.appendChild(book);
		bookAuthor.textContent = testLibrary[i].author;
		bookYear.textContent = testLibrary[i].published;
		book.appendChild(bookTitle);
		book.appendChild(details);
		details.appendChild(bookAuthor);
		details.appendChild(bookYear);
	}
}

init();
