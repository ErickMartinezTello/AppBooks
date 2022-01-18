class Book{
    constructor(id, title, author){ //declarador de objetos
        this.id = id; 
        this.title=title;
        this.author=author;
        //estoy autorefereciando el elemento porque no tiene valores y el usuario lo va a inicializar al gusto

    }
}
class Library{
    constructor(){
        if(localStorage.getItem('books') == null){
            this.books= [];

        }else{
            this.books = JSON.parse(localStorage.getItem('books'));
        }
    }
    addBook = (book) => {
        this.books.push(book); //push pasa el contenido de un arreglo a otro
        localStorage.setItem('books', JSON.stringify(this.books)); //stringify pasa de json a string
        //books es una variable que se actualiza con setItem en forma de string 

    }
    createTable = (book) => {
        const table = document.createElement('table');
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td><p>${book.title} by ${book.author}</p></td>
          <td><button>Remove</button></td>  `
          table.appendChild(tr);
    }

    displayBooks = () => {
        this.books.forEach((book) => {
          this.createTable(book);
        })
    }

}