import HashTag from "./HashTag"
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";
const Book = ({book}) => {
const {bookName, image, author,category, rating, tags, bookId  } = book
 
return (
    <div className="border-2 m-2 p-2 rounded-[10px] ">
      <div className=" flex w-full justify-center">  <img  src={image} alt="" width= "150px" height="150px" /></div>
        <div className="flex">
            {
                tags.map(hashtag => <HashTag hashtag={hashtag}></HashTag>)
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
            <div className=" flex w-full justify-center">
                <Link to={`/read/${bookId}`}>
                <button className="btn bg-green-400">Book Details</button>
                </Link>
            </div>
        </div>
    );
};

export default Book;
