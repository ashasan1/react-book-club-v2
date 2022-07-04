import React from 'react';

const DropDownElement = ({ bookClubList, setSelectedClub, setPersonData, personData }) => {
    return (
        <>
           {bookClubList.map((club) => {
            return (
                <div className="container">
                <button onClick={() => {
                    setSelectedClub(club);
                    setPersonData({...personData, club: club})
                }}
                className="btn" style={{ minWidth: "40px", backgroundColor: 'beige', marginTop: '10px' }}>{club}</button>
                </div>
            )
           })}
        </>
    )
    };

export default DropDownElement;