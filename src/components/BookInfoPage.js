import React, { useState } from "react";
import AddPost from "./AddPost";
import '../index.css';

const BookInfoPage = ({ selectedBook }) => {

    const [listPosts, addPostToList] = useState([]);
    return (
        <>
            <div className="container">
                <h2>{selectedBook.bookName}</h2>
                <img style={{ maxWidth: '200px' }} src={selectedBook.bookImage} />
                <p>{selectedBook.bookAuthor}</p>
                <p>description</p>
            </div>
            <div className="container">
                <h2>Discussion!</h2>
                <p>List of Posts on book</p>
                <div className="row">
                    <div className="col md">
                        {listPosts.map((post) => {
                            return (
                                <>
                                    <div className="container">
                                        <div className="row">
                                            <div className="post-card">
                                                <h6 className="post-header">{post.userName}</h6>
                                                <img style={{ maxWidth: '100px' }} src={post.userProfile} />

                                                <p>{post.messageBody}</p>
                                            </div>

                                        </div>
                                    </div>
                                </>
                            )

                        })}
                    </div>
                    <div className="col md">
                        <p>Add Post</p>
                        <AddPost selectedBook={selectedBook} listPosts={listPosts} addPostToList={addPostToList} />
                    </div>
                </div>

            </div>
        </>
    )
}

export default BookInfoPage;