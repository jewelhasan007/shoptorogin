import { useEffect } from "react";
import { useState } from "react";
import Book from "./Book";

const Books = () => {
    const [books, setBooks] = useState([])
    const [show, setShow] = useState([3])
    
    const handleShowBtn = () =>{
       setShow(books.length)
    }

    useEffect(()=>{
        fetch('books.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])
    return (
        <div >
             <h1 className="text-4xl font-bold text-center my-5">Books </h1>
             <div className="grid md:grid-cols-3">
             {books.slice(0, show).map(book => <Book book={book}></Book>)}
             </div>
             <div className="text-center">
             <div className= {show === books.length && 'hidden'}>
                <button onClick={handleShowBtn} className="btn btn-primary">Show All</button>
             </div>
             </div>
          
             </div>
    );
};

export default Books;
