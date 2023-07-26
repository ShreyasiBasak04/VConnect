import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState } from "react";
import useFetch from "./useFetch";

const Fullpost = () => {
    const { id } = useParams();

    const  posts = useFetch('http://localhost:3001/posts/${id}');
    return ( 
        <div className="fullpost">
            { posts && 
                <article>
                    <h2>Post By: { posts.username }</h2>
                    <p>{ posts.body }</p>
                </article>
            }
        </div>
     );
}
 
export default Fullpost;