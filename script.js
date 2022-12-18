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

function addBook(event) {
	event.preventDefault();
	let title = document.getElementById('title').value;
	let author = document.getElementById('author').value;
	let year = document.getElementById('year').value;
	let id = Object.keys(data).length + 1;
}

function bookActions() {
	let bookActions = document.createElement('div');
	for (i = 0; i < actionButtons.length; i++) {
		let toggleRead = document.createElement('button');
		let removeBook = document.createElement('button');
		toggleRead.textContent = 'Y';
		removeBook.textContent = 'X';
		bookActions.appendChild(toggleRead);
		bookActions.appendChild(removeBook);
	}
}


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
		bookActions();
		book.appendChild(bookActions);
	}
}

init();
