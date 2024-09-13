
const saveForRead = bookId =>{
const storedBookForReads = getStoredBookForRead();
const exist = storedBookForReads.find(book => book === bookId.id);
if(!exist){
    storedBookForReads.push(bookId.id);
    localStorage.setItem('Read-book',JSON.stringify(storedBookForReads))
}
}

const getStoredBookForRead = () =>{
    const storedBookForRead =localStorage.getItem('Read-book');
    if(storedBookForRead){
        return JSON.parse(storedBookForRead);
    }
    return [];
}

export {getStoredBookForRead, saveForRead}