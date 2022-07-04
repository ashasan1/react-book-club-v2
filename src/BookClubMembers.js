import React, { useEffect, useState } from "react";

const BookClubMembers = ({ personList, activeBookClub, bookList }) => {

    return (
        <>
            <div className="container">
                <div className="row">
                        <div className="col md">
                            {personList.map((person) => {
                                return (
                                    <>
                                        {person.club === activeBookClub ?
                                            <>
                                                <div className="container membercard">
                                                    <li className={`${activeBookClub}-font`}>Name: {person.name}</li>
                                                    <li className={`${activeBookClub}-font`}>Email: {person.email}</li>
                                                    <li className={`${activeBookClub}-font`}>Club: {person.club}</li>
                                                </div>

                                            </>
                                            : null}

                                    </>
                                )

                            })}
                        </div>
                    <div className="col md">
                        <h6 className={`${activeBookClub}-font`}>Book of the Month!</h6>
                        <div>
                            {bookList.map((book) => {
                                console.log(book.bookImage);
                                return (
                                    <>
                                        {book.bookGenre === activeBookClub ?
                                            <div className="container bookofthemonthcard">
                                                <h6 style={{ color: 'white' }}>{book.bookName}</h6>
                                                <img style={{ maxWidth: '150px' }} src={`${window.location.origin}${book.bookImage}`} />
                                            </div>

                                            : null}

                                    </>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
};

export default BookClubMembers;