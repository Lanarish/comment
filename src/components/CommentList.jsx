import React from 'react';


function CommentList({ comment, removeComment, index }) {
    return (
        <div key={comment.id} className="commentList-container">
            <div className={"comment" + (index === 0 ? " selected" : "")}>
                {comment.text}
            </div>

            <button className="commentList-button" onClick={() => removeComment(comment.id)}>Delete</button>


        </div >
    );
};

export default CommentList;
