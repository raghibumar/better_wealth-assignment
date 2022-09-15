import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./BlogList.module.css";

const BlogList = ({ blogs }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.blogList}>
      {blogs.map((blog) => (
        <div className={styles.blogPreview} key={blog.id}>
          <h2 onClick={() => navigate(`/blogs/${blog.id}`)}>{blog.title}</h2>
          <p onClick={() => navigate(`/blogs/${blog.id}`)}>
            Written by {blog.author}
          </p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
