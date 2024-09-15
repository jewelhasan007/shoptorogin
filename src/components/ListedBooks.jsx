import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import { getStoredBookForRead } from "./StoredBook";
import ListedReadBooks from "./ListedReadBooks";
import { parse } from "postcss";

const ListedBooks = () => {
  const books = useLoaderData();

  const [readBooks,setReadBooks] = useState([]);

  useEffect(()=>{
    const readList = getStoredBookForRead();
    console.log(readList)
    console.log(typeof readList)
    const readListInt = [];
    for(const list of readList ){
      const newList = parseInt(list)
      console.log(newList)
      const newReadListInt = readListInt.push(newList);
      console.log(newReadListInt)
    }

 if(books.length >0){

     //WAY-01
      const readBookList = books.filter(book => readList.includes(book.bookId))

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
    return (
<div>
  <Helmet><title>Listed Books || Book Vibe</title></Helmet>
<h1 className="text-center font-bold text-2xl m-3">Books</h1>
            <div role="tablist" className="tabs tabs-lifted">
  <input type="radio" name="my_tabs_2" role="tab" className="tab font-bold  [--tab-bg:gray] [--tab-border-color:green]" aria-label="Read Books" />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
  
      {/* <h1 className="text-3xl">Read Book Lists: {readBooks.length}</h1> */}
      {
        readBooks.map(book => <ListedReadBooks book={book}></ListedReadBooks> )
      }
  </div>

  <input type="radio" name="my_tabs_2" role="tab" className="tab font-bold" aria-label="Wishlist Books" defaultChecked />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
    Tab content 2
  </div>
</div>

</div>
 
    );
};

export default ListedBooks;