

const ListedReadBooks = ({book}) => {
    const {image, bookName, author, tags, yearOfPublishing, publisher, totalPages, category, rating } = book
    return (
        <div>
            <h1 className="text-2x">{book.length}</h1>
        </div>
    );
};

export default ListedReadBooks;