const myLibrary = [];
const submitBtn = document.querySelector('#submit-btn');
const cardContainer = document.querySelector('.card-container');





function Book(title , author , isRead) {
    this.title = title;
    this.author = author;
    this.isRead = isRead;

}

function addBookToLibrary() {
    submitBtn.addEventListener('click' , () => {
        let author = document.querySelector('#author');
        let title = document.querySelector('#title');
        let isRead = document.querySelector('#isRead');
        if (author.value !== "" && title.value !== "") {
            let book = new Book(title.value , author.value , isRead.checked);
            myLibrary.push(book);
            author.value = "";
            title.value = "";
            isRead.checked = false;
            displayBook(book);       
        }
        
        
    })
}

function displayBook(bookItem) {
    let author = bookItem.author;
    let title = bookItem.title;
    let isRead = bookItem.isRead;
    let childTotal = cardContainer.childElementCount;

    let name = document.createElement('div');
    name.textContent = `By: ${author}`;

    let bookTitle = document.createElement('div');
    bookTitle.textContent = title;

    let read = document.createElement('div');
    if (isRead == true) {
        read.textContent = "Read";
    } else {
        read.textContent = "Unread";
    }

    const card = document.createElement('div');
    card.classList.add('card');
    card.appendChild(bookTitle);
    card.appendChild(name);
    card.appendChild(read);

    deleteBook(card);
    cardContainer.appendChild(card);
    
}

function deleteBook(div) {
    let delBtn = document.createElement('button');
    delBtn.setAttribute('type' , 'button');
    delBtn.textContent = "Delete Book";
    delBtn.classList.add('delete-btn');
    delBtn.addEventListener('click' , () => {
        while (div.firstChild) {
            div.removeChild(div.firstChild);
        }
        div.remove();
        delBtn.remove();
    })
    div.appendChild(delBtn);


}



addBookToLibrary();