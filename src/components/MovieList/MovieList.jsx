import { useContext } from "react";
import "./MovieList.css";
import { UserContext } from "../../context/userProvider";
import MovieItem from "../MovieItem/MovieItem";

const MovieList = () => {
    const { user } = useContext(UserContext);

    if(user) {
        return (
            <div className="movie-list">
                <MovieItem />
            </div>
        );
    }
}

export default MovieList;