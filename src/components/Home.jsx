import React, { useEffect, useState } from "react";
import "./home.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import axios from "axios";

export default function Home() {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/data").then(function (response) {
      setNewsData(response.data);
    });
  }, []);

  return (
    <div>
      <div className="heading">
        <h2>
          Welcome to NEWS.<span>com</span>
        </h2>
        <p>
          We get you latest, trending news from all over the planet.
          <br />
          Stay connected to recieve daily updates.
        </p>
      </div>

      <div className="cards">
        {newsData.map((item) => (
          <div className={item.category}>
            <div className="cover">
              <div className="category">{item.category}</div>
              <div className="content">
                <h2>{item.title}</h2>
                <div className="author">
                  <div className="author-pp"></div>
                  <h4>{item.author}</h4>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
