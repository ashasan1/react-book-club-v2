import React, { useState } from "react";
import BookClubMembers from "./BookClubMembers";

const BookClubMenu = ({ personList, bookClubList, bookList }) => {

    return (
        <>
            <div className="col md">
                {bookClubList.map((activeBookClub) => {
                    return (
                        <>
                            <div className={`container clubcard ${activeBookClub}`}>
                                <h3 className={`${activeBookClub}-header`}>{activeBookClub} Book Club</h3>
                                <BookClubMembers personList={personList} activeBookClub={activeBookClub} bookList={bookList}/>
                            </div>

                        </>
                    )
                })}
            </div>
        </>
    )

};

export default BookClubMenu;