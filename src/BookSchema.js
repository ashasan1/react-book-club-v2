import React, { useEffect } from "react";

const BookSchema = ({ bookList, setBookList }) => {

    const books = [
        {
            bookName: 'Pride and Prejudice',
            bookImage: '/prideandprejudice.jpg',
            bookGenre: 'Romance',
            bookAuthor:'Jane Austen',
            bookPageLength:''
        },
        {
            bookName: 'Romeo and Juilet',
            bookImage: '/romeojuliet.jpg',
            bookGenre: 'Romance',
            bookAuthor:'William Shakespeare',
            bookPageLength:''
        },
        {
            bookName: 'The Hobbit',
            bookImage: '/thehobbit.jpg',
            bookGenre: 'Fantasy',
            bookAuthor:'J. R. R. Tolkien',
            bookPageLength:''
        },
        {
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