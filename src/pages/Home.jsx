import { useContext } from "react";
import { PostContext } from "../App";

const Home = () => {
  const { posts, deletePost } = useContext(PostContext);

  return (
    <div className="home">
      <div className="posts">
        {posts.length === 0 ? (
          <p>No posts available</p>
        ) : (
          posts.map((post) => (
            <div key={post.id} className="post">
              <h2>TITLE - {post.title}</h2>
              <div>{post.content}</div>
              <button onClick={() => deletePost(post.id)}>Delete</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
