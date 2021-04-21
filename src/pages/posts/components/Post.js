import React from 'react';
import './posts.css';
import DropDownArrow from "./assets/icons/drop-down-arrow.png";
import Comment from "./assets/icons/comment.png";
import Like from "./assets/icons/like.png";
import Repost from "./assets/icons/repost.png";
import Tick from "./assets/icons/tick.png";
import Upload from "./assets/icons/upload.png";


const Post = (props) => {
    return (
        <article>
            <div className = "author-photo flex">
                <img src = {props.author.photo} alt = {"img"} />
            </div>
            <div className = "post-wrapper flex">
                <div className = "post-inner flex">                
                    <div className="post-data flex">
                        <div className = "post-data-author flex">
                            <h3>{props.author.name}</h3>
                            <img src = {Tick} alt = {"img"}/>
                            <p>{props.author.nickname}</p>
                            <p> &#183; {props.date}</p>
                        </div>
                        <h4>{props.content}</h4>
                    </div>
                    <img  src = {DropDownArrow} alt = {"img"} className = "drop-down scale" />
                </div>
                <img src = {props.image} alt = {"img"}/>
                <div className = "post-reactions flex">
                    <div className = "reaction-comments flex">
                        <img src = {Comment} alt = {"img"} className = "bounce" />
                        <p>482</p>
                    </div>
                    <div className = "reaction-reposts flex">
                        <img src = {Repost} alt = {"img"} className = "bounce" />
                        <p>146</p>
                    </div>
                    <div className = "reaction-likes flex">
                        <img src = {Like} alt = {"img"} className = "bounce" />
                        <p>887</p>
                    </div>
                    <div className = "reaction-uploads flex">                    
                        <img src = {Upload} alt = {"img"} className = "bounce" />
                    </div>
                </div>
            </div>
        </article>
    );
};


export default Post;