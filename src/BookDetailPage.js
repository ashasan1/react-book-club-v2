import React from "react";

const BookDetailPage = ({ bookList, selectedBook, setSelectedBook }) => {

    return (
        <>
        <div>Selected Book Title here!</div>
        <h2>{selectedBook.bookAuthor}</h2>
        </>
    )
};

export default BookDetailPage;