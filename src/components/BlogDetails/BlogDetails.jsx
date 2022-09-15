import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../useFetch";
import styles from "./BlogDetails.module.css";

const BlogDetails = () => {
  const { id } = useParams();
  console.log(id);

  const navigate = useNavigate();

  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:8080/blogs/" + id);

  const handleClick = () => {
    fetch("http://localhost:8080/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <div className={styles.blogDetails}>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <div>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div className={styles.box}>{blog.body}</div>
          <button onClick={handleClick}>delete</button>
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
