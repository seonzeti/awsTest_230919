import React from "react";
import { Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

const MovieCard = ({ item, type }) => (
  <div
    className="card-item"
    style={{
      backgroundImage: `url(https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${item.poster_path})`,
    }}
  >
    <div className="overlay">
      <Link to={`/movies/${item.id}?type=${type}`}>
        <h1>{item.title}</h1>
        <div>
          <span>평점 {item.vote_average}</span>{" "}
          <span>
            <Badge bg={item.adult ? "danger" : "success"}>
              {item.adult ? "청소년 시청 불가" : "전체관람가"}
            </Badge>
          </span>
        </div>
      </Link>
    </div>
  </div>
);

export default MovieCard;
