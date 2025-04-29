export const getAllMovies = async (token) => {
    const response = await fetch("https://tokenservice-jwt-2025.fly.dev/movies", {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });

    return response;
}

export const postMovie = async (token, data) => {
    const response = await fetch("https://tokenservice-jwt-2025.fly.dev/movies", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(data)
    });

    return response;
}