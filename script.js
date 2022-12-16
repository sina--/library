let testLibrary = [
	{
		'title' : 'Animal Farm',
		'author' : 'George Orwell',
		'published' : '1945',
		'id' : '0000',
		'status' : 'unread',
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
		bookTitle.setAttribute('class', 'book-title');
		bookTitle.textContent = testLibrary[i].title;
		shelf.appendChild(book);
		book.appendChild(bookTitle);
	}
}

init();
