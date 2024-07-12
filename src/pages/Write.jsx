import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PostContext } from "../App";
import "../components/Write.css";

const Write = () => {
  const { addPost } = useContext(PostContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      id: Date.now(),
      title,
      content,
    };

    addPost(newPost);
    navigate("/");
  };

  return (
    <div className="write">
      <form onSubmit={handleSubmit}>
        <h1>Write a New Post</h1>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Write your post here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
        <button type="submit">Publish</button>
      </form>
    </div>
  );
};

export default Write;
