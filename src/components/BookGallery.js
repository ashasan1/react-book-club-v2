import React, { useState } from "react";
import '../index.css';
import BookInfoPage from './BookInfoPage';

const BookGallery = ({ bookList, selectedBook, setSelectedBook }) => {

    const [galleryDisplay, setGalleryDisplay] = useState('gallery');

    if (galleryDisplay === 'bookDetail') {
        return (
            <>
                <button onClick={() => setGalleryDisplay('gallery')}>Back to gallery</button>
                <p>{selectedBook.bookName}</p>
                <p>{selectedBook.bookAuthor}</p>
                <div className="container">
                    <BookInfoPage selectedBook={selectedBook} />
                </div>


            </>
        )
    }
    return (
        <>
            {bookList.map((book) => {
                return (
                    <>
                        <div key={book.bookID}>
                            <h6>{book.bookName}</h6>
                            <button onClick={() => {
                                setSelectedBook({ ...selectedBook, bookAuthor: book.bookAuthor, bookID: book.bookID, bookName: book.bookName, bookImage: book.bookImage });
                                setGalleryDisplay('bookDetail');
                            }} className="btn"><img className="galleryimage" src={book.bookImage} /> </button>
                        </div>

                    </>
                )
            })}
        </>
    )
};

export default BookGallery;