import React, { useState } from 'react';



const CommentForm = ({ addComment }) => {
    const [commentInput, setCommentInput] = useState('')


    const handleChange = (e) => {
        setCommentInput(e.currentTarget.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        addComment(commentInput)
        setCommentInput("")
    }
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSubmit(e)
        }
    }
    return (
        <form onSubmit={handleSubmit} className="comment-form">
            <textarea className="textarea_comment"
                onChange={handleChange}
                value={commentInput}
                type="text"
                onKeyDown={handleKeyPress}
                placeholder="Text a comment"
            />
            <button className="add_button">Add comment</button>
        </form>
    )
}

export default CommentForm;