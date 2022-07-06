import React, { useState }from 'react';

const BookClubDropDown = (props) => {
    console.log(props);

    const [view, setView ] = useState('none');

    const handleClick = () => {
        view === 'none' ? setView('block') : setView('none');
    }

    return (
        <>
        <div className='container'>
             <button onClick={handleClick} className="btn" style={{ minWidth: "40px", backgroundColor: 'yellow', marginTop: '10px' }}>
                Select Book Club
        </button>  
        </div>

       
        <div style={{display:view}}>
            {props.children}
        </div>
        </>
        
    )
    };

export default BookClubDropDown;