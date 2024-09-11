import { useEffect } from "react";
import { useState } from "react";
import Book from "./Book";

const Books = () => {
    const [books, setBooks] = useState([])

    useEffect(()=>{
        fetch('books.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])
    return (
        <div >
             <h1 className="text-4xl font-bold text-center my-5">books </h1>
             <div className="grid grid-cols-3">
             {books.map(book => <Book book={book}></Book>)}
             </div>
             </div>
    );
};

export default Books;
