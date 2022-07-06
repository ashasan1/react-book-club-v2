import React from "react";
import '../index.css'

const BookGallery = ({ bookList, selectedBook, setSelectedBook }) => {
    return (
        <>
        {bookList.map((book) => {
            return (
                <>
                <div key={book.bookID}>
                    <h6>{book.bookName}</h6>
                    <button onClick={() => {
                        setSelectedBook({...selectedBook, bookAuthor: book.bookAuthor, bookID: book.bookID, bookName: book.bookName });
                        console.log(selectedBook);
                    }}className="btn"><img className="galleryimage" src={book.bookImage}/> </button>
                </div>
               
                </>
            )
        })}
        </>
    )
};

export default BookGallery;