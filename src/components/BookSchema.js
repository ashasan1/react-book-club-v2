import React, { useEffect } from "react";

const BookSchema = ({ bookList, setBookList }) => {

    const books = [
        {
            bookID: 1,
            bookName: 'Pride and Prejudice',
            bookImage: '/prideandprejudice.jpg',
            bookGenre: 'Romance',
            bookAuthor:'Jane Austen',
            bookPageLength:''
        },
        {
            bookID: 2,
            bookName: 'Romeo and Juilet',
            bookImage: '/romeojuliet.jpg',
            bookGenre: 'Romance',
            bookAuthor:'William Shakespeare',
            bookPageLength:''
        },
        {
            bookID: 3,
            bookName: 'The Hobbit',
            bookImage: '/thehobbit.jpg',
            bookGenre: 'Fantasy',
            bookAuthor:'J. R. R. Tolkien',
            bookPageLength:''
        },
        {
            bookID: 4,
            bookName: 'The Poisoned Chocolates Case',
            bookImage: '/thepoisonedchocolatescase.jpg',
            bookGenre: 'Mystery',
            bookAuthor:'Anthony Berkeley',
            bookPageLength:''
        },
    ];
    
    //use effect will update the book list when the component mounts
    useEffect(() => {
        setBookList(books)
    }, [])

    return (
       <div></div>
    )
}

export default BookSchema;