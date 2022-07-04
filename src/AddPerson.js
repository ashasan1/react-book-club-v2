import React, { useState } from "react";
import BookClubDropDown from "./BookClubDropDown";
import DropDownElement from "./DropDownElement";

const AddPerson = ({ personList, addPerson, bookClubList }) => {

    const [personData, setPersonData] = useState({ name: '', email: '', club: '' });

    const [selectedClub, setSelectedClub] = useState('Select a Book Club to join!');

    const [alert, setAlert] = useState('');

    return (
        <>
            <div className="col md signupform">
                <h3>Sign up for Book Club!</h3>

                <div className="container">
                    <label>Full Name</label>
                    <input
                        type="text"
                        name="person-name"
                        value={personData.name}
                        onChange={(event) => {
                            setPersonData({ ...personData, name: event.target.value });
                        }}>
                    </input>
                </div>

                <div className="container">
                    <label>Email</label>
                    <input
                        type="text"
                        name="person-email"
                        value={personData.email}
                        onChange={(event) => setPersonData({ ...personData, email: event.target.value })}>
                    </input>
                </div>

                <div className="container">
                    <p>Selected Club: {selectedClub}</p>
                </div>

                <div className="container">
                    <p>{alert}</p>
                </div>
                

                <div className="container">
                    {personData.name.length > 0 && personData.email.length > 0 ?
                        <button onClick={() => {
                            if(personData.club === '') {
                                setAlert('Please select a book club to join!');
                                return;
                            };
                            console.log(personData);
                            addPerson(personList => [...personList, personData]);
                            
                        }}>Add Person</button>
                        : null}
                </div>

                <div className="container">
                    <BookClubDropDown>
                        <DropDownElement bookClubList={bookClubList} setSelectedClub={setSelectedClub} setPersonData={setPersonData} personData={personData}/>
                    </BookClubDropDown>
                </div>



            </div>
        </>
    )

};

export default AddPerson;