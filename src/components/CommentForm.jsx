import React, { useState } from 'react';



const CommentForm = ({ addComment }) => {
    const [commentInput, setCommentInput] = useState({ name: '', textarea: '' })


    const handleChange = (e) => {
        setCommentInput((comment) => {
            return { ...comment, [e.target.name]: e.target.value };
        });

    }
    const handleSubmit = (e) => {
        e.preventDefault()
        addComment(commentInput)
        setCommentInput({ name: '', textarea: '' })
    }
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSubmit(e)
        }
    }
    return (
        <form onSubmit={handleSubmit} className="comment-form">
            <input
                className="name-input"
                type="text"
                placeholder="name"
                onChange={handleChange}
                value={commentInput.name}
                name="name"></input>
            <textarea className="textarea_comment"
                onChange={handleChange}
                value={commentInput.textarea}
                type="text"
                onKeyDown={handleKeyPress}
                placeholder="Text a comment"
                name="textarea"
            />
            <button className="add_button">Add comment</button>
        </form>
    )
}

export default CommentForm;