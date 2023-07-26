import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [posts, setPosts] = useState(null);

    useEffect(()=>{
        fetch(url)
        .then(res => {
            return res.json();
        })
        .then(data => {
            setPosts(data);
        });
     }, [url]);
    
    return  posts ;
}
 
export default useFetch;