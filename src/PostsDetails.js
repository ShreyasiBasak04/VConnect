import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

const PostsDetails = ({posts, setPosts}) => {
    const [likes, setLikes]= useState(0);
    //let likes=0;
    const [dislikes, setDislikes]= useState(0);
    const [isDisabledl, setIsDisabledl]=useState(false);
    const [isDisabledd, setIsDisabledd]=useState(false);

    const handleDelete = (postId) => {
        fetch(`http://localhost:3001/posts/${postId}`, {
           method: 'DELETE'
        }).then(()=>{
            console.log(postId);
            console.log('post deleted');
        })
        fetch('http://localhost:3001/posts')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setPosts(data);
            });
    }

    const handleLike = (postId) => {
        fetch(`http://localhost:3001/posts/${postId}`)
        .then(()=>{
            setLikes(likes+1);
        });
        
    }

    const handledisLike = (postId) => {
        fetch(`http://localhost:3001/posts/${postId}`)
        .then(()=>{
            setDislikes(dislikes+1);
        });
    }
    
    return (
            <div className="postsdetails">
                {posts.map((post) => (
                    <div className="eachpost" key={post.id}>
                        
                        <p className="userid">
                            {post.username}
                            <button onClick={()=> handleDelete(post.id)} className="delete">Delete</button>
                            <button className="edit">Edit</button>
                        </p>
                        <Link to={`/posts/${post.id}`}>
                        <p className="body">{post.body}</p>
                        </Link>
                        <p className="postfooter">
                            <button disabled={isDisabledl} onClick={()=> handleLike(post.id)} className="like">Like</button>
                            <button disabled={isDisabledd} onClick={()=> handledisLike(post.id)} className="dislike">Dislike</button>
                            <span className="likes">Likes: {likes}</span>
                            <span className="dislikes">Dislikes: {dislikes}</span>
                        </p>
                       
                    </div>

                ))}
            </div>
     );
}
 
export default PostsDetails;