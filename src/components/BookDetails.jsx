import { useLoaderData, useParams } from "react-router-dom";
import HashTag from "./HashTag"


const BookDetails = () => {
    const books = useLoaderData();
     const bookId= useParams();  
    const book = books.find(book => book.bookId === bookId.id);
    console.log(book);
    return (
        <div className="mx-4 my-6 p-6">
          
           
            <div className="grid gap-2 md:grid-cols-5">
                <div className=" md:col-span-2 bg-slate-300 flex items-center justify-center mx-4 rounded-2xl">
                   <h1><img src={book.image} alt="" width="250px" height="250px"/></h1>
                </div>
                <div className=" md:col-span-3 mx-6">
                    <h2 className="text-4xl my-2">{book.bookName}</h2>
                    <h3 className="font-bold my-4">By:{book.author}</h3>
                    <hr />
                    <h3 className="my-4 text-[16px]">Fiction:{book.category}</h3>
                    <hr />
                    <h3><span className="font-bold">Review:</span>  {book.review}</h3>
                    <div className="flex">
                    <p>Tag:</p>
                    <div className="flex my-3">
                        
                        {
                            book.tags.map(hashtag => <HashTag hashtag={hashtag}></HashTag>)
                        }
                    </div>
                    </div>
                   
                    <hr />
                    <p>Number of Pages:<span className="font-bold">{book.totalPages}</span></p>
                    <p>Publisher:  <span className="font-bold">{book.publisher}</span></p>
                    <p>Year of Publishing:  <span className="font-bold">{book.yearOfPublishing}</span></p>
                    <p>Rating:  <span className="font-bold">{book.rating}</span></p>
                  
                    <div >
                        <button className="btn btn-primary mx-3 my-5">Read</button>
                        <button className="btn btn-primary mx-3">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;