import React, {useState, useEffect} from 'react';
import './App.css';
import CommentForm from './components/CommentForm';
import CommentList from './components/CommentList';

function App() {
  const[comments, setComment]= useState([])
  const saveLocalComments = () => {
      localStorage.setItem("comments",JSON.stringify(comments));
    };
    const getLocalComments = () => {
      if(localStorage.getItem("comments") === null){
        localStorage.setItem("comments",JSON.stringify([]));
      } else {
        let commentLocal = JSON.parse(localStorage.getItem("comments"))
        setComment(commentLocal);
      }
    }
  useEffect(() => {
    getLocalComments();
  },[]);
  useEffect(() => {
    saveLocalComments();
  },[comments,saveLocalComments]);


  const addComment = (commentInput) => {
    if(commentInput){
      const newComment ={
        id:Math.random().toString(36).substr(2,9),
        text:commentInput
      }
      setComment([...comments,newComment])
    }
  }

  const removeComment = (id) => {
    setComment([...comments.filter((comment) => comment.id !==id)])
  }

  
  return (
    <div className="comment-container">
      <header>
        <h1>Leave your comment</h1>
      </header>
      <CommentForm  addComment={addComment}/>
      {comments.map((comment,index) =>{
        return(
          <CommentList
          key={comments.id}
          comment={comment}
          removeComment={removeComment}
          index={index}/>
        )
      })}
    </div>
  );
}

export default App;
