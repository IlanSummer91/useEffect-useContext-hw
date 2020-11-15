import { useState, useEffect, useContext } from "react";
import { AppContext } from "../../../AppContext";
import './Post.scss';

async function fetchPosts(userId) {
    const result = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
    const json = await result.json();
    return json;
}

export function Post(props) {

    const [post, setPost] = useState(null);
    const context = useContext(AppContext);

    useEffect(() => {
        const get = async () => {
            setPost(await fetchPosts(context.selectedUser));
        }

        get();
    }, [context.selectedUser]);

    if(!post || !context.selectedUser) return <div>Loading post...</div>;

    return <div className="user-post">
        <ul>
          { 
            post.map(post => 
              <li className="post-list">
                {post.body}
                <br />
                <button onClick={() => context.setSelectedPost(post.id)}>Show comments</button>
              </li>
            )
          }
        </ul>
    </div>
}