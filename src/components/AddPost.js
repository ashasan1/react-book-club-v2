import React ,{ useState } from "react" ;

const AddPost = ({ selectedBook, listPosts, addPostToList }) => {

    const [post, setPost] = useState({ messageID: '', messageBody:' ', userName: '', userProfile: '', userID: '', book: selectedBook });

    const [message, setMessage] = useState('');

    return (
        <>
        <div>
            <h5>Add New Post!</h5>
            <h5>User name posting goes here</h5>
            <img src='https://p.kindpng.com/picc/s/285-2855863_a-festival-celebrating-tractors-round-profile-picture-placeholder.png' />
            <input type='text' onChange={(event) => setMessage(event.target.value)}></input>
            <button onClick={() => {
                setPost({...post, messageID: 1, messageBody: message, userName: 'Mindy', userProfile: 'https://www.my-moments.com/wp-content/uploads/2017/10/250x250-circle.png', useID: 1, book: selectedBook });
                addPostToList((listPosts) => [...listPosts, post]);
                console.log(listPosts);
            }}>Submit</button>
            <h5>Active book being posted on</h5>
        </div>
        </>
    )
};

export default AddPost;