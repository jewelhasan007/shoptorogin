import HashTag from "./HashTag"

const Book = ({book}) => {
const {bookName, image, author,category, rating,tags  } = book
 
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
        <h3>{category}</h3>
        <p>{rating}</p>
        </div>
    );
};

export default Book;
