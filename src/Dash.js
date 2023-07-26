import PostsDetails from "./PostsDetails";
import { useEffect, useState } from "react";

const Dash = () => {
    const [posts, setPosts]=useState(null);
    const [body, setBody]=useState('');
    const [username, setUsername]=useState('Shreyasi Basak');

    useEffect(() => {
        fetch('http://localhost:3001/posts')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setPosts(data);
            });
    }, []);

    const handleSubmit = (e) => {
        //e.preventDefault();
        const post = { username, body };
        fetch('http://localhost:3001/posts', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(post)
        }).then(() => {
            console.log('new post shared');
        })
    }

    return ( 
        <div className="dash">
            <div className="makepost">
                <h3>Welcome to V-Connect!! Share your thoughts through posts! </h3>
                <form onSubmit={handleSubmit}>
                <textarea
                required
                value={body}
                onChange={(e)=>setBody(e.target.value)}></textarea>
                <button className="share">SHARE</button>
                </form>
            </div>
            <div className="posts">
               {posts && <PostsDetails posts={posts} setPosts={setPosts} />}
            </div>
        </div>
     );
}
 
export default Dash;