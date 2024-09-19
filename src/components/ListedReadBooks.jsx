import HashTag from "./HashTag";
import { Link } from "react-router-dom";

const ListedReadBooks = ({book}) => {
    const {image, bookName, author, tags, yearOfPublishing, publisher, totalPages, category, rating, bookId } = book
  
    return (
        <div >
            <div className="grid gap-4 md:grid-cols-4 border-2 rounded-[10px] m-3 p-3 ">
            <div className="col-span-1 flex justify-center items-center"><img src={book.image} alt="" width="150px" height="150px"/></div>
            <div className="col-span-3">
            <h2 className="text-4xl my-0">{book.bookName}</h2>
            <h3 className="font-bold my-1">By:{book.author}</h3>
            <div className="flex my-1">
                    <div className="flex">
                    {
                            book.tags.map(hashtag => <HashTag hashtag={hashtag}></HashTag>)
                        }
                    </div>
                    <div className="flex my-6">
                    <p>Year of Publishing:  <span className="font-bold">{book.yearOfPublishing}</span></p>
                    </div>
                      
                    </div>
                    <div className="flex my-2">
                    <p className="mx-7">Publisher:  <span className="font-bold ">{book.publisher}</span></p>
                    <p>Number of Pages:<span className="font-bold">{book.totalPages}</span></p>
                    </div>
                    <hr />
                    <div className="flex my-3 ">
                    <h3 className="mx-5 flex items-center">Fiction:{book.category}</h3>
                    <p className="mx-3 flex items-center">Rating:  <span className="font-bold">{book.rating}</span></p>
                    <Link  to={`/read/${bookId}`} className="mx-4"> <button className="btn btn-primary"> View Details</button></Link>
                    </div>
            </div>
        </div>
        </div>
    );
};

export default ListedReadBooks;