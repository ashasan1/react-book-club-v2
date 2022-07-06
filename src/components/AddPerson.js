import React, { useState } from "react";
import BookClubDropDown from "./BookClubDropDown";
import DropDownElement from "./DropDownElement";

const AddPerson = ({ personList, addPerson, bookClubList }) => {

    const [personData, setPersonData] = useState({ firstName: '', lastName:'', email: '', club: '' });

    const [selectedClub, setSelectedClub] = useState('Select a Book Club to join!');

    const [alert, setAlert] = useState('');

    return (
        <>
            <div className="col md signupform">
                <h3 style={{ color: 'white', fontFamily: 'sans-serif' }}>Sign up for Book Club!</h3>

                <div className="container">
                    <label className="form-label">First Name</label>
                    <input
                        type="text"
                        name="person-firstname"
                        value={personData.firstName}
                        onChange={(event) => {
                            setPersonData({ ...personData, firstName: event.target.value });
                        }}>
                    </input>
                </div>

                <div className="container">
                    <label className="form-label">Last Name</label>
                    <input
                        type="text"
                        name="person-lastname"
                        value={personData.lastName}
                        onChange={(event) => {
                            setPersonData({ ...personData, lastName: event.target.value });
                        }}>
                    </input>
                </div>

                <div className="container">
                    <label className="form-label">Email</label>
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
                    {personData.firstName.length > 0 && personData.email.length > 0 ?
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