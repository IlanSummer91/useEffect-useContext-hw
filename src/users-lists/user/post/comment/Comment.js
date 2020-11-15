import { useState, useEffect, useContext } from "react"
import { AppContext } from "../../../../AppContext";
import './Comment.scss';

async function fetchComments(postId) {
    const result = await fetch(`https://jsonplaceholder.typicode.com/post/${postId}/comments`);
    const json = await result.json();
    return json;
}

export function Comment() {

    const [comment, setComment] = useState(null);
    const context = useContext(AppContext);

    useEffect(() => {
        const get = async () => {
            setComment(await fetchComments(context.selectedPost));
        }

        get();
    }, [context.selectedPost]);

    if(!comment || !context.selectedPost) return <div>Loading comment...</div>;

    return <div className="post-comment">
        <ul>
          { 
            comment.map(comment => 
              <li className="comment-list">
                {comment.body}
              </li>
            )
          }
        </ul>
    </div>
}