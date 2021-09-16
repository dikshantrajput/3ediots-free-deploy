import React from 'react';

function RecentBlogCard(props){
    return (
        <div className="recent__blog__card" key={props.index}>
            <div className="recent__blog__date">
                <span className="blog__date">{props.date}</span>
            </div>
            <div className="recent__blog__title">
                <a href={`/blog/${props.anchor}`}>{props.title}</a>
            </div>
        </div>
    )
}
export default RecentBlogCard