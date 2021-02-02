import axios from "axios";
import React from "react";
import "./addnews.css";

export default function AddNews() {
  //   function addNewsPost() {
  //     axios.post("http://localhost:3001/data", {
  //       author: document.getElementById("author").value,
  //       title: document.getElementById("title"),
  //       description: document.getElementById("description").value,
  //       category: document.getElementById("category").value,
  //     });
  //   }

  function addThisPost() {
    axios
      .post("http://localhost:3001/data", {
        author: document.getElementById("author").value,
        title: document.getElementById("title").value,
        description: document.getElementById("description").value,
        category: document.getElementById("category").value,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    alert("Post Has Been Added");
  }

  return (
    <div>
      <div className="add-news-container">
        <div className="cover">
          <div className="form">
            <div className="label">Add Your Own News-Post</div>
            <form onSubmit={addThisPost}>
              <div className="contain">
                <p>Select the Category:</p>
                <select id="category" name="category">
                  <option value="Technology">Technology</option>
                  <option value="Sports">Sports</option>
                  <option value="Weather">Weather</option>
                  <option value="Entertainment">Entertainment</option>
                </select>
              </div>
              <div className="contain">
                <p>Title: </p>
                <input
                  type="text"
                  name="Title"
                  id="title"
                  placeholder="Title"
                />
              </div>
              <div className="contain">
                <p>News:</p>

                <textarea
                  name="Description"
                  id="description"
                  cols="30"
                  rows="10"
                  placeholder="Enter the Details of your News"
                ></textarea>
              </div>
              <div className="contain">
                <p>Author: </p>
                <input
                  type="text"
                  name="Author"
                  id="author"
                  placeholder="Author"
                />
              </div>
              <button type="submit">POST</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
