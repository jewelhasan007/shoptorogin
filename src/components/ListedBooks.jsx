import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import { getStoredBookForRead } from "./StoredBook";
import ListedReadBooks from "./ListedReadBooks";
import { parse } from "postcss";
import { getStoredBookForWished } from "./WishedBook";

const ListedBooks = () => {
  const books = useLoaderData();

  const [readBooks,setReadBooks] = useState([]);
  const [wishedBooks, setWishedBooks] = useState([]);

  
  useEffect(()=>{
    const readList = getStoredBookForRead();
    console.log(readList)
    console.log(typeof readList)
    if(books.length >0){
     //WAY-01
      const readBookList = books.filter(book => readList.includes(book.bookId));

    //  WAY-02
      // const readBookList = [];
      // for(const id of readList){
      //   const book = books.find(book=>book.bookId===id);
      //   if(book){
      //     readBookList.push(book)
      //   }
      // }
      setReadBooks(readBookList);
    }
   
  },[])

  useEffect(()=>{
    const wishList = getStoredBookForWished();
    if (books.length > 0){
      const wishBookList = books.filter(book => wishList.includes(book.bookId));
      setWishedBooks(wishBookList);
    }
  },[])

    return (
<div>
  <Helmet><title>Listed Books || Book Vibe</title></Helmet>
 
<h1 className="text-center font-bold text-2xl m-3">Books</h1>

<div className="text-center">
  <select className="select select-accent w-full max-w-xs bg-green-500 text-white font-bold">
  <option disabled selected>Sort By</option>
  <option>Rating</option>
  <option>Number of Pages</option>
  <option>Published year</option>
</select>
  </div>

            <div role="tablist" className="tabs tabs-lifted">
  <input type="radio" name="my_tabs_2" role="tab" className="tab font-bold  [--tab-bg:gray] [--tab-border-color:green]" aria-label="Read Books" />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
  
      {/* <h1 className="text-3xl">Read Book Lists: {readBooks.length}</h1> */}
      {
        readBooks.map(book => <ListedReadBooks key={book.id} book={book}></ListedReadBooks> )
      }
  </div>

  <input type="radio" name="my_tabs_2" role="tab" className="tab font-bold" aria-label="Wishlist Books" defaultChecked />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
    {
      wishedBooks.map(book => <ListedReadBooks key={book.id} book={book}></ListedReadBooks>)
  }
  </div>
</div>

</div>
 
    );
};

export default ListedBooks;