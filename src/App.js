import React, { useState, useEffect } from "react";
import "./App.css";

import axios from "axios";

import AppContents from "./components/contents/App";

function App() {
  const api = "https://jsonplaceholder.typicode.com/posts";

  const [posts, setPosts] = useState([
    {
      status: null,
    },
  ]);

  const content = posts.map((post, index) => (
    <AppContents key={index} data={post} />
  ));

  function fetchData() {
    axios
      .get(api)
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="my-root">
      <div className="App">
        <div className="my-content">
          {content}
          <button className="btn btn-primary" onClick={fetchData}>
            Fetch now
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
