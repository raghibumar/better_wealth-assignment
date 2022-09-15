import React, { useState } from "react";
import useFetch from "../../useFetch";
import BlogList from "../BlogList/BlogList";
import styles from "../Home/Home.module.css";

const Home = () => {
  //   const [blogs, setBlogs] = useState(null);
  const {
    error,
    isPending,
    data: blogs,
  } = useFetch("http://localhost:8080/blogs");
  //   const handleDelete = (id) => {
  //     // console.log("Hello");
  //     // console.log(id);
  //     const newBlog = blogs.filter((e) => {
  //       return e.id !== id;
  //     });

  //     setBlogs(newBlog);
  //   };
  return (
    <div className={styles.home}>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
