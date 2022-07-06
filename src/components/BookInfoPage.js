import React from "react";
import AddPost from "./AddPost";

const BookInfoPage = () => {
    return (
        <>
        <div>
            <h2>Selected Book Title</h2>
            <img>Book Image</img>
            <p>author</p>
            <p>description</p>
        </div>
        <div>
            <p>List of Posts on book</p>
            <p>Add new Post</p>
            <AddPost />
        </div>
        </>
    )
}