import React from 'react';

const Postitem = (props) => {
    return (
        <div className="post">
            <div className="post-content">
                <strong>{props.post.title}</strong>
                <div>
                    {props.post.descr}
                </div>
            </div>
            <div className="post-action">
                <button>Delete</button>
            </div>
        </div>
    );
};

export default Postitem;
