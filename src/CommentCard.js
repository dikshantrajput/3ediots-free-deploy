import React from 'react';

function CommentCard(props){
    return (
        <div className="comment__card">
            <div className="comment__body">
                <span>{props.text}</span>
                <p>-&nbsp;
                    <span className="name">{props.name}</span>
                    &nbsp; <span className="date">({props.date})</span>
                </p>
            </div>
        </div>
    )
}

export default CommentCard