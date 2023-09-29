import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "../axios";
import ClipLoader from "react-spinners/ClipLoader";

import {
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "../redux/movieSlice";

import Banner from "../components/Banner";
import MovieSlide from "../components/MovieSlide";

const Home = () => {
  sessionStorage.removeItem("currentMovie");
  let [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upcomingMovies } = useSelector(
    (state) => state.movies
  );

  useEffect(() => {
    const popularApi = axios.get("/popular?page=1&language=ko-KR");
    const topRatedApi = axios.get("/top_rated?page=1&language=ko-KR");
    const upComingApi = axios.get("/upcoming?page=1&language=ko-KR");

    // Promise.all을 사용하여 모든 API 요청을 병렬로 처리
    Promise.all([popularApi, topRatedApi, upComingApi])
      .then((res) => {
        // responses 배열에 각 API 응답이 순서대로 들어옵니다.
        // 이제 popularData, topRatedData, upComingData를 사용할 수 있습니다.

        ////console.log("Popular Data:", popularData);
        dispatch(getPopularMovies(res[0].data));

        ////console.log("Top Rated Data:", topRatedData);
        dispatch(getTopRatedMovies(res[1].data));

        ////console.log("Upcoming Data:", upComingData);
        dispatch(getUpcomingMovies(res[2].data));
      })
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // useEffect(() => {
  //   //console.log("data update", popularMovies, topRatedMovies, upcomingMovies);
  // }, [popularMovies, topRatedMovies, upcomingMovies]);

  // loading이 true면, loading 스피너를 보여주고, false면 데이터를 보내준다.
  // true : 데이터 도착 전
  // false : 데이터 도착 후 or 에러가 났을 때

  if (loading) {
    return <ClipLoader color="#ffffff" loading={loading} size={150} />;
  }
  return (
    <div>
      {/* error : render후에 movie api가 호출됨, 비어있으니까 undefined으로 뜨는 것 
      조건부 렌더링이 필요하다 */}

      {/* loading spinner : https://www.npmjs.com/package/react-spinners */}
      {/* {popularMovies.results && ( */}
      <Banner movie={popularMovies.results[0]}></Banner>
      {/* )} */}

      <div className="movie-list">
        <h1>Popular Movie</h1>
        <MovieSlide movies={popularMovies} type="popularMovies" />
        <h1>Top rated Movie</h1>
        <MovieSlide movies={topRatedMovies} type="topRatedMovies" />
        <h1>UpComing Movie</h1>
        <MovieSlide movies={upcomingMovies} type="upcomingMovies" />
      </div>
    </div>
  );
};

export default Home;
