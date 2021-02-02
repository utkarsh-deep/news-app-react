import React, { useEffect, useState } from "react";
import "./shownews.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import axios from "axios";

export default function Home() {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/data").then(function (response) {
      setNewsData(response.data);

      console.log(response.data);
      console.log(newsData.length);
    });
  }, []);

  return (
    <div>
      <div className="heading">
        <h2>Read The Latest Headlines.</h2>
      </div>

      <div className="news">
        {newsData.map((item) => (
          <div className="details">
            <div className={item.category}>
              <div className="cover">
                {item.title}
                <div className="author">
                  <div className="author-pp"></div>
                  {item.author}
                </div>
              </div>
            </div>
            <div className="description">
              {item.description}
              {item.description}
              <br />
              <br />
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
