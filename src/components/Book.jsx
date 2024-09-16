import HashTag from "./HashTag"
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";
const Book = ({book}) => {
const {bookName, image, author,category, rating, tags, bookId  } = book
 
return (
    <Link to={`/read/${bookId}`}>
    <div className="border-2 m-2 p-2 rounded-[10px] min-h-[370px] ">
      <div className=" flex w-full h-[150px] justify-center items-center">  <img  src={image} alt="" width= "100px" height="100px" /></div>
        <div className="flex text-[12px]">
            {
                tags.map(hashtag => <HashTag key={bookId} hashtag={hashtag}></HashTag>)
            }
        </div>
        <h3 className="font-bold text-2xl"> {bookName}</h3>
        <h3>By: {author}</h3>
        <hr />
        <div className="flex justify-between mt-2 font-bold">
        <h3>{category}</h3>
        <div className="flex justify-end"><p className="mx-4">{rating}</p>
        <p className="text-2xl"><CiStar /></p></div>

        </div>
            {/* <div className=" flex w-full justify-center">
                <Link to={`/read/${bookId}`}>
                <button className="btn bg-green-400">Book Details</button>
                </Link>
            </div> */}
        </div>
        </Link>
    );
};

export default Book;
