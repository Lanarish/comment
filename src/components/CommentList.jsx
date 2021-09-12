import React from 'react';
import { RiDeleteBin2Fill } from "react-icons/ri";


function CommentList({ comment, removeComment, index }) {
    return (
        <div key={comment.id} className="commentList-container">
            <div className={"comment" + (index === 0 ? " selected" : "")}>
                {comment.text}
            </div>
            <button className="commentList-button" onClick={() => removeComment(comment.id)}><RiDeleteBin2Fill className="button-delete" /></button>
        </div >
    );
};

export default CommentList;
