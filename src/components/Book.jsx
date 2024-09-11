import HashTag from "./HashTag"

const Book = ({book}) => {
const {bookName, image, author,category, rating,tags  } = book
 
return (
        <div >
        <img src={image} alt="" width= "150px" height="150px" />
        <div className="flex">
            {
                tags.map(hashtag => <HashTag hashtag={hashtag}></HashTag>)
            }
        </div>
        <h3>Name: {bookName}</h3>
        <h3>By: {author}</h3>
        <hr />
        <h3>{category}</h3>
        <p>{rating}</p>
        </div>
    );
};

export default Book;
