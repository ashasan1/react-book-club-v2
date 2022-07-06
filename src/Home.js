import React from 'react';
import AddPerson from "./components/AddPerson";
import BookClubMenu from "./components/BookClubMenu";
import BookSchema from "./components/BookSchema";

const Home = ({ personList, addPerson, bookClubList, setBookList, bookList }) => {
    return (
        <div className="container">
        <div className="row">
          <AddPerson personList={personList} addPerson={addPerson} bookClubList={bookClubList} />
          <BookClubMenu personList={personList} bookClubList={bookClubList} bookList={bookList} />
          <BookSchema bookList={bookList} setBookList={setBookList} />
        </div>
      </div>
    )
};

export default Home;