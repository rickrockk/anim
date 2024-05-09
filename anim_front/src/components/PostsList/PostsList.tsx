import {Post} from "./Post/Post";
import React, {useEffect, useState} from "react";
import axios from "axios";

export function PostsList() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/image/');
                setPosts(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchPosts();
    }, []);

    return (
        <div className="post__list">
            {posts.map((post) => <Post photo={post.photo} postid={post.id} desc={post.desc} authorid={post.user}
                                       key={post.id}/>)}
        </div>
    );
}