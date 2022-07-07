import React, { useState } from 'react';


const NavbarSearch = ({ bookList }) => {

    const [query, setQuery] = useState('');

    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/discussion">Book Discussion</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Pricing</a>
                        </li>
                        <div>
                            <input placeholder='Enter Book Name' onChange={(event) => setQuery(event.target.value)} />
                            {
                                bookList.filter((book) => {
                                    if (query === '') {
                                        return '';
                                    } else if (book.bookName.toLowerCase().includes(query.toLowerCase())) {
                                        return book
                                    }
                                }).map((book) => {
                                    return (
                                        <div key={book.bookID}>
                                            <p>{book.bookName} by {book.bookAuthor}</p>
                                        </div>
                                    )

                                })
                            }
                        </div>

                    </ul>
                </div>
            </nav>

        </>
    )
};

export default NavbarSearch;