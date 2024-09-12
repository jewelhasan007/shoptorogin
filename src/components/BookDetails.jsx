import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
    const books = useLoaderData();
     const bookId= useParams();  
    const book = books.find(book => book.bookId === bookId.id);
    console.log(book);
    return (
        <div className="m-4 p-3">
            <h1>BOOK DETAILS</h1>
            <h1 className="text-2xl">Book Details for id: {bookId.id}</h1>
            <div className="grid gap-2 md:grid-cols-5">
                <div className="border md:col-span-2">
                   <h1><img src={book.image} alt="" width="250px" height="250px"/></h1>
                </div>
                <div className="border md:col-span-3">
                    <h2>Name:{book.bookName}</h2>
                    <h3>By:{book.author}</h3>
                    <hr />
                    <h3>Fiction:{book.category}</h3>
                    <hr />
                    <h3>Review:{book.review}</h3>
                    <p>Tag: {book.tags}</p>
                    <hr />
                    <p>Number of Pages:{book.totalPages}</p>
                    <p>Publisher:{book.publisher}</p>
                    <p>Year of Publishing:{book.yearOfPublishing}</p>
                    <p>Rating:{book.rating}</p>
                    <div>
                        <button className="btn btn-primary">Read</button>
                        <button className="btn btn-primary">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;