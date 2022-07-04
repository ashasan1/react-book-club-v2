import { React, useState } from 'react';
import ReactDOM from 'react-dom';
import AddPerson from './AddPerson';
import BookClubMenu from './BookClubMenu';
import './index.css';
import BookClubDropDown from './BookClubDropDown';
import BookSchema from './BookSchema';


function App() {

  const [personList, addPerson] = useState([]);

  const bookClubList = ['Mystery', 'Fantasy', 'Romance'];

  const [bookList, setBookList] = useState([]);

  return (
    <>
    <div class="container backdrop">
            <div class="row">
                <div class="col md">
                    <h1 style= {{ color: 'white' }}>Book Club</h1>
                </div>
            </div>  
        </div>
    
    <div className="container">
      <div className="row">
 <AddPerson personList={personList} addPerson={addPerson} bookClubList={bookClubList}/>
    <BookClubMenu personList={personList} bookClubList={bookClubList} bookList={bookList}/>
    <BookSchema bookList={bookList} setBookList={setBookList}/>
      </div>
    </div>
    </>
  );
}


ReactDOM.render(<App />, document.querySelector('#root'));
