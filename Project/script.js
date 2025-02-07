class Author {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

class Book {
    constructor(name, price, author) {
        this.name = name;
        this.price = price;
        this.author = author;
    }
}

let books = [];

function generateForm() {
    const count = document.getElementById('bookCount').value;
    const bookInputs = document.getElementById('bookInputs');
    bookInputs.innerHTML = '';
    
    for (let i = 0; i < count; i++) {
        bookInputs.innerHTML += `
           <h3>Book ${i + 1}</h3>
                    <label>Book Name:</label>
                    <input type="text" class="book-name" required>
                    <span class="error hidden">Please Provide A Valid Name.</span><br>
                    <label>Price:</label>
                    <input type="number" class="book-price" required>
                    <span class="error hidden">Please Provide A Valid Price.</span><br>
                    <label>Author Name:</label>
                    <input type="text" class="author-name" required>
                    <span class="error hidden">Please Provide A Valid Name.</span><br>
                    <label>Author Email:</label>
                    <input type="email" class="author-email" required>
                    <span class="error hidden">Please Provide A Valid Email.</span><br><br>
        `;
    }
    document.getElementById('bookForm').classList.remove('hidden');
}

function submitBooks() {
    const names = document.querySelectorAll('.book-name');
    const prices = document.querySelectorAll('.book-price');
    const authorNames = document.querySelectorAll('.author-name');
    const authorEmails = document.querySelectorAll('.author-email');
    const errors = document.querySelectorAll('.error');
    let valid = true;
    
    errors.forEach(error => error.classList.add('hidden'));
    
    books = [];
    
    for (let i = 0; i < names.length; i++) {
        if (!names[i].value.trim()) {
            names[i].nextElementSibling.classList.remove('hidden');
            valid = false;
        }
        if (!prices[i].value.trim()) {
            prices[i].nextElementSibling.classList.remove('hidden');
            valid = false;
        }
        if (!authorNames[i].value.trim()) {
            authorNames[i].nextElementSibling.classList.remove('hidden');
            valid = false;
        }
        if (!authorEmails[i].value.trim() || !authorEmails[i].value.includes('@')) {
            authorEmails[i].nextElementSibling.classList.remove('hidden');
            valid = false;
        }
        
        if (valid) {
            let author = new Author(authorNames[i].value, authorEmails[i].value);
            let book = new Book(names[i].value, prices[i].value, author);
            books.push(book);
        }
    }
    
    if (valid) displayBooks();
}

function displayBooks() {
    const table = document.getElementById('bookTable');
    const tbody = table.querySelector('tbody');
    tbody.innerHTML = '';
    
    books.forEach((book, index) => {
        let row = tbody.insertRow();
        row.innerHTML = `
            <td contenteditable="false">${book.name}</td>
            <td contenteditable="false">${book.price}</td>
            <td contenteditable="false">${book.author.name}</td>
            <td contenteditable="false">${book.author.email}</td>
            <td>
                <button onclick="editRow(this, ${index})">Edit</button>
                <button onclick="deleteRow(${index})">Delete</button>
            </td>
        `;
    });
    table.classList.remove('hidden');
}

function editRow(button, index) {
    let row = button.parentElement.parentElement;
    let cells = row.querySelectorAll('td[contenteditable]');
    let editing = button.innerText === 'Edit';
    
    cells.forEach(cell => cell.contentEditable = editing);
    button.innerText = editing ? 'Save' : 'Edit';
    
    if (!editing) {
        books[index].name = cells[0].innerText;
        books[index].price = cells[1].innerText;
        books[index].author.name = cells[2].innerText;
        books[index].author.email = cells[3].innerText;
    }
}

function deleteRow(index) {
    books.splice(index, 1);
    displayBooks();
}