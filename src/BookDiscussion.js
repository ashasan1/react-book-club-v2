import React, { useState } from "react";
import BookGallery from "./components/BookGallery";


const BookDiscussion = ({ bookList, selectedBook, setSelectedBook }) => {

    return (
        <>
            <div className="container">
                <div className="row">
                    <BookGallery bookList={bookList} selectedBook={selectedBook} setSelectedBook={setSelectedBook}/>
                </div>
            </div>
        </>
    )
}




export default BookDiscussion;