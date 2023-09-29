import React from "react";

const Banner = ({ movie }) => {
  /* popular 영화의 첫번째 영화를 배너로 선정하겠다 */
  //console.log("banner movie", movie);
  //  포스터 앞 주소 : https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces

  return (
    <div
      className="banner-img"
      style={{
        backgroundImage:
          "url(" +
          `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie.poster_path}` +
          ")",
      }}
    >
      <div className="banner-item">
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};

export default Banner;
