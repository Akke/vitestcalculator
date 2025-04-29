import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import MovieItem from "../MovieItem/MovieItem";
import { getAllMovies, postMovie } from "../../services/movies.js";
import "./MovieList.css";
import MovieAdd from "../MovieAdd/MovieAdd.jsx";

const MovieList = () => {
    const { user } = useContext(AuthContext);

    const [movies, setMovies] = useState([]);
    const [errors, setErrors] = useState([]);

    const onAddMovie = async (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        const title = formData.get("title");
        const description = formData.get("description");
        const director = formData.get("director");
        const productionYear = formData.get("year");

        const data = { title, description, director, productionYear };

        const result = await postMovie(user, data);

        if (result.status == 201) {
            setMovies([...movies, data]);
            setErrors([]);
        } else {
            const error = await result.json();
            setErrors(error);
        }
    };

    useEffect(() => {
        const allMovies = async () => {
            const result = await getAllMovies(user);
            const data = await result.json();
            setMovies(data);
        };
        if (user) allMovies();
    }, [user]);

    if (user) {
        return (
            <>
                <h1>Movies</h1>

                <MovieAdd onAddMovie={onAddMovie} />

                <div className="errors">
                    <ul>
                        {Object.entries(errors).map((a, b) => {
                            return (
                                <>
                                    <li>{a}</li>
                                </>
                            );
                        })}
                    </ul>
                </div>

                <div className="movie-list">
                    {movies.map((movie, i) => {
                        return (
                            <MovieItem
                                key={i}
                                title={movie.title}
                                director={movie.director}
                                description={movie.description}
                                year={movie.productionYear}
                                owner={movie.owner}
                            />
                        );
                    })}
                </div>
            </>
        );
    } else {
        return <>Login to see all movies.</>;
    }
};

export default MovieList;
