import { React, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavbarSearch from './components/NavbarSearch';
import Home from './Home';
import BookDiscussion from './BookDiscussion';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookSchema from './components/BookSchema';
import BookDetailPage from './BookDetailPage';


function App() {

  const [personList, addPerson] = useState([]);

  const bookClubList = ['Mystery', 'Fantasy', 'Romance'];

  const [bookList, setBookList] = useState([]);

  const [selectedBook, setSelectedBook] = useState({ bookID: 0, bookName: '' , bookAuthor: ''});

  return (
    <>
      <div class="container backdrop">
        <div class="row">
          <div class="col md">
            <h1 style={{ color: 'white' }}>Book Club</h1>
          </div>
        </div>
      </div>
      <div className='container'>
        <NavbarSearch bookList={bookList} />
      </div>

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home personList={personList} addPerson={addPerson} bookClubList={bookClubList} bookList={bookList} setBookList={setBookList}/>}/>
        <Route path='/discussion' element={<BookDiscussion bookList={bookList} selectedBook={selectedBook} setSelectedBook={setSelectedBook} />}/>
        <Route path={`/discussion/id`} element={<BookDetailPage bookList={bookList} selectedBook={selectedBook} setSelectedBook={setSelectedBook} />}/>
      </Routes>
      </BrowserRouter>
      <BookSchema bookList={bookList} setBookList={setBookList} />
    </>
  );
}


ReactDOM.render(<App />, document.querySelector('#root'));
