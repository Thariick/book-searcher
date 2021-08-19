import React, {useState, useEffect} from "react";
import axios from "axios";

const apiKey = "AIzaSyDWmTGtIgTH5rkMziZeyGIAq-6VHwguplA"
const Books = () => {
    const[books, setBooks] = useState([]) //Pega os dados da URL e popula a const
    useEffect(() => {
        const fetchBooks = async () => {
            const res = await axios.get("https://www.googleapis.com/books/v1/volumes?q="+books+"&key="+apiKey+"&maxResults = 100")
            setBooks (res.data.results.books);
            console.log(res.data.results.books);
    }
    
    fetchBooks()
}, [])
    return (  
        <div>
            <h1>
                Livros
            </h1>
            <section>
                {books.map((books) => {
                    const {title, authors, publisher, publishedDate, description, buyLink, imageLinks} = book
                    return (
                        <article key = ></article>
                    )
                })}
            </section>
        </div>
    );
}
 
export default Books;