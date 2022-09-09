import { useContext, Fragment } from "react";
import PostContext from "../../context/PostProvider";
import "./Posts.css";

const Posts = () => {
  const [state, dispatch] = useContext(PostContext);

  const { posts } = state;

  return (
    <Fragment>
      <h2>Nombre de posts: {posts.length}</h2>
      {posts.length !== 0 ? (
        <ul>
          {posts.map((post, id) => (
            <li key={id}>{post.content}</li>
          ))}
        </ul>
      ) : (
        <p>Il n'ya pas de posts</p>
      )}
      <div className="buttons">
        <button onClick={() => dispatch({ type: "create" })}>
          Create Post
        </button>
        <button onClick={() => dispatch({ type: "shuffle" })}>
          Shuffle Posts
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset Posts</button>
      </div>
    </Fragment>
  );
};

export default Posts;
