const MovieAdd = ({ onAddMovie }) => {
    return (
        <div className="movie-add">
            <form onSubmit={onAddMovie}>
                <input type="text" name="title" placeholder="Movie Title" />
                <input type="text" name="description" placeholder="Movie Description" />
                <input type="text" name="director" placeholder="Movie Director" />
                <input type="text" name="year" placeholder="Movie Production Year" />
                <button type="submit">Save</button>
            </form>
        </div>
    );
}

export default MovieAdd;