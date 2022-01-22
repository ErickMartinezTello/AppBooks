class Book{
    constructor(id, title, author){ //declarador de objetos
        this.id = id; 
        this.title=title;
        this.author=author;
        //estoy autorefereciando el elemento porque no tiene valores y el usuario lo va a inicializar al gusto

    }
}
class Library{
    //const es para valores que van a cambiar de valor en mi còdigo
    //let es para valores que NO cambiaràn de valor en mi còdigo 
    const getBooks(){
        if(localStorage.getItem('books') == null){
            this.books= [];

        }else{
            this.books = JSON.parse(localStorage.getItem('books'));
        }
    }
    const addBook = (book) => {
        this.books.push(book); //push pasa el contenido de un arreglo a otro
        localStorage.setItem('books', JSON.stringify(this.books)); //stringify pasa de json a string
        //books es una variable que se actualiza con setItem en forma de string 
        //setItem es para actualizar los valores del localStorage 
        //innerHTML es para ingresar codigo html desde js 
        //window hace referencia a que voy a ingresar a la pagina por medio de funciones 
        //new es para instanciar un objeto 
        //target es para direccionar un evento 
        //previousElementSibling es para recorrer en el html los elementos al ser eliminados 
    }
    const createTable = (book) => {
        const table = document.createElement('table');
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td><p>${book.title} by ${book.author}</p></td>
          <td><button>Remove</button></td>  `
          table.appendChild(tr);
    }

    const displayBooks = () => {
        this.books.forEach((book) => {
          this.createTable(book);
        })
    }
}
window.addEventListener("DOMContentLoaded", () => );